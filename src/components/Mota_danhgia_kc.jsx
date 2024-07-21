import React, { useEffect, useState } from 'react';
import { handleGetFeedbacksByProductId, handleCreateFeedback } from '../api/FeedbackAPI'; // Adjust the import path based on your project structure
import { format } from 'date-fns';
import { decodeToken } from '../api/TokenAPI'; // Adjust the import path
import { handleGetOrderByUserId } from '../api/OrderAPI'; // Adjust the import path
import StarRating from '../components/StarRating'; // Adjust the import path
// function Mota_danhgia_kc() {
//   const productObj = JSON.parse(localStorage.getItem('product'));
//   return (
//     <div>
//       <div class="product-details-reviews section-padding pb-0">
//         <div class="row">
//           <div class="col-lg-12">
//             <div class="product-review-info">
//               <ul class="nav review-tab">
//                 <li>
//                   <a class="active" data-bs-toggle="tab" href="#tab_one">Mô tả sản phẩm</a>
//                 </li>
//                 <li>
//                   <a data-bs-toggle="tab" href="#tab_two">Thông số</a>
//                 </li>
//                 <li>
//                   <a data-bs-toggle="tab" href="#tab_three">Phản hồi</a>
//                 </li>
//                 {/* <li>
//                   <a data-bs-toggle="tab" href="#tab_four">Chính sách bảo hành</a>
//                 </li> */}
//               </ul>
//               <div class="tab-content reviews-tab">
//                 <div class="tab-pane fade show active" id="tab_one">
//                   <div class="tab-one">
//                     <p>{productObj.description} </p>
//                   </div>
//                 </div>
//                 <div class="tab-pane fade" id="tab_two">
//                   <table class="table table-bordered">
//                     <tbody>
//                       <tr>
//                         <td>Tên sản phẩm </td>
//                         <td>{productObj.productName}</td>
//                       </tr>
//                       <tr>
//                         <td>Trọng lượng (Carat) </td>
//                         <td>{productObj.Carat} carat</td>
//                       </tr>
//                       <tr>
//                         <td>Màu sắc (Color) </td>
//                         <td>{productObj.Color}</td>
//                       </tr>
//                       <tr>
//                         <td>Độ Tinh Khiết (Clarity) </td>
//                         <td>{productObj.Clarity}</td>
//                       </tr>
//                       <tr>
//                         <td>Giác Cắt (Cut) </td>
//                         <td>{productObj.Cut}</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//                 <div class="tab-pane fade" id="tab_three">
//                   <form action="#" class="review-form">
//                     <h5>1 review for <span>Chaz Kangeroo</span></h5>
//                     <div class="total-reviews">
//                       <div class="rev-avatar">
//                         <img src="assets/img/about/avatar.jpg" alt="" />
//                       </div>
//                       <div class="review-box">
//                         <div class="ratings">
//                           <span class="good"><i class="fa fa-star"></i></span>
//                           <span class="good"><i class="fa fa-star"></i></span>
//                           <span class="good"><i class="fa fa-star"></i></span>
//                           <span class="good"><i class="fa fa-star"></i></span>
//                           <span><i class="fa fa-star"></i></span>
//                         </div>
//                         <div class="post-author">
//                           <p><span>admin -</span> 30 Mar, 2019</p>
//                         </div>
//                         <p>Aliquam fringilla euismod risus ac bibendum. Sed sit
//                           amet sem varius ante feugiat lacinia. Nunc ipsum nulla,
//                           vulputate ut venenatis vitae, malesuada ut mi. Quisque
//                           iaculis, dui congue placerat pretium, augue erat
//                           accumsan lacus</p>
//                       </div>
//                     </div>
//                     <div class="form-group row">
//                       <div class="col">
//                         <label class="col-form-label"><span class="text-danger">*</span>
//                           Đánh giá:</label>
//                         <textarea class="form-control" required></textarea>
//                       </div>
//                     </div>
//                     <div class="form-group row">
//                       <div class="col">
//                         <label class="col-form-label"><span class="text-danger">*</span>
//                           Rating</label>
//                         &nbsp;&nbsp;&nbsp; Bad&nbsp;
//                         <input type="radio" value="1" name="rating" />
//                         &nbsp;
//                         <input type="radio" value="2" name="rating" />
//                         &nbsp;
//                         <input type="radio" value="3" name="rating" />
//                         &nbsp;
//                         <input type="radio" value="4" name="rating" />
//                         &nbsp;
//                         <input type="radio" value="5" name="rating" checked />
//                         &nbsp;Good
//                       </div>
//                     </div>
//                     <div class="buttons">
//                       <button class="btn btn-sqr" type="submit">Gửi</button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Mota_danhgia_kc
const Mota_danhgia_kc = ({ productId, onReviewCountChange }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [canComment, setCanComment] = useState(false);
  const [orderIdForComment, setOrderIdForComment] = useState(null);
  const [feedback, setFeedback] = useState({ description: '', rating: 0 });
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const productObj = JSON.parse(localStorage.getItem('product'));

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const feedbackData = await handleGetFeedbacksByProductId(productId);
        setFeedbacks(feedbackData);
        const avgRating = feedbackData.reduce((acc, curr) => acc + curr.rating, 0) / feedbackData.length;
        if (onReviewCountChange) {
          onReviewCountChange(feedbackData.length, avgRating.toFixed(1));
        }
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, [productId, onReviewCountChange]);

  useEffect(() => {
    const checkCanComment = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userId = decodeToken(token).sid;
        const orders = await handleGetOrderByUserId(parseInt(userId, 10));
        if (orders) {
          const completedOrders = orders.filter(order => order.status === 'Completed');
          const hasPurchasedProduct = completedOrders.some(order =>
            order.orderDetails.some(detail => detail.productId === productId)
          );

          if (hasPurchasedProduct) {
            setCanComment(true);
            const latestOrder = completedOrders.find(order => order.orderDetails.some(detail => detail.productId === productId));
            setOrderIdForComment(latestOrder.orderId);
          } else {
            setCanComment(false);
          }
        }
      }
    };

    checkCanComment();
  }, [feedbacks, productId]);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      rating
    }));
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const userId = decodeToken(token).sid;

    const feedbackData = {
      userId,
      productId,
      orderId: orderIdForComment,
      description: feedback.description,
      rating: feedback.rating,
      dateTime: new Date().toISOString()
    };

    try {
      const response = await handleCreateFeedback(feedbackData);
      if (response === "Create Feedback Successfully") {
        setFeedbacks(prevFeedbacks => [...prevFeedbacks, feedbackData]);
        setFeedback({ description: '', rating: 0 });
        setFeedbackMessage('Feedback submitted successfully');
        setCanComment(false);
        const avgRating = (feedbacks.reduce((acc, curr) => acc + curr.rating, 0) + feedbackData.rating) / (feedbacks.length + 1);
        if (onReviewCountChange) {
          onReviewCountChange(feedbacks.length + 1, avgRating.toFixed(1));
        }
      } else {
        setFeedbackMessage(response);
      }
    } catch (error) {
      setFeedbackMessage('Error submitting feedback');
      console.error("Error creating feedback:", error);
    }
  };

  return (
    <div className="product-details-reviews section-padding pb-0">
      <div className="row">
        <div className="col-lg-12">
          <div className="product-review-info">
            <ul className="nav review-tab">
              <li>
                <a className="active" data-bs-toggle="tab" href="#tab_one">Mô tả sản phẩm</a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#tab_two">Thông số</a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#tab_three">Phản hồi</a>
              </li>
             
            </ul>
            <div className="tab-content reviews-tab">
              <div className="tab-pane fade show active" id="tab_one">
                <div className="tab-one">
                  <p>{productObj.description}</p>
                </div>
              </div>
              <div class="tab-pane fade" id="tab_two">
                <table class="table table-bordered">
                  <tbody>
                    <tr>
                      <td>Tên sản phẩm </td>
                      <td>{productObj.productName}</td>
                    </tr>
                    <tr>
                      <td>Trọng lượng (Carat) </td>
                      <td>{productObj.Carat} carat</td>
                    </tr>
                    <tr>
                      <td>Màu sắc (Color) </td>
                      <td>{productObj.Color}</td>
                    </tr>
                    <tr>
                      <td>Độ Tinh Khiết (Clarity) </td>
                      <td>{productObj.Clarity}</td>
                    </tr>
                    <tr>
                      <td>Giác Cắt (Cut) </td>
                      <td>{productObj.Cut}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="tab_three">
                <h5>{feedbacks.length} review{feedbacks.length !== 1 ? 's' : ''} for <span>{productObj.productName}</span></h5>
                {feedbacks.map((feedback, index) => (
                  <div className="total-reviews" key={index}>
                    <div className="rev-avatar">
                      <img src="assets/img/about/avatar.jpg" alt="" />
                    </div>
                    <div className="review-box">
                      <div className="ratings">
                        <StarRating rating={feedback.rating} setRating={() => { }} isEditable={false} />
                      </div>
                      <div className="post-author">
                        <p><span>{feedback.userName} </span> {format(new Date(feedback.dateTime), 'dd/MM/yyyy')}</p>
                      </div>
                      <p>{feedback.description}</p>
                    </div>
                  </div>
                ))}
                {canComment && (
                  <form onSubmit={handleFeedbackSubmit} className="review-form">
                    <div className="form-group row">
                      <div className="col">
                        <label className="col-form-label"><span className="text-danger">*</span> Đánh giá:</label>
                        <textarea
                          className="form-control"
                          name="description"
                          value={feedback.description}
                          onChange={handleFeedbackChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col">
                        <label className="col-form-label"><span className="text-danger">*</span> Rating</label>
                        <StarRating rating={feedback.rating} setRating={handleRatingChange} />
                      </div>
                    </div>
                    <div className="buttons">
                      <button className="btn btn-sqr" type="submit">Gửi</button>
                    </div>
                  </form>
                )}
                {feedbackMessage && (
                  <div className="feedback-message">
                    <span>{feedbackMessage}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mota_danhgia_kc;