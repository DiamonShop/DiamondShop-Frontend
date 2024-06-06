import React from 'react'
import { Link } from 'react-router-dom';
export default function Gio_hang() {
    return (
        <div>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/"><i class="fa fa-home"></i></Link></li>
                                        <li class="breadcrumb-item"><a href="shop.html">shop</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Giỏ hàng</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart-main-wrapper section-padding">
                <div class="container">
                    <div class="section-bg-color">
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="cart-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="pro-thumbnail">Hình ảnh</th>
                                                <th class="pro-title">Sản phẩm</th>
                                                <th class="pro-price">Giá thành</th>
                                                <th class="pro-quantity">Số lượng</th>
                                                <th class="pro-subtotal">Thành tiền</th>
                                                <th class="pro-remove">Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-1.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn Kim cương Vàng trắng 14K </a></td>
                                                <td class="pro-price"><span>193.256.000đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty"><input type="text" value="1" /></div>
                                                </td>
                                                <td class="pro-subtotal"><span>193.256.000đ</span></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-2.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn Kim cương Vàng 18K</a></td>
                                                <td class="pro-price"><span>155.161.800đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty"><input type="text" value="2" /></div>
                                                </td>
                                                <td class="pro-subtotal"><span>310.323.600đ</span></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-3.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn Nam Kim cương Vàng trắng 14K</a></td>
                                                <td class="pro-price"><span>196.229.000đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </td>
                                                <td class="pro-subtotal"><span>196.229.000đ</span></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-4.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn Kim cương Vàng 18K</a></td>
                                                <td class="pro-price"><span>137.991.000đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="3" />
                                                    </div>
                                                </td>
                                                <td class="pro-subtotal"><span>413.973.000đ</span></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="cart-update-option d-block d-md-flex justify-content-between">
                                    <div class="apply-coupon-wrapper">
                                        <form action="#" method="post" class=" d-block d-md-flex">
                                            <input type="text" placeholder="Nhập mã khuyến mãi" required />
                                            <button class="btn btn-sqr">Áp dụng voucher</button>
                                        </form>
                                    </div>
                                    <div class="cart-update">
                                        <a href="#" class="btn btn-sqr">Cập nhật giỏ hàng</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-5 ml-auto">

                                <div class="cart-calculator-wrapper">
                                    <div class="cart-calculate-items">
                                        <h6>Cart Totals</h6>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td>$230</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí giao hàng</td>
                                                    <td>$70</td>
                                                </tr>
                                                <tr class="total">
                                                    <td>Tổng cộng</td>
                                                    <td class="total-amount">$300</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <a href="checkout.html" class="btn btn-sqr d-block">Xác nhận thanh toán</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
