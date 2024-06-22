import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Gio_hang() {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const message = params.get('message');
        if (message) {
            toast.info(message);
        }
    }, [location]);

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
                                            <tr>
                                                <td className="pro-thumbnail"><a href="#"><img className="img-fluid" src="assets/img/product/Nhan/11/nhan-cuoi-kim-cuong-nam-pnj-long-phung-vang-18k-1.png" alt="Product" /></a></td>
                                                <td className="pro-title"><a href="#">Nhẫn cưới nam Kim cương Vàng 18K Long Phụng DD00Y000995</a></td>
                                                <td className="pro-price"><span>16.946.000đ</span></td>
                                                <td className="pro-quantity">
                                                    <div className="pro-qty"><input type="text" value="1" /></div>
                                                </td>
                                                <td className="pro-subtotal"><span>193.256.000đ</span></td>
                                                <td className="pro-remove"><a href="#"><i className="fa fa-trash-o"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-update-option d-block d-md-flex justify-content-between">
                                    <div className="apply-coupon-wrapper">
                                        <form action="#" method="post" className="d-block d-md-flex">
                                            <input type="text" placeholder="Nhập mã khuyến mãi" required />
                                            <button className="btn btn-sqr">Áp dụng voucher</button>
                                        </form>
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
                                                    <td>452.904.000đ</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí vận chuyển</td>
                                                    <td>Miễn phí</td>
                                                </tr>
                                                <tr className="total">
                                                    <td>Tổng thanh toán</td>
                                                    <td className="total-amount">452.904.000đ</td>
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
