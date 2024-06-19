import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function BannerHome(props) {
    const FirstSliderSettings = {
        fade: true,
        infinite: true,
        speed: 1000,
        dots: true,
        autoplay: true,
        arrows: true,
        prevArrow: <button type="button" class="slick-prev pull-left"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next pull-right"><i class="pe-7s-angle-right"></i></button>,

    };
  return (
    <div>
       <section className="slider-area">
                <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
                    <Slider {...FirstSliderSettings}>
                        <div className="hero-single-slide hero-overlay">
                            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/home2-slide1.jpg)` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="hero-slider-content slide-1">
                                                <h2 className="slide-title">KHUYÊN TAI KIM CƯƠNG</h2>
                                                <h4 className="slide-desc">Giá chỉ từ 1.999.000đ</h4>
                                                <a href="shop.html" className="btn btn-hero">KHÁM PHÁ NGAY</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="hero-single-slide hero-overlay">
                            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/home2-slide2.jpg)` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="hero-slider-content slide-2">
                                                <h2 className="slide-title">BỘ SƯU TẬP NHẪN </h2>
                                                <h4 className="slide-desc">Giá chỉ từ <important> 2.990.000đ</important></h4>
                                                <a href="shop.html" className="btn btn-hero">KHÁM PHÁ NGAY</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="hero-single-slide hero-overlay">
                            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/home1-slide1.jpg)` }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="hero-slider-content slide-3">
                                                <h2 className="slide-title">SẢN PHẨM MỚI</h2>
                                                <h4 className="slide-desc">Trang sức, kim cương.</h4>
                                                <a href="shop.html" className="btn btn-hero">KHÁM PHÁ NGAY</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
    </div>
  )
}

export default BannerHome
