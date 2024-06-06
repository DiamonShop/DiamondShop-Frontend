import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getCate, registerDefault } from '../api/RegisterAPI';
import { apiUrl } from '../api/ConnectionAPI';

export default function Dang_ki() {

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
                                        <li class="breadcrumb-item active" aria-current="page">Đăng kí</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <div class="login-register-wrapper section-padding">
                <div class="container">
                    <div class="member-area-from-wrap"></div>
                    <div class="login-reg-form-wrap sign-up-form">
                        <h5>Đăng Kí</h5>
                        {/* Register Form */}
                        <form action="#" method="post">
=======
        </div>
        <div class="login-register-wrapper section-padding">
            <div class="container">
                <div class="member-area-from-wrap">
            <div class="login-reg-form-wrap sign-up-form">
                <h5>Đăng Kí</h5>
                {/* Register Form */}
                <form action="#" method="post">
                    <div class="single-input-item">
                        {/* Input Name */}
                        <input type="text" placeholder="Họ và tên" required />
                    </div>
                    <div class="single-input-item">
                        {/* Input Email */}
                        <input type="email" placeholder="Email" required />
                    </div>
                    
                        <div class="col-lg-6">
>>>>>>> fa889ad6780744399eb388cf23a484919fb87b32
                            <div class="single-input-item">
                                {/* Input Name */}
                                {/* <input id="username" type="text" placeholder="Họ và tên" required /> */}
                            </div>
                            <div class="single-input-item">
                                {/* Input Email */}
                                <input id="email" type="email" placeholder="Email" required />
                            </div>
<<<<<<< HEAD
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="single-input-item">
                                        {/* Input Password */}
                                        <input id="password" type="password" placeholder="Mật Khẩu" required />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="single-input-item">
                                        {/* Input Confirm Password */}
                                        <input type="password" placeholder="Xác Nhận Mật Khẩu" required />
                                    </div>
                                </div>
                            </div>
                            <div class="single-input-item">
                                <button class="btn btn-sqr">Đăng Kí</button>
                            </div>
                        </form>

                        <form method="post">
                            <input id="username" type="text" placeholder="Họ và tên" required />
                            <button class="btn btn-sqr">Đăng Kí</button>
                        </form>
                    </div>
                </div>
            </div>
=======
                        </div>
                    
                    <div class="single-input-item">
                        <button class="btn btn-sqr">Đăng Kí</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
>>>>>>> fa889ad6780744399eb388cf23a484919fb87b32
        </div>
    )
}
