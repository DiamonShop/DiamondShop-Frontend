import React from 'react'
import { Link } from 'react-router-dom';
export default function Kim_cuong() {
    return (
        <div>

            {/* <div className="breadcrumb-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-wrap">
                                    <nav aria-label="breadcrumb">
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Kim Cương</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 */}
            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/label-kim-cuong.png)` }}>

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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="">G | VS2 | EX</a>
                                                    </p>
                                                </div>
                                                {/* <ul className="color-categories">
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
                                                </ul> */}
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly G VS2 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">10,382,000₫</span>
                                                    <span className="price-old"><del>11,045,000₫</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <a href="">G | VS1 | EX</a>
                                                </div>
                                                {/* <ul className="color-categories">
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
                                                </ul> */}

                                                <h5 className="product-name"><a href="product-details.html">Kim cương viên GIA 3.6ly G VS2 EX</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">10,382,000₫</span>
                                                    <span className="price-old"><del>11,045,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">G | VS1 | EX</a>
                                                    </p>
                                                </div>
                                                {/* <ul className="color-categories">
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
                                                </ul> */}
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly G VS1 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">10,736,000₫</span>
                                                    <span className="price-old"><del>11,421,000₫</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <a href="product-details.html">G | VS1 | EX</a>
                                                </div>
                                                {/* <ul className="color-categories">
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
                                                </ul> */}

                                                <h5 className="product-name"><a href="product-details.html">Kim cương viên GIA 3.6ly G VS1 EX</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">10,736,000₫</span>
                                                    <span className="price-old"><del>11,421,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
                                                    </div>
                                                    <div className="product-label discount">
                                                        <span>6%</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">F | VS2 | EX</a>
                                                    </p>
                                                </div>
                                                {/* <ul className="color-categories">
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
                                                </ul> */}
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly F VS2 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11,178,000₫</span>
                                                    <span className="price-old"><del>11,891,000₫</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
                                                    </div>
                                                    <div className="product-label discount">
                                                        <span>6%</span>
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
                                                    <a href="product-details.html">F | VS2 | EX</a>
                                                </div>


                                                <h5 className="product-name"><a href="product-details.html">Kim cương viên GIA 3.6ly F VS2 EX</a></h5>
                                                <div className="price-box">
                                                    <span className="price-regular">11,178,000₫</span>
                                                    <span className="price-old"><del>11,891,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
                                                    </div>
                                                    <div className="product-label discount">
                                                        <span>6%</span>
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
                                                    <p className="manufacturer-name">
                                                        <a href="product-details.html">F | VS1 | EX</a>
                                                    </p>
                                                </div>

                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly F VS1 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11,531,000₫</span>
                                                    <span className="price-old"><del>12,267,000₫</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <a href="product-details.html">E | VS2 | EX</a>
                                                </div>
                                                <div className="product-label discount">
                                                    <span>10%</span>
                                                </div>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">E | VS2 | EX</a>
                                                    </p>
                                                </div>

                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly E VS2 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11,531,000₫</span>
                                                    <span className="price-old"><del></del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name">
                                                        <a href="product-details.html">E | VS1 | EX</a>
                                                    </p>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly E VS1 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11,884,000₫</span>
                                                    <span className="price-old"><del>12,643,000₫</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img"
                                                        src="assets/img/product/product-6.jpg"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/product-13.jpg"
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
                                                    </div>
                                                    <div className="product-label discount">
                                                        <span>5%</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">D | VS2 | EX</a>
                                                    </p>
                                                </div>

                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly D VS2 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11,884,000₫</span>
                                                    <span className="price-old"><del>12,643,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">H | VVS1 | EX</a></p>
                                                </div>

                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly H VVS1 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11,973,000₫</span>
                                                    <span className="price-old"><del></del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src=""
                                                        alt="product" />
                                                    <img className="sec-img" src=""
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <a href="product-details.html">G | VVS2| EX</a>
                                                </div>

                                                <h5 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly G VVS2 EX</a>
                                                </h5>
                                                <div className="price-box">
                                                    <span className="price-regular">11,973,000₫</span>
                                                    <span className="price-old"><del>12,737,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">G | VVS2| EX</a>
                                                    </p>
                                                </div>

                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly G VVS2 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11,973,000₫</span>
                                                    <span className="price-old"><del>12,737,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name">
                                                        <a href="product-details.html">D | VS1 | EX</a>
                                                    </p>
                                                </div>

                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly D VS1 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">12,282,000₫</span>
                                                    <span className="price-old"><del>13,066,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name">
                                                        <a href="product-details.html">G | VVS1 | EX</a>
                                                    </p>
                                                </div>

                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly G VVS1 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">12,370,000₫</span>
                                                    <span className="price-old"><del>13,160,000₫</del></span>
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
                                                    <img className="pri-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img"
                                                        src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">F | VVS2 | VG</a>
                                                    </p>
                                                </div>
                                                
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly F VVS2 VG</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">13,298,000₫</span>
                                                    <span className="price-old"><del>14,147,000₫</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="product-list-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" 
                                                    src="assets/img/product/product-12.jpg"
                                                        alt="product" />
                                                    <img className="sec-img" 
                                                    src="assets/img/product/product-7.jpg"
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
                                                    <img className="pri-img" 
                                                    src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img" 
                                                    src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">F | VVS2 | EX</a></p>
                                                </div>
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly F VVS2 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">13,519,000₫</span>
                                                    <span className="price-old"><del>14,382,000₫</del></span>
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
                                                    <img className="pri-img" src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">F | VVS1 | EX</a></p>
                                                </div>
                                                
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly F VVS1 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">13,961,000₫</span>
                                                    <span className="price-old"><del>14,852,000₫</del></span>
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
                                                    <img className="pri-img" 
                                                    src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img" 
                                                    src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">EX | EX | EX</a>
                                                    </p>
                                                </div>
                                               
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly EX EX EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">13,961,000₫</span>
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
                                                    <img className="pri-img" 
                                                    src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-01.png"
                                                        alt="product" />
                                                    <img className="sec-img" 
                                                    src="assets/img/product/Kim-cuong/kim-cuong-3,6ly-g-vs2-ex-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Sản phẩm mới</span>
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
                                                    <p className="manufacturer-name"><a href="product-details.html">E | VVS2 | EX</a></p>
                                                </div>
                                                
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Kim cương viên GIA 3.6ly E VVS2 EX</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">13,961,000₫</span>
                                                    <span className="price-old"><del>14,852,000₫</del></span>
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
