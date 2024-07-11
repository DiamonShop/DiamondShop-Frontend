
import React, { useRef } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { decodeToken } from '../../../api/TokenAPI';
import { handleAddProductToOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { formatCurrency } from '../../../utils/NumberFormat';

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

  const largeSliderSettings = {
    fade: true,
    arrows: false,
    speed: 1000,
    asNavFor: navSliderRef.current,
    ref: largeSliderRef
  };

  const navSliderSettings = {
    slidesToShow: 4,
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
  const relatedSliderSettings = {
    speed: 1000,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToRoll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
    nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,

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
                      <div className="pro-large-img img-zoom">
                        <img src={productObj.image4} alt="product-details" />
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
                      <div className="pro-nav-thumb">
                        <img src={productObj.image4} alt="product-details" />
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
                        <span class="price-regular">{formatCurrency(productObj.newPrice)}đ</span>
                        <span class="price-old"><del>{formatCurrency(productObj.oldPrice)}đ</del></span>
                      </div>
                      <p className='diamond-filter-line'>------------------------------------------------------------------------------------</p>
                      <ul class="diamond-filter-container">
                        <li class="filter-group">
                          <p className='filter-name'>Màu sắc (Color)</p>
                          <select id='color-select'>
                            <option value="G">G</option>
                          </select>
                        </li>
                        <li class="filter-group">
                          <p className='filter-name'>Độ Tinh Khiết (Clarity)</p>
                          <select id='clarity-select'>
                            <option value="VS2">VS2</option>
                          </select>
                        </li>
                        <li class="filter-group">
                          <p className='filter-name'>Giác Cắt (Cut)</p>
                          <select id='cut-select'>
                            <option value="EX">EX</option>
                          </select>
                        </li>
                        <li class="filter-group">
                          <p className='filter-name'>Giấy kiểm định</p>
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
                      {/* <div class="pro-size">
                                                <h6 class="option-title">size :</h6>
                                                <select class="nice-select">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                            </div> */}
                      {/* <div class="color-option">
                                                <h6 class="option-title">color :</h6>
                                                <ul class="color-categories">
                                                    <li>
                                                        <a class="c-lightblue" href="#" title="LightSteelblue"></a>
                                                    </li>
                                                    <li>
                                                        <a class="c-darktan" href="#" title="Darktan"></a>
                                                    </li>
                                                    <li>
                                                        <a class="c-grey" href="#" title="Grey"></a>
                                                    </li>
                                                    <li>
                                                        <a class="c-brown" href="#" title="Brown"></a>
                                                    </li>
                                                </ul>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </div>


              <div class="product-details-reviews section-padding pb-0">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="product-review-info">
                      <ul class="nav review-tab">
                        <li>
                          <a class="active" data-bs-toggle="tab" href="#tab_one">Mô tả sản phẩm</a>
                        </li>
                        {/* <li>
                                                    <a data-bs-toggle="tab" href="#tab_two">Thông số</a>
                                                </li> */}
                        <li>
                          <a data-bs-toggle="tab" href="#tab_three">Phản hồi</a>
                        </li>
                        {/* <li>
                                                    <a data-bs-toggle="tab" href="#tab_four">Chính sách bảo hành</a>
                                                </li> */}
                      </ul>
                      <div class="tab-content reviews-tab">
                        <div class="tab-pane fade show active" id="tab_one">
                          <div class="tab-one">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                              fringilla augue nec est tristique auctor. Ipsum metus feugiat
                              sem, quis fermentum turpis eros eget velit. Donec ac tempus
                              ante. Fusce ultricies massa massa. Fusce aliquam, purus eget
                              sagittis vulputate, sapien libero hendrerit est, sed commodo
                              augue nisi non neque.Cras neque metus, consequat et blandit et,
                              luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
                              ligula euismod eget. Pellentesque habitant morbi tristique
                              senectus et netus et malesuada fames ac turpis egestas. Nam
                              erat mi, rutrum at sollicitudin rhoncus</p>
                          </div>
                        </div>
                        <div class="tab-pane fade" id="tab_two">
                          <table class="table table-bordered">
                            <tbody>
                              <tr>
                                <td>color</td>
                                <td>black, blue, red</td>
                              </tr>
                              <tr>
                                <td>size</td>
                                <td>L, M, S</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="tab-pane fade" id="tab_three">
                          <form action="#" class="review-form">
                            <h5>1 review for <span>Chaz Kangeroo</span></h5>
                            <div class="total-reviews">
                              <div class="rev-avatar">
                                <img src="assets/img/about/avatar.jpg" alt="" />
                              </div>
                              <div class="review-box">
                                <div class="ratings">
                                  <span class="good"><i class="fa fa-star"></i></span>
                                  <span class="good"><i class="fa fa-star"></i></span>
                                  <span class="good"><i class="fa fa-star"></i></span>
                                  <span class="good"><i class="fa fa-star"></i></span>
                                  <span><i class="fa fa-star"></i></span>
                                </div>
                                <div class="post-author">
                                  <p><span>admin -</span> 30 Mar, 2019</p>
                                </div>
                                <p>Aliquam fringilla euismod risus ac bibendum. Sed sit
                                  amet sem varius ante feugiat lacinia. Nunc ipsum nulla,
                                  vulputate ut venenatis vitae, malesuada ut mi. Quisque
                                  iaculis, dui congue placerat pretium, augue erat
                                  accumsan lacus</p>
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="col">
                                <label class="col-form-label"><span class="text-danger">*</span>
                                  Your Name</label>
                                <input type="text" class="form-control" required />
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="col">
                                <label class="col-form-label"><span class="text-danger">*</span>
                                  Your Email</label>
                                <input type="email" class="form-control" required />
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="col">
                                <label class="col-form-label"><span class="text-danger">*</span>
                                  Your Review</label>
                                <textarea class="form-control" required></textarea>
                                <div class="help-block pt-10"><span
                                  class="text-danger">Note:</span>
                                  HTML is not translated!
                                </div>
                              </div>
                            </div>
                            <div class="form-group row">
                              <div class="col">
                                <label class="col-form-label"><span class="text-danger">*</span>
                                  Rating</label>
                                &nbsp;&nbsp;&nbsp; Bad&nbsp;
                                <input type="radio" value="1" name="rating" />
                                &nbsp;
                                <input type="radio" value="2" name="rating" />
                                &nbsp;
                                <input type="radio" value="3" name="rating" />
                                &nbsp;
                                <input type="radio" value="4" name="rating" />
                                &nbsp;
                                <input type="radio" value="5" name="rating" checked />
                                &nbsp;Good
                              </div>
                            </div>
                            <div class="buttons">
                              <button class="btn btn-sqr" type="submit">Continue</button>
                            </div>
                          </form>
                        </div>
                        <div class="tab-pane fade" id="tab_four">
                          <form action="#" class="review-form">
                            <h2>Thêm vào sau ...</h2>
                          </form>
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

      <section class="related-products section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12">

              <div class="section-title text-center">
                <h2 class="title">Sản phẩm tương tự</h2>
                {/* <p class="sub-title">Add related products to weekly lineup</p> */}
              </div>

            </div>
          </div>
          <div class="row">
            <div class="col-12">

              <Slider {...relatedSliderSettings} class="product-carousel-4 slick-row-10 slick-arrow-style">
                <div class="product-item">
                  <figure class="product-thumb">
                    <a href="product-details.html">
                      <img class="pri-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-01.png" alt="product" />
                      <img class="sec-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-02.png" alt="product" />
                    </a>
                    <div class="button-group">
                      <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="pe-7s-like"></i></a>
                      <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i class="pe-7s-refresh-2"></i></a>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i class="pe-7s-search"></i></span></a>
                    </div>
                  </figure>
                  <div class="product-caption text-center">
                    <h6 class="product-name">
                      <a href="product-details.html">Kim Cương Viên GIA 3.6ly G VS1 EX</a>
                    </h6>
                    <div class="price-box">
                      <span class="price-regular">10,736,000₫</span>
                      <span class="price-old"><del>11,421,000₫</del></span>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <figure class="product-thumb">
                    <a href="product-details.html">
                      <img class="pri-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-01.png" alt="product" />
                      <img class="sec-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-02.png" alt="product" />
                    </a>
                    <div class="button-group">
                      <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="pe-7s-like"></i></a>
                      <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i class="pe-7s-refresh-2"></i></a>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i class="pe-7s-search"></i></span></a>
                    </div>
                    <div class="cart-hover">
                      <button class="btn btn-cart">add to cart</button>
                    </div>
                  </figure>
                  <div class="product-caption text-center">
                    <h6 class="product-name">
                      <a href="product-details.html">Kim Cương Viên GIA 3.6ly F VS2 EX</a>
                    </h6>
                    <div class="price-box">
                      <span class="price-regular">11,178,000₫</span>
                      <span class="price-old"><del>11,891,000₫</del></span>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <figure class="product-thumb">
                    <a href="product-details.html">
                      <img class="pri-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-01.png" alt="product" />
                      <img class="sec-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-02.png" alt="product" />
                    </a>
                    <div class="button-group">
                      <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="pe-7s-like"></i></a>
                      <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i class="pe-7s-refresh-2"></i></a>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i class="pe-7s-search"></i></span></a>
                    </div>
                    <div class="cart-hover">
                      <button class="btn btn-cart">add to cart</button>
                    </div>
                  </figure>
                  <div class="product-caption text-center">
                    <h6 class="product-name">
                      <a href="product-details.html">Kim Cương Viên GIA 3.6ly F VS1 EX</a>
                    </h6>
                    <div class="price-box">
                      <span class="price-regular">11,531,000₫</span>
                      <span class="price-old"><del>12,267,000₫</del></span>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <figure class="product-thumb">
                    <a href="product-details.html">
                      <img class="pri-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-01.png" alt="product" />
                      <img class="sec-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-02.png" alt="product" />
                    </a>
                    <div class="button-group">
                      <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="pe-7s-like"></i></a>
                      <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i class="pe-7s-refresh-2"></i></a>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i class="pe-7s-search"></i></span></a>
                    </div>
                    <div class="cart-hover">
                      <button class="btn btn-cart">add to cart</button>
                    </div>
                  </figure>
                  <div class="product-caption text-center">
                    <h6 class="product-name">
                      <a href="product-details.html">Kim Cương Viên GIA 3.6ly E VS2 EX</a>
                    </h6>
                    <div class="price-box">
                      <span class="price-regular">11,531,000₫</span>
                    </div>
                  </div>
                </div>

                <div class="product-item">
                  <figure class="product-thumb">
                    <a href="product-details.html">
                      <img class="pri-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-01.png" alt="product" />
                      <img class="sec-img" src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-02.png" alt="product" />
                    </a>
                    <div class="button-group">
                      <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="pe-7s-like"></i></a>
                      <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i class="pe-7s-refresh-2"></i></a>
                      <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i class="pe-7s-search"></i></span></a>
                    </div>
                    <div class="cart-hover">
                      <button class="btn btn-cart">add to cart</button>
                    </div>
                  </figure>
                  <div class="product-caption text-center">
                    <h6 class="product-name">
                      <a href="product-details.html">Kim Cương Viên GIA 3.6ly E VS1 EX</a>
                    </h6>
                    <div class="price-box">
                      <span class="price-regular">11,884,000₫</span>
                      <span class="price-old"><del>12,643,000₫</del></span>
                    </div>
                  </div>
                </div>
              </Slider>

            </div>
          </div>
        </div>
      </section>

      <div class="scroll-top not-visible">
        <i class="fa fa-angle-up"></i>
      </div>

    </div>
  )
}

