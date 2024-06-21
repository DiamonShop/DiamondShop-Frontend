import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/NumberFormat';

export default function Chi_tiet_san_pham() {
    //Get product when reload
    const productObj = JSON.parse(localStorage.getItem('product'));
    const largeSliderRef = useRef(null);
    const navSliderRef = useRef(null);

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
        speed: 1000,
        centerPadding: '0',
        focusOnSelect: true,
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

    const handleAddToCart = () => {

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
                                        <li class="breadcrumb-item"><a href="shop.html">shop</a></li>
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
                                                <img src="assets/img/product/product-details-img1.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets/img/product/product-details-img2.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets/img/product/product-details-img3.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets/img/product/product-details-img4.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets/img/product/product-details-img5.jpg" alt="product-details" />
                                            </div>
                                        </Slider>
                                        <Slider {...navSliderSettings} className="pro-nav">
                                            <div className="pro-nav-thumb">
                                                <img src="assets/img/product/product-details-img1.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets/img/product/product-details-img2.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets/img/product/product-details-img3.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets/img/product/product-details-img4.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets/img/product/product-details-img5.jpg" alt="product-details" />
                                            </div>
                                        </Slider>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="product-details-des">
                                            <div class="manufacturer-name">
                                                <a href="product-details.html">HasTech</a>
                                            </div>
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
                                            <h5 class="offer-text"><strong>Hurry up</strong>! offer ends in:</h5>
                                            <div class="product-countdown" data-countdown="2022/12/20"></div>
                                            <div class="availability">
                                                <i class="fa fa-check-circle"></i>
                                                <span>sdf</span>
                                            </div>
                                            <p class="pro-desc">{productObj.description}</p>
                                            <div class="quantity-cart-box d-flex align-items-center">
                                                <h6 class="option-title">qty:</h6>
                                                <div class="quantity">
                                                    <div class="pro-qty"><input type="text" value="1" /></div>
                                                </div>
                                                <div class="action_link">
                                                    <a class="btn btn-cart2" onClick={handleAddToCart}>Add to cart</a>
                                                </div>
                                            </div>
                                            <div class="pro-size">
                                                <h6 class="option-title">size :</h6>
                                                <select class="nice-select">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                            </div>
                                            <div class="color-option">
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
                                            </div>
                                            <div class="like-icon">
                                                <a class="facebook" href="#"><i class="fa fa-facebook"></i>like</a>
                                                <a class="twitter" href="#"><i class="fa fa-twitter"></i>tweet</a>
                                                <a class="pinterest" href="#"><i class="fa fa-pinterest"></i>save</a>
                                                <a class="google" href="#"><i class="fa fa-google-plus"></i>share</a>
                                            </div>
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
                                                <li>
                                                    <a data-bs-toggle="tab" href="#tab_two">Thông số</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="tab" href="#tab_three">Phản hồi</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="tab" href="#tab_four">Chính sách bảo hành</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content reviews-tab">
                                                <div class="tab-pane fade show active" id="tab_one">
                                                    <div class="tab-one">
                                                        <p>{productObj.description}</p>
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
                                <h2 class="title">Related Products</h2>
                                <p class="sub-title">Add related products to weekly lineup</p>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">

                            <Slider {...relatedSliderSettings} class="product-carousel-4 slick-row-10 slick-arrow-style">
                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets/img/product/product-11.jpg" alt="product" />
                                            <img class="sec-img" src="assets/img/product/product-8.jpg" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>new</span>
                                            </div>
                                            <div class="product-label discount">
                                                <span>10%</span>
                                            </div>
                                        </div>
                                        <div class="cart-hover">
                                            <button class="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div class="product-caption text-center">
                                        <div class="product-identity">
                                            <p class="manufacturer-name"><a href="product-details.html">Gold</a></p>
                                        </div>
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
                                        <h6 class="product-name">
                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">$60.00</span>
                                            <span class="price-old"><del>$70.00</del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets/img/product/product-12.jpg" alt="product" />
                                            <img class="sec-img" src="assets/img/product/product-7.jpg" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>sale</span>
                                            </div>
                                            <div class="product-label discount">
                                                <span>new</span>
                                            </div>
                                        </div>
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
                                        <div class="product-identity">
                                            <p class="manufacturer-name"><a href="product-details.html">mony</a></p>
                                        </div>
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
                                        <h6 class="product-name">
                                            <a href="product-details.html">Handmade Golden Necklace</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">$50.00</span>
                                            <span class="price-old"><del>$80.00</del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets/img/product/product-13.jpg" alt="product" />
                                            <img class="sec-img" src="assets/img/product/product-6.jpg" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>new</span>
                                            </div>
                                        </div>
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
                                        <div class="product-identity">
                                            <p class="manufacturer-name"><a href="product-details.html">Diamond</a></p>
                                        </div>
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
                                        <h6 class="product-name">
                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">$99.00</span>
                                            <span class="price-old"><del></del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets/img/product/product-14.jpg" alt="product" />
                                            <img class="sec-img" src="assets/img/product/product-5.jpg" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>sale</span>
                                            </div>
                                            <div class="product-label discount">
                                                <span>15%</span>
                                            </div>
                                        </div>
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
                                        <div class="product-identity">
                                            <p class="manufacturer-name"><a href="product-details.html">silver</a></p>
                                        </div>
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
                                        <h6 class="product-name">
                                            <a href="product-details.html">Diamond Exclusive Ornament</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">$55.00</span>
                                            <span class="price-old"><del>$75.00</del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets/img/product/product-15.jpg" alt="product" />
                                            <img class="sec-img" src="assets/img/product/product-4.jpg" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>new</span>
                                            </div>
                                            <div class="product-label discount">
                                                <span>20%</span>
                                            </div>
                                        </div>
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
                                        <div class="product-identity">
                                            <p class="manufacturer-name"><a href="product-details.html">mony</a></p>
                                        </div>
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
                                        <h6 class="product-name">
                                            <a href="product-details.html">Citygold Exclusive Ring</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">$60.00</span>
                                            <span class="price-old"><del>$70.00</del></span>
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
