import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { handleGetOrderByUserId } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';
import { formatCurrency } from '../../utils/NumberFormat';
// import 'react-toastify/dist/ReactToastify.css';

export default function Gio_hang() {
    const location = useLocation();
    const [orders, setOrders] = useState([]);
    const [orderDetailLists, setOrderDetailLists] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [token, setToken] = useState();

    useEffect(() => {
        const runAllOrderData = () => {
            getAllAvailableProducts();
            totalPriceSum()
        }
        runAllOrderData()
        const params = new URLSearchParams(location.search);
        const message = params.get('message');
        if (message) {
            toast.info(message);
        }

    }, [location]);

    const totalPriceSum = () => {
        if (orderDetailLists) {
            for (const item of orderDetailLists) {
                setTotalPrice(totalPrice + item.unitPrice * item.quantity);
            }
            console.log(orders)
        }
    }

    const getAllAvailableProducts = async () => {
        setToken(localStorage.getItem('token'));

        if (token) {
            const userId = decodeToken(token).sid;
            setOrders(await handleGetOrderByUserId(parseInt(userId, 10)));
            if (orders != null) {
                for (const item of orders) {
                    //Check order nếu có status là 'Ordering' thì mới được hiển thị
                    if (item.status == 'Ordering') {
                        setOrderDetailLists(item.orderDetails);
                    }
                }
            } else {
                setOrderDetailLists(null);
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
                <div className="container">
                    <div className="section-bg-color">
                        <div className="row">
                            <div className="col-lg-12">
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
                                            {orderDetailLists === null ? (
                                                <div className="text-center" style={{ paddingLeft: '20px', fontSize: '20px', fontStyle: 'italic', color: 'red' }}>Không có sản phẩm nào trong giỏ hàng</div>
                                            ) : (
                                                orderDetailLists.map((orderDetail, index) => (
                                                    <tr key={index}>
                                                        <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src={orderDetail.imageUrl} alt="Product" /></a></td>
                                                        <td className="pro-title"><a href="#">{orderDetail.productName}</a></td>
                                                        <td className="pro-price"><span>{formatCurrency(orderDetail.unitPrice)}đ</span></td>
                                                        <td className="pro-quantity">
                                                            <div className="pro-qty"><input type="text" value={orderDetail.quantity} readOnly /></div>
                                                        </td>
                                                        <td className="pro-subtotal"><span>{formatCurrency(orderDetail.unitPrice * orderDetail.quantity)}đ</span></td>
                                                        <td className="pro-remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-update-option d-block d-md-flex justify-content-between">
                                    <div className="apply-coupon-wrapper">
                                    </div>
                                    <div className="cart-update">
                                        <a href="#" className="btn btn-sqr">Cập nhật giỏ hàng</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 ml-auto">
                                <div className="cart-calculator-wrapper">
                                    <div className="cart-calculate-items">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <tr>
                                                    <td>Tổng tiền hàng</td>
                                                    <td>{formatCurrency(totalPrice)}đ</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí vận chuyển</td>
                                                    <td>Miễn phí</td>
                                                </tr>
                                                <tr className="total">
                                                    <td>Tổng thanh toán</td>
                                                    <td className="total-amount">{formatCurrency(totalPrice)}đ</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <Link to="/Thanhtoan" className="btn btn-sqr d-block">Xác nhận thanh toán</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
