import React from 'react'
import Slider from "react-slick";
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
                                        <img src="assets/img/banner/img-bottom-banner.jpg" alt="product banner" />
                                    </a>
                                    <div className="banner-content banner-content_style3 text-center">
                                        <h6 className="banner-text1">BEAUTIFUL</h6>
                                        <h2 className="banner-text2">Wedding Rings</h2>
                                        <a href="shop.html" className="btn btn-text">Shop Now</a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories-group-wrapper">

                                <div className="section-title-append">
                                    <h4>best seller product</h4>
                                    <div className="slick-append"></div>
                                </div>



                                <div className="group-list-item-wrapper">
                                    <div className="group-list-carousel">
                                        <Slider {...FifthSliderSettings}>
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-1.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Diamond Exclusive ring</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$50.00</span>
                                                            <span className="price-old"><del>$29.99</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-3.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Handmade Golden ring</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$55.00</span>
                                                            <span className="price-old"><del>$30.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-5.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            exclusive gold Jewelry</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$45.00</span>
                                                            <span className="price-old"><del>$25.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-7.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Perfect Diamond earring</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$50.00</span>
                                                            <span className="price-old"><del>$29.99</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-9.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Handmade Golden Necklace</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$90.00</span>
                                                            <span className="price-old"><del>$100.</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-11.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Handmade Golden Necklace</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$20.00</span>
                                                            <span className="price-old"><del>$30.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-13.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Handmade Golden ring</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$55.00</span>
                                                            <span className="price-old"><del>$30.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-15.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            exclusive gold Jewelry</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$45.00</span>
                                                            <span className="price-old"><del>$25.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="categories-group-wrapper">

                                <div className="section-title-append">
                                    <h4>on-sale product</h4>
                                    <div className="slick-append"></div>
                                </div>



                                <div className="group-list-item-wrapper">
                                    <div className="group-list-carousel">
                                        <Slider {...FifthSliderSettings}>
                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-17.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Handmade Golden Necklace</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$50.00</span>
                                                            <span className="price-old"><del>$29.99</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-16.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Handmade Golden Necklaces</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$55.00</span>
                                                            <span className="price-old"><del>$30.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-12.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            exclusive silver top bracellet</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$45.00</span>
                                                            <span className="price-old"><del>$25.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-11.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            top Perfect Diamond necklace</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$50.00</span>
                                                            <span className="price-old"><del>$29.99</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-7.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Diamond Exclusive earrings</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$90.00</span>
                                                            <span className="price-old"><del>$100.</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-2.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            corano top exclusive jewellry</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$20.00</span>
                                                            <span className="price-old"><del>$30.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-18.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            Handmade Golden ring</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$55.00</span>
                                                            <span className="price-old"><del>$30.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group-slide-item">
                                                <div className="group-item">
                                                    <div className="group-item-thumb">
                                                        <a href="product-details.html">
                                                            <img src="assets/img/product/product-14.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="group-item-desc">
                                                        <h5 className="group-product-name"><a href="product-details.html">
                                                            exclusive gold Jewelry</a></h5>
                                                        <div className="price-box">
                                                            <span className="price-regular">$45.00</span>
                                                            <span className="price-old"><del>$25.00</del></span>
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
