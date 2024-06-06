import React from 'react'
import { Link } from 'react-router-dom';

export default function Dang_nhap() {
    return (
        <div>

            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/"><i class="fa fa-home"></i></Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Đăng Nhập</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="login-register-wrapper section-padding">
                <div class="container">
                    <div class="member-area-from-wrap">
                        <div class="login-reg-form-wrap">
                            <h5>Đăng Nhập</h5>
                            <form action="#" method="post">
                                <div class="single-input-item">
                                    <input type="email" placeholder="Email hoặc Tên Người dùng" required />
                                </div>
                                <div class="single-input-item">
                                    <input type="password" placeholder="Mật Khẩu" required />
                                </div>
                                <div class="single-input-item">
                                    <div class="login-reg-form-meta d-flex align-items-center justify-content-between">
                                        <div class="remember-meta">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="rememberMe" />
                                                <label class="custom-control-label" for="rememberMe">Nhớ Mật Khẩu</label>
                                            </div>
                                        </div>
                                        <a href="#" class="forget-pwd">Quên Mật Khẩu?</a>
                                    </div>
                                </div>
                                <div class="single-input-item">
                                    <button class="btn btn-sqr">Đăng Nhập</button>
                                </div>
                            </form>
                            
                            <h5 id="other-services"><span>đăng nhập với</span></h5>

                            <div class="login-with-google">
                                <button class="btn-login" onclick="loginWithGoogle()">
                                    <img src="assets/img/logo/Google.png" alt="google-logo" />
                                    <span>Login with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </div>
    )
}
