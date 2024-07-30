import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleDeleteOrderDetail, handleGetAllOrderDetail, handleGetOrderByUserId, handleUpdateTotalPrice } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';
import { formatCurrency } from '../../utils/NumberFormat';
import { useTranslation } from "react-i18next";

export default function Gio_hang() {
    const [orderDetailLists, setOrderDetailLists] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { t } = useTranslation();
    useEffect(() => {
        const fetchOrderDetails = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                const data = await handleGetOrderByUserId(parseInt(userId, 10));
                if (data) {
                    const orderingOrder = data.find(order => order.status === 'Ordering');
                    if (orderingOrder) {
                        setOrderDetailLists(orderingOrder.orderDetails);
                        const total = calculateTotalPrice(orderingOrder.orderDetails);
                        setTotalPrice(total);
                        await handleUpdateTotalPrice(orderingOrder.orderId, total);
                    }
                }
            } else {
                setOrderDetailLists([]);
                setTotalPrice(0);
            }
        };

        fetchOrderDetails();
    }, [orderDetailLists]); // Empty dependency array to run only once on component mount

    const calculateTotalPrice = (orderDetails) => {
        let total = 0;
        for (const item of orderDetails) {
            total += item.unitPrice * item.quantity;
        }
        return total;
    };

    const handleRemoveProduct = async (orderDetailId) => {
        await handleDeleteOrderDetail(orderDetailId);
        setOrderDetailLists(prevOrderDetailLists =>
            prevOrderDetailLists.filter(item => item.orderDetailId !== orderDetailId)
        );
    };

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
                                        <li className="breadcrumb-item active" aria-current="page">{t("cart")}</li>
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
                            <div className="col-lg-9 ">
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="pro-thumbnail">{t("cartID")}</th>
                                                <th className="pro-title">{t("cartProduct")}</th>
                                                <th className="pro-price">{t("cartPrice")}</th>
                                                <th className="pro-quantity">{t("cartQuantity")}</th>
                                                <th className="pro-subtotal">{t("cartSubTotal")}</th>
                                                <th className="pro-remove">{("remove")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderDetailLists.length === 0 ? (
                                                <tr>
                                                    <td colSpan="6" className="text-center" style={{ fontSize: '20px', fontStyle: 'italic', color: 'red' }}>{t("noCartItem")}</td>
                                                </tr>
                                            ) : (
                                                orderDetailLists.map((orderDetail, index) => (
                                                    <tr key={index}>
                                                        <td className="pro-thumbnail">{orderDetail.productId} </td>
                                                        <td className="pro-title">{orderDetail.productName}</td>
                                                        <td className="pro-price">{formatCurrency(orderDetail.unitPrice)} VND</td>
                                                        <td className="pro-quantity">{orderDetail.quantity}</td>
                                                        <td className="pro-subtotal">{formatCurrency(orderDetail.unitPrice * orderDetail.quantity)} VND</td>
                                                        <td className="pro-remove">
                                                            <a style={{ cursor: 'pointer' }} onClick={() => handleRemoveProduct(orderDetail.orderDetailId)}><i className="fa fa-trash-o"></i></a>
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
                                                        <td>{t("totalProduct")}</td>
                                                        <td>{formatCurrency(totalPrice)} VND</td>
                                                    </tr>
                                                    <tr>
                                                        <td>{t("transportFee")}</td>
                                                        <td>{t("free")}</td>
                                                    </tr>
                                                    <tr className="total">
                                                        <td>{t("total")}</td>
                                                        <td className="total-amount">{formatCurrency(totalPrice)} VND</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    {totalPrice > 0 ? (
                                        <Link to="/Thanhtoan" className="btn-sqr-xacnhanthanhtoan d-block">{t("confirm")}</Link>
                                    ) : (
                                        <button className="btn-sqr-xacnhanthanhtoan d-block" disabled style={{ backgroundColor: 'gray', cursor: 'not-allowed' }}>{t("confirm")}</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
