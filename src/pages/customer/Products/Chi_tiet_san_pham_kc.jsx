
import React, { useRef } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { decodeToken } from '../../../api/TokenAPI';
import { handleAddProductToOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { formatCurrency } from '../../../utils/NumberFormat';
import Mota_danhgia_kc from '../../../components/Mota_danhgia_kc';
import Sanphamtuongtu_kc from '../../../components/Sanphamtuongtu_kc';

export default function Chi_tiet_san_pham_kc() {
  const largeSliderRef = useRef(null);
  const navSliderRef = useRef(null);
  const productObj = JSON.parse(localStorage.getItem('product'));
  const [showMessage, setShowMessage] = useState(false);

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
  const largeSliderSettings = {
    fade: true,
    arrows: false,
    speed: 1000,
    asNavFor: navSliderRef.current,
    ref: largeSliderRef
  };

  const navSliderSettings = {
    slidesToShow: 3,
    asNavFor: largeSliderRef.current,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    draggable: false,
    //prevArrow: <button type="button" className="slick-prev"><i className="lnr lnr-chevron-left"></i></button>,
    //nextArrow: <button type="button" className="slick-next"><i className="lnr lnr-chevron-right"></i></button>,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    }],
    ref: navSliderRef
  };
 
  // overlay of GIA image
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleImageClick = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  const handleAddToCart = async () => {
    // const token = localStorage.getItem('token')
    // if (token) {
    //   const userId = decodeToken(token).sid;
    //   //Gọi API để tạo order
    //   const orders = await handleGetOrderByUserId(parseInt(userId, 10));
    //   //Nếu Order bằng null thì tạo Order mới
    //   if (orders != null) {
    //     for (const item of orders) {
    //       if (item.status == 'Ordering') {
    //         handleAddProductToOrder(item.orderId, productObj.productId, quantity);
    //         successAddMessage();
    //         break;
    //       } else if (item.status == 'Completed' || item.status == 'Shipped') {
    //         const orderId = await handleCreateOrder(userId);
    //         handleAddProductToOrder(orderId, productObj.productId, quantity);
    //         successAddMessage();
    //         break;
    //       }
    //     }
    //   } else {
    //     const orderId = await handleCreateOrder(userId);
    //     const order = await handleGetOrderByUserId(parseInt(userId, 10));
    //     for (const item of order) {
    //       if (item.status === 'Ordering' && item.orderId === orderId) {
    //         handleAddProductToOrder(orderId, productObj.productId, quantity);
    //         successAddMessage();
    //         break;
    //       }
    //     }
    //   }
    // }
  }

  return (
    <div>
      <div class="breadcrumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/"><i class="fa fa-home"></i></Link></li>
                    <li class="breadcrumb-item"><Link to="/Kimcuong">Kim cương</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shop-main-wrapper section-padding pb-0">
        <div class="container">
          <div class="row">

            <div class="col-lg-12 order-1 order-lg-2">

              <div class="product-details-inner">
                <div class="row">
                  <div class="col-lg-5">
                    <Slider {...largeSliderSettings} className="product-large-slider">
                      <div className="pro-large-img img-zoom">
                        <img src={productObj.image1} alt="product-details" />
                      </div>
                      <div className="pro-large-img img-zoom">
                        <img src={productObj.image2} alt="product-details" />
                      </div>
                      <div className="pro-large-img img-zoom">
                        <img src={productObj.image3} alt="product-details" />
                      </div>

                    </Slider>

                    <Slider {...navSliderSettings} className="pro-nav">
                      <div className="pro-nav-thumb">
                        <img src={productObj.image1} alt="product-details" />
                      </div>
                      <div className="pro-nav-thumb">
                        <img src={productObj.image2} alt="product-details" />
                      </div>
                      <div className="pro-nav-thumb">
                        <img src={productObj.image3} alt="product-details" />
                      </div>

                    </Slider>
                  </div>
                  <div class="col-lg-7">
                    <div class="product-details-des">
                      <h3 class="product-name">{productObj.productName}</h3>
                      <div class="ratings d-flex">
                        <span><i class="fa fa-star-o"></i></span>
                        <span><i class="fa fa-star-o"></i></span>
                        <span><i class="fa fa-star-o"></i></span>
                        <span><i class="fa fa-star-o"></i></span>
                        <span><i class="fa fa-star-o"></i></span>
                        <div class="pro-review">
                          <span>1 Reviews</span>
                        </div>
                      </div>
                      <div class="price-box">
                        <span class="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
                      </div>
                      <p className='diamond-filter-line'>-----------------------------------------------------------------------------</p>
                      <ul class="diamond-filter-container">
                        <li class="filter-group">
                          <h6 className='filter-name-kc'>Màu sắc (Color):</h6>
                          <select className='nice-select'>
                            <option value="G">{productObj.Color}</option>
                          </select>
                        </li>
                        <li class="filter-group">
                          <h6 className='filter-name-kc'>Độ Tinh Khiết (Clarity):</h6>
                          <select className='nice-select' >
                            <option value="VS2">{productObj.Clarity}</option>
                          </select>
                        </li>
                        <li class="filter-group">
                          <h6 className='filter-name-kc'>Giác Cắt (Cut):</h6>
                          <select className='nice-select'>
                            <option value="EX">{productObj.Cut}</option>
                          </select>
                        </li>
                        <li class="filter-group">
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
                                <p class="overlay-description">
                                  Kim cương được bán ra bởi Thế Giới Kim Cương luôn có đầy đủ giấy kiểm định quốc tế.
                                  Quý Khách có thể tra cứu xác thực giấy kiểm định trên website của GIA <br />
                                  theo đường link bên dưới.
                                </p>
                                <a href="https://www.gia.edu/report-check-landing" class="overlay-link" target="_blank">Quý Khách nhấn vào đây để tra cứu giấy kiểm định GIA</a>
                                <div className='overlay-GIA-image'>
                                  <img src="assets\img\product\Kim-cuong\GIA\giay-kiem-dinh_b7f8dc6b92bd4c11bb2ac134bdd51398.webp" alt="GIA" />
                                </div>

                              </div>
                            </div>
                          )}
                        </li>
                        <li class="filter-group">
                          <div class="quantity-cart-box d-flex align-items-center">
                            <h6 className='filter-name-jewelry'>Số lượng:</h6>
                            <div class="quantity">
                              <div class="pro-qty">
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


                      <div class="quantity-cart-box d-flex align-items-center">
                        <div class="button-them-vao-gio-hang">
                          <div class="action_link">
                            <a class="btn btn-cart2" onClick={handleAddToCart}>Thêm vào giỏ hàng</a>
                          </div>
                        </div>

                        {showMessage && (
                          <div class="message-add-to-cart-success">
                            <span style={{ color: 'red' }}>Thêm vào giỏ hàng thành công</span>
                          </div>
                        )}
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>


              <Mota_danhgia_kc />

            </div>

          </div>
        </div>
      </div>


      <Sanphamtuongtu_kc />
      <div class="scroll-top not-visible">
        <i class="fa fa-angle-up"></i>
      </div>

    </div>
  )
}

