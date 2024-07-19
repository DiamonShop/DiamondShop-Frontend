import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout as apilogout } from '../api/LogoutAPI';
import { handleGetOrderByUserId } from '../api/OrderAPI';
import { decodeToken } from '../api/TokenAPI';

export default function Header({ tokenIsValid }) {
  const isLoggedIn = tokenIsValid;
  const [searchValue, setSearchValue] = useState();
  const [orderCount, setOrderCount] = useState(0);
  const [orderDetail, setOrderDetails] = useState([]);
  const [isMinicartVisible, setMinicartVisible] = React.useState(false);

  const openMinicart = () => {
    setMinicartVisible(true);
    document.body.classList.add('fix');
  };

  const handleLogout = () => {
    apilogout();
    localStorage.removeItem('token');
    window.location.reload();
  };

  const countOrder = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = decodeToken(token).sid;
      const orders = await handleGetOrderByUserId(userId);
      if (orders == null) {
        return 0;
      } else {
        for (const item of orders) {
          setOrderDetails(item.orderDetails);
        }
        return orderDetail.length;
      }
    } else {
      return 0;
    }
  }

  useEffect(() => {
    const fetchOrderCount = async () => {
      const count = await countOrder();
      setOrderCount(count);
    };
    fetchOrderCount();
  }, [orderDetail]);

  return (
    <>
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
                            <a href="">
                              Trang sức <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <Link to="/Nhẫn">Nhẫn</Link>
                              </li>
                              <li>
                                <Link to="/Dây chuyền">Dây chuyền</Link>
                              </li>
                              <li>
                                <Link to="/Mặt dây chuyền">Mặt dây chuyền </Link>
                              </li>
                              <li>
                                <a href="/Vòng tay">Vòng tay</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">Kim cương  <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <Link to="/Kimcuong3.6">Kim cương 3.6 ly</Link>
                              </li>
                              <li>
                                <Link to="/Kimcuong4.1">Kim cương 4.1 ly</Link>
                              </li>
                              <li>
                                <Link to="/Kimcuong4.5">Kim cương 4.5 ly</Link>
                              </li>
                              <li>
                                <Link to="/Kimcuong5.4">Kim cương 5.4 ly</Link>
                              </li>
                            </ul>
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
                      <form className="header-search-box d-lg-none d-xl-block" action='/Ketquatimkiem'>
                        <input
                          type="text"
                          name='txtSearchValue'
                          placeholder="Tìm kiếm sản phẩm"
                          value={searchValue}
                          className="header-search-field bg-white"
                        />
                        <button className="header-search-btn" type='submit'>
                          <i className="pe-7s-search"></i>
                        </button>
                      </form>
                    </div>
                    {isLoggedIn ? (
                      <div className="header-configure-area">
                        <ul className="nav justify-content-end">
                          <li className="user-hover">
                            <a href="#">
                              <i className="pe-7s-user"></i>
                            </a>
                            <ul className="dropdown-list">
                              <li><Link to="/Thongtintk">Thông tin tài khoản</Link></li>
                              <li><a href="#" onClick={handleLogout}>Đăng xuất</a></li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/Giohang" className="minicart-btn" onClick={openMinicart}>
                              <i className="pe-7s-shopbag"></i>
                              <div className="notification">{orderCount}</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <div className="header-configure-area">
                        <ul className="nav justify-content-end">
                          <li className="user-hover">
                            <a href="#">
                              <i className="pe-7s-user"></i>
                            </a>
                            <ul className="dropdown-list">
                              <li><Link to="/Dangnhap">Đăng Nhập</Link></li>
                              <li><Link to="/Dangki">Đăng Kí</Link></li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/Giohang" className="minicart-btn" onClick={openMinicart}>
                              <i className="pe-7s-shopbag"></i>
                              <div className="notification">0</div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
