
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { Link, useNavigate } from 'react-router-dom';
import{logout as apilogout} from '../api/LogoutAPI';
import { jwtDecode } from 'jwt-decode';
import updateProfile from '../api/UpdateProfile'; // Assuming this handles profile updates
import addAddress from '../api/addAddress'; // Adjust path as needed
import getAllShipAddresses from '../api/getAllShipAddresses'; // Import the API function
import ShippingAddresses from '../components/ShippingAddresses';


export default function Thong_tin_tk() {
    const { user: currentUser, logout: userLogout } = useUser();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [newPwd, setNewPassword] = useState('');
    const [confirmPwd, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [shipAddresses, setShipAddresses] = useState([]);

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
                setAddresses(response.data.address ? [response.data.address] : []);
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

    useEffect(() => {
        const fetchShipAddresses = async () => {
            const token = localStorage.getItem('token');
            const userId = userData ? userData.userId : '';

            if (!token || !userId) {
                console.log("Token or user ID not available.");
                return;
            }

            try {
                const addressesData = await getAllShipAddresses(token, userId);
                console.log('Ship addresses:', addressesData);
                setShipAddresses(addressesData || []);
            } catch (error) {
                console.error('Error fetching ship addresses:', error);
                setErrorMessage('Error fetching ship addresses');
            }
        };

        fetchShipAddresses();
    }, [userData]);

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

    const handleAddressChange = (index, event) => {
        const newAddresses = [...addresses];
        newAddresses[index] = event.target.value;
        setAddresses(newAddresses);
    };

    const handleNewAddressChange = (event) => {
        setNewAddress(event.target.value);
    };

    const addNewAddress = async () => {
        if (newAddress.trim() !== '') {
            const token = localStorage.getItem('token');
            const userId = userData ? userData.userId : '';

            if (!token || !userId) {
                console.log("Token or user ID not available.");
                return;
            }

            try {
                const updatedUser = await addAddress(token, userId, { address: newAddress });
                console.log('Updated user:', updatedUser);
                setShipAddresses(updatedUser.data.shipAddresses || []);
                setNewAddress('');
                setIsEditing(false);
            } catch (error) {
                console.error('Error adding new address:', error);
                setErrorMessage('Error adding new address');
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');


        const userDataToUpdate = {
            username,
            fullName: displayName,
            email,
            address: addresses.join('; '), // Convert addresses array back to a string
            password: newPwd
        };

        try {
            setLoading(true);
            const updatedUser = await updateProfile(token, userDataToUpdate);
            console.log('Update response:', updatedUser);
            setErrorMessage('Update successful');
            setUserData(updatedUser);

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

    const handleLogout = () => {
        apilogout(); // Call the logout function from logoutAPI.js
        userLogout(); // Call the logout function from UserContext
        navigate('/'); // Redirect to homepage after logout
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
                                            <a class="active" href="#account-info" data-bs-toggle="tab">
                                                <i className="fa fa-user"></i> Thông tin cá nhân</a>
                                                <a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down"></i>
                                                    Đơn hàng</a>
                                                <a href="#payment-method" data-bs-toggle="tab"><i className="fa fa-credit-card"></i>
                                                    Phương thức thanh toán</a>     
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
                                                                    <label htmlFor="display-name" >Tên hiển thị</label>
                                                                    <input type="text" id="display-name" placeholder="Tên hiển thị" value={displayName} onChange={handleDisplayNameChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="email" className="required">Email</label>
                                                                    <input type="email" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label htmlFor="address" >Địa chỉ</label>
                                                                    <input type="address" id="address" placeholder="Địa chỉ" />
                                                                </div>
                                                                <fieldset>
                                                                    <h5>Thay đổi mật khẩu</h5>
                                                                    <div className="single-input-item">
                                                                        <label htmlFor="new-pwd" >Mật khẩu mới</label>
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
                                                            {errorMessage && (
                                                                <div className="error-message">
                                                                    {errorMessage}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>                                         
                                                <div className="tab-pane fade" id="orders" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Đơn hàng</h5>
                                                        <div className="myaccount-table table-responsive text-center">
                                                            <table className="table-don-hang"> 
                                                                <thead className="thead-light">
                                                                    <tr>
                                                                        <th>Đơn hàng</th>
                                                                        <th>Ngày đặt hàng</th>
                                                                        <th>Tổng tiền</th>
                                                                        <th>Trạng thái</th>
                                                                        <th>Chi tiết</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>10/6/2024</td>
                                                                        <td>30.000.000đ</td>
                                                                        <td>Đang thanh toán</td>                                                                  
                                                                        <td><a href="cart.html" className="btn btn-sqr">Xem</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>1/6/2024</td>                                                                     
                                                                        <td>25.000.000đ</td>
                                                                        <td>Thành công</td>
                                                                        <td><a href="cart.html" className="btn btn-sqr">Xem</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>5/6/2024</td>
                                                                        <td>3.000.000đ</td>
                                                                        <td>Đã hủy</td>                                                                      
                                                                        <td><a href="cart.html" className="btn btn-sqr">Xem</a>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="payment-method" role="tabpanel">
                                                    <div className="myaccount-content">
                                                        <h5>Phương thức thanh toán</h5>
                                                        <p className="saved-message">You have no saved payment method</p>
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
