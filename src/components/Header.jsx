
import React from 'react';
import { Link } from 'react-router-dom';
import useStatus from '../api/Status';

export default function Header() {
  const { isLoggedIn } = useStatus();

  return (
    <div className="header-area header-wide bg-gray">
      <div className="main-header d-none d-lg-block">
        <div className="header-main-area sticky">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className="col-lg-2">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/img/logo/logo.png" alt="brand logo" />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 position-static">
                <div className="main-menu-area">
                  <div className="main-menu">
                    <nav className="desktop-menu">
                      <ul>
                        <li className="active">
                          <Link to="/">Trang chủ</Link>
                        </li>
                        <li>
                          <a href="shop.html">
                            Trang sức <i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <Link to="/Nhan">Nhẫn</Link>
                            </li>
                            <li>
                              <Link to="/Daychuyen">Dây chuyền</Link>
                            </li>
                            <li>
                              <Link to="/Daychuyen">Mặt dây chuyền</Link>
                            </li>
                            <li>
                              <a href="/Vongtay">Vòng tay</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/Kimcuong">Kim cương</a>
                        </li>
                        <li>
                          <a href="/Banggiakimcuong">Bảng giá kim cương</a>
                        </li>
                        <li>
                          <Link to="/Vechungtoi">Về chúng tôi</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="header-right d-flex align-items-center justify-content-xl-between justify-content-lg-end">
                  <div className="header-search-container">
                    <button className="search-trigger d-xl-none d-lg-block">
                      <i className="pe-7s-search"></i>
                    </button>
                    <form className="header-search-box d-lg-none d-xl-block">
                      <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm"
                        className="header-search-field bg-white"
                      />
                      <button className="header-search-btn">
                        <i className="pe-7s-search"></i>
                      </button>
                    </form>
                  </div>
                  {isLoggedIn ? (
                    <>
                      <div className="header-configure-area">
                        <ul className="nav justify-content-end">
                          <li className="user-hover">
                            <a href="#">
                              <i className="pe-7s-user"></i>
                            </a>
                            <ul className="dropdown-list">
                              <li><Link to="/Thongtintk">Thông tin tài khoản</Link></li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/Yeuthich">
                              <i className="pe-7s-like"></i>
                              <div className="notification">0</div>
                            </Link>
                          </li>

                          <li>
                            <Link to="/Giohang" className="minicart-btn" >
                              <i className="pe-7s-shopbag"></i>
                              <div className="notification">2</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="header-configure-area">
                        <ul className="nav justify-content-end">
                          <li className="user-hover">
                            <a href="#">
                              <i className="pe-7s-user"></i>
                            </a>
                            <ul className="dropdown-list">
                              <li><Link to="/Dangnhap">Đăng nhập</Link></li>
                            </ul>
                          </li>

                          <li>
                            <Link to="/Yeuthich">
                              <i className="pe-7s-like"></i>
                              <div className="notification">0</div>
                            </Link>
                          </li>

                          <li>
                            <Link to="/Giohang" className="minicart-btn" >
                              <i className="pe-7s-shopbag"></i>
                              <div className="notification">2</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
