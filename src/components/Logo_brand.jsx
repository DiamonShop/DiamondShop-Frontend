import React from 'react'
import Slider from "react-slick";
function Logo_brand() {
    const SixthSliderSettings = {
        speed: 1000,
        slidesToShow: 4,
        adaptiveHeight: true,
        infinite: true,
        autoplay: true,
        prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,
        slidesToScroll: 1,

    }
    return (
        <div>
            <div className="brand-logo section-padding pt-0">

                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="brand-logo-carousel slick-row-10 slick-arrow-style">
                                <Slider {...SixthSliderSettings}>
                                    <div className="brand-item">
                                        <a href="#">
                                            <img src="assets/img/brand/1.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="brand-item">
                                        <a href="#">
                                            <img src="assets/img/brand/2.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="brand-item">
                                        <a href="#">
                                            <img src="assets/img/brand/3.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="brand-item">
                                        <a href="#">
                                            <img src="assets/img/brand/4.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="brand-item">
                                        <a href="#">
                                            <img src="assets/img/brand/5.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="brand-item">
                                        <a href="#">
                                            <img src="assets/img/brand/6.png" alt="" />
                                        </a>
                                    </div>
                                </Slider>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Logo_brand
