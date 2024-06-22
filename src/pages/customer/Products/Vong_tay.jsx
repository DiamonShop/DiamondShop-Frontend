import React from 'react'
import { Link } from 'react-router-dom';
export default function Vong_tay({ onProductClick }) {
    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Vòng tay</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-main-wrapper section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="shop-product-wrapper">

                                <div className="shop-top-bar">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 col-md-6 order-2 order-md-1">
                                            <div className="top-bar-left">
                                                <div className="product-view-mode">
                                                    <a className="active" href="#" data-target="grid-view"
                                                        data-bs-toggle="tooltip" title="Hiển thị lưới"><i
                                                            className="fa fa-th"></i></a>
                                                    <a href="#" data-target="list-view" data-bs-toggle="tooltip"
                                                        title="Hiển thị theo danh sách"><i className="fa fa-list"></i></a>
                                                </div>
                                                <div className="product-amount">
                                                    <p>Hiển thị 1–16 trên 21 kết quả</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6 order-1 order-md-2">
                                            <div className="top-bar-right">
                                                <div className="product-short">
                                                    <p>Liệt kê theo: </p>
                                                    <select className="nice-select" name="sortby">
                                                        <option value="trending">Độ liên quan</option>
                                                        <option value="sales">Tên (A - Z)</option>
                                                        <option value="sales">Tên (Z - A)</option>
                                                        <option value="rating">Giá (Thấp &gt; Cao)</option>
                                                        <option value="date">Đánh giá (Thâp nhất)</option>
                                                        <option value="price-asc">Mẫu (A - Z)</option>
                                                        <option value="price-asc">Mẫu (Z - A)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="shop-product-wrap grid-view row mbn-30">

                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-1.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-18.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Platinum</a>
                                                    </p>
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

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-1.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-18.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Platinum</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Perfect Diamond
                                                    Jewelry</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-2.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-17.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Quickiin</a>
                                                    </p>
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
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-2.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-17.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Diamond</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Handmade Golden
                                                    Necklace</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-3.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-16.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Quickiin</a>
                                                    </p>
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
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-3.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-16.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Quickiin</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Diamond Exclusive
                                                    Ornament</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-4.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-15.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">BDevs</a>
                                                    </p>
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
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-4.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-15.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">BDevs</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Handmade Golden
                                                    Necklace</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-5.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-14.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Hastech</a>
                                                    </p>
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

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-5.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-14.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">HasTech</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Perfect Diamond
                                                    Jewelry</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-6.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-13.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
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
                                                    <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-6.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-13.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Gold</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Diamond Exclusive
                                                    Ornament</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-7.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-12.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Silver</a>
                                                    </p>
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
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-7.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-12.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Silver</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Handmade Golden
                                                    Necklace</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-8.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-11.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Maya</a></p>
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

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-8.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-11.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Maya</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Perfect Diamond
                                                    Jewelry</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-9.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-10.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Quickiin</a>
                                                    </p>
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

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-9.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-10.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Quickiin</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Perfect Diamond
                                                    Jewelry</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-10.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-9.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Jem</a></p>
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
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-10.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-9.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Jem</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Handmade Golden
                                                    Necklace</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-11.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-8.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Quickiin</a>
                                                    </p>
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
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-11.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-8.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Quickiin</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Diamond Exclusive
                                                    Ornament</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-12.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-7.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">HasTech</a>
                                                    </p>
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

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-12.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-7.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">HasTech</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Perfect Diamond
                                                    Jewelry</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-13.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-6.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
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

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-13.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-6.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Gold</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Perfect Diamond
                                                    Jewelry</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-14.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-5.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
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
                                                    <a href="product-details.html">Handmade Golden Necklace</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-14.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-5.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Gold</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Handmade Golden
                                                    Necklace</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-15.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-4.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Quickiin</a>
                                                    </p>
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
                                                    <span className="price-regular">$60.00</span>
                                                    <span className="price-old"><del>$70.00</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-15.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-4.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Quickiin</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Diamond Exclusive
                                                    Ornament</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-8.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-11.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <div className="product-identity">
                                                    <p className="manufacturer-name"><a href="product-details.html">Maya</a></p>
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

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets/img/product/product-8.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/product-11.jpg"
                                                        alt="product" />
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
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Add to wishlist"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-content-list">
                                                <div className="manufacturer-name">
                                                    <a href="product-details.html">Maya</a>
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

                                                <h5 className="product-name"><a href="product-details.html">Perfect Diamond
                                                    Jewelry</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">$50.00</span>
                                                    <span className="price-old"><del>$29.99</del></span>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                                                    perspiciatis
                                                    quod numquam, sit fugiat, deserunt ipsa mollitia sunt quam corporis
                                                    ullam
                                                    rem, accusantium adipisci officia eaque.</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                                <div className="paginatoin-area text-center">
                                    <ul className="pagination-box">
                                        <li><a className="previous" href="#"><i className="pe-7s-angle-left"></i></a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a className="next" href="#"><i className="pe-7s-angle-right"></i></a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="scroll-top not-visible">
                <i className="fa fa-angle-up"></i>
            </div>
        </div>










    )
}

