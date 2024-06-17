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
                                                <th class="pro-price">Đơn giá</th>
                                                <th class="pro-quantity">Số lượng</th>
                                                <th class="pro-subtotal">Thành tiền</th>
                                                <th class="pro-remove">Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/Nhan/11/nhan-cuoi-kim-cuong-nam-pnj-long-phung-vang-18k-1.png" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn cưới nam Kim cương Vàng 18K Long Phụng DD00Y000995</a></td>
                                                <td class="pro-price"><span>16.946.000đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty"><input type="text" value="1" /></div>
                                                </td>
                                                <td class="pro-subtotal"><span>193.256.000đ</span></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/Nhan/15/nhan-cuoi-kim-cuong-vang-trang-14k-long-phung-1.png" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn cưới Kim cương Vàng trắng 14K Long Phụng DD00W000641</a></td>
                                                <td class="pro-price"><span>8.316.000đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty"><input type="text" value="2" /></div>
                                                </td>
                                                <td class="pro-subtotal"><span>16.632.000đ</span></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/Nhan/2/nhan-vang-trang-14k-dinh-da-ecz-1.png" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn Vàng trắng 14K đính đá ECZ XMXMW004696</a></td>
                                                <td class="pro-price"><span>8.359.000đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="1" />
                                                    </div>
                                                </td>
                                                <td class="pro-subtotal"><span>8.359.000đ</span></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/Nhan/7/nhan-nam-kim-cuong-vang-14k-dd00h000294-1.png" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Nhẫn nam Kim cương Vàng 14K DD00H000294</a></td>
                                                <td class="pro-price"><span>78.219.900đ</span></td>
                                                <td class="pro-quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="3" />
                                                    </div>
                                                </td>
                                                <td class="pro-subtotal"><span>234.657.000đ</span></td>
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
                                        {/* <h6>Cart Totals</h6> */}
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tr>
                                                    <td>Tổng tiền hàng</td>
                                                    <td>452.904.000đ</td>
                                                </tr>
                                                <tr>
                                                    <td>Phí vận chuyển</td>
                                                    <td>Miễn phí</td>
                                                </tr>
                                                <tr class="total">
                                                    <td>Tổng thanh toán</td>
                                                    <td class="total-amount">452.904.000đ</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <Link to="/Thanhtoan" class="btn btn-sqr d-block">Xác nhận thanh toán</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
