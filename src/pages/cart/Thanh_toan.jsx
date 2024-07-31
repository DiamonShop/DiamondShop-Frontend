import React, { useState, useEffect } from 'react';
import { handleCheckout } from '../../api/CheckoutAPI';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is installed and imported
import { formatCurrency } from '../../utils/NumberFormat';
import { decodeToken } from '../../api/TokenAPI';
import { handleGetOrderByUserId } from '../../api/OrderAPI';
import { notification, Button } from 'antd';
import { useTranslation } from "react-i18next";

export default function Thanh_toan() {
    const { user: currentUser, logout: userLogout } = useUser();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [userId, setUserId] = useState('');
    const [loading, setLoading] = useState(false);
    const [orderDetail, setOrderDetail] = useState('');
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        birthday: '',
        email: '',
        streetAddress: '',
        orderNote: ''
    });
    const [loyalPoint, setLoyalPoint] = useState('');
    const [isLoyaltyChecked, setIsLoyaltyChecked] = useState(false); // State for loyalty checkbox
    const [isTermsChecked, setIsTermsChecked] = useState(false); // State for terms checkbox
    const [api, contextHolder] = notification.useNotification();
    useEffect(() => {
        const checkout_btn = document.querySelector("#btn_checkout");
        const container = document.querySelector(".createOrder");
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            try {
                const decodedToken = jwtDecode(token);

                const response = await axios.get(`https://localhost:7101/api/User/GetUserProfile?id=${decodedToken.sid}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const userData = response.data;
                setUserData(userData);
                setDisplayName(userData.fullName || '');
                setEmail(userData.email || '');
                setAddress(userData.address || '');
                setUserId(userData.userId || '');
                setNumberPhone(userData.numberPhone || '');
                setLoyalPoint(userData.loyaltyPoints || 0);
            } catch (error) {
                console.error('Error fetching user data:', error);
                if (error.response && error.response.status === 401) {
                    console.log('Token expired or invalid. Redirecting to login.');
                    userLogout();
                    navigate('/Dang_nhap');
                } else {
                    setErrorMessage('Error fetching user data.');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();

        const handleCheckoutClick = () => {
            container.classList.add("checkout-mode");
        };

        checkout_btn.addEventListener('click', handleCheckoutClick);

        //Lấy Total Price khi vào trang Thanh Toán
        const getTotalPrice = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                const orders = await handleGetOrderByUserId(userId);
                for (const item of orders) {
                    if (item.status === 'Ordering') {
                        setTotalPrice(item.totalPrice);
                        setOrderDetail(item.orderDetails);
                    }
                }
            }
        }

        getTotalPrice();

        return () => {
            checkout_btn.removeEventListener('click', handleCheckoutClick);
        };

    }, [navigate, api, userLogout]);


    const handleCheckoutSubmit = async (e) => {
        e.preventDefault();

        // require user click checkbox 
        if (!isTermsChecked) {
            setErrorMessage('Bạn phải đồng ý với các chính sách và điều khoản trước khi thanh toán');
            api.error({
                message: 'Lỗi',
                description: 'Bạn phải đồng ý với các chính sách và điều khoản trước khi thanh toán',
            });
            return;
        }
        const discount = isLoyaltyChecked ? (loyalPoint || 0) * 100 : 0;

        const totalPrices = totalPrice - discount;

        const orderModel = {
            userId: userId,
            fullName: displayName,
            phoneNumber: numberPhone,
            email: email,
            streetAddress: address,
            orderNote: formData.orderNote,
            price: totalPrices,
        };

        if (isLoyaltyChecked) {
            localStorage.setItem('loyaltyChecked', '1');
        } else {
            localStorage.removeItem('loyaltyChecked');
        }

        localStorage.setItem('priceToUpdate', orderModel.price);
        localStorage.setItem('noteToUpdate', orderModel.orderNote);


        try {
            const url = await handleCheckout(orderModel); // Await the promise
            window.location.href = url; // Use the resolved URL
        } catch (error) {
            console.error('Error during checkout:', error);
            setErrorMessage('Thanh toán không thành công');
            api.error({
                message: 'Lỗi',
                description: 'Thanh toán không thành công.',
            });
        }
    };

    const handleDisplayNameChange = (event) => {
        setDisplayName(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCheckoutChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setNumberPhone(event.target.value);
    };

    const handleLoyaltyCheckboxChange = (event) => {
        setIsLoyaltyChecked(event.target.checked);
    };
    const handleTermsCheckboxChange = (event) => {
        setIsTermsChecked(event.target.checked);
    };

    return (
        <div>
            {contextHolder}
            {/* <!-- breadcrumb area start --> */}
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html"><i class="fa fa-home"></i></a></li>
                                        <li class="breadcrumb-item"><Link to="/Giohang">{t("cart")}</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">{t("pay")}</li>
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
                <div class="container-thanhtoan">

                    <div class="row">
                        {/* <!-- Order Summary Details --> */}
                        <div class="col-lg-6">
                            <div class="order-summary-details">
                                <h5 class="checkout-title">{t("cartInformation")}</h5>
                                <div class="order-summary-content">
                                    {/* <!-- Order Summary Table --> */}
                                    <div class="order-summary-table table-responsive text-center">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>{t("product")}</th>
                                                    <th>{("price")}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orderDetail ? (orderDetail.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><a href="product-details.html">{item.productName} <strong> × {item.quantity}</strong></a></td>
                                                        <td>{formatCurrency(item.unitPrice)} VND</td>
                                                    </tr>
                                                ))) : (<></>)}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td>{t("Shipping")}</td>
                                                    <td class="d-flex justify-content-center">
                                                        <label class="custom-control-label" for="freeshipping">{t("freeShipping1")}</label>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Giảm giá </td>
                                                    <td class="d-flex justify-content-center">
                                                        <label class="custom-control-label" for="discount">{formatCurrency(isLoyaltyChecked ? loyalPoint*100 : 0)} VND</label>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>{t("cartSubTotal")}</td>

                                                    <td><strong>{formatCurrency(isLoyaltyChecked ? totalPrice - (loyalPoint || 0) * 100 : totalPrice)}</strong><strong> VND</strong></td>
                                                    <input id="total" type="hidden" value={totalPrice} name="totalPrice" />

                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Checkout Billing Details --> */}
                        <div class="col-lg-6">
                            <div class="checkout-billing-details-wrap">
                                <h5 class="checkout-title">{t("buyerInformation")}</h5>
                                <div class="billing-form-wrap">
                                    <form className="createOrder" onSubmit={handleCheckoutSubmit}>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="f_name" class="required">
                                                        {t("fullName")}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="displayName"
                                                        placeholder={t("fullName")}
                                                        required
                                                        value={displayName}
                                                        onChange={handleDisplayNameChange}
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="single-input-item">
                                                    <label for="phone-number" class="required">
                                                        {t("phoneNumber")}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="phoneNumber"
                                                        placeholder={t("phoneNumber")}
                                                        required
                                                        value={numberPhone}
                                                        onChange={handlePhoneChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="single-input-item">
                                            <label for="email" class="required">Email</label>
                                            <input type="email" name="email" placeholder="Email"
                                                required
                                                value={email}
                                                onChange={handleEmailChange} />
                                        </div>

                                        <div class="single-input-item">
                                            <label for="street-address" class="required ">{t("Address")}</label>
                                            <input type="text" name="address" placeholder={t("deliveryAddress")}
                                                value={address} onChange={handleAddressChange}
                                                required />
                                        </div>


                                        <div class="single-input-item">
                                            <label for="ordernote">{t("note")}</label>
                                            <textarea name="orderNote" id="orderNote"
                                                cols="30" rows="3" placeholder={t("otherNote")}
                                                value={formData.orderNote} onChange={handleCheckoutChange}
                                            ></textarea>
                                        </div>

                                        <div class="summary-footer-area">
                                            <div class="custom-control custom-checkbox mb-20">


                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    id="sale"
                                                    checked={isLoyaltyChecked}
                                                    onChange={handleLoyaltyCheckboxChange}
                                                />
                                                <label class="custom-control-label" for="sale">
                                                    {t("using")} <strong>{loyalPoint}</strong>  {t("pointsforDiscount")}
                                                </label>


                                            </div>


                                            <div class="custom-control custom-checkbox mb-20">
                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    id="terms"
                                                    checked={isTermsChecked}
                                                    onChange={handleTermsCheckboxChange}
                                                />
                                                <label class="custom-control-label" for="terms">
                                                    {t("accept1")} <a href="/Chinhsach">{t("accept2")}</a> {t("accept3")}
                                                </label>

                                            </div>
                                        </div>

                                        <button type="submit" value="THANH TOÁN"
                                            className="btn-login solid"
                                            id="btn_checkout">{t("payUpper")}</button>
                                    </form>
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
