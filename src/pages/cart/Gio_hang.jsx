import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleDeleteOrderDetail, handleGetAllOrderDetail, handleGetOrderByUserId, handleUpdateTotalPrice } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';
import { formatCurrency } from '../../utils/NumberFormat';

export default function Gio_hang() {
    const [orderDetailLists, setOrderDetailLists] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    //useEffect để set list của orderDetail
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userId = decodeToken(token).sid;
            handleGetOrderByUserId(parseInt(userId, 10))
                .then((data) => {
                    if (data) {
                        const orderingOrder = data.find(order => order.status === 'Ordering');
                        if (orderingOrder) {
                            setOrderDetailLists(orderingOrder.orderDetails);
                        }
                    }
                });
        } else {
            setOrderDetailLists([]);
            setTotalPrice(0);
        }
    }, [orderDetailLists]);

    //useEffect để cập nhật total price
    useEffect(() => {
        if (orderDetailLists.length > 0) {
            const total = calculateTotalPrice(orderDetailLists);
            setTotalPrice(total);
            // Cập nhật total price
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                handleGetOrderByUserId(parseInt(userId, 10))
                    .then((data) => {
                        if (data) {
                            const orderingOrder = data.find(order => order.status === 'Ordering');
                            if (orderingOrder) {
                                handleUpdateTotalPrice(orderingOrder.orderId, total);
                            }
                        }
                    });
            }
        }
    }, [orderDetailLists]);

    const calculateTotalPrice = (orderDetails) => {
        let total = 0;
        for (const item of orderDetails) {
            total += item.unitPrice * item.quantity;
        }
        return total;
    };

    const removeProduct = async () => {
        var orderDetailAll = await handleGetAllOrderDetail();
        for (const od of orderDetailLists) {
            for (const item of orderDetailAll) {
                if (item.orderDetailId === od.orderDetailId) {
                    await handleDeleteOrderDetail(od.orderDetailId);
                }
            }
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-main-wrapper section-padding">
                <div className="container-thanhtoan">
                    <div className="section-bg-color">
                        <div className="row">
                            <div className="col-lg-9 ">
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="pro-thumbnail">Hình ảnh</th>
                                                <th className="pro-title">Sản phẩm</th>
                                                <th className="pro-price">Đơn giá</th>
                                                <th className="pro-quantity">Số lượng</th>
                                                <th className="pro-subtotal">Thành tiền</th>
                                                <th className="pro-remove">Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetailLists.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6" className="text-center" style={{ fontSize: '20px', fontStyle: 'italic', color: 'red' }}>Không có sản phẩm nào trong giỏ hàng</td>
                                                </tr>
                                            ) : (
                                                orderDetailLists.map((orderDetail, index) => (
                                                    <tr key={index}>
                                                        <td className="pro-thumbnail"><img className="img-fluid" src={orderDetail.imageUrl} alt="Product" /></td>
                                                        <td className="pro-title">{orderDetail.productName}</td>
                                                        <td className="pro-price">{formatCurrency(orderDetail.unitPrice)} VND</td>
                                                        <td className="pro-quantity">{orderDetail.quantity}</td>
                                                        <td className="pro-subtotal">{formatCurrency(orderDetail.unitPrice * orderDetail.quantity)} VND</td>
                                                        <td className="pro-remove">
                                                            <a style={{ cursor: 'pointer' }} onClick={() => removeProduct()}><i className="fa fa-trash-o"></i></a>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="cart-calculator-wrapper">
                                    <div className="cart-calculate-items">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td>Tổng tiền hàng</td>
                                                        <td>{formatCurrency(totalPrice)} VND</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phí vận chuyển</td>
                                                        <td>Miễn phí</td>
                                                    </tr>
                                                    <tr className="total">
                                                        <td>Tổng thanh toán</td>
                                                        <td className="total-amount">{formatCurrency(totalPrice)} VND</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                       
                                    </div>
                                 
                                </div>
                                <div >
                                            <Link to="/Thanhtoan" className=" btn-sqr d-block">Xác nhận thanh toán</Link>
                                       </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}
