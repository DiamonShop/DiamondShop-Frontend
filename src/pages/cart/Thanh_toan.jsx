import React from 'react'
import { Link } from 'react-router-dom';
export default function Thanh_toan() {
    return (
        <div>
            {/* <!-- breadcrumb area start --> */}
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html"><i class="fa fa-home"></i></a></li>
                                        <li class="breadcrumb-item"><a href="shop.html">shop</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Thanh toán</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrumb area end -->

              <!-- checkout main wrapper start --> */}
            <div class="checkout-page-wrapper section-padding">
                <div class="container">

                    <div class="row">
                        {/* <!-- Checkout Billing Details --> */}
                        <div class="col-lg-6">
                            <div class="checkout-billing-details-wrap">
                                <h5 class="checkout-title">Thông tin người mua</h5>
                                <div class="billing-form-wrap">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="f_name" class="required">Họ tên</label>
                                                    <input type="text" id="f_name" placeholder="Họ tên" required />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="phone-number" class="required">Số điện thoại</label>
                                                    <input type="text" id="phone-number" placeholder="Số điện thoại" required />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="birthday"> Ngày sinh </label>
                                                    <input type="text" id="birthday" placeholder="Ngày sinh(dd-mm-yyyy)" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="email" class="required">Email</label>
                                                    <input type="email" id="email" placeholder="Email" required />
                                                </div>
                                            </div>
                                        </div>


                                        <div class="single-input-item">
                                            <label for="street-address" class="required mt-20">Địa chỉ</label>
                                            <input type="text" id="street-address" placeholder="Địa chỉ nhận hàng" required />
                                        </div>


                                        <div class="single-input-item">
                                            <label for="ordernote">Ghi chú</label>
                                            <textarea name="ordernote" id="ordernote" cols="30" rows="3" placeholder="Ghi chú khác"></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Order Summary Details --> */}
                        <div class="col-lg-6">
                            <div class="order-summary-details">
                                <h5 class="checkout-title">Thông tin giỏ hàng</h5>
                                <div class="order-summary-content">
                                    {/* <!-- Order Summary Table --> */}
                                    <div class="order-summary-table table-responsive text-center">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Sản phẩm</th>
                                                    <th>Giá</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><a href="product-details.html">Suscipit Vestibulum <strong> × 1</strong></a>
                                                    </td>
                                                    <td>$165.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="product-details.html">Ami Vestibulum suscipit <strong> × 4</strong></a>
                                                    </td>
                                                    <td>$165.00</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="product-details.html">Vestibulum suscipit <strong> × 2</strong></a>
                                                    </td>
                                                    <td>$165.00</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                {/* <tr>
                                                    <td>Sub Total</td>
                                                    <td><strong>$400</strong></td>
                                                </tr> */}
                                                <tr>
                                                    <td>Shipping</td>
                                                    <td class="d-flex justify-content-center"> 
                                                            <label class="custom-control-label" for="freeshipping">Miễn phí vận chuyển</label>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Thành tiền</td>
                                                    <td><strong>$470</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* <!-- Order Payment Method --> */}
                                    <div class="order-payment-method">                                    
                                        <div class="summary-footer-area">
                                            <div class="custom-control custom-checkbox mb-20">
                                                <input type="checkbox" class="custom-control-input" id="terms" required />
                                                <label class="custom-control-label" for="terms">Tôi đã đọc và đồng ý với các <a href="index.html">điều khoản và chính sách</a> của Enternal Sparkle.</label>
                                            </div>
                                            <button type="submit" class="btn btn-sqr">Thanh toán</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         {/* <!-- checkout main wrapper end --> */}
        </div>
    )
}
