import React, { useEffect } from 'react'
import '../slick-min'
import $ from 'jquery';
function Sanphambanchay() {

    useEffect(() => {
        const initializeSlick = () => {
            $('.group-list-carousel').each(function () {
                var $this = $(this);
                var $arrowContainer = $(this).parent().siblings('.section-title-append').find('.slick-append');
                $this.slick({
                    infinite: true,
                    rows: 4,
                    prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
                    appendArrows: $arrowContainer,
                    responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    }]
                });
            });
        };

        // Initialize Slick when the document is ready
        $(document).ready(initializeSlick);

        // Cleanup Slick when the component unmounts
        return () => {
            if ($('.group-list-carousel').hasClass('slick-initialized')) {
                $('.group-list-carousel').slick('unslick');
            }
        };
    }, []);
    return (
        <div>
            <div className="section-title-append">
                <h4>Sản Phẩm Bán Chạy</h4>
                <div className="slick-append"></div>
            </div>
            <div className="group-list-item-wrapper">
                <div className="group-list-carousel">

                    <div className="group-slide-item">
                        <div className="group-item">
                            <div className="group-item-thumb">
                                <a href="product-details.html">
                                    <img src="assets\img\product\Nhan\9\nhan-cuoi-nam-kim-cuong-vang-18k-true-love-19-dd00c000552-1.png" alt="" />
                                </a>
                            </div>
                            <div className="group-item-desc">
                                <h5 className="group-product-name"><a href="product-details.html">
                                    Nhẫn cưới nam Kim cương Vàng 18K</a></h5>
                                <div className="price-box">
                                    <span className="price-regular">9.889.000đ</span>
                                    <span className="price-old"><del>15.169.000đ</del></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group-slide-item">
                        <div className="group-item">
                            <div className="group-item-thumb">
                                <a href="product-details.html">
                                    <img src="assets\img\product\Day-chuyen\1\sp-SD0000W060096-day-chuyen-bac-1.png" alt="" />
                                </a>
                            </div>
                            <div className="group-item-desc">
                                <h5 className="group-product-name"><a href="product-details.html">
                                    Dây chuyền Bạc </a></h5>
                                <div className="price-box">
                                    <span className="price-regular">616.616đ</span>
                                    <span className="price-old"><del>900.900đ</del></span>
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
                                    <span className="price-regular">88.888.888đ</span>
                                    <span className="price-old"><del>100.000.000đ</del></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group-slide-item">
                        <div className="group-item">
                            <div className="group-item-thumb">
                                <a href="product-details.html">
                                    <img src="assets\img\product\Day-chuyen\14\gd0000y060497-day-chuyen-vang-18k-1.png" alt="" />
                                </a>
                            </div>
                            <div className="group-item-desc">
                                <h5 className="group-product-name"><a href="product-details.html">
                                    Dây chuyền Vàng 18K</a></h5>
                                <div className="price-box">
                                    <span className="price-regular">666.666.666đ</span>
                                    <span className="price-old"><del>999.999.999đ</del></span>
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
                                    <img src="assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-01.png" alt="" />
                                </a>
                            </div>
                            <div className="group-item-desc">
                                <h5 className="group-product-name"><a href="product-details.html">
                                    Kim cương 3,6ly G VS2 EX</a></h5>
                                <div className="price-box">
                                    <span className="price-regular">678.678.678đ</span>
                                    <span className="price-old"><del>789.789.789đ</del></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group-slide-item">
                        <div className="group-item">
                            <div className="group-item-thumb">
                                <a href="product-details.html">
                                    <img src="assets\img\product\Mat-day-chuyen\16\gmdd00h000010-mat-day-chuyen-kim-cuong-vang-14k-pnj-first-diamond-01.png" alt="" />
                                </a>
                            </div>
                            <div className="group-item-desc">
                                <h5 className="group-product-name"><a href="product-details.html">
                                    Mặt Dây chuyền Kim Cương Vàng 14K</a></h5>
                                <div className="price-box">
                                    <span className="price-regular">555.555.555đ</span>
                                    <span className="price-old"><del>666.666.666đ</del></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group-slide-item">
                        <div className="group-item">
                            <div className="group-item-thumb">
                                <a href="product-details.html">
                                    <img src="D:\Visual Code\swp\DiamondShop-Frontend\public\assets\img\product\Kim-cuong\kim-cuong-3,6ly-g-vs2-ex-01.png" alt="" />
                                </a>
                            </div>
                            <div className="group-item-desc">
                                <h5 className="group-product-name"><a href="product-details.html">
                                    Kim cương 3,6ly G VS2 EX</a></h5>
                                <div className="price-box">
                                    <span className="price-regular">678.678.678đ</span>
                                    <span className="price-old"><del>789.789.789đ</del></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sanphambanchay;

