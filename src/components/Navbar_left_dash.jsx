import React from 'react'

export default function Navbar_left_dash() {
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
                                    <span class="align-middle">Bảng điều khiển</span>
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
                                    <span class="align-middle">Sản phẩm</span>
                                </a>
                            </li>

                            <li class="sidebar-item">
                                <a class="sidebar-link">
                                    <i class="align-middle"
                                        data-feather="square">
                                    </i>
                                    <span class="align-middle">Tài khoản</span>
                                </a>
                            </li>

                            <li class="sidebar-item">

                                <a class="sidebar-link" >
                                    <i class="align-middle"
                                        data-feather="square">
                                    </i>
                                    <span class="align-middle">Đơn hàng</span>
                                </a>
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
                                            <i class="align-middle" data-feather="bell"></i>
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
                </div>
            </div>

        </div>

    )
}
