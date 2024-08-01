import React, { useEffect, useState } from 'react';
import { handleGetFeedbacksByProductId, handleCreateFeedback } from '../api/FeedbackAPI'; // Adjust the import path based on your project structure
import { format } from 'date-fns';
import { decodeToken } from '../api/TokenAPI'; // Adjust the import path
import { handleGetOrderByUserId } from '../api/OrderAPI'; // Adjust the import path
import StarRating from '../components/StarRating'; // Adjust the import path
import { useTranslation } from "react-i18next";// luon luon co de dich
import parse from 'html-react-parser';
const Mota_danhgia_kc = ({ productId, onReviewCountChange }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [canComment, setCanComment] = useState(false);
    const [orderIdForComment, setOrderIdForComment] = useState(null);
    const [feedback, setFeedback] = useState({ description: '', rating: 0 });
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const productObj = JSON.parse(localStorage.getItem('product'));
    const { t } = useTranslation();//luon luon co de dich

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const feedbackData = await handleGetFeedbacksByProductId(productId);
                setFeedbacks(feedbackData);
                const avgRating = feedbackData.reduce((acc, curr) => acc + curr.rating, 0) / feedbackData.length;
                onReviewCountChange(feedbackData.length, avgRating.toFixed(1));
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
                onReviewCountChange(feedbacks.length + 1, avgRating.toFixed(1));
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
                                <a className="active" data-bs-toggle="tab" href="#tab_one">{t("productDescription")}</a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="#tab_three">{t("feedback")}</a>
                            </li>
                            <li>
                                <a data-bs-toggle="tab" href="#tab_four">{t("afterSalesService")}</a>
                            </li>
                        </ul>
                        <div className="tab-content reviews-tab">
                            <div className="tab-pane fade show active" id="tab_one">
                                <div className="tab-one">
                                    <p>{parse(productObj.description)}</p>
                                </div>
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
                                                <StarRating rating={feedback.rating} setRating={() => {}} isEditable={false} />
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
                                                <label className="col-form-label"><span className="text-danger">*</span> {t("evaluate")}</label>
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
                                            <button className="btn btn-sqr" type="submit">{t("send")}</button>
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
                                <p color="blue"><b>{t("guarantee1")}</b></p>
                                <p>- {t("guarantee2")}</p>
                                <ul>
                                    <li>- {t("guarantee3")}​</li>
                                    <li>- {t("guarantee4")}​</li>
                                </ul>
                                <p><b>{t("guarantee5")}</b></p>
                                <ul>{t("guarantee6")}
                                    <li>- {t("guarantee7")}</li>
                                    <li>- {t("guarantee8")}</li>
                                </ul>
                                <ul><i>{t("guarantee9")}</i>
                                    <li><i>{t("guarantee10")}</i>​​</li>
                                    <li><i>{t("guarantee11")}​</i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mota_danhgia_kc;
