import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function BannerHome() {
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
                            <Link to="/Nhan">
                                <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-1.jpg)` }} />
                            </Link>
                        </div>

                        <div className="hero-single-slide hero-overlay">
                            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-2.jpg)` }}>

                            </div>
                        </div>
                        <div className="hero-single-slide hero-overlay">
                            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-3.jpg)` }}>

                            </div>
                        </div>
                        <div className="hero-single-slide hero-overlay">
                            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-4.png)` }}>

                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default BannerHome
