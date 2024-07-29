import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../slick-min'
function BannerHome() {
    useEffect(() => {
        const initSlick = () => {
            $('.hero-slider-active').slick({
                fade: true,
                speed: 1000,
                dots: false,
                autoplay: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }]
            });

        };

        $(document).ready(initSlick);

        return () => {
            if ($('.hero-slider-active').hasClass('slick-initialized')) {
                $('.hero-slider-active').slick('unslick');
            }
            
        };
    }, []);
    return (
        <div>
            <section className="slider-area">
                <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">                 
                        <div className="hero-single-slide hero-overlay">
                            <Link to="/Nhẫn">
                                <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-1.jpg)` }} />
                            </Link>
                        </div>
                        <div className="hero-single-slide hero-overlay">
                            <Link to="/Mặt dây chuyền">
                                <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-2.jpg)` }} />
                            </Link>
                        </div>
                        <div className="hero-single-slide hero-overlay">
                            <Link to="/Vòng tay">
                                <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-3.jpg)` }} />
                            </Link>
                        </div>
                        <div className="hero-single-slide hero-overlay">
                            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/banner-4.png)` }}>
                            </div>
                        </div>                 
                </div>
            </section >
        </div >
    )
}

export default BannerHome
