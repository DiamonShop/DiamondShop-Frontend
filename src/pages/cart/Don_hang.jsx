import React from 'react'

function Don_hang() {
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
                            <tr>
                                <td>1</td>
                                <td>10/6/2024</td>
                                <td>30.000.000đ</td>
                                <td>Đang thanh toán</td>
                                <td>
                                    <a href="/Chitietdonhang" className="btn btn-sqr-chitietdondang">Xem</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>1/6/2024</td>
                                <td>25.000.000đ</td>
                                <td>Thành công</td>
                                <td><a href="/Chitietdonhang" className="btn btn-sqr-chitietdondang">Xem</a></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>5/6/2024</td>
                                <td>3.000.000đ</td>
                                <td>Đã hủy</td>
                                <td><a href="/Chitietdonhang" className="btn btn-sqr-chitietdondang">Xem</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Don_hang
