import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// State và hàm xử lý tài khoản
const accountDatas = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Quản trị viên', status: 'Hoạt động' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Người dùng', status: 'Ngừng hoạt động' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Người dùng', status: 'Hoạt động' }
];

// State và hàm xử lý modal chỉnh sửa tài khoản


// Hàm render danh sách tài khoản
const OrderManagement = () => {

    return (
        <div className="content">
            <div class="container mt-5">
                <h2 class="text-center mb-4">Order Management</h2>
                <div class="table-responsive table-wrapper">
                    <table class="">
                        <thead class="thead-light">
                            <tr>
                                <th>ID</th>
                                <th>Item</th>
                                <th>Date</th>
                                <th>Customer Name</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1001</td>
                                <td>Diamond Ring</td>
                                <td>2024-05-01</td>
                                <td>Nguyen Van A</td>
                                <td>$5000</td>
                                <td>Delivered</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1002</td>
                                <td>Diamond Necklace</td>
                                <td>2024-05-02</td>
                                <td>Tran Thi B</td>
                                <td>$7000</td>
                                <td>Pending</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1003</td>
                                <td>Diamond Earrings</td>
                                <td>2024-05-03</td>
                                <td>Le Van C</td>
                                <td>$3000</td>
                                <td>Cancelled</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1004</td>
                                <td>Diamond Bracelet</td>
                                <td>2024-05-04</td>
                                <td>Pham Thi D</td>
                                <td>$4000</td>
                                <td>Shipped</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1005</td>
                                <td>Diamond Pendant</td>
                                <td>2024-05-05</td>
                                <td>Nguyen Van E</td>
                                <td>$3500</td>
                                <td>Delivered</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1006</td>
                                <td>Diamond Watch</td>
                                <td>2024-05-06</td>
                                <td>Tran Thi F</td>
                                <td>$8000</td>
                                <td>Pending</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1007</td>
                                <td>Diamond Brooch</td>
                                <td>2024-05-07</td>
                                <td>Le Van G</td>
                                <td>$4500</td>
                                <td>Cancelled</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1008</td>
                                <td>Diamond Cufflinks</td>
                                <td>2024-05-08</td>
                                <td>Pham Thi H</td>
                                <td>$5000</td>
                                <td>Shipped</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1009</td>
                                <td>Diamond Anklet</td>
                                <td>2024-05-09</td>
                                <td>Nguyen Van I</td>
                                <td>$2500</td>
                                <td>Delivered</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1010</td>
                                <td>Diamond Tiara</td>
                                <td>2024-05-10</td>
                                <td>Tran Thi J</td>
                                <td>$10000</td>
                                <td>Pending</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1011</td>
                                <td>Diamond Ring</td>
                                <td>2024-05-11</td>
                                <td>Nguyen Van K</td>
                                <td>$5500</td>
                                <td>Delivered</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1012</td>
                                <td>Diamond Necklace</td>
                                <td>2024-05-12</td>
                                <td>Tran Thi L</td>
                                <td>$7200</td>
                                <td>Pending</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1013</td>
                                <td>Diamond Earrings</td>
                                <td>2024-05-13</td>
                                <td>Le Van M</td>
                                <td>$3100</td>
                                <td>Cancelled</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1014</td>
                                <td>Diamond Bracelet</td>
                                <td>2024-05-14</td>
                                <td>Pham Thi N</td>
                                <td>$4300</td>
                                <td>Shipped</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1015</td>
                                <td>Diamond Pendant</td>
                                <td>2024-05-15</td>
                                <td>Nguyen Van O</td>
                                <td>$3600</td>
                                <td>Delivered</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1016</td>
                                <td>Diamond Watch</td>
                                <td>2024-05-16</td>
                                <td>Tran Thi P</td>
                                <td>$8300</td>
                                <td>Pending</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1017</td>
                                <td>Diamond Brooch</td>
                                <td>2024-05-17</td>
                                <td>Le Van Q</td>
                                <td>$4700</td>
                                <td>Cancelled</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1018</td>
                                <td>Diamond Cufflinks</td>
                                <td>2024-05-18</td>
                                <td>Pham Thi R</td>
                                <td>$5200</td>
                                <td>Shipped</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1019</td>
                                <td>Diamond Anklet</td>
                                <td>2024-05-19</td>
                                <td>Nguyen Van S</td>
                                <td>$2600</td>
                                <td>Delivered</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1020</td>
                                <td>Diamond Tiara</td>
                                <td>2024-05-20</td>
                                <td>Tran Thi T</td>
                                <td>$10300</td>
                                <td>Pending</td>
                                <td>
                                    <button class="btn btn-primary btn-sm">Edit</button>
                                    <button class="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>


    );
};

const Don_Hang = () => {
    return (
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href='/'>
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">Trang chủ</li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-header">Quản lý</li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/TaiKhoan">Tài khoản</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                            </a>

                        </li>
                        <li className="sidebar-item">
                            <a class="sidebar-link">
                                <i class="align-middle"
                                    data-feather="check-square">
                                </i>
                                <span class="align-middle">Chứng nhận sản phẩm</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="main">
                <nav className="navbar navbar-expand navbar-light navbar-bg">
                    <a className="sidebar-toggle js-sidebar-toggle">
                        <i className="hamburger align-self-center"></i>
                    </a>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav navbar-align">
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle pe-7s-bell" data-feather="bell"></i>
                                        <span className="indicator">4</span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                    <div className="dropdown-menu-header">
                                        4 New Notifications
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-danger" data-feather="alert-circle"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Update completed</div>
                                                    <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                    <div className="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-warning" data-feather="bell"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Lorem ipsum</div>
                                                    <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-primary" data-feather="home"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Login from 192.186.1.8</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-success" data-feather="user-plus"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">New connection</div>
                                                    <div className="text-muted small mt-1">Christina accepted your request.</div>
                                                    <div className="text-muted small mt-1">14h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                    <i className="align-middle" data-feather="settings"></i>
                                </a>
                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                    <img src="~/image/LeftNavBar/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i>Thông tin cá nhân</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Phân tích</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Cài đặt và bảo mật</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Trung tâm trợ giúp</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href='/'>Đăng xuất</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <OrderManagement />
            </div>
        </div>
    );
}

export default Don_Hang;
