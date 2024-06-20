
import React from 'react';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    return (
        <div>
            <div class="wrapper">
                <nav id="sidebar" class="sidebar js-sidebar">
                    <div class="sidebar-content js-simplebar">
                        <a class="sidebar-link" href='/'>
                            <span class="align-middle">
                                <img src="assets/img/logo/logo.png" alt="" />
                            </span>
                        </a>
                        <ul class="sidebar-nav">
                            <li class="sidebar-header">
                                Trang chủ
                            </li>

                            <li class="sidebar-item active">
                                <a class="sidebar-link" >
                                    <i class="align-middle"
                                        data-feather="sliders">
                                    </i>
                                    <span class="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                                </a>
                            </li>

                            <li class="sidebar-header">
                                Quản lý
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link" >
                                    <i class="align-middle"
                                        data-feather="square">
                                    </i>
                                    <span class="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
                                </a>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link">
                                    <i class="align-middle"
                                        data-feather="square">
                                    </i>
                                    <span class="align-middle"><Link to="/TaiKhoan">Tài khoản</Link></span>
                                </a>
                            </li>

                            <li class="sidebar-item">

                                <a class="sidebar-link" >
                                    <i class="align-middle"
                                        data-feather="square">
                                    </i>
                                    <span class="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                                </a>


                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link">
                                    <i class="align-middle"
                                        data-feather="check-square">
                                    </i>
                                    <span class="align-middle">Chứng nhận sản phẩm</span>
                                </a>
                            </li>


                            {/* <li class="sidebar-item">
                                    <a class="sidebar-link" href="ui-cards.html">
                                        <i class="align-middle" data-feather="grid">
                                            </i> 
                                            <span class="align-middle">Order</span>
        
                                    </a>
                                </li> */}
                            {/* 
                         <li class="sidebar-item">
                            <a class="sidebar-link" href="ui-typography.html">
                                <i class="align-middle" data-feather="align-left"></i> <span class="align-middle">Typography</span>
                            </a>
                        </li>
        
                        <li class="sidebar-item">
                            <a class="sidebar-link" href="icons-feather.html">
                                <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Icons</span>
                            </a>
                        </li>
        
                        <li class="sidebar-header">
                            Plugins & Addons
                        </li>
        
                        <li class="sidebar-item">
                            <a class="sidebar-link" href="charts-chartjs.html">
                                <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Charts</span>
                            </a>
                        </li>
        
                        <li class="sidebar-item">
                            <a class="sidebar-link" href="maps-google.html">
                                <i class="align-middle" data-feather="map"></i> <span class="align-middle">Maps</span>
                            </a>
                        </li>  */}
                        </ul>


                    </div>
                </nav>
                <div class="main">

                    <nav class="navbar navbar-expand navbar-light navbar-bg">
                        <a class="sidebar-toggle js-sidebar-toggle">
                            <i class="hamburger align-self-center"></i>
                        </a>

                        <div class="navbar-collapse collapse">
                            <ul class="navbar-nav navbar-align">
                                <li class="nav-item dropdown">
                                    <a class="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                        <div class="position-relative">
                                            <i class="align-middle pe-7s-bell" data-feather="bell"></i>
                                            <span class="indicator">4</span>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                        <div class="dropdown-menu-header">
                                            4 New Notifications
                                        </div>
                                        <div class="list-group">
                                            <a href="#" class="list-group-item">
                                                <div class="row g-0 align-items-center">
                                                    <div class="col-2">
                                                        <i class="text-danger" data-feather="alert-circle"></i>
                                                    </div>
                                                    <div class="col-10">
                                                        <div class="text-dark">Update completed</div>
                                                        <div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                        <div class="text-muted small mt-1">30m ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="list-group-item">
                                                <div class="row g-0 align-items-center">
                                                    <div class="col-2">
                                                        <i class="text-warning" data-feather="bell"></i>
                                                    </div>
                                                    <div class="col-10">
                                                        <div class="text-dark">Lorem ipsum</div>
                                                        <div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                        <div class="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="list-group-item">
                                                <div class="row g-0 align-items-center">
                                                    <div class="col-2">
                                                        <i class="text-primary" data-feather="home"></i>
                                                    </div>
                                                    <div class="col-10">
                                                        <div class="text-dark">Login from 192.186.1.8</div>
                                                        <div class="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" class="list-group-item">
                                                <div class="row g-0 align-items-center">
                                                    <div class="col-2">
                                                        <i class="text-success" data-feather="user-plus"></i>
                                                    </div>
                                                    <div class="col-10">
                                                        <div class="text-dark">New connection</div>
                                                        <div class="text-muted small mt-1">Christina accepted your request.</div>
                                                        <div class="text-muted small mt-1">14h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="dropdown-menu-footer">
                                            <a href="#" class="text-muted">Show all notifications</a>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                        <i class="align-middle" data-feather="settings"></i>
                                    </a>

                                    <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                        <img src="~/image/LeftNavBar/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span class="text-dark">Charles Hall</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a class="dropdown-item" href="pages-profile.html"><i class="align-middle me-1" data-feather="user"></i>Thông tin cá nhân</a>
                                        <a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="pie-chart"></i> Phân tích</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="index.html"><i class="align-middle me-1" data-feather="settings"></i> Cài đặt và bảo mật</a>
                                        <a class="dropdown-item" href="#"><i class="align-middle me-1" data-feather="help-circle"></i> Trung tâm trợ giúp</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href='/'>Đăng xuất</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="content">
                        <div class="container-fluid p-0">

                            <h1 class="h3 mb-3">Bảng điều khiển <strong> phân tích</strong> </h1>

                            <div class="row">
                                <div class="col-xl-6 col-xxl-5 d-flex">
                                    <div class="w-100">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col mt-0">
                                                                <h5 class="card-title">Doanh số</h5>
                                                            </div>

                                                            <div class="col-auto">
                                                                <div class="stat text-primary">
                                                                    <i class="align-middle" data-feather="truck"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 class="mt-1 mb-3">2.382</h1>
                                                        <div class="mb-0">
                                                            <span class="text-danger">-3.65%</span>
                                                            <span class="text-muted">Kể từ tuần trước</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col mt-0">
                                                                <h5 class="card-title">Người xem</h5>
                                                            </div>

                                                            <div class="col-auto">
                                                                <div class="stat text-primary">
                                                                    <i class="align-middle" data-feather="users"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 class="mt-1 mb-3">14.212</h1>
                                                        <div class="mb-0">
                                                            <span class="text-success">5.25%</span>
                                                            <span class="text-muted">Kể từ tuần trước</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col mt-0">
                                                                <h5 class="card-title">Doanh thu</h5>
                                                            </div>

                                                            <div class="col-auto">
                                                                <div class="stat text-primary">
                                                                    <i class="align-middle" data-feather="dollar-sign"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 class="mt-1 mb-3">$21.300</h1>
                                                        <div class="mb-0">
                                                            <span class="text-success">6.65%</span>
                                                            <span class="text-muted">Kể từ tuần trước</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col mt-0">
                                                                <h5 class="card-title">Đơn hàng</h5>
                                                            </div>

                                                            <div class="col-auto">
                                                                <div class="stat text-primary">
                                                                    <i class="align-middle" data-feather="shopping-cart"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 class="mt-1 mb-3">64</h1>
                                                        <div class="mb-0">
                                                            <span class="text-danger">-2.25%</span>
                                                            <span class="text-muted">Kể từ tuần trước</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-6 col-xxl-7">
                                    <div class="card flex-fill w-100">
                                        <div class="card-header">

                                            <h5 class="card-title mb-0">Biến động gần đây</h5>
                                        </div>
                                        <div class="card-body py-3">
                                            <div class="chart chart-sm">
                                                <canvas id="chartjs-dashboard-line"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 col-lg-8 col-xxl-9 d-flex">
                                    <div class="card flex-fill">
                                        <div class="card-header">

                                            <h5 class="card-title mb-0">Dự án mới nhất</h5>
                                        </div>
                                        <table class="">
                                        {/* table table-hover my-0 */}
                                            <thead>
                                                <tr>
                                                    <th>Tên</th>
                                                    <th class="d-none d-xl-table-cell">Ngày bắt đầu</th>
                                                    <th class="d-none d-xl-table-cell">Ngày kết thúc</th>
                                                    <th>Status</th>
                                                    <th class="d-none d-md-table-cell">Người được giao</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Project Apollo</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-success">Hoàn thành</span></td>
                                                    <td class="d-none d-md-table-cell">Vanessa Tucker</td>
                                                </tr>
                                                <tr>
                                                    <td>Project Fireball</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-danger">Bị hủy</span></td>
                                                    <td class="d-none d-md-table-cell">William Harris</td>
                                                </tr>
                                                <tr>
                                                    <td>Project Hades</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-success">Hoàn thành</span></td>
                                                    <td class="d-none d-md-table-cell">Sharon Lessman</td>
                                                </tr>
                                                <tr>
                                                    <td>Project Nitro</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-warning">Trong tiến trình</span></td>
                                                    <td class="d-none d-md-table-cell">Vanessa Tucker</td>
                                                </tr>
                                                <tr>
                                                    <td>Project Phoenix</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-success">Hoàn thành</span></td>
                                                    <td class="d-none d-md-table-cell">William Harris</td>
                                                </tr>
                                                <tr>
                                                    <td>Project X</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-success">Hoàn thành</span></td>
                                                    <td class="d-none d-md-table-cell">Sharon Lessman</td>
                                                </tr>
                                                <tr>
                                                    <td>Project Romeo</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-success">Hoàn thành</span></td>
                                                    <td class="d-none d-md-table-cell">Christina Mason</td>
                                                </tr>
                                                <tr>
                                                    <td>Project Wombat</td>
                                                    <td class="d-none d-xl-table-cell">01/01/2023</td>
                                                    <td class="d-none d-xl-table-cell">31/06/2023</td>
                                                    <td><span class="badge bg-warning">Trong tiến trình</span></td>
                                                    <td class="d-none d-md-table-cell">William Harris</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-4 col-xxl-3 d-flex">
                                    <div class="card flex-fill w-100">
                                        <div class="card-header">

                                            <h5 class="card-title mb-0">Doanh số hằng tháng</h5>
                                        </div>
                                        <div class="card-body d-flex w-100">
                                            <div class="align-self-center chart chart-lg">
                                                <canvas id="chartjs-dashboard-bar"></canvas>
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
