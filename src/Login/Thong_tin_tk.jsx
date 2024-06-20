import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { Link, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Ensure jwt-decode is installed and imported
import updateProfile from '../api/UpdateProfile'; // Đường dẫn tới file updateProfile

export default function Thong_tin_tk() {
    const { user: currentUser, logout: userLogout } = useUser();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);
    const [newPwd, setNewPassword] = useState('');
    const [confirmPwd, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (!currentUser) {
                console.log("User not logged in. Redirecting to login.");
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
                    navigate('/BangDieuKhien');
                }

                const response = await axios.get(`https://localhost:7101/api/User/GetUserProfile?id=${currentUser.userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log("Response data:", response.data);
                setUserData(response.data);
                setDisplayName(response.data.fullName || '');
                setEmail(response.data.email || '');
                setAddress(response.data.address || '');
            } catch (error) {
                console.error('Error fetching user data:', error);
                if (error.response && error.response.status === 401) {
                    console.log('Token expired or invalid. Redirecting to login.');
                    userLogout();
                } else {
                    setErrorMessage('Error fetching user data.');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [currentUser, userLogout, navigate]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');

        const userDataToUpdate = {
            fullName: displayName,
            email,
            address
        };

        try {
            setLoading(true);
            const updatedUser = await updateProfile(currentUser.userId, userDataToUpdate, token);
            console.log('Update response:', updatedUser);
            setErrorMessage('Update successful');
            // Có thể cập nhật lại dữ liệu người dùng sau khi update thành công nếu cần
            // setUserData(response.data);
        } catch (error) {
            if (error.response) {
                console.log('Server responded with error:', error.response.data);
                console.error('Error details:', error.response.data.errors);
                setErrorMessage(error.response.data.title || 'Unknown error occurred');
            } else if (error.request) {
                console.log('No response received:', error.request);
                setErrorMessage('No response received from server');
            } else {
                console.log('Error setting up request:', error.message);
                setErrorMessage('Error setting up request');
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
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
                                                <a href="#dashboad" className="active" data-bs-toggle="tab"><i className="fa fa-dashboard"></i>
                                                    Dashboard</a>
                                                <a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down"></i>
                                                    Đơn hàng</a>
                                                <a href="#download" data-bs-toggle="tab"><i className="fa fa-cloud-download"></i>
                                                    Tải về</a>
                                                <a href="#payment-method" data-bs-toggle="tab"><i className="fa fa-credit-card"></i>
                                                    Phương thức thanh toán</a>
                                                <a href="#address-edit" data-bs-toggle="tab"><i className="fa fa-map-marker"></i>
                                                    Địa chỉ</a>
                                                <a href="#account-info" data-bs-toggle="tab"><i className="fa fa-user"></i> Thông tin cá nhân</a>
                                                <Link to="/"><i className="fa fa-sign-out"></i> Logout</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-md-8">
                                            <div className="tab-content" id="myaccountContent">
                                                <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Dashboard</h5>
                                                        <div className="welcome">
                                                            <p>Xin chào, <strong>{userData ? userData.fullName : ''}</strong> (Không phải <strong>Jhonson
                                                                !</strong><a href="login-register.html" className="logout"> Đăng xuất</a>)</p>
                                                        </div>
                                                        <p className="mb-0">Từ bảng điều khiển tài khoản của bạn.
                                                            bạn có thể dễ dàng kiểm tra và xem các đơn đặt hàng gần đây của mình,
                                                            quản lý địa chỉ giao hàng và thanh toán cũng như
                                                            chỉnh sửa chi tiết mật khẩu và tài khoản của bạn
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="orders" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Orders</h5>
                                                        <div className="myaccount-table table-responsive text-center">
                                                            <table className="table table-bordered">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Order</th>
                                                                        <th>Date</th>
                                                                        <th>Status</th>
                                                                        <th>Total</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>10/6/2024</td>
                                                                        <td>Đang thanh toán</td>
                                                                        <td>$3000</td>
                                                                        <td><a href="cart.html" className="btn btn-sqr">View</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>1/6/2024</td>
                                                                        <td>Thành công</td>
                                                                        <td>$200</td>
                                                                        <td><a href="cart.html" className="btn btn-sqr">View</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>5/6/2024</td>
                                                                        <td>Tạm dừng</td>
                                                                        <td>$990</td>
                                                                        <td><a href="cart.html" className="btn btn-sqr">View</a>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="download" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Tải về</h5>
                                                        <div className="myaccount-table table-responsive text-center">
                                                            <table className="table table-bordered">
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Món hàng</th>
                                                                        <th>Ngày</th>
                                                                        <th>Hết hạn</th>
                                                                        <th>Tải về</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Nhẫn Kim cương Vàng trắng 14K</td>
                                                                        <td>22/8/2024</td>
                                                                        <td>Yes</td>
                                                                        <td><a href="#" className="btn btn-sqr"><i
                                                                            className="fa fa-cloud-download"></i>
                                                                            Tải về</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="payment-method" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Phương thức thanh toán</h5>
                                                        <p className="saved-message">Bạn chưa thể lưu
                                                            phương thức thanh toán của mình
                                                            .</p>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="address-edit" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Địa chỉ giao hàng</h5>
                                                        <address>
                                                            <p><strong>Nguyễn Đăng Khoa</strong></p>
                                                            <p>Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam<br />
                                                            </p>
                                                            <p>Di động: (123) 456-7890</p>
                                                        </address>
                                                        <a href="#" className="btn btn-sqr"><i className="fa fa-edit"></i>
                                                            Chỉnh sửa</a>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="account-info" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Thông tin tài khoản</h5>
                                                        <div className="account-details-form">
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="display-name" className="required">Tên hiển thị</label>
                                                                    <input type="text" id="display-name" placeholder="Tên hiển thị" value={displayName} onChange={handleDisplayNameChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="email" className="required">Email</label>
                                                                    <input type="email" id="email" placeholder="Địa chỉ Email" value={email} onChange={handleEmailChange} />
                                                                </div>
                                                                <fieldset>
                                                                    <legend>Thay đổi mật khẩu</legend>
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="current-pwd" className="required">Mật khẩu hiện tại</label>
                                                                        <input type="password" id="current-pwd" placeholder="Mật khẩu hiện tại" />
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="single-input-item">
                                                                                <label htmlFor="new-pwd" className="required">Mật khẩu mới</label>
                                                                                <input type="password" id="new-pwd" placeholder="Mật khẩu mới" onChange={handlePasswordChange} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="single-input-item">
                                                                                <label htmlFor="confirm-pwd" className="required">Xác nhận mật khẩu</label>
                                                                                <input type="password" id="confirm-pwd" placeholder="Xác nhận mật khẩu" onChange={handlePasswordChange} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                                {errorMessage && <p className="error-message">{errorMessage}</p>}
                                                                <div className="single-input-item">
                                                                    <button type="submit" className="btn btn-sqr">Lưu</button>
                                                                </div>
                                                            </form>
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
            </div>
        </div>
    );
}
