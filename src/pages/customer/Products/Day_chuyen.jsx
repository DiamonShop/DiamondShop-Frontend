import React from 'react'
import { Link } from 'react-router-dom';
export default function Day_chuyen() {
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
                                        <li className="breadcrumb-item active" aria-current="page">Dây chuyền</li>
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
                                                    {/* <a href="#" data-target="list-view" data-bs-toggle="tooltip"
                                                        title="Hiển thị theo danh sách"><i className="fa fa-list"></i></a> */}
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
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\1\sp-SD0000W060096-day-chuyen-bac-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\1\sp-SD0000W060096-day-chuyen-bac-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Bạc Ý 0000W060096</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">1.995.000đ</span>
                                                    <span className="price-old"><del>2.215.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\2\sp-GD0000W000871-day-chuyen-vang-trang-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\2\sp-GD0000W000871-day-chuyen-vang-trang-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Vàng trắng Ý 18K 0000W000871</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">16.963.000đ</span>
                                                    <span className="price-old"><del>18.156.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\3\sp-gd0000y060507-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\3\sp-gd0000y060507-day-chuyen-vang-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Vàng Ý 18K 0000Y060507</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">20.534.400đ</span>
                                                    <span className="price-old"><del>24.165.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            { <div className="product-content-list">
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
                                            </div> }
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\4\sp-gd0000w061242-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\4\sp-gd0000w061242-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền nam Vàng trắng Ý 18K 0000W061242</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">11.320.000đ</span>
                                                    <span className="price-old"><del>13.161.00đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\5\sp-gd0000w061240-day-chuyen-vang-trang-y-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\5\sp-gd0000w061240-day-chuyen-vang-trang-y-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền nam Vàng trắng Ý 18K 0000W061240</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">33.386.800đ</span>
                                                    <span className="price-old"><del>34.968.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\6\sp-gd0000c000043-day-chuyen-vang-y-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\6\sp-gd0000c000043-day-chuyen-vang-y-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                    {/* <div className="product-label discount">
                                                        <span>10%</span>
                                                    </div> */}
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Vàng Ý 18K PNJ 0000C000043</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">18.077.000đ</span>
                                                    <span className="price-old"><del>20.999.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\7\gd0000y060509-Day-chuyen-Vang-18K-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\7\gd0000y060509-Day-chuyen-Vang-18K-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền nam Vàng Ý 18K 0000Y060509</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">42.494.800đ</span>
                                                    <span className="price-old"><del>46.190.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\8\gd0000c060176-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\8\gd0000c060176-day-chuyen-vang-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền nam Vàng Ý 18K 0000C060176</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">73.690.000đ</span>
                                                    <span className="price-old"><del>75.126.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\9\gd0000c060177-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\9\gd0000c060177-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền nam Vàng Ý 18K 0000C060177</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">31.868.800đ</span>
                                                    <span className="price-old"><del>34.640.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\10\gd0000c060172-day-chuyen-vang-y-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\10\gd0000c060172-day-chuyen-vang-y-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Vàng Ý 18K PNJ 0000C060172</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">21.220.000đ</span>
                                                    <span className="price-old"><del>24.165.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\11\gd0000y060451-day-chuyen-vang-y-18k-01.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\11\gd0000y060451-day-chuyen-vang-y-18k-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Vàng Ý 18K PNJ 0000Y060451</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">16.182.800đ</span>
                                                    <span className="price-old"><del>17.590.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>


                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\12\gd0000w000431-day-chuyen-vang-trang-18k-01.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\12\gd0000w000431-day-chuyen-vang-trang-18k-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền vàng trắng 18K 0000W000431</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">10.654.000đ</span>
                                                    <span className="price-old"><del>14.012.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\13\gd0000x000032-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\13\gd0000x000032-day-chuyen-vang-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Vàng 18K 0000X000032</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">6.659.000đ</span>
                                                    <span className="price-old"><del>10.145.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>

                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\14\gd0000y060497-day-chuyen-vang-18k-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\14\gd0000y060497-day-chuyen-vang-18k-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền Vàng Ý 18K PNJ 0000Y060497</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">29.338.800đ</span>
                                                    <span className="price-old"><del>31.890.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>


                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\15\gd0000c060149-day-chuyen-nam-vang-y-18k-01.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\15\gd0000c060149-day-chuyen-nam-vang-y-18k-02.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                    <a href="product-details.html">Dây chuyền nam Vàng Ý 18K 0000C060149</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">27.050.000đ</span>
                                                    <span className="price-old"><del>30.999.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

                                    </div>



                                    <div className="col-lg-3 col-md-4 col-sm-6">

                                        <div className="product-item">
                                            <figure className="product-thumb">
                                                <a href="product-details.html">
                                                    <img className="pri-img" src="assets\img\product\Day-chuyen\16\sd0000h060002-day-chuyen-bac-y-1.png"
                                                        alt="product" />
                                                    <img className="sec-img" src="assets\img\product\Day-chuyen\16\sd0000h060002-day-chuyen-bac-y-2.png"
                                                        alt="product" />
                                                </a>
                                                <div className="product-badge">
                                                    <div className="product-label new">
                                                        <span>Mới</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <a href="wishlist.html" data-bs-toggle="tooltip"
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    {/* <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a> */}
                                                    {/* <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a> */}
                                                </div>
                                                <div className="cart-hover">
                                                    <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                                                </div>
                                            </figure>
                                            <div className="product-caption text-center">
                                                <h6 className="product-name">
                                                        <a href="product-details.html">Dây chuyền bạc Ý PNJSilver 0000H060002</a>
                                                </h6>
                                                <div className="price-box">
                                                    <span className="price-regular">906.500đ</span>
                                                    <span className="price-old"><del>1.295.000đ</del></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="product-list-item">
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
                                                        data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i
                                                            className="pe-7s-like"></i></a>
                                                    <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Thêm vào so sánh"><i className="pe-7s-refresh-2"></i></a>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span
                                                        data-bs-toggle="tooltip" data-bs-placement="left"
                                                        title="Xem nhanh"><i className="pe-7s-search"></i></span></a>
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
                                        </div> */}

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
