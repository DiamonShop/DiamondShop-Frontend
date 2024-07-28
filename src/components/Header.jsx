import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout as apilogout } from '../api/LogoutAPI';
import { handleGetOrderByUserId } from '../api/OrderAPI';
import { decodeToken } from '../api/TokenAPI';
import LanguageSelector from "../pages/customer/language/LanguageSelector.tsx";
import { useTranslation } from "react-i18next";// luon luon co de dich

export default function Header({ tokenIsValid }) {
  const isLoggedIn = tokenIsValid;
  const [searchValue, setSearchValue] = useState();
  const [orderCount, setOrderCount] = useState(0);
  const [orderDetail, setOrderDetails] = useState([]);
  const [isMinicartVisible, setMinicartVisible] = React.useState(false);
  const { t } = useTranslation();//luon luon co de dich

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
                            <Link to="/">{t("homePage")}</Link>
                          </li>
                          <li>
                            <a href="">
                              {t("jewelry")} <i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <Link to="/Nhẫn">{t("ring")}</Link>
                              </li>
                              <li>
                                <Link to="/Dây chuyền">{t("necklace")}</Link>
                              </li>
                              <li>
                                <Link to="/Mặt dây chuyền">{t("pendant")}</Link>
                              </li>
                              <li>
                                <a href="/Vòng tay">{t("bracelet")}</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">{t("diamond")}<i className="fa fa-angle-down"></i>
                            </a>
                            <ul className="dropdown">
                              <li>
                                <Link to="/Kimcuong3.6">{t("diamond")} 3.6 {t("carat")}</Link>
                              </li>
                              <li>
                                <Link to="/Kimcuong4.1">{t("diamond")} 4.1 {t("carat")}</Link>
                              </li>
                              <li>
                                <Link to="/Kimcuong4.5">{t("diamond")} 4.5 {t("carat")}</Link>
                              </li>
                              <li>
                                <Link to="/Kimcuong5.4">{t("diamond")} 5.4 {t("carat")}</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/Banggiakimcuong">{t("priceList")}</a>
                          </li>
                          <li>
                            <Link to="/Vechungtoi">{t("aboutUs")}</Link>
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
                          placeholder={t("searchProduct")}
                          value={searchValue}
                          className="header-search-field bg-white"
                        />
                        <button className="header-search-btn" type='submit'>
                          <i className="pe-7s-search"></i>
                        </button>
                      </form>
                    </div>
                    {/* change language */}
                    <div className="i8-home-page">
                      <LanguageSelector />{" "}
                    </div>
                    {isLoggedIn ? (
                      <div className="header-configure-area">
                        <ul className="nav justify-content-end">
                          <li className="user-hover">
                            <a href="#">
                              <i className="pe-7s-user"></i>
                            </a>
                            <ul className="dropdown-list">
                              <li><Link to="/Thongtintk">{t("accountInfomation")}</Link></li>
                              <li><a href="#" onClick={handleLogout}>{t("logOut")}</a></li>
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
                              <li><Link to="/Dangnhap">{t("logIn")}</Link></li>
                              <li><Link to="/Dangki">{t("signUp")}</Link></li>
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
