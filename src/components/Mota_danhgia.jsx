import React, { useEffect, useState } from 'react';
import { handleGetFeedbacksByProductId } from '../api/FeedbackAPI'; // Adjust the import path based on your project structure
import { format } from 'date-fns';

const Mota_danhgia = ({ productId }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const productObj = JSON.parse(localStorage.getItem('product'));
    useEffect(() => {
        const fetchFeedbacks = async () => {
            const feedbackData = await handleGetFeedbacksByProductId(productId);
            if (feedbackData) {
                setFeedbacks(feedbackData);
            }
        };

        fetchFeedbacks();
    }, [productId]);

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
                                 <p>{productObj.description}</p>
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
                                                <span className="good"><i className="fa fa-star"></i></span>
                                                <span className="good"><i className="fa fa-star"></i></span>
                                                <span className="good"><i className="fa fa-star"></i></span>
                                                <span className="good"><i className="fa fa-star"></i></span>
                                                <span><i className="fa fa-star"></i></span>
                                            </div>
                                            <div className="post-author">
                                                <p><span>{feedback.userName} </span> {format(new Date(feedback.dateTime), 'dd/MM/yyyy')}</p>
                                            </div>
                                            <p>{feedback.description}</p>
                                        </div>
                                    </div>
                                ))}
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
