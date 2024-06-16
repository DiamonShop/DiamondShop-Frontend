import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { sendToken, isTokenExpired } from '../api/TokenAPI';

export default function Thong_tin_tk() {
    const { user: currentUser, logout: userLogout } = useUser();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [newPwd, setNewPassword] = useState('');
    const [confirmPwd, setConfirmPassword] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (token && !isTokenExpired(token)) {
                try {
                    const headers = sendToken();
                    const response = await axios.get('https://localhost:7101/api/User/GetUserProfile?id=1', { headers });
                    setUserData(response.data);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    if (error.response && error.response.status === 401) {
                        console.log('Token hết hạn hoặc không hợp lệ. Đang chuyển hướng đến trang đăng nhập.');
                        userLogout();
                    } else {
                        setErrorMessage('Lỗi khi lấy dữ liệu người dùng.');
                    }
                }
            } else {
                console.log("Không tìm thấy token hợp lệ hoặc token đã hết hạn");
                userLogout();
            }
        };

        fetchUserData();
    }, [userLogout]);

    const handlePasswordChange = (event) => {
        const { id, value } = event.target;
        if (id === 'new-pwd') {
            setNewPassword(value);
        } else if (id === 'confirm-pwd') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedData = {
            userId: userData.userId, // Make sure to include userId for identification
            fullName: event.target.elements["display-name"].value,
            email: event.target.elements["email"].value,
            // Add other fields to update
        };

        const newPassword = newPwd;
        const confirmPassword = confirmPwd;

        if (newPassword && confirmPassword && newPassword === confirmPassword) {
            updatedData.newPassword = newPassword;
        } else {
            setErrorMessage('Mật khẩu mới và xác nhận mật khẩu không khớp.');
            return;
        }

        const headers = sendToken();

        try {
            const response = await axios.put('https://localhost:7101/api/User/UpdateUserProfile', updatedData, { headers });
            console.log('Cập nhật thành công:', response.data);
            setUserData(response.data); // Update userData state after successful update
            setErrorMessage('');
            // Xử lý UI sau khi cập nhật thành công (nếu cần)
        } catch (error) {
            console.error('Lỗi khi cập nhật dữ liệu người dùng:', error);
            setErrorMessage('Có lỗi xảy ra khi cập nhật thông tin tài khoản.');
            // Xử lý các lỗi khác nếu cần
        }
    };

    return (
        <div className="myaccount-content">
            <h5>Thông tin tài khoản</h5>
            <div className="account-details-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-input-item">
                                <label htmlFor="display-name" className="required">Tên hiển thị</label>
                                <input type="text" id="display-name" placeholder="Tên hiển thị" defaultValue={userData ? userData.fullName : ''} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-input-item">
                                <label htmlFor="email" className="required">Email</label>
                                <input type="email" id="email" placeholder="Địa chỉ Email" defaultValue={userData ? userData.email : ''} />
                            </div>
                        </div>
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
    );
}
