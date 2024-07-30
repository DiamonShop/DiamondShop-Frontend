import React, { useEffect, useState } from 'react';
import { handleGetHistoryOrderByUserId, handleGetOrderByUserId } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';
import { useTranslation } from "react-i18next";

function Don_hang() {
    const [orderLists, setOrderLists] = useState([]);
    const token = localStorage.getItem('token');
    const { t } = useTranslation();

    useEffect(() => {
        const fetchOrderDetails = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                const data = await handleGetHistoryOrderByUserId(parseInt(userId, 10));
                if (data) {
                    setOrderLists(data);
                }
            } else {
                setOrderLists([]);
            }
        };

        fetchOrderDetails();
    }, []);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('de-DE').format(value);
    };

    const handleViewOrderDetails = (orderId) => {
        localStorage.setItem('selectedOrderId', orderId);
    };

    return (
        <div>
            <div className="myaccount-content">
                <h5>{t("orders")}</h5>
                <div className="myaccount-table table-responsive text-center">
                    <table >
                        <thead className="thead-light">
                            <tr>
                                <th>{t("orderCode")}</th>
                                <th>{t("orderDate")}</th>
                                <th>{t("orderTotal")}</th>
                                <th>{t("orderStatus")}</th>
                                <th>{t("orderDetail")}</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {orderLists.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center" style={{ fontSize: '20px', fontStyle: 'italic', color: 'red' }}>{t("noOrder")}</td>
                                </tr>
                            ) : (orderLists.map((details, index) => (
                                <tr key={index}>
                                    <td>{details.orderId}</td>
                                    <td>{details.orderDate}</td>
                                    <td>{formatCurrency(details.totalPrice)}</td>
                                    <td>
                                        {details.status === 'Shipping' ? 'Đang vận chuyển' : details.status === 'Ordering' ? 'Đang thanh toán' : details.status === 'Pending' ? 'Chờ xác nhận' : 'Đã thành công'}
                                    </td>
                                    <td>
                                        <a href="/Chitietdonhang" className="btn btn-sqr-chitietdondang" onClick={() => handleViewOrderDetails(details.orderId)}>{t("view")}</a>
                                    </td>
                                </tr>
                            )))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Don_hang;