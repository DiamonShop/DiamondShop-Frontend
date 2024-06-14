import React from 'react'
import { Link } from 'react-router-dom';
import Du_lieu_san_pham from '../../../components/Du_lieu_san_pham';
import { Product_Nhan_Data } from '../../../Product_nhan_data';
import Filter_product from '../../../components/Filter_product';


export default function Nhan() {
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
                                            <li className="breadcrumb-item active" aria-current="page">Nhẫn</li>
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
                                    <Filter_product></Filter_product>

                                    <div className="shop-product-wrap grid-view row mbn-30">
                                        {Product_Nhan_Data.map((item, index) => (
                                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-30">
                                                <Du_lieu_san_pham
                                                    image1={item.image1}
                                                    image2={item.image2}
                                                    label={item.label}
                                                    productName={item.productName}
                                                    newPrice={item.newPrice}
                                                    oldPrice={item.oldPrice}
                                                />
                                            </div>
                                        ))}
                                    </div>



                                    {/* <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                        <figure className="product-thumb">
                                            <a href="product-details.html">
                                                <img className="pri-img" src="assets/img/product/Nhan/2/nhan-vang-trang-14k-dinh-da-ecz-1.png"
                                                    alt="product"/>
                                                <img className="sec-img" src="assets/img/product/Nhan/2/nhan-vang-trang-14k-dinh-da-ecz-2.png"
                                                    alt="product"/>
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
                                        <div className="product-caption text-center">
                                            <h6 className="product-name">
                                                <a href="product-details.html">Nhẫn Vàng trắng 14K đính đá ECZ PNJ XMXMW004696</a>
                                            </h6>
                                            <div className="price-box">
                                                <span className="price-regular">8.359.000đ</span>
                                                <span className="price-old"><del>10.324.000đ</del></span>
                                            </div>
                                        </div>
                                    </div>

                                            <Du_lieu_san_pham
                                                image1="assets/img/product/Nhan/2/nhan-vang-trang-14k-dinh-da-ecz-1.png"
                                                image2="assets/img/product/Nhan/2/nhan-vang-trang-14k-dinh-da-ecz-2.png"
                                                label="Mới"
                                                productName="Nhẫn Vàng trắng 14K đính đá ECZ "
                                                newPrice="8.359.000đ"
                                                oldPrice="10.324.000đ"
                                            ></Du_lieu_san_pham>

                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/3/nhan-kim-cuong-vang-14k-ddddc001224-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/3/nhan-kim-cuong-vang-14k-ddddc001224-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Kim Cương Vàng 14k Timeless Diamond DDDDC001224</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">124.398.000đ</span>
                                                        <span className="price-old"><del>150.125.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                        

                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/4/nhan-kim-cuong-vang-trang-14k-dd00w003117-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/4/nhan-kim-cuong-vang-trang-14k-dd00w003117-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Kim cương Vàng trắng 14K DD00W003117</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">43.544.000đ</span>
                                                        <span className="price-old"><del>46.100.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/5/nhan-kim-cuong-vang-trang-14k-ddddw006782-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/5/nhan-kim-cuong-vang-trang-14k-ddddw006782-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Kim cương Vàng trắng 14K DDDDW006782</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">92.246.400đ</span>
                                                        <span className="price-old"><del>96.274.100đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/6/nhan-nam-kim-cuong-vang-trang-14k-ddddw000287-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/6/nhan-nam-kim-cuong-vang-trang-14k-ddddw000287-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn nam Kim cương Vàng trắng 14K DDDDW000287</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">41.657.000đ</span>
                                                        <span className="price-old"><del>42.156.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/7/nhan-nam-kim-cuong-vang-14k-dd00h000294-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/7/nhan-nam-kim-cuong-vang-14k-dd00h000294-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn nam Kim cương Vàng 14K DD00H000294</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">78.219.900đ</span>
                                                        <span className="price-old"><del>80.020.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/8/han-cuoi-nam-kim-cuong-vang-trang-14k-dd00w000471-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/8/han-cuoi-nam-kim-cuong-vang-trang-14k-dd00w000471-1.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng trắng 14K DD00W000471</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">6.185.000đ</span>
                                                        <span className="price-old"><del>10.150.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/9/nhan-cuoi-nam-kim-cuong-vang-18k-true-love-19-dd00c000552-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/9/nhan-cuoi-nam-kim-cuong-vang-18k-true-love-19-dd00c000552-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng 18K True Love DD00C000552</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">9.894.000đ</span>
                                                        <span className="price-old"><del>10.809.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/10/nhan-cuoi-kim-cuong-vang-18k-71564.500-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/10/nhan-cuoi-kim-cuong-vang-18k-71564.500-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới Kim cương Vàng 18K PNJ DD00Y000737</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">5.873.000đ</span>
                                                        <span className="price-old"><del>6.124.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/11/nhan-cuoi-kim-cuong-nam-pnj-long-phung-vang-18k-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/11/nhan-cuoi-kim-cuong-nam-pnj-long-phung-vang-18k-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng 18K Long Phụng DD00Y000995</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">16.946.000đ</span>
                                                        <span className="price-old"><del>19.789.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/12/nhan-kim-cuong-vang-trang-14k-first-diamond-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/12/nhan-kim-cuong-vang-trang-14k-first-diamond-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn Kim cương Vàng trắng 14K First Diamond DDDDW001980</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">7.566.000đ</span>
                                                        <span className="price-old"><del>8.155.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/13/nhan-cuoi-kim-cuong-vang-18k-tinh-hong-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/13/nhan-cuoi-kim-cuong-vang-18k-tinh-hong-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới Kim cương Vàng 18K Tình Hồng DD00H000004</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">7.505.000đ</span>
                                                        <span className="price-old"><del>8.150.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/14/nhan-cuoi-nam-kim-cuong-vang-18k-chung-doi-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/14/nhan-cuoi-nam-kim-cuong-vang-18k-chung-doi-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng 18K Chung Đôi DD00Y000643</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">11.472.000đ</span>
                                                        <span className="price-old"><del>13.156.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/15/nhan-cuoi-kim-cuong-vang-trang-14k-long-phung-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/15/nhan-cuoi-kim-cuong-vang-trang-14k-long-phung-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới Kim cương Vàng trắng 14K Long Phụng DD00W000641</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">8.316.000đ</span>
                                                        <span className="price-old"><del>10.237.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="col-lg-3 col-md-4 col-sm-6">

                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/Nhan/16/nhan-cuoi-kim-cuong-vang-18k-chung-doi-dd00y000585-1.png"
                                                            alt="product" />
                                                        <img className="sec-img" src="assets/img/product/Nhan/16/nhan-cuoi-kim-cuong-vang-18k-chung-doi-dd00y000585-2.png"
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
                                                <div className="product-caption text-center">
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng 18K Chung Đôi DD00Y000585</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">14.409.000đ</span>
                                                        <span className="price-old"><del>20.768.000đ</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                    {/* </div> */}



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
