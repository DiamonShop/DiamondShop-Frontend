import React, { useState, useEffect } from 'react';
import { handleCheckout } from '../../api/CheckoutAPI';

export default function Thanh_toan() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        birthday: '',
        email: '',
        streetAddress: '',
        orderNote: ''
    });
  

    const total1 = 10000000;
    useEffect(() => {
        const checkout_btn = document.querySelector("#btn_checkout");
        const container = document.querySelector(".createOrder");

        const handleCheckoutClick = () => {
            container.classList.add("checkout-mode");
        };

        checkout_btn.addEventListener('click', handleCheckoutClick);

        const updateTotalPrice = () => {
            const totalElement = document.querySelector(".order-summary-table tfoot tr:nth-child(3) td:last-child strong");
            if (totalElement) {
                const totalText = totalElement.innerText.replace(/[^0-9]/g, '');
                setTotalPrice(parseInt(totalText, 10));
            }
        };

        updateTotalPrice();

        return () => {
            checkout_btn.removeEventListener('click', handleCheckoutClick);
        };
    }, []);


    const handleCheckoutSubmit = async (e) => {
        const totalPrice = calculateTotalPrice();
        e.preventDefault();
        
        const orderModel = {
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            birthday: formData.birthday,
            email: formData.email,
            streetAddress: formData.streetAddress,
            orderNote: formData.orderNote,
            price: total1
        };
        try {
            const url = await handleCheckout(orderModel); // Await the promise
            window.location.href = url; // Use the resolved URL
        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    
    const handleCheckoutChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


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
                                    <form className="createOrder" onSubmit={handleCheckoutSubmit}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="f_name" class="required">
                                                        Họ tên
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        placeholder="Họ tên"
                                                        required
                                                        value={formData.fullName}
                                                        onChange={handleCheckoutChange}
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="phone-number" class="required">
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        placeholder="Số điện thoại"
                                                        required
                                                        value={formData.phoneNumber}
                                                        onChange={handleCheckoutChange}
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="birthday">Ngày sinh</label>
                                                    <input
                                                        type="text"
                                                        name="birthday"
                                                        placeholder="Ngày sinh(dd-mm-yyyy)"
                                                        value={formData.birthday}
                                                        onChange={handleCheckoutChange}
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="email" class="required">Email</label>
                                                    <input type="email" name="email" placeholder="Email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleCheckoutChange} />
                                                </div>
                                            </div>
                                        </div>


                                        <div class="single-input-item">
                                            <label for="street-address" class="required mt-20">Địa chỉ</label>
                                            <input type="text" name="streetAddress" placeholder="Địa chỉ nhận hàng"
                                                value={formData.streetAddress} onChange={handleCheckoutChange}
                                                required />
                                        </div>


                                        <div class="single-input-item">
                                            <label for="ordernote">Ghi chú</label>
                                            <textarea name="orderNote" id="orderNote"
                                                cols="30" rows="3" placeholder="Ghi chú khác"
                                                value={formData.orderNote} onChange={handleCheckoutChange}
                                            ></textarea>
                                        </div>

                                        <div class="summary-footer-area">
                                            <div class="custom-control custom-checkbox mb-20">
                                                <input type="checkbox" class="custom-control-input" id="terms" required />
                                                <label class="custom-control-label" for="terms">Tôi đã đọc và đồng ý với các <a href="index.html">điều khoản và chính sách</a> của Enternal Sparkle.</label>
                                            </div>

                                        </div>
                                        <button type="submit" value="THANH TOÁN"
                                            className="btn-login solid"
                                            id="btn_checkout">THANH TOÁN</button>
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
                                                    <td>4.200.000 VND</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="product-details.html">Ami Vestibulum suscipit <strong> × 4</strong></a>
                                                    </td>
                                                    <td>4.200.000 VND</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="product-details.html">Vestibulum suscipit <strong> × 2</strong></a>
                                                    </td>
                                                    <td>4.200.000 VND</td>
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
                                                    <td><strong>29.400.000 </strong><strong>VND</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    {/* <!-- Order Payment Method --> */}
                                    <div class="order-payment-method">

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

