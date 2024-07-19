import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../slick-min'
import Du_lieu_san_pham_nb from './Du_lieu_san_pham_nb';
import { Product_Nhan_Data } from '../Data/Product_nhan_data';
import { Product_Matdaychuyen_Data } from '../Data/Product_matdaychuyen_data';
import { Product_Daychuyen_Data } from '../Data/Product_daychuyen_data';
function Sanphamnoibat({ onProductClick }) {
    const [randomProductsNhan, setRandomProductsNhan] = useState([]);
    const [randomProductsDaychuyen, setRandomProductsDaychuyen] = useState([]);
    const [randomProductsMatdaychuyen, setRandomProductsMatdaychuyen] = useState([]);
    useEffect(() => {
        function getRandomProductsNhan(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsNhan(getRandomProductsNhan(Product_Nhan_Data, 5));
        function getRandomProductsDaychuyen(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsDaychuyen(getRandomProductsDaychuyen(Product_Daychuyen_Data, 5));
        function getRandomProductsMatdaychuyen(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsMatdaychuyen(getRandomProductsMatdaychuyen(Product_Matdaychuyen_Data, 5));
    
        const initializeSlick = () => {
            $('.product-carousel-4').slick({
                speed: 1000,
                autoplay: true,
                slidesToShow: 4,
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }]
            });

        };

        $(document).ready(initializeSlick);

        return () => {
            if ($('.product-carousel-4').hasClass('slick-initialized')) {
                $('.product-carousel-4').slick('unslick');
            }
        
        };
    }, []);

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
                                            <div className="tab-pane fade show active" id="tab1">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">                          
                                                        {randomProductsNhan.map((item) => (
                                                            <div key={item.id} >
                                                                <Du_lieu_san_pham_nb
                                                                    productId={item.id}
                                                                    image1={item.image1}
                                                                    image2={item.image2}
                                                                    image3={item.image3}
                                                                    image4={item.image4}
                                                                    label={item.label}
                                                                    material={item.material}
                                                                    mainDiamondName={item.mainDiamondName}
                                                                    sideDiamondName={item.sideDiamondName}
                                                                    jewelrySizes={item.jewelrySizes}
                                                                    productName={item.productName}
                                                                    categoryName={item.categoryName}
                                                                    newPrice={item.newPrice}
                                                                    oldPrice={item.oldPrice}
                                                                    description={item.description}
                                                                    onProductClick={onProductClick}
                                                                />
                                                            </div>
                                                        ))}
                                                   
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab2">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                   
                                                        {randomProductsDaychuyen.map((item) => (
                                                            <div key={item.id} >
                                                                <Du_lieu_san_pham_nb
                                                                    productId={item.id}
                                                                    image1={item.image1}
                                                                    image2={item.image2}
                                                                    image3={item.image3}
                                                                    image4={item.image4}
                                                                    label={item.label}
                                                                    productName={item.productName}
                                                                    categoryName={item.categoryName}
                                                                    newPrice={item.newPrice}
                                                                    oldPrice={item.oldPrice}
                                                                    description={item.description}
                                                                    onProductClick={onProductClick}
                                                                />
                                                            </div>
                                                        ))}
                                                   
                                                </div>
                                            </div>

                                            <div className="tab-pane fade " id="tab3">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                   
                                                        {randomProductsMatdaychuyen.map((item) => (
                                                            <div key={item.id} >
                                                                <Du_lieu_san_pham_nb
                                                                    productId={item.id}
                                                                    image1={item.image1}
                                                                    image2={item.image2}
                                                                    image3={item.image3}
                                                                    image4={item.image4}
                                                                    label={item.label}
                                                                    productName={item.productName}
                                                                    categoryName={item.categoryName}
                                                                    newPrice={item.newPrice}
                                                                    oldPrice={item.oldPrice}
                                                                    description={item.description}
                                                                    onProductClick={onProductClick}
                                                                />
                                                            </div>
                                                        ))}

                                                   
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab4">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    
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
                                                                        <span>Mới</span>
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
                                                                        <span>Mới</span>
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
                                                                        <span>Mới</span>
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
                                                                        <span>Mới</span>
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
                                                                        <span>Mới</span>
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
