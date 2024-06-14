import React from 'react'
import { Link } from 'react-router-dom';
export default function Thong_tin_tk() {
    

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
                                                            <p>Xin chào, <strong>Erik Jhonson</strong> (Không phải <strong>Jhonson
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
                                                                    <tr>
                                                                        <td>Dây chuyền nam Vàng Ý 18K</td>
                                                                        <td>12/6/2024</td>
                                                                        <td>Never</td>
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
                                                            <form action="#">
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label for="first-name" className="required">Họ</label>
                                                                            <input type="text" id="first-name" placeholder="First Name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="single-input-item">
                                                                            <label for="last-name" className="required">Tên</label>
                                                                            <input type="text" id="last-name" placeholder="Last Name" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label for="display-name" className="required">Tên hiển thị</label>
                                                                    <input type="text" id="display-name" placeholder="Display Name" />
                                                                </div>
                                                                <div className="single-input-item">
                                                                    <label for="email" className="required">Email</label>
                                                                    <input type="email" id="email" placeholder="Email Address" />
                                                                </div>
                                                                <fieldset>
                                                                    <legend>Thay đổi mật khẩu</legend>
                                                                    <div className="single-input-item">
                                                                        <label for="current-pwd" className="required">Mật khẩu
                                                                            hiện tại</label>
                                                                        <input type="password" id="current-pwd" placeholder="Current Password" />
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="single-input-item">
                                                                                <label for="new-pwd" className="required">Mật khẩu
                                                                                    mới</label>
                                                                                <input type="password" id="new-pwd" placeholder="New Password" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="single-input-item">
                                                                                <label for="confirm-pwd" className="required">Xác nhận
                                                                                    mật khẩu</label>
                                                                                <input type="password" id="confirm-pwd" placeholder="Confirm Password" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </fieldset>
                                                                <div className="single-input-item">
                                                                    <button className="btn btn-sqr">Lưu</button>
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
    )
}
