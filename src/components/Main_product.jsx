import React from 'react'
import { Link } from 'react-router-dom';  
import Slider from "react-slick";  
function Main_product() {
    const ThirdSliderSettings = {
        speed: 1000,
        slidesToShow: 4,
        autoplay: true,
        infinite: true,
        rows: 2,
        adaptiveHeight: true,
        prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,
        slidesToScroll: 1
    };
    return (
        <div>
            <section className="feature-product section-padding">
                <div className="container">
                    <section className="slider-area">
                        <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
                            <div className="row">
                                <div className="col-12">

                                    <div className="section-title text-center">
                                        <h2 className="title">Sản phẩm</h2>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="product-carousel-4_2 slick-row-10 slick-arrow-style">
                                        <Slider {...ThirdSliderSettings}>
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\1\nhan-kim-cuong-vang-14k-ddddc001259-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\1\nhan-kim-cuong-vang-14k-ddddc001259-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Kim cương Vàng 14K Timeless Diamond</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">56.417.000đ</span>
                                                        <span className="price-old"><del>60.123.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Vàng trắng 14K đính đá ECZ</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">8.365.000đ</span>
                                                        <span className="price-old"><del>10.456.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\3\nhan-kim-cuong-vang-14k-ddddc001224-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\3\nhan-kim-cuong-vang-14k-ddddc001224-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Kim cương Vàng 14K Timeless Diamond</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">124.390.000đ</span>
                                                        <span className="price-old"><del>140.505.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\4\nhan-kim-cuong-vang-trang-14k-dd00w003117-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\4\nhan-kim-cuong-vang-trang-14k-dd00w003117-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
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
                                                        <span className="price-regular">43.544.000đ</span>
                                                        <span className="price-old"><del>46.519.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\5\nhan-kim-cuong-vang-trang-14k-ddddw006782-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\5\nhan-kim-cuong-vang-trang-14k-ddddw006782-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Kim cương Vàng trắng 14K PNJ</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">92.246.400đ</span>
                                                        <span className="price-old"><del>102.496.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\6\nhan-nam-kim-cuong-vang-trang-14k-ddddw000287-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\6\nhan-nam-kim-cuong-vang-trang-14k-ddddw000287-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn nam Kim cương Vàng trắng 14K</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">41.639.000đ</span>
                                                        <span className="price-old"><del>44.010.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\7\nhan-nam-kim-cuong-vang-14k-dd00h000294-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\7\nhan-nam-kim-cuong-vang-14k-dd00h000294-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">78.219.900đ</span>
                                                        <span className="price-old"><del>86.911.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\8\han-cuoi-nam-kim-cuong-vang-trang-14k-dd00w000471-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\8\han-cuoi-nam-kim-cuong-vang-trang-14k-dd00w000471-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng trắng 14K</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">6.186.000đ</span>
                                                        <span className="price-old"><del>10.836.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\9\nhan-cuoi-nam-kim-cuong-vang-18k-true-love-19-dd00c000552-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\9\nhan-cuoi-nam-kim-cuong-vang-18k-true-love-19-dd00c000552-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng 18K</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">9.889.000đ</span>
                                                        <span className="price-old"><del>15.169.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets\img\product\Nhan\10\nhan-cuoi-kim-cuong-vang-18k-71564.500-1.png" alt="product" />
                                                        <img className="sec-img" src="assets\img\product\Nhan\10\nhan-cuoi-kim-cuong-vang-18k-71564.500-2.png" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>Mới</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới Kim cương Vàng 18K</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">5.874.000đ</span>
                                                        <span className="price-old"><del>10.999.000đ</del></span>
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
            </section>

        </div>
    )
}

export default Main_product
