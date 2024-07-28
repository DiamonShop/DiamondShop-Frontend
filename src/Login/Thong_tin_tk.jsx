import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { logout as apilogout } from '../api/LogoutAPI';
import {jwtDecode} from 'jwt-decode';
import updateProfile from '../api/UpdateProfile';
import Don_hang from '../pages/cart/Don_hang';
import Giay_bao_hanh from './Giay_bao_hanh';
import Giay_chung_nhan from './Giay_chung_nhan';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Thong_tin_tk() {
    const { user: currentUser, logout: userLogout } = useUser();
    const [userData, setUserData] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [address, setAddress] = useState('');
    const [loyalpoint, setLoyalpoint] = useState(0);
    const [newPwd, setNewPassword] = useState('');
    const [confirmPwd, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        if (!currentUser) {
            return;
        }

        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            if (userRole === 'Admin') {
                navigate('/Dashboard');
            }

            const response = await axios.get(`https://localhost:7101/api/User/GetUserProfile?id=${decodedToken.sid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("Response data:", response.data);
            setUserData(response.data);
            setUsername(response.data.username || '');
            setDisplayName(response.data.fullName || '');
            setEmail(response.data.email || '');
            setNumberPhone(response.data.numberPhone || '');
            setAddress(response.data.address || '');
            setLoyalpoint(response.data.loyaltyPoints);
        } catch (error) {
            console.error('Error fetching user data:', error);
            if (error.response && error.response.status === 401) {
                console.log('Token expired or invalid. Redirecting to login.');
                userLogout();
            } else {
                toast.error('Error fetching user data.');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData(); // Gọi fetchUserData ở đây để lấy thông tin người dùng ban đầu
    }, [currentUser, userLogout, navigate]);

    // Các hàm xử lý sự kiện cập nhật thông tin
    const handlePasswordChange = (event) => {
        const { id, value } = event.target;
        if (id === 'new-pwd') {
            setNewPassword(value);
        } else if (id === 'confirm-pwd') {
            setConfirmPassword(value);
        }
    };

    const handleDisplayNameChange = (event) => {
        setDisplayName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNumberPhoneChange = (event) => {
        setNumberPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Kiểm tra các điều kiện đầu vào
        if (!displayName || !email || !numberPhone || !address) {
            toast.error('Tất cả các ô nhập không được để trống.');
            return;
        }

        if (!validateEmail(email)) {
            toast.error('Email không hợp lệ.');
            return;
        }

        if (numberPhone.length < 10) {
            toast.error('Số điện thoại phải có ít nhất 10 số.');
            return;
        }

        if (newPwd) {
            if (newPwd.length === 0) {
                toast.error('Mật khẩu không được để trống.');
                return;
            }
            if (newPwd !== confirmPwd) {
                toast.error('Mật khẩu xác nhận không khớp.');
                return;
            }
        }

        const token = localStorage.getItem('token');

        // Tạo object chứa dữ liệu cần cập nhật
        const userDataToUpdate = {
            userId: userData.userId, 
            username: userData.username, 
            fullName: displayName,
            email,
            numberPhone,
            address,
            password: newPwd, // Nếu có
            isActive: userData.isActive, 
            roleId: userData.roleId, 
            loyaltyPoints: userData.loyaltyPoints 
        };

        try {
            setLoading(true);
            const updatedUser = await updateProfile(token, userDataToUpdate);
            console.log('Update response:', updatedUser);
            toast.success('Cập nhật thành công.');
            setUserData(updatedUser);

            fetchUserData(); // Sau khi cập nhật thành công, fetch lại thông tin người dùng để hiển thị
        } catch (error) {
            if (error.response) {
                console.log('Server responded with error:', error.response.data);
                console.error('Error details:', error.response.data.errors);
                toast.error(error.response.data.title || 'Đã xảy ra lỗi không xác định');
            } else if (error.request) {
                console.log('No response received:', error.request);
                toast.error('Không nhận được phản hồi từ máy chủ');
            } else {
                console.log('Error setting up request:', error.message);
                toast.error('Đã xảy ra lỗi trong quá trình xử lý yêu cầu');
            }
        } finally {
            setLoading(false);
        }
    };

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
                                        <li className="breadcrumb-item active" aria-current="page">Tài khoản của tôi</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-account-wrapper section-padding">
                <div className="container">
                    <div className="section-bg-color">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="myaccount-page-wrapper">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4">
                                            <div className="myaccount-tab-menu nav" role="tablist">
                                                <a className="active" href="#account-info" data-bs-toggle="tab">
                                                    <i className="fa fa-user"></i> Thông tin cá nhân
                                                </a>
                                                <a href="#orders" data-bs-toggle="tab">
                                                    <i className="fa fa-cart-arrow-down"></i> Đơn hàng
                                                </a>
                                                <a href="#warranty" data-bs-toggle="tab">
                                                    <i className="fa fa-credit-card"></i> Giấy bảo hành
                                                </a>
                                                <a href="#certificate" data-bs-toggle="tab">
                                                    <i className="fa fa-certificate"></i> Giấy chứng nhận
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-8">
                                            <div className="tab-content" id="myaccountContent">
                                                <div className="tab-pane fade show active" id="account-info" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Thông tin cá nhân</h5>
                                                        <div className="account-details-form">
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="display-name">Tên hiển thị</label>
                                                                    <input type="text" id="display-name" placeholder="Tên hiển thị" value={displayName} onChange={handleDisplayNameChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="loyalpoint" >Điểm</label>
                                                                    <input type="loyalpoint" id="loyalpoint" value={loyalpoint} readOnly />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="email" className="required">Email</label>
                                                                    <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="number-phone">Số điện thoại</label>
                                                                    <input type="text" id="number-phone" placeholder="Số điện thoại" value={numberPhone} onChange={handleNumberPhoneChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="address">Địa chỉ</label>
                                                                    <input type="text" id="address" placeholder="Địa chỉ" value={address} onChange={handleAddressChange} />
                                                                </div>
                                                                <fieldset>
                                                                    <h5>Thay đổi mật khẩu</h5>
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="new-pwd">Mật khẩu mới</label>
                                                                        <input type="password" id="new-pwd" placeholder="Mật khẩu mới" value={newPwd} onChange={handlePasswordChange} />
                                                                    </div>
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="confirm-pwd" className="required">Xác nhận mật khẩu</label>
                                                                        <input type="password" id="confirm-pwd" placeholder="Xác nhận mật khẩu" value={confirmPwd} onChange={handlePasswordChange} />
                                                                    </div>
                                                                </fieldset>
                                                                <div className="single-input-item">
                                                                    <button className="btn btn-sqr">Lưu thay đổi</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="orders" role="tabpanel">
                                                    <Don_hang />
                                                </div>
                                                <div className="tab-pane fade" id="warranty" role="tabpanel">
                                                    <Giay_bao_hanh />
                                                </div>
                                                <div className="tab-pane fade" id="certificate" role="tabpanel">
                                                    <Giay_chung_nhan />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
