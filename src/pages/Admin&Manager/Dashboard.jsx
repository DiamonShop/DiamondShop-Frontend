// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Dashboard() {
//     return (
//         <div>
//             <div className="wrapper">
//                 <nav id="sidebar" className="sidebar js-sidebar">
//                     <div className="sidebar-content js-simplebar">
//                         <Link to="/" className="sidebar-link">
//                             <span className="align-middle">
//                                 <img src="assets/img/logo/logo.png" alt="" />
//                             </span>
//                         </Link>
//                         <ul className="sidebar-nav">
//                             <li className="sidebar-header">
//                                 Trang chủ
//                             </li>
//                             <li className="sidebar-item active">
//                                 <Link to="/BangDieuKhien" className="sidebar-link">
//                                     <i className="align-middle" data-feather="sliders"></i>
//                                     <span className="align-middle">Bảng điều khiển</span>
//                                 </Link>
//                             </li>
//                             <li className="sidebar-header">
//                                 Quản lý
//                             </li>
//                             <li className="sidebar-item">
//                                 <Link to="/SanPham" className="sidebar-link">
//                                     <i className="align-middle" data-feather="sliders"></i>
//                                     <span className="align-middle">Sản phẩm</span>
//                                 </Link>
//                             </li>
//                             <li className="sidebar-item">
//                                 <Link to="/TaiKhoan" className="sidebar-link">
//                                     <i className="align-middle" data-feather="square"></i>
//                                     <span className="align-middle">Tài khoản</span>
//                                 </Link>
//                             </li>
//                             <li className="sidebar-item">
//                                 <Link to="/DonHang" className="sidebar-link">
//                                     <i className="align-middle" data-feather="square"></i>
//                                     <span className="align-middle">Đơn hàng</span>
//                                 </Link>
//                             </li>
//                             <li className="sidebar-item">
//                                 <Link to="/" className="sidebar-link">
//                                     <i className="align-middle" data-feather="check-square"></i>
//                                     <span className="align-middle">Chứng nhận sản phẩm</span>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//                 <div className="main">
// <nav className="navbar navbar-expand navbar-light navbar-bg">
//                         <a className="sidebar-toggle js-sidebar-toggle">
//                             <i className="hamburger align-self-center"></i>
//                         </a>
//                         <div className="navbar-collapse collapse">
//                             <ul className="navbar-nav navbar-align">
//                                 <li className="nav-item dropdown">
//                                     <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
//                                         <div className="position-relative">
//                                             <i className="align-middle pe-7s-bell" data-feather="bell"></i>
//                                             <span className="indicator">4</span>
//                                         </div>
//                                     </a>
//                                     <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
//                                         <div className="dropdown-menu-header">
//                                             4 New Notifications
//                                         </div>
//                                         <div className="list-group">
//                                             {/* Notifications list items */}
//                                         </div>
//                                         <div className="dropdown-menu-footer">
//                                             <a href="#" className="text-muted">Show all notifications</a>
//                                         </div>
//                                     </div>
//                                 </li>
//                                 <li className="nav-item dropdown">
//                                     <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
//                                         <i className="align-middle" data-feather="settings"></i>
//                                     </a>
//                                     <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
//                                         <img src="~/image/LeftNavBar/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" />
//                                         <span className="text-dark">Charles Hall</span>
//                                     </a>
//                                     <div className="dropdown-menu dropdown-menu-end">
//                                         <a className="dropdown-item" href="pages-profile.html">
//                                             <i className="align-middle me-1" data-feather="user"></i>Thông tin cá nhân
//                                         </a>
//                                         <a className="dropdown-item" href="#">
// <i className="align-middle me-1" data-feather="pie-chart"></i> Phân tích
//                                         </a>
//                                         <div className="dropdown-divider"></div>
//                                         <a className="dropdown-item" href="index.html">
//                                             <i className="align-middle me-1" data-feather="settings"></i> Cài đặt và bảo mật
//                                         </a>
//                                         <a className="dropdown-item" href="#">
//                                             <i className="align-middle me-1" data-feather="help-circle"></i> Trung tâm trợ giúp
//                                         </a>
//                                         <div className="dropdown-divider"></div>
//                                         <a className="dropdown-item" href='/'>Đăng xuất</a>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React from 'react';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    return (
        <div>
            <div className="wrapper">
                <nav id="sidebar" className="sidebar js-sidebar">
                    <div className="sidebar-content js-simplebar">
                        <Link to="/" className="sidebar-link">
                            <span className="align-middle">
                                <img src="assets/img/logo/logo.png" alt="Logo" />
                            </span>
                        </Link>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">
                                Trang chủ
                            </li>
                            <li className="sidebar-item active">
                                <Link to="/BangDieuKhien" className="sidebar-link">
                                    <i className="align-middle" data-feather="sliders"></i>
                                    <span className="align-middle">Bảng điều khiển</span>
                                </Link>
                            </li>
                            <li className="sidebar-header">
                                Quản lý
                            </li>
                            <li className="sidebar-item">
                                <Link to="/SanPham" className="sidebar-link">
                                    <i className="align-middle" data-feather="sliders"></i>
                                    <span className="align-middle">Sản phẩm</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/TaiKhoan" className="sidebar-link">
                                    <i className="align-middle" data-feather="square"></i>
                                    <span className="align-middle">Tài khoản</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/DonHang" className="sidebar-link">
                                    <i className="align-middle" data-feather="square"></i>
                                    <span className="align-middle">Đơn hàng</span>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/" className="sidebar-link">
                                    <i className="align-middle" data-feather="check-square"></i>
                                    <span className="align-middle">Chứng nhận sản phẩm</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <button className="sidebar-toggle js-sidebar-toggle">
                            <i className="hamburger align-self-center"></i>
                        </button>
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
                                            {/* Notifications list items */}
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
                                        <img src="~/image/LeftNavBar/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" />
                                        <span className="text-dark">Charles Hall</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a className="dropdown-item" href="pages-profile.html">
                                            <i className="align-middle me-1" data-feather="user"></i>Thông tin cá nhân
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="align-middle me-1" data-feather="pie-chart"></i> Phân tích
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="index.html">
                                            <i className="align-middle me-1" data-feather="settings"></i> Cài đặt và bảo mật
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="align-middle me-1" data-feather="help-circle"></i> Trung tâm trợ giúp
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href='/'>Đăng xuất</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
