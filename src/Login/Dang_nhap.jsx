import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { GoogleLogin, handleLoginUser } from '../api/LoginAPI';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import { useTranslation } from "react-i18next";// luon luon co de dich

export default function Dang_nhap() {
    const [signInForm, setSignInForm] = useState({ username: '', password: '' });
    const [messageApi, contextHolder] = message.useMessage();
    const { t } = useTranslation();//luon luon co de dich
    const navigate = useNavigate();

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

        try {
            const response = await handleLoginUser(user);
            console.log('Response from login API:', response); // Log the response

            if (response && response.token) { // Ensure response and token are defined
                const decodedToken = jwtDecode(response.token);
                const roleName = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                console.log('Role Name:', roleName); // Log the role name


                messageApi.open({
                    type: 'loading',
                    content: 'Logging in...',
                    duration: 2,
                }).then(() => message.success(`${t("loginSuccess")}`, 2)).then(() => {
                    if (roleName === 'Admin' || roleName === 'Manager') {
                        navigate('/Dashboard');
                        window.location.reload();
                    } else if (roleName === 'Staff') {
                        navigate('/DonHang');
                        window.location.reload();
                    }
                    else if (roleName === 'Delivery') {
                        navigate('/Shipper');
                        window.location.reload();
                    }
                    else {
                        navigate('/');
                        window.location.reload();
                    }

                });

            } else {
                console.error('Token is not available in the response');
                messageApi.open({
                    type: 'error',
                    content: `${t('wrong')}`,// dạng biến
                });
            }
        } catch (error) {
            console.error('Login failed', error);
            messageApi.open({
                type: 'error',
                content: `${t("loginFail")}` + error.message,
            });
        }
    };


    // useEffect(() => {
    //     function start() {
    //         gapi.clientId.init({
    //             clientId: cl
    //         })
    //     }
    // })

    return (
        <div>
            {contextHolder}
            <div className="signin-signup-container">
                <div className="signin-signup-forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleSignInSubmit} className="sign-in-form">
                            <h2 className="sign-in-form-title">{t("logIn")}</h2>
                            <div className="input-field">
                                <i className="pe-7s-users"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder= {t("username")}
                                    value={signInForm.username}
                                    onChange={handleSignInChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="pe-7s-door-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder= {t("password")}
                                    value={signInForm.password}
                                    onChange={handleSignInChange}
                                />
                            </div>
                            <input type="submit" value="ĐĂNG NHẬP" className="btn-login solid" />
                            {/* <p className="social-text">Hoặc đăng nhập bằng Google</p>
                            <div className="social-media">
                                
                            </div> */}
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>{t("notHaveAccount")}</h3>
                            <p>{t("signuptoShopping")}</p>
                            <Link to="/Dangki"><button className="btn transparent" id="sign-up-btn">{t("uppersignUp")}</button></Link>
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
