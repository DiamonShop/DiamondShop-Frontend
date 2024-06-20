import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLoginUser } from '../api/LoginAPI';
import { handleSignUpUser } from '../api/SignUpAPI';
import { Link } from 'react-router-dom';
import googleLogin from '../api/GoogleLogin';
export default function Dang_nhap() {
    const [signInForm, setSignInForm] = useState({ username: '', password: '' });
    const [signUpForm, setSignUpForm] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();
    const handleGoogleLogin = async () => {
        await googleLogin();
        navigate('/'); // Adjust the navigation route as necessary
    };
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const container = document.querySelector(".signin-signup-container");


        const handleSignInClick = () => {
            container.classList.remove("sign-up-mode");
        };

        sign_in_btn.addEventListener('click', handleSignInClick);

        return () => {
            sign_in_btn.removeEventListener('click', handleSignInClick);
        };
    }, []);

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInForm({ ...signInForm, [name]: value });
    };


    const handleSignInSubmit = async (e) => {
        e.preventDefault();
        let user = {
            username: signInForm.username,
            password: signInForm.password
        };
        handleLoginUser(user);
        navigate('/');
    };

    return (
        <div>
            <div className="signin-signup-container">
                <div className="signin-signup-forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleSignInSubmit} className="sign-in-form">
                            <h2 className="sign-in-form-title">Đăng nhập</h2>
                            <div className="input-field">
                                <i className="pe-7s-users"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Tên đăng nhập"
                                    value={signInForm.username}
                                    onChange={handleSignInChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="pe-7s-door-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    value={signInForm.password}
                                    onChange={handleSignInChange}
                                />
                            </div>
                            <input type="submit" value="ĐĂNG NHẬP" className="btn-login solid" />
                            <p className="social-text">Hoặc đăng nhập bằng Gmail</p>
                            <div className="social-media">
                                <a href="#" className="social-icon" onClick={handleGoogleLogin}>
                                    <i><img src="assets/img/logo/Google.png" alt="" /></i>
                                </a>
                            </div>
                        </form>

                        
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Bạn chưa có tài khoản?</h3>
                            <p>Hãy đăng kí để có trải nghiệm mua hàng tốt nhất</p>
                            <Link to="/Dangki"><button className="btn transparent" id="sign-up-btn">ĐĂNG KÍ</button></Link>
                            
                        </div>

                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3></h3>
                            <p></p>
                            <button className="btn transparent" id="sign-in-btn"></button>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    );
}