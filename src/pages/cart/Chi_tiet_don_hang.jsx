import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { message, Modal, Input, Rate, Button } from 'antd';
import { ToastContainer } from 'react-toastify';
import { handleGetOrderByUserIdOrderId } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';
import { formatCurrency } from '../../utils/NumberFormat';
import { HandleGetAll } from '../../api/JewelryAPI';
import { handleCreatefeedback } from '../../api/FeedbackAPI';

const { TextArea } = Input;

function Chi_tiet_don_hang() {
    const [orderDetailLists, setOrderDetailLists] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [feedback, setFeedback] = useState({ description: '', rating: 0 });
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        const fetchOrderDetails = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                const selectedOrderId = localStorage.getItem('selectedOrderId');
                const data = await handleGetOrderByUserIdOrderId(parseInt(userId, 10), parseInt(selectedOrderId, 10));
                if (data) {
                    const allProducts = await HandleGetAll(); // Fetch all products
                    setProducts(allProducts);
                    const updatedData = data.map(order => ({
                        ...order,
                        orderDetails: order.orderDetails.map(detail => ({
                            ...detail,
                            ...allProducts.find(product => product.productID === detail.productID)
                        }))
                    }));
                    setOrderDetailLists(updatedData[0].orderDetails);
                }
            } else {
                setOrderDetailLists([]);
                setTotalPrice(0);
            }
        };

        fetchOrderDetails();
    }, []);

    useEffect(() => {
        if (orderDetailLists.length > 0) {
            const total = calculateTotalPrice(orderDetailLists);
            setTotalPrice(total);
        }
    }, [orderDetailLists]);

    const calculateTotalPrice = (orderDetails) => {
        let total = 0;
        for (const item of orderDetails) {
            total += item.unitPrice * item.quantity;
        }
        return total;
    };

    const showModal = (product) => {
        console.log('Selected product:', product);
        setSelectedProduct(product);
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        const selectedOrderId = parseInt(localStorage.getItem('selectedOrderId'), 10);
        console.log('Selected product in handleOk:', selectedProduct);
        console.log('Selected orderId in handleOk:', selectedOrderId);

        if (feedback.description && feedback.rating > 0 && selectedProduct && selectedProduct.productId) {
            try {
                const token = localStorage.getItem('token');
                const feedbackData = {
                    userId: decodeToken(token).sid,
                    orderId: selectedOrderId, // Ensure this field matches what the server expects
                    productId: selectedProduct.productId, // Ensure this field matches what the server expects
                    description: feedback.description,
                    rating: feedback.rating
                };

                console.log('Sending feedback:', feedbackData);

                const response = await handleCreatefeedback(feedbackData);
                console.log('Server response:', response);

                if (response && response.message === "Feedback created successfully.") {
                    messageApi.open({
                        type: 'success',
                        content: 'Đánh giá thành công!',
                    });
                    setIsModalVisible(false);
                    setFeedback({ description: '', rating: 0 });
                } else {
                    messageApi.open({
                        type: 'error',
                        content: 'Đánh giá thất bại!',
                    });
                }
            } catch (error) {
                console.error("Error creating feedback:", error);
                messageApi.open({
                    type: 'error',
                    content: 'Lỗi khi gửi đánh giá!',
                });
            }
        } else {
            console.log('Feedback description:', feedback.description);
            console.log('Feedback rating:', feedback.rating);
            console.log('Selected product:', selectedProduct);
            console.log('Selected orderId:', selectedOrderId);
            messageApi.open({
                type: 'warning',
                content: 'Vui lòng điền đánh giá, chọn số sao và kiểm tra sản phẩm!',
            });
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setFeedback({ description: '', rating: 0 });
    };

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

    console.log(orderDetailLists);

    return (
        <div>
            {contextHolder}
            <ToastContainer />
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Chi tiết đơn hàng</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-main-wrapper section-padding">
                <div className="container-giohang">
                    <div className="section-bg-color">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="pro-thumbnail">Hình ảnh</th>
                                                <th className="pro-title">Sản phẩm</th>
                                                <th className="pro-price">Đơn giá</th>
                                                <th className="pro-quantity">Số lượng</th>
                                                <th className="pro-subtotal">Giá</th>
                                                <th className="pro-review">Đánh giá</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetailLists.map((orderDetail, index) => (
                                                <tr key={index}>
                                                    <td className="pro-thumbnail"><img className="img-fluid" src={orderDetail.imageUrl} alt="Product" /></td>
                                                    <td className="pro-title">{orderDetail.productName}</td>
                                                    <td className="pro-price">{formatCurrency(orderDetail.unitPrice)} VND</td>
                                                    <td className="pro-quantity">{orderDetail.quantity}</td>
                                                    <td className="pro-subtotal">{formatCurrency(orderDetail.unitPrice * orderDetail.quantity)} VND</td>
                                                    <td className="pro-review">
                                                        <button className="btn btn-sqr-danhgia" onClick={() => showModal(orderDetail)}>Đánh giá</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Đánh giá sản phẩm"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Hủy
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Gửi
                    </Button>,
                ]}
            >
                <div>
                    <h4>Số sao:</h4>
                    <Rate onChange={handleRatingChange} value={feedback.rating} />
                    <h4>Bình luận:</h4>
                    <TextArea
                        rows={4}
                        name="description"
                        value={feedback.description}
                        onChange={handleFeedbackChange}
                    />
                </div>
            </Modal>
        </div>
    );
}

export default Chi_tiet_don_hang;
