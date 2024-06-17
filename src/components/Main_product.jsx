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
                                                        <img className="pri-img" src="assets/img/product/product-6.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-13.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-7.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-9.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$80.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-8.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-11.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$99.00</span>
                                                        <span className="price-old"><del></del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-16.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-10.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$55.00</span>
                                                        <span className="price-old"><del>$75.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-10.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-9.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Citygold Exclusive Ring</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-1.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-18.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>10%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-2.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-17.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$80.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-3.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-16.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$99.00</span>
                                                        <span className="price-old"><del></del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-4.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-15.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$55.00</span>
                                                        <span className="price-old"><del>$75.00</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-5.jpg" alt="product" />
                                                        <img className="sec-img" src="assets/img/product/product-14.jpg" alt="product" />
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
                                                    </div>
                                                    <ul className="color-categories">
                                                        <li>
                                                            <a className="c-lightblue" href="#" title="LightSteelblue"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-darktan" href="#" title="Darktan"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-grey" href="#" title="Grey"></a>
                                                        </li>
                                                        <li>
                                                            <a className="c-brown" href="#" title="Brown"></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Citygold Exclusive Ring</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
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
