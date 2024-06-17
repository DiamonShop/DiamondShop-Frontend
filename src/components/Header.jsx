import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header({ tokenIsValid }) {
  const isLoggedIn = tokenIsValid;

  const [isMinicartVisible, setMinicartVisible] = React.useState(false);

  const openMinicart = () => {
    setMinicartVisible(true);
    document.body.classList.add('fix');
  };

  const closeMinicart = () => {
    setMinicartVisible(false);
    document.body.classList.remove('fix');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  const sendToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };
    } else {
      return {};
    }
  };
   // Hàm để gửi yêu cầu API với token trong header
   const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:7101/api/someendpoint', sendToken());
      console.log('Dữ liệu nhận được từ server:', response.data);
      // Xử lý dữ liệu nhận được (nếu cần)
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ server:', error);
      // Xử lý các trường hợp lỗi khác (nếu cần)
    }
  };

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
                                <Link to="/Nhan">Nhẫn</Link>
                              </li>
                              <li>
                                <Link to="/Daychuyen">Dây chuyền</Link>
                              </li>
                              <li>
                                <Link to="/Matdaychuyen">Mặt dây chuyền</Link>
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
                      <div className="header-configure-area">
                        <ul className="nav justify-content-end">
                          <li className="user-hover">
                            <a href="#">
                              <i className="pe-7s-user"></i>
                            </a>
                            <ul className="dropdown-list">
                              <li><Link to="/Thongtintk">Thông tin tài khoản</Link></li>
                              <li><a href="/" onClick={handleLogout}>Đăng xuất</a></li>
                            </ul>
                          </li>
                          <li>
                            <Link to="/Yeuthich">
                              <i className="pe-7s-like"></i>
                              <div className="notification">0</div>
                            </Link>
                          </li>
                          <li>
                            <Link to="/Giohang" className="minicart-btn" onClick={openMinicart}>
                              <i className="pe-7s-shopbag"></i>
                              <div className="notification">2</div>
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
                            <Link to="/Giohang" className="minicart-btn" onClick={openMinicart}>
                              <i className="pe-7s-shopbag"></i>
                              <div className="notification">2</div>
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

      {isMinicartVisible && (
        <>
          <div className="minicart-inner show">
            <div className="minicart-inner-content">
              <button className="minicart-close" onClick={closeMinicart}>
                <i className="fa fa-times"></i>
              </button>
              <div className="minicart-content-box">
                <div className="minicart-item-wrapper">
                  <ul>
                    <li>
                      <div className="minicart-item">
                        <div className="minicart-thumb">
                          <img src="assets/img/product/1.jpg" alt="product" />
                        </div>
                        <div className="minicart-content">
                          <h4 className="product-name"><Link to="/Product/1">Product Name</Link></h4>
                          <p className="cart-quantity">Quantity: <strong>1</strong></p>
                          <p className="cart-price">$100.00</p>
                        </div>
                        <div className="minicart-remove">
                          <a href="#"><i className="fa fa-times"></i></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="minicart-pricing-box">
                  <ul>
                    <li><span>Subtotal</span> <span><strong>$100.00</strong></span></li>
                    <li className="total"><span>Total</span> <span><strong>$100.00</strong></span></li>
                  </ul>
                </div>
                <div className="minicart-button">
                  <Link to="/Checkout" className="btn btn-custom-color">Checkout</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="minicart-overlay" onClick={closeMinicart}></div>
        </>
      )}
    </>
  );
}
