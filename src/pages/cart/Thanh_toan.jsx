import React, { useState, useEffect } from 'react';
import { handleCheckout } from '../../api/CheckoutAPI';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is installed and imported
import { formatCurrency } from '../../utils/NumberFormat';
import { decodeToken } from '../../api/TokenAPI';
import { handleGetOrderByUserId } from '../../api/OrderAPI';

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
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        birthday: '',
        email: '',
        streetAddress: '',
        orderNote: ''
    });
    const [BillId, setBillId] = useState('');

    useEffect(() => {
        setBillId(Math.floor(100000000 + Math.random() * 900000000));
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
                setUserData(response.data);
                setDisplayName(response.data.fullName || '');
                setEmail(response.data.email || '');
                setAddress(response.data.address || '');
                setUserId(response.data.userId || '');
                setNumberPhone(response.data.numberPhone || '');
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
                    if (item.status == 'Ordering') {
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

    }, [navigate]);


    const handleCheckoutSubmit = async (e) => {
        e.preventDefault();
        const totalPrices = totalPrice;
    
        const orderModel = {
            billId:BillId,
            userId: userId,
            fullName: displayName,
            phoneNumber: numberPhone,
            email: email,
            streetAddress: address,
            orderNote: formData.orderNote,
            price: totalPrices,
        };
    
        const billCreateDTO = {
            BillId: orderModel.billId,
            UserId: orderModel.userId,
            FullName: orderModel.fullName,
            NumberPhone: orderModel.phoneNumber,
            Email: orderModel.email,
            Address: orderModel.streetAddress,
            OrderNote: orderModel.orderNote,
            IsActive: true, // or whatever logic you have for IsActive
            Price: orderModel.price,
        };
    
        localStorage.setItem('billCreateDTO', JSON.stringify(billCreateDTO));
    
        try {
            const url = await handleCheckout(orderModel); // Await the promise
            window.location.href = url; // Use the resolved URL
        } catch (error) {
            console.error('Error during checkout:', error);
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

    return (
        <div>
            {/* <!-- breadcrumb area start --> */}
            <div class="breadcrumb-area">
                <div class="container-giohang">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html"><i class="fa fa-home"></i></a></li>
                                        <li class="breadcrumb-item"><Link to="/Giohang">Giỏ hàng</Link></li>
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
                <div class="container-thanhtoan">

                    <div class="row">
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
                                                {orderDetail ? (orderDetail.map((item, index) => (
                                                    <tr key={index}>
                                                        <td><a href="product-details.html">{item.productName} <strong> × {item.quantity}</strong></a></td>
                                                        <td>{formatCurrency(item.unitPrice)} VND</td>
                                                    </tr>
                                                ))) : (<></>)}
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
                                                    <td><strong>{formatCurrency(totalPrice)}</strong><strong> VND</strong></td>
                                                    <input id="total" type="hidden" value={totalPrice} />
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
                                                        name="displayName"
                                                        placeholder="Họ tên"
                                                        required
                                                        value={displayName}
                                                        onChange={handleDisplayNameChange}
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
                                            <label for="street-address" class="required ">Địa chỉ</label>
                                            <input type="text" name="address" placeholder="Địa chỉ nhận hàng"
                                                value={address} onChange={handleAddressChange}
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
                    </div>
                </div>
            </div>
            {/* <!-- checkout main wrapper end --> */}
        </div>
    )
}

