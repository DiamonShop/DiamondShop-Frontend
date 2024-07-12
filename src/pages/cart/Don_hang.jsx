import React, { useEffect, useState } from 'react';
import { handleDeleteOrderDetail, handleGetAllOrderDetail, handleGetOrderByUserId, handleUpdateTotalPrice } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';

function Don_hang() {
    const [orderLists, setOrderLists] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        const fetchOrderDetails = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                const data = await handleGetOrderByUserId(parseInt(userId, 10));
                if (data) {
                    setOrderLists(data);
                }
            } else {
                setOrderLists([]);
            }
        };

        fetchOrderDetails();
    }, [orderLists]);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('de-DE').format(value);
    };

    return (
        <div>
            <div className="myaccount-content">
                <h5>Đơn hàng</h5>
                <div className="myaccount-table table-responsive text-center">
                    <table >
                        <thead className="thead-light">
                            <tr>
                                <th>Đơn hàng</th>
                                <th>Ngày đặt hàng</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                                <th>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderLists.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center" style={{ fontSize: '20px', fontStyle: 'italic', color: 'red' }}>Không có đơn hàng</td>
                                </tr>
                            ) : (orderLists.map((details, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{details.orderDate}</td>
                                    <td>{formatCurrency(details.totalPrice)}</td>
                                    <td>
                                        {details.status === 'Shipping' ? 'Đang vận chuyển' : details.status === 'Ordering' ? 'Đang thanh toán' : 'Hoàn Thành'}
                                    </td>
                                    <td>
                                        <a href="/Chitietdonhang" className="btn btn-sqr-chitietdondang">Xem</a>
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

export default Don_hang
