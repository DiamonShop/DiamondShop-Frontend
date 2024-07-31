import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignUpUser, isValidEmail } from '../api/SignUpAPI';
import { Link } from 'react-router-dom';
import { Button, message, Space } from 'antd';
import { useTranslation } from 'react-i18next';
export default function Dang_ki() {
    const [signUpForm, setSignUpForm] = useState({ username: '', email: '', password: '' });
    // const [successMessage, setSuccessMessage] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    // const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();
    useEffect(() => {
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".signin-signup-container");

        const handleSignUpClick = () => {
            container.classList.add("sign-up-mode");
        };

        sign_up_btn.addEventListener('click', handleSignUpClick);

        return () => {
            sign_up_btn.removeEventListener('click', handleSignUpClick);
        };
    }, []);

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();

        let user = {
            username: signUpForm.username,
            email: signUpForm.email,
            password: signUpForm.password
        };

        if (!isValidEmail(user.email)) {
            messageApi.open({
                type: 'error',
                content: 'Email không hợp lệ',
            });
            return;
        }

        try {
            const result = await handleSignUpUser(user);
            if (result && result.success) {
                messageApi.open({
                    type: 'success',
                    content: `${t("signupSuccess")}`,
                });
                // Redirect to login page after a short delay
                setTimeout(() => {
                    navigate('/Dangnhap');
                }, 2000); // Delay for 2 seconds before navigating
            } else {
                messageApi.open({
                    type: 'error',
                    content: `${t("signupFailed")}`,
                });
            }
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Sign-up error: ' + error.message,
            });
        }

        console.log('Sign-Up:', signUpForm);
    };

    return (
        <div>
            {contextHolder}
            <div className="signin-signup-container">
                <div className="signin-signup-forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleSignUpSubmit} className="sign-in-form">
                            <h2 className="sign-up-form-title">{t("signUp")}</h2>
                            <div className="input-field">
                                <i className="pe-7s-users"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder= {t("username")}
                                    value={signUpForm.username}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="pe-7s-mail"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder= {t("email")}
                                    value={signUpForm.email}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="pe-7s-door-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder= {t("password")}
                                    value={signUpForm.password}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <input type="submit" value={t("signUp")} className="btn-signup solid" />
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>{t("AlreadyhaveAccount")}</h3>
                            <p>{t("LogintoShopping")}</p>
                            <Link to="/Dangnhap"><button className="btn transparent" id="sign-in-btn">{t("LOGIN")}</button></Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3></h3>
                            <p></p>
                            <button className="btn" id="sign-up-btn"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
