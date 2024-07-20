import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../../api/TokenAPI';
import { handleAddProductToOrder, handleCreateOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { formatCurrency } from '../../../utils/NumberFormat';
import Mota_danhgia_kc from '../../../components/Mota_danhgia_kc';
import Sanphamtuongtu_kc from '../../../components/Sanphamtuongtu_kc';
import { notification } from 'antd';
import '../../../slick-min';
import '../../../nice-select';
import '../../../image-zoom';

export default function Chi_tiet_san_pham_kc() {

  const largeSliderRef = useRef(null);
  const navSliderRef = useRef(null);
  const productObj = JSON.parse(localStorage.getItem('product'));
  const [showMessage, setShowMessage] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  const successAddMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // overlay of GIA image
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleImageClick = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
      duration: 1,
    });
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      const userId = decodeToken(token).sid;
      const orders = await handleGetOrderByUserId(parseInt(userId, 10));
      if (orders != null) {
        for (const item of orders) {
          if (item.status === 'Ordering') {
            handleAddProductToOrder(item.orderId, productObj.productId, quantity);
            openNotificationWithIcon('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng.');
            break;
          } else if (item.status === 'Completed' || item.status === 'Shipping') {
            const orderId = await handleCreateOrder(userId);
            handleAddProductToOrder(orderId, productObj.productId, quantity);
            openNotificationWithIcon('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng.');
            break;
          }
        }
      } else {
        const orderId = await handleCreateOrder(userId);
        const order = await handleGetOrderByUserId(parseInt(userId, 10));
        for (const item of order) {
          if (item.status === 'Ordering' && item.orderId === orderId) {
            handleAddProductToOrder(orderId, productObj.productId, quantity);
            openNotificationWithIcon('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng.');
            break;
          }
        }
      }
    }
  };

  useEffect(() => {
    const initSlickSliders = () => {
      $('.product-large-slider').slick({
        fade: true,
        arrows: false,
        speed: 1000,
        asNavFor: '.pro-nav'
      });

      $('.pro-nav').slick({
        slidesToShow: 3,
        asNavFor: '.product-large-slider',
        centerMode: true,
        speed: 1000,
        centerPadding: 0,
        focusOnSelect: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-chevron-right"></i></button>',
        responsive: [{
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
          }
        }]
      });
    };

    const timer = setTimeout(() => {
      initSlickSliders();
    }, 100); // Adjust the delay as needed

    $('select').niceSelect();
    $('.img-zoom').zoom();

    return () => {
      clearTimeout(timer);
      $('select').niceSelect('destroy');
      $('.img-zoom').trigger('zoom.destroy');
    };
  }, []);

  return (
    <div>
      {contextHolder}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                    <li className="breadcrumb-item"><Link to="/Kimcuong">Kim cương</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-main-wrapper section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 order-1 order-lg-2">
              <div className="product-details-inner">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="product-large-slider">
                      <div className="pro-large-img img-zoom">
                        <img src={productObj.image1} alt="product-details" />
                      </div>
                      <div className="pro-large-img img-zoom">
                        <img src={productObj.image2} alt="product-details" />
                      </div>
                      <div className="pro-large-img img-zoom">
                        <img src={productObj.image3} alt="product-details" />
                      </div>
                    </div>
                    <div className="pro-nav slick-row-10 slick-arrow-style">
                      <div className="pro-nav-thumb">
                        <img src={productObj.image1} alt="product-details" />
                      </div>
                      <div className="pro-nav-thumb">
                        <img src={productObj.image2} alt="product-details" />
                      </div>
                      <div className="pro-nav-thumb">
                        <img src={productObj.image3} alt="product-details" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="product-details-des">
                      <h3 className="product-name">{productObj.productName}</h3>
                      <div className="ratings d-flex align-items-center">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <div className="pro-review">
                          <span>{reviewCount} Review{reviewCount !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="average-rating">
                          <span>({averageRating} / 5)</span>
                        </div>
                      </div>
                      <div className="price-box">
                        <span className="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
                      </div>
                      <p className='diamond-filter-line'>-----------------------------------------------------------------------------</p>
                      <ul className="diamond-filter-container">
                        <li className="filter-group">
                          <h6 className='filter-name-kc'>Màu sắc (Color):</h6>
                          <select className='nice-select'>
                            <option value="G">{productObj.Color}</option>
                          </select>
                        </li>
                        <li className="filter-group">
                          <h6 className='filter-name-kc'>Độ Tinh Khiết (Clarity):</h6>
                          <select className='nice-select' >
                            <option value="VS2">{productObj.Clarity}</option>
                          </select>
                        </li>
                        <li className="filter-group">
                          <h6 className='filter-name-kc'>Giác Cắt (Cut):</h6>
                          <select className='nice-select'>
                            <option value="EX">{productObj.Cut}</option>
                          </select>
                        </li>
                        <li className="filter-group">
                          <h6 className='filter-name-kc'>Giấy kiểm định</h6>
                          <div className='filter-img' onClick={handleImageClick}>
                            <img src="https://file.hstatic.net/1000381168/file/gia-logo_5deb96f1f2b541568f93dc916976d435.svg" alt="GIA" />
                          </div>
                          {isOverlayVisible && (
                            <div className="overlay">
                              <div className="overlay-content">
                                <div className='overlay-close-button'>
                                  <button onClick={closeOverlay}>X</button>
                                </div>
                                <h1 className='overlay-title'>TRA CỨU GIẤY KIỂM ĐỊNH KIM CƯƠNG GIA</h1>
                                <p className="overlay-description">
                                  Kim cương được bán ra bởi Thế Giới Kim Cương luôn có đầy đủ giấy kiểm định quốc tế.
                                  Quý Khách có thể tra cứu xác thực giấy kiểm định trên website của GIA <br />
                                  theo đường link bên dưới.
                                </p>
                                <a href="https://www.gia.edu/report-check-landing" className="overlay-link" target="_blank">Quý Khách nhấn vào đây để tra cứu giấy kiểm định GIA</a>
                                <div className='overlay-GIA-image'>
                                  <img src="assets/img/product/Kim-cuong/GIA/giay-kiem-dinh_b7f8dc6b92bd4c11bb2ac134bdd51398.webp" alt="GIA" />
                                </div>
                              </div>
                            </div>
                          )}
                        </li>
                        <li className="filter-group">
                          <div className="quantity-cart-box d-flex align-items-center">
                            <h6 className='filter-name-jewelry'>Số lượng:</h6>
                            <div className="quantity">
                              <div className="pro-qty">
                                <span className=" qtybtn" onClick={handleDecrement}>-</span>
                                <input
                                  name='txtQuantity'
                                  type="text"
                                  value={quantity}
                                  readOnly
                                />
                                <span className=" qtybtn" onClick={handleIncrement}>+</span>
                              </div>
                            </div>
                          </div>
                          <span>
                            <h6 className='soluongsanphamtrongkho'>
                              Kho: <span style={{ color: 'red' }}>{productObj.Quantity}</span>
                            </h6>
                          </span>
                        </li>
                      </ul>
                      <div className="quantity-cart-box d-flex align-items-center">
                        <div className="button-them-vao-gio-hang">
                          <div className="action_link">
                            <a className="btn btn-cart2" onClick={handleAddToCart}>Thêm vào giỏ hàng</a>
                          </div>
                        </div>
                        {showMessage && (
                          <div className="message-add-to-cart-success">
                            <span style={{ color: 'red' }}>Thêm vào giỏ hàng thành công</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Mota_danhgia_kc productId={productObj.productId} onReviewCountChange={(count, avgRating) => {
                setReviewCount(count);
                setAverageRating(avgRating);
              }} />
            </div>
          </div>
        </div>
      </div>
      <Sanphamtuongtu_kc />
      <div className="scroll-top not-visible">
        <i className="fa fa-angle-up"></i>
      </div>
    </div>
  )
}
