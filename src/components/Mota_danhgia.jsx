import React, { useEffect, useState } from 'react';
import { handleGetFeedbacksByProductId, handleCreateFeedback } from '../api/FeedbackAPI'; // Adjust the import path based on your project structure
import { format } from 'date-fns';
import { decodeToken } from '../api/TokenAPI'; // Adjust the import path
import { handleGetOrderByUserId } from '../api/OrderAPI'; // Adjust the import path
import StarRating from '../components/StarRating'; // Adjust the import path

const Mota_danhgia = ({ productId }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [canComment, setCanComment] = useState(true);
    const [highestRating, setHighestRating] = useState(0);
    const [orderIdForComment, setOrderIdForComment] = useState(null);
    const [feedback, setFeedback] = useState({ description: '', rating: 0 });
    const [feedbackMessage, setFeedbackMessage] = useState('');

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const feedbackData = await handleGetFeedbacksByProductId(productId);
                setFeedbacks(feedbackData);
            } catch (error) {
                console.error("Error fetching feedbacks:", error);
            }
        };

        fetchFeedbacks();
    }, [productId]);

    useEffect(() => {
        const checkCanComment = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                const orders = await handleGetOrderByUserId(parseInt(userId, 10));
                if (orders) {
                    const completedOrders = orders.filter(order => order.status === 'Completed');
                    const productComments = completedOrders.flatMap(order => order.orderDetails.filter(detail => detail.productId === productId));
                    const userFeedbacks = feedbacks.filter(f => f.userId === userId);
                    if (userFeedbacks.length < productComments.length) {
                        setCanComment(true);
                        const latestOrder = completedOrders.find(order => order.orderDetails.some(detail => detail.productId === productId));
                        console.log("Latest order for comment:", latestOrder); // Log the latest order
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
            rating: feedback.rating || highestRating,
            dateTime: new Date().toISOString()
        };

        console.log("Submitting feedback:", feedbackData); // Log the payload

        try {
            const response = await handleCreateFeedback(feedbackData);
            if (response.data === "Create Feedback Successfully") {
                setFeedbacks(prevFeedbacks => [...prevFeedbacks, feedbackData]);
                setFeedback({ description: '', rating: 0 });
                setFeedbackMessage('Feedback submitted successfully');
                setCanComment(false);
            } else {
                setFeedbackMessage(response.data);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setFeedbackMessage(error.response.data);
            } else {
                setFeedbackMessage('Error submitting feedback');
            }
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
                                <a data-bs-toggle="tab" href="#tab_three">Phản hồi</a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="#tab_four">Dịch vụ sau mua</a>
                            </li>
                        </ul>
                        <div className="tab-content reviews-tab">
                            <div className="tab-pane fade show active" id="tab_one">
                                <div className="tab-one">
                                    <p>Kim cương vốn là món trang sức mang đến niềm kiêu hãnh và cảm hứng thời trang bất tận.
                                        Sở hữu riêng cho mình món trang sức kim cương chính là điều mà ai cũng mong muốn.
                                        Chiếc nhẫn được chế tác từ vàng 14K cùng điểm nhấn kim cương với 57 giác cắt chuẩn xác,
                                        tạo nên món trang sức đầy sự sang trọng và đẳng cấp.
                                    </p>
                                    <p>Kim cương đã đẹp, trang sức kim cương lại càng mang sức hấp dẫn khó cưỡng. Sự kết hợp mới mẻ này chắc chắn sẽ tạo nên dấu ấn thời trang hiện đại và giúp quý cô trở nên nổi bật, tự tin và thu hút sự ngưỡng mộ của mọi người</p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab_three">
                                <h5>{feedbacks.length} review{feedbacks.length > 1 ? 's' : ''} for <span>{feedbacks.length > 0 ? feedbacks[0].productName : ''}</span></h5>
                                {feedbacks.map((feedback, index) => (
                                    <div className="total-reviews" key={index}>
                                        <div className="rev-avatar">
                                            <img src="assets/img/about/avatar.jpg" alt="" />
                                        </div>
                                        <div className="review-box">
                                            <div className="ratings">
                                                {[...Array(feedback.rating)].map((_, i) => (
                                                    <span key={i} className="good"><i className="fa fa-star"></i></span>
                                                ))}
                                                {[...Array(5 - feedback.rating)].map((_, i) => (
                                                    <span key={i}><i className="fa fa-star"></i></span>
                                                ))}
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
                            <div className="tab-pane fade" id="tab_four">
                                <p color="blue"><b>Bảo hành miễn phí 6 tháng</b></p>
                                <p>- Bảo hành 6 tháng lỗi kỹ thuật, nước xi.</p>
                                <p><b>Miễn phí siêu âm và đánh bóng bằng máy chuyên dụng trọn đời</b></p>
                                <ul>
                                    <li>- Đối với sản phẩm bị oxy hóa, xuống màu, sẽ được siêu âm làm sạch bằng máy chuyên dụng (siêu âm, không xi) miễn phí trọn đời tại cửa hàng.​</li>
                                    <li>- Miễn phí đánh bóng trọn đời . Nhẫn cưới sẽ được bảo hành, làm mới, đánh bóng, xi miễn phí trọn đời.​</li>
                                </ul>
                                <p><b>Miễn phí thay đá CZ và đá tổng hợp</b></p>
                                <ul>Không áp dụng bảo hành cho các trường hợp sau:
                                    <li>- Dây chuyền, lắc chế tác bị đứt gãy; bị biến dạng hoặc hư hỏng nặng</li>
                                    <li>- Khách hàng cung cấp thông tin truy lục hóa đơn không chính xác.​​​​​</li>
                                </ul>
                                <ul><i>Lưu ý:</i>
                                    <li><i>- PNJ bảo hành các sản phẩm thuộc hệ thống cửa hàng online của ES.</i>​​</li>
                                    <li><i>- Chế độ bảo hành sản phẩm có thể thay đổi theo chính sách của ES đối với các dòng hàng và chương trình khuyến mãi vào từng thời điểm.​</i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mota_danhgia;
