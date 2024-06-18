import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignUpUser } from '../api/SignUpAPI';
import { handleLoginUser } from '../api/LoginAPI';
import { Link } from 'react-router-dom';

export default function Dang_ki() {
    // const [signUpForm, setSignUpForm] = useState({ username: '', email: '', password: '' });
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const sign_up_btn = document.querySelector("#sign-up-btn");
    //     const container = document.querySelector(".signin-signup-container");

    //     const handleSignUpClick = () => {
    //         container.classList.add("sign-up-mode");
    //     };


    //     sign_up_btn.addEventListener('click', handleSignUpClick);


    //     return () => {
    //         sign_up_btn.removeEventListener('click', handleSignUpClick);
    //     };
    // }, []);


    // const handleSignUpChange = (e) => {
    //     const { name, value } = e.target;
    //     setSignUpForm({ ...signUpForm, [name]: value });
    // };

    // const handleSignUpSubmit = (e) => {
    //     e.preventDefault();

    //     let user = {
    //         username: signUpForm.username,
    //         email: signUpForm.email,
    //         password: signUpForm.password
    //     }

    //     handleSignUpUser(user);
    //     // Handle sign-up logic
    //     console.log('Sign-Up:', signUpForm);
    // };
    const [signUpForm, setSignUpForm] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

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
        setSignUpForm({ ...signUpForm, [name]: value });
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        let user = {
            username: signUpForm.username,
            email: signUpForm.email,
            password: signUpForm.password
        };

        handleSignUpUser(user).then(result => {
            if (result) {
                // Redirect to login page after successful sign-up
                navigate('/Dangnhap');
            } else {
                // Handle sign-up failure (e.g., show an error message)
                console.error('Sign-up failed');
            }
        });

        console.log('Sign-Up:', signUpForm);
    };
    return (
        <div>
            <div className="signin-signup-container">
                <div className="signin-signup-forms-container">
                    <div className="signin-signup">
            

                        <form onSubmit={handleSignUpSubmit} className="sign-in-form" >
                        
                            <h2 className="sign-up-form-title">Đăng kí</h2>
                            <div className="input-field">
                                <i className="pe-7s-users"></i>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Tên đăng nhập"
                                    value={signUpForm.username}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <div className="input-field">
                                <i className="pe-7s-mail"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={signUpForm.email}
                                    onChange={handleSignUpChange}
                                />
                            </div>  
                            <div className="input-field">
                                <i className="pe-7s-door-lock"></i>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    value={signUpForm.password}
                                    onChange={handleSignUpChange}
                                />
                            </div>
                            <input type="submit" value="ĐĂNG KÍ" className="btn-signup solid" />
                            
                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Đã có tài khoản ?</h3>
                            <p>Đăng nhập để tiếp tục mua hàng</p>
                            <Link to="/Dangnhap"><button className="btn transparent" id="sign-in-btn">Đăng nhập</button></Link>
                            
                        </div>

                    </div>
                    <div>
                        <div >
                            <h3></h3>
                            <p></p>
                            <button className="btn" id="sign-up-btn"></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
