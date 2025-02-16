import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { logout as apilogout } from '../api/LogoutAPI';
import { jwtDecode } from 'jwt-decode'; // Đảm bảo bạn nhập đúng
import updateProfile from '../api/UpdateProfile'; // Assuming this handles profile updates
import Don_hang from '../pages/cart/Don_hang';
import Giay_bao_hanh from './Giay_bao_hanh';
import Giay_chung_nhan from './Giay_chung_nhan';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

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
            setUserData({ ...response.data, currentPassword: response.data.password || '' });
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

        if (newPwd && newPwd !== confirmPwd) {
            toast.error('Mật khẩu xác nhận không khớp.');
            return;
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
            isActive: userData.isActive,
            roleId: userData.roleId,
            loyaltyPoints: userData.loyaltyPoints,
            password: userData.currentPassword // Giữ mật khẩu hiện tại
        };
        // Chỉ thêm trường password nếu cả "Mật khẩu mới" và "Xác nhận mật khẩu" đều được nhập và khớp nhau
        if (newPwd && confirmPwd) {
            if (newPwd !== confirmPwd) {
                toast.error('Mật khẩu xác nhận không khớp.');
                return;
            }
            userDataToUpdate.password = newPwd;
        } else {
            // Nếu không có mật khẩu mới, sử dụng mật khẩu hiện tại
            userDataToUpdate.password = userData.currentPassword;
        }

        console.log('Dữ liệu gửi đi:', userDataToUpdate); // Kiểm tra dữ liệu gửi đi

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
                                        <li className="breadcrumb-item active" aria-current="page">{t("myAccount")}</li>
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
                                                    <i className="fa fa-user"></i> {t("personalInformation")}
                                                </a>
                                                <a href="#orders" data-bs-toggle="tab">
                                                    <i className="fa fa-cart-arrow-down"></i> {t("orders")}
                                                </a>
                                                <a href="#warranty" data-bs-toggle="tab">
                                                    <i className="fa fa-credit-card"></i> {t("warranty")}
                                                </a>
                                                <a href="#certificate" data-bs-toggle="tab">
                                                    <i className="fa fa-certificate"></i> {t("certificate")}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-8">
                                            <div className="tab-content" id="myaccountContent">
                                                <div className="tab-pane fade show active" id="account-info" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>{t("personalInformation")}</h5>
                                                        <div className="account-details-form">
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="display-name">{t("displayName")}</label>
                                                                    <input type="text" id="display-name" placeholder={t("displayName")} value={displayName} onChange={handleDisplayNameChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="email" className="required">{("email")}</label>
                                                                    <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="number-phone">{t("phoneNumber")}</label>
                                                                    <input type="text" id="number-phone" placeholder={t("phoneNumber")} value={numberPhone} onChange={handleNumberPhoneChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="loyalty-points">{t("loyaltyPoints")}</label>
                                                                    <input type="text" id="loyalty-points" value={userData?.loyaltyPoints || 0} readOnly />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="address">{t("Address")}</label>
                                                                    <input type="text" id="address" placeholder={t("Address")} value={address} onChange={handleAddressChange} />
                                                                </div>
                                                                <fieldset>
                                                                    <h5>{t("changePassword")}</h5>
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="new-pwd">{t("newPassword")}</label>
                                                                        <input type="password" id="new-pwd" placeholder={t("newPassword")} value={newPwd} onChange={handlePasswordChange} />
                                                                    </div>
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="confirm-pwd" className="required">{t("confirmPassword")}</label>
                                                                        <input type="password" id="confirm-pwd" placeholder={t("confirmPassword")} value={confirmPwd} onChange={handlePasswordChange} />
                                                                    </div>
                                                                </fieldset>
                                                                <div className="single-input-item">
                                                                    <button className="btn btn-sqr">{t("saveChanges")}</button>
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
