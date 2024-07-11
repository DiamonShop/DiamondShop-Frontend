import React from 'react'
import Slider from "react-slick";
import Sanphambanchay from './Sanphambanchay';
function Main_bestseller_product() {
    const FifthSliderSettings = {
        speed: 1000,
        infinite: true,
        rows: 4,
        autoplay: true,
        prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,
        dots: true,
        slidesToShow: 1,
    };
    return (
        <div>
            <section className="group-product-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="group-product-banner">
                                <figure className="banner-statistics">
                                    <a href="#">
                                        <img src="assets/img/banner/z5567897593865_9e3161a46de6a674988b6133feee7fb3.jpg" alt="product banner" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories-group-wrapper">

                                <div className="section-title-append">
                                    <h4>Sản Phẩm Bán Chạy</h4>
                                    <div className="slick-append"></div>
                                </div>
                                <Sanphambanchay/>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories-group-wrapper">

                                <div className="section-title-append">
                                    <h4>Sản phẩm đang giảm giá</h4>
                                    <div className="slick-append"></div>
                                </div>
                                <div className="group-list-item-wrapper">
                                    <div className="group-list-carousel">
                                        <Slider {...FifthSliderSettings}>
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Nhan\14\nhan-cuoi-nam-kim-cuong-vang-18k-chung-doi-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Nhẫn cưới Nam Kim cương Vàng 18K</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">222.222.222đ</span>
                                                            <span className="price-old"><del>333.333.333đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Mat-day-chuyen\10\sp-gmxm00y060398-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Mặt Dây chuyền Vàng 14K đính đá CZ</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">123.123.123đ</span>
                                                            <span className="price-old"><del>234.234.234đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Nhan\3\nhan-kim-cuong-vang-14k-ddddc001224-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Nhẫn nam Kim cuong Vàng 14K</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">555.555.555.đ</span>
                                                            <span className="price-old"><del>666.666.666đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Mat-day-chuyen\13\sp-gmrbxmw000104-mat-day-chuyen-vang-trang-14k-dinh-da-ruby-disney-pnj-snow-white-&-the-seven-dwarfs-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Mặt dây chuyền Vàng trắn 14K</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">30.041.975đ</span>
                                                            <span className="price-old"><del>100.100.100đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Nhan\9\nhan-cuoi-nam-kim-cuong-vang-18k-true-love-19-dd00c000552-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Nhẫn cưới nam Kim cương Vàng 18K True Love</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">22.222.222đ</span>
                                                            <span className="price-old"><del>33.333.333đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Mat-day-chuyen\11\sp-gmxm00c060000-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            corano top exclusive jewellry</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">999.999.999đ</span>
                                                            <span className="price-old"><del>1.000.000.000đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Nhan\7\nhan-nam-kim-cuong-vang-14k-dd00h000294-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Nhẫn nam Kim cương Vàng 14K</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">456.456.456đ</span>
                                                            <span className="price-old"><del>696.696.696đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets\img\product\Mat-day-chuyen\4\gmztxmy060840-mat-day-chuyen-vang-14k-dinh-da-synthetic-pnj-hello-kitty-1.png" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Mặt Dây chuyền Vàng 14K đính đá Synthetic Hello Kitty</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">999.999.999đ</span>
                                                            <span className="price-old"><del>5.123.345.567đ</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main_bestseller_product
