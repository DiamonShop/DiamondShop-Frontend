import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Dang_nhap() {
    const [signInForm, setSignInForm] = useState({ username: '', password: '' });
    const [signUpForm, setSignUpForm] = useState({ username: '', email: '', password: '' });

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".signin-signup-container");

        const handleSignUpClick = () => {
            container.classList.add("sign-up-mode");
        };

        const handleSignInClick = () => {
            container.classList.remove("sign-up-mode");
        };

        sign_up_btn.addEventListener('click', handleSignUpClick);
        sign_in_btn.addEventListener('click', handleSignInClick);

        return () => {
            sign_up_btn.removeEventListener('click', handleSignUpClick);
            sign_in_btn.removeEventListener('click', handleSignInClick);
        };
    }, []);

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInForm({ ...signInForm, [name]: value });
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm({ ...signUpForm, [name]: value });
    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        // Handle sign-in logic
        console.log('Sign-In:', signInForm);
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic
        console.log('Sign-Up:', signUpForm);
    };

    return (
        <div>
            <div className="signin-signup-container">
                <div className="signin-signup-forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleSignInSubmit} className="sign-in-form">
                            <h2 className="sign-in-form-title">Đăng nhập</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={signInForm.username}
                                    onChange={handleSignInChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={signInForm.password}
                                    onChange={handleSignInChange}
                                />
                            </div>
                            <input type="submit" value="Login" className="btn-login solid" />
                            <p className="social-text">Hoặc đăng nhập bằng Gmail</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </form>

                        <form onSubmit={handleSignUpSubmit} className="sign-up-form">
                            <h2 className="sign-up-form-title">Đăng kí</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={signUpForm.username}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={signUpForm.email}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={signUpForm.password}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <input type="submit" value="Sign Up" className="btn-signup solid" />
                            <p className="social-text">Hoặc đăng kí bằng Google</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>Hãy đăng kí để có trải nghiệm mua hàng tốt nhất</p>
                            <button className="btn transparent" id="sign-up-btn">Đăng kí</button>
                        </div>
                        <img src="./img/log.svg" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
                            <button className="btn transparent" id="sign-in-btn">Đăng nhập</button>
                        </div>
                        <img src="./img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
