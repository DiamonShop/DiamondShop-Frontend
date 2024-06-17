import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
function Sanphamnoibat() {
    const SecondSliderSettings = {
        speed: 1000,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,
        arrows: true,
        row: 1,
        coloum: 4,

    };
  return (
    <div>
      <section className="product-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="section-title text-center">
                                <h2 className="title">Trang sức nổi bật</h2>
                                <p className="sub-title">Trang sức bán chạy trong tháng</p>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="product-container">

                                <div className="product-tab-menu">
                                    <ul className="nav justify-content-center">
                                        <li>
                                            <a href="#tab1"
                                                className="active"
                                                data-bs-toggle="tab"> Nhẫn
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#tab2"
                                                data-bs-toggle="tab"> Dây chuyền
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab3"
                                                data-bs-toggle="tab"> Mặt dây chuyền
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#tab4"
                                                data-bs-toggle="tab"> Vòng tay
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <section className="slider-area">
                                    <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
                                        <div className="tab-content">

                                            <div className="tab-pane fade show active"
                                                id="tab1">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    <Slider {...SecondSliderSettings}>
                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Nhan/dd00h000361-nhan-kim-cuong-vang-18k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Nhan/dd00h000361-nhan-kim-cuong-vang-18k-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>10%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Nhẫn Kim cương vàng 18K</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">10.500.000đ</span>
                                                                    <span className="price-old"><del>10.815.000đ </del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Nhan/dd00W003598-Nhan-Kim-Cuong-Vang-Trang-14K-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Nhan/dd00w003598-nhan-kim-cuong-vang-trang-14k-disney-mickey-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Giảm giá</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                            
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Nhẫn Kim cương Bạc 14K</Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">7.266.000đ</span>
                                                                    <span className="price-old"><del>7.966.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Nhan/ddddc001259-nhan-kim-cuong-vang-14k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Nhan/ddddc001259-nhan-kim-cuong-vang-14k-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Nhẫn Kim cương Vàng 14K</Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">56.419.000đ</span>
                                                                    <span className="price-old"><del></del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Nhan/dd00c000923-nhan-cuoi-kim-cuong-vang-18k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Nhan/dd00c000923-nhan-cuoi-kim-cuong-vang-18k-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Giảm giá</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>15%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                              
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Nhẫn cưới Kim cương Vàng 18K</Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">9.508.500đ</span>
                                                                    <span className="price-old"><del>10.565.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Nhan/ddddw001827-nhan-kim-cuong-vang-trang-14k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Nhan/ddddw001827-nhan-kim-cuong-vang-trang-14k-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>20%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Nhẫn Kim cương Vàng trắng 14K</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">102.097.000đ</span>
                                                                    <span className="price-old"><del>103.997.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="tab3">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    <Slider {...SecondSliderSettings}>
                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets\img\product\Mat-day-chuyen\ddddw060396-mat-day-chuyen-kim-cuong-vang-trang-kim-cuong-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets\img\product\Mat-day-chuyen\ddddw060396-mat-day-chuyen-kim-cuong-vang-trang-kim-cuong-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                  
                                                                    <div className="product-label discount">
                                                                        <span>10%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <a href="/Chitietsanpham"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </a>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                             
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Mặt dây chuyền Kim cương Vàng trắng 14K</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">13.580.000đ</span>
                                                                    <span className="price-old"><del>14.680.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Mat-day-chuyen/ddddw060395-mat-day-chuyen-kim-cuong-vang-trang-kim-cuong-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Mat-day-chuyen/ddddw060395-mat-day-chuyen-kim-cuong-vang-trang-kim-cuong-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Giảm giá</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Mặt dây chuyền Kim cương Vàng trắng 14K </Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">14.110.000đ</span>
                                                                    <span className="price-old"><del>15.110.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Mat-day-chuyen/dd00w000639-mat-day-chuyen-kim-cuong-vang-trang-14k-chu-h-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Mat-day-chuyen/dd00w000639-mat-day-chuyen-kim-cuong-vang-trang-14k-chu-h-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                    
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Mặt dây chuyền Kim cương Vàng Trắng 14K</Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">7.896.000đ</span>
                                                                    <span className="price-old"><del></del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Mat-day-chuyen/ddddw001386-mat-day-chuyen-kim-cuong-vang-trang-14k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Mat-day-chuyen/ddddw001386-mat-day-chuyen-kim-cuong-vang-trang-14k-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                              
                                                                    <div className="product-label discount">
                                                                        <span>15%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                  
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                             
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Mặt dây chuyền Kim cương Vàng trắng 14K</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">113.204.000đ</span>
                                                                    <span className="price-old"><del></del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Mat-day-chuyen/DDDDW002334-mat-day-chuyen-kim-cuong-vang-trang-14k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Mat-day-chuyen/DDDDW002334-mat-day-chuyen-kim-cuong-vang-trang-14k-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>20%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                  
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                             
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Mặt dây chuyền Kim cương Vàng Trắng 14K</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">35.708.000đ</span>
                                                                    <span className="price-old"><del>38.708.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab2">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    <Slider {...SecondSliderSettings}>
                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Day-chuyen/0000w060104-day-chuyen-bac-y-silver-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Day-chuyen/0000w060104-day-chuyen-bac-y-silver-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>10%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Chitietsanpham"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                  
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                          
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Dây chuyền Bạc Ý </a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">575.000đ</span>
                                                                    <span className="price-old"><del>650.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Day-chuyen/0000w000949-day-chuyen-vang-trang-y-18k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Day-chuyen/0000w000949-day-chuyen-vang-trang-y-18k-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Giảm giá</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                    
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                            
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Dây chuyền Vàng trắng Ý 18K</Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">36.144.000đ</span>
                                                                    <span className="price-old"><del>38.144.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Day-chuyen/0000W060094-day-chuyen-bac-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Day-chuyen/0000W060094-day-chuyen-bac-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Dây chuyền Bạc Ý</Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">1.795.000đ</span>
                                                                    <span className="price-old"><del></del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Day-chuyen/0000W060096-day-chuyen-bac-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Day-chuyen/0000W060096-day-chuyen-bac-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Giảm giá</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>15%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                 
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                              
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Dây chuyền Bạc Ý </a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">1.850.000đ</span>
                                                                    <span className="price-old"><del>1.995.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Day-chuyen/gd0000w061234-day-chuyen-vang-trang-18k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Day-chuyen/gd0000w061234-day-chuyen-vang-trang-18k-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>20%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Dây chuyền Vàng trắng Ý 18K</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">9.890.000đ</span>
                                                                    <span className="price-old"><del>10.890.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab4">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    <Slider {...SecondSliderSettings}>
                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Vong-tay/dd00w000350-vong-tay-kim-cuong-vang-trang-14k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Vong-tay/dd00w000350-vong-tay-kim-cuong-vang-trang-14k-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>new</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>10%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                    
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                              
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Vòng tay Kim cương Vàng Trắng 14K</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">29.622.000đ</span>
                                                                    <span className="price-old"><del>31.622.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Vong-tay/0000w000913-vong-tay-vang-trang-y-18k-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Vong-tay/0000w000913-vong-tay-vang-trang-y-18k-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                     <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div> 
                                                                  
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                   
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                           
                                                                <h6 className="product-name">
                                                                    <Link to="/Chitietsanpham">Vòng tay Vàng Trắng Ý 18K</Link>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">13.482.000đ</span>
                                                                    <span className="price-old"><del></del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Vong-tay/xmxmw060011-vong-tay-bac-dinh-da-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Vong-tay/xmxmw060011-vong-tay-bac-dinh-da-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                  
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Vòng tay Bạc đính đá Họa tiết</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">1.995.000đ</span>
                                                                    <span className="price-old"><del></del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <a href="product-details.html">
                                                                    <img className="pri-img" src="assets/img/product/Vong-tay/0000w060029-vong-tay-bac-01.png" alt="product" />
                                                                    <img className="sec-img" src="assets/img/product/Vong-tay/0000w060029-vong-tay-bac-02.png" alt="product" />
                                                                </a>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Giảm giá</span>
                                                                    </div>
                                                                    <div className="product-label discount">
                                                                        <span>15%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                  
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                              
                                                                <h6 className="product-name">
                                                                    <a href="product-details.html">Vòng tay Charm Bạc</a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">995.000đ</span>
                                                                    <span className="price-old"><del>1.299.000đ</del></span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item">
                                                            <figure className="product-thumb">
                                                                <Link to="/Chitietsanpham">
                                                                    <img className="pri-img"
                                                                        src="assets/img/product/Vong-tay/ddddh000031-vong-tay-kim-cuong-vang-14k-family-infinity-01.png" alt="product" />
                                                                    <img className="sec-img"
                                                                        src="assets/img/product/Vong-tay/ddddh000031-vong-tay-kim-cuong-vang-14k-family-infinity-02.png" alt="product" />
                                                                </Link>
                                                                <div className="product-badge">
                                                                    <div className="product-label new">
                                                                        <span>Sản phẩm mới</span>
                                                                    </div>
                                                                 
                                                                </div>
                                                                <div className="button-group">
                                                                    <Link to="/Yeuthich"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="left"
                                                                        title="Add to wishlist">
                                                                        <i className="pe-7s-like"></i>
                                                                    </Link>
                                                                </div>
                                                                <div className="cart-hover">
                                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                                </div>
                                                            </figure>
                                                            <div className="product-caption text-center">
                                                               
                                                                <h6 className="product-name">
                                                                    <a href="/Chitietsanpham">Vòng tay Kim cương Vàng 14K Infinity </a>
                                                                </h6>
                                                                <div className="price-box">
                                                                    <span className="price-regular">52.328.000đ</span>
                                                                    <span className="price-old"><del></del></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Sanphamnoibat
