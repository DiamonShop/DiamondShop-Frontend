import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
    const FirstSliderSettings = {
        fade: true,
        infinite: true,
		speed: 1000,
		dots: true,
		autoplay: true,
        arrows: true,
        //prevArrow: '<button type="button" class="slick-prev pull-left"><i class="pe-7s-angle-left"></i></button>',
		//nextArrow: '<button type="button" class="slick-next pull-right"><i class="pe-7s-angle-right"></i></button>',
        
      };
    const SecondSliderSettings = {
        speed: 1000,
		autoplay: true,
        infinite: true,
		slidesToShow: 4,
		adaptiveHeight: true,
		//prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
		//nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
		arrows: true,
        row: 1,
        coloum: 4,

    };
    const ThirdSliderSettings = {
        speed: 1000,
		slidesToShow: 4,
		autoplay: true,
        infinite: true,
		rows: 2,
		adaptiveHeight: true,
		//prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
		//nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
		slidesToScroll: 1
    };
    const First_FourthSliderSettings = {
        
            arrows: false,
            asNavFor: '.testimonial-thumb-carousel',    
        
        
    };
    const Second_FourthSliderSettings = {
        // product details slider nav active     
        speed: 1000,  
        slidesToShow: 3,
        asNavFor: '.testimonial-content-carousel',
        centerMode: true,
        arrows: true,
        centerPadding: 0,
        focusOnSelect: true
    };
    const FifthSliderSettings = {
            speed: 1000,
			infinite: true,
			rows: 4,
            autoplay: true,
			//prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
			//nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
			dots: true,
            slidesToShow: 1,
			
	
    };
    const SixthSliderSettings = {
        speed: 1000,
		slidesToShow: 4,
		adaptiveHeight: true,
        infinite: true,
        autoplay: true,
		//prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
		//nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
		slidesToScroll: 1,

    }
  return (
    <div>
      
    <section className="slider-area">
        <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
        <Slider {...FirstSliderSettings}>
            <div className="hero-single-slide hero-overlay">
                {/* <div className="hero-slider-item bg-img" data-bg="assets/img/slider/home2-slide1.jpg"> */}
                <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/home2-slide1.jpg)` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-content slide-1">
                                    <h2 className="slide-title">Flower Diamond<span>Collection</span></h2>
                                    <h4 className="slide-desc">Budget Jewelry Starting At $295.99</h4>
                                    <a href="shop.html" className="btn btn-hero">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

           
            <div className="hero-single-slide hero-overlay">
                {/* <div className="hero-slider-item bg-img" data-bg="assets/img/slider/home2-slide2.jpg"> */}
                <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/home2-slide2.jpg)` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-content slide-2">
                                    <h2 className="slide-title">New Diamond<span>& Wedding Rings</span></h2>
                                    <h4 className="slide-desc">Avail 15% off on Making Charges for all Jewelry</h4>
                                    <a href="shop.html" className="btn btn-hero">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

           
            <div className="hero-single-slide hero-overlay">
                {/* <div className="hero-slider-item bg-img" data-bg="assets/img/slider/home1-slide1.jpg"> */}
                <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/home1-slide1.jpg)` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-slider-content slide-3">
                                    <h2 className="slide-title">Grace Designer<span>Jewelry</span></h2>
                                    <h4 className="slide-desc">Rings, Occasion Pieces, Pandora & More.</h4>
                                    <a href="shop.html" className="btn btn-hero">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slider>   
        </div>
    </section>
   
    <div className="service-policy">
        <div className="container">
            <div className="policy-block section-padding">
                <div className="row mtn-30">
                    <div className="col-sm-6 col-lg-3">
                        <div className="policy-item">
                            <div className="policy-icon">
                                <i className="pe-7s-plane"></i>
                            </div>
                            <div className="policy-content">
                                <h6>Miễn phí vận chuyển</h6>
                                <p>Miễn phí vận chuyển cho tất cả đơn hàng</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="policy-item">
                            <div className="policy-icon">
                                <i className="pe-7s-help2"></i>
                            </div>
                            <div className="policy-content">
                                <h6>Chăm sóc khách hàng</h6>
                                <p>Hỗ trợ tư vấn 24/7</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="policy-item">
                            <div className="policy-icon">
                                <i className="pe-7s-back"></i>
                            </div>
                            <div className="policy-content">
                                <h6>Hoàn trả</h6>
                                <p>Hỗ trợ đổi trả trong vòng 30 ngày</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="policy-item">
                            <div className="policy-icon">
                                <i className="pe-7s-credit"></i>
                            </div>
                            <div className="policy-content">
                                <h6>Bảo mật</h6>
                                <p>Cam kết bảo mật thông tin khách hàng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <section className="product-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-12">
                   
                    <div className="section-title text-center">
                        <h2 className="title">Sản phẩm nổi bật</h2>
                        <p className="sub-title">Sản phẩm bán chạy trong tháng</p>
                    </div>
                  
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className="product-container">
                       
                        <div className="product-tab-menu">
                            <ul className="nav justify-content-center">
                                <li><a href="#tab1" className="active" data-bs-toggle="tab"> Nhẫn </a></li>
                                <li><a href="#tab2" data-bs-toggle="tab"> Dây chuyền </a></li>
                                <li><a href="#tab3" data-bs-toggle="tab"> Vòng tay </a></li>
                                <li><a href="#tab4" data-bs-toggle="tab"> Kim cương </a></li>
                            </ul>
                        </div>

                        <section className="slider-area"> 
                            <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">                       
                                <div className="tab-content">
                                          
                                    <div className="tab-pane fade show active" id="tab1">
                                        <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                            <Slider {...SecondSliderSettings}> 
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="assets/img/product/product-1.jpg" alt="product"/>
                                                            <img className="sec-img" src="assets/img/product/product-18.jpg" alt="product"/>
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
                                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">add to cart</button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
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
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">$60.00</span>
                                                            <span className="price-old"><del>$70.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="assets/img/product/product-2.jpg" alt="product"/>
                                                            <img className="sec-img" src="assets/img/product/product-17.jpg" alt="product"/>
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>sale</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">add to cart</button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">Handmade Golden Necklace</a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">$50.00</span>
                                                            <span className="price-old"><del>$80.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="assets/img/product/product-3.jpg" alt="product"/>
                                                            <img className="sec-img" src="assets/img/product/product-16.jpg" alt="product"/>
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">add to cart</button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
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
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">$99.00</span>
                                                            <span className="price-old"><del></del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="assets/img/product/product-4.jpg" alt="product"/>
                                                            <img className="sec-img" src="assets/img/product/product-15.jpg" alt="product"/>
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>sale</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>15%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">add to cart</button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
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
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">$55.00</span>
                                                            <span className="price-old"><del>$75.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="product-item">
                                                    <figure className="product-thumb">
                                                        <a href="product-details.html">
                                                            <img className="pri-img" src="assets/img/product/product-5.jpg" alt="product"/>
                                                            <img className="sec-img" src="assets/img/product/product-14.jpg" alt="product"/>
                                                        </a>
                                                        <div className="product-badge">
                                                            <div className="product-label new">
                                                                <span>new</span>
                                                            </div>
                                                            <div className="product-label discount">
                                                                <span>20%</span>
                                                            </div>
                                                        </div>
                                                        <div className="button-group">
                                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                        </div>
                                                        <div className="cart-hover">
                                                            <button className="btn btn-cart">add to cart</button>
                                                        </div>
                                                    </figure>
                                                    <div className="product-caption text-center">
                                                        <div className="product-identity">
                                                            <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                        <h6 className="product-name">
                                                            <a href="product-details.html">Citygold Exclusive Ring</a>
                                                        </h6>
                                                        <div className="price-box">
                                                            <span className="price-regular">$60.00</span>
                                                            <span className="price-old"><del>$70.00</del></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    
                                    <div className="tab-pane fade" id="tab2">
                                        <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                            <Slider {...SecondSliderSettings}> 
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-6.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-13.jpg" alt="product"/>
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
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-7.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-12.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$80.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-8.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-11.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$99.00</span>
                                                        <span className="price-old"><del></del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-9.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-10.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$55.00</span>
                                                        <span className="price-old"><del>$75.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-10.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-9.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Citygold Exclusive Ring</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3">
                                        <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                            <Slider {...SecondSliderSettings}>
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-11.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-8.jpg" alt="product"/>
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
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-12.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-7.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$80.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-13.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-6.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$99.00</span>
                                                        <span className="price-old"><del></del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-14.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-5.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$55.00</span>
                                                        <span className="price-old"><del>$75.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-15.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-4.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Citygold Exclusive Ring</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                            </Slider>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab4">
                                        <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                        <Slider {...SecondSliderSettings}>
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-16.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-3.jpg" alt="product"/>
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
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-17.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-2.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Handmade Golden Necklace</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$50.00</span>
                                                        <span className="price-old"><del>$80.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-18.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-1.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Perfect Diamond Jewelry</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$99.00</span>
                                                        <span className="price-old"><del></del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-12.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-9.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>sale</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>15%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Diamond Exclusive Ornament</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$55.00</span>
                                                        <span className="price-old"><del>$75.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="product-item">
                                                <figure className="product-thumb">
                                                    <a href="product-details.html">
                                                        <img className="pri-img" src="assets/img/product/product-7.jpg" alt="product"/>
                                                        <img className="sec-img" src="assets/img/product/product-14.jpg" alt="product"/>
                                                    </a>
                                                    <div className="product-badge">
                                                        <div className="product-label new">
                                                            <span>new</span>
                                                        </div>
                                                        <div className="product-label discount">
                                                            <span>20%</span>
                                                        </div>
                                                    </div>
                                                    <div className="button-group">
                                                        <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                                        <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                                    </div>
                                                    <div className="cart-hover">
                                                        <button className="btn btn-cart">add to cart</button>
                                                    </div>
                                                </figure>
                                                <div className="product-caption text-center">
                                                    <div className="product-identity">
                                                        <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                                    <h6 className="product-name">
                                                        <a href="product-details.html">Citygold Exclusive Ring</a>
                                                    </h6>
                                                    <div className="price-box">
                                                        <span className="price-regular">$60.00</span>
                                                        <span className="price-old"><del>$70.00</del></span>
                                                    </div>
                                                </div>
                                            </div>
                                            </Slider>
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
   
    <div className="banner-statistics-area">
        <div className="container">
            <div className="row row-20 mtn-20">
                <div className="col-sm-6">
                    <figure className="banner-statistics mt-20">
                        <a href="#">
                            <img src="assets/img/banner/img1-top.jpg" alt="product banner"/>
                        </a>
                        <div className="banner-content text-right">
                            <h5 className="banner-text1">BEAUTIFUL</h5>
                            <h2 className="banner-text2">Wedding<span>Rings</span></h2>
                            <a href="shop.html" className="btn btn-text">Shop Now</a>
                        </div>
                    </figure>
                </div>
                <div className="col-sm-6">
                    <figure className="banner-statistics mt-20">
                        <a href="#">
                            <img src="assets/img/banner/img2-top.jpg" alt="product banner"/>
                        </a>
                        <div className="banner-content text-center">
                            <h5 className="banner-text1">EARRINGS</h5>
                            <h2 className="banner-text2">Tangerine Floral <span>Earring</span></h2>
                            <a href="shop.html" className="btn btn-text">Shop Now</a>
                        </div>
                    </figure>
                </div>
                <div className="col-sm-6">
                    <figure className="banner-statistics mt-20">
                        <a href="#">
                            <img src="assets/img/banner/img3-top.jpg" alt="product banner"/>
                        </a>
                        <div className="banner-content text-center">
                            <h5 className="banner-text1">NEW ARRIVALLS</h5>
                            <h2 className="banner-text2">Pearl<span>Necklaces</span></h2>
                            <a href="shop.html" className="btn btn-text">Shop Now</a>
                        </div>
                    </figure>
                </div>
                <div className="col-sm-6">
                    <figure className="banner-statistics mt-20">
                        <a href="#">
                            <img src="assets/img/banner/img4-top.jpg" alt="product banner"/>
                        </a>
                        <div className="banner-content text-right">
                            <h5 className="banner-text1">NEW DESIGN</h5>
                            <h2 className="banner-text2">Diamond<span>Jewelry</span></h2>
                            <a href="shop.html" className="btn btn-text">Shop Now</a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
   
    <section className="feature-product section-padding">
        <div className="container">
            <section className="slider-area"> 
                <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
                    <div className="row">
                        <div className="col-12">
                        
                            <div className="section-title text-center">
                                <h2 className="title">Sản phẩm</h2>
                            </div>
                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-carousel-4_2 slick-row-10 slick-arrow-style">
                            <Slider {...ThirdSliderSettings}>
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-6.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-13.jpg" alt="product"/>
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
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$60.00</span>
                                            <span className="price-old"><del>$70.00</del></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-7.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-9.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-label discount">
                                                <span>new</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Handmade Golden Necklace</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$50.00</span>
                                            <span className="price-old"><del>$80.00</del></span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-8.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-11.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>new</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$99.00</span>
                                            <span className="price-old"><del></del></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-16.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-10.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-label discount">
                                                <span>15%</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Diamond Exclusive Ornament</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$55.00</span>
                                            <span className="price-old"><del>$75.00</del></span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-10.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-9.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>new</span>
                                            </div>
                                            <div className="product-label discount">
                                                <span>20%</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Citygold Exclusive Ring</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$60.00</span>
                                            <span className="price-old"><del>$70.00</del></span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-1.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-18.jpg" alt="product"/>
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
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">Gold</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$60.00</span>
                                            <span className="price-old"><del>$70.00</del></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-2.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-17.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-label discount">
                                                <span>new</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Handmade Golden Necklace</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$50.00</span>
                                            <span className="price-old"><del>$80.00</del></span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-3.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-16.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>new</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">Diamond</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Perfect Diamond Jewelry</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$99.00</span>
                                            <span className="price-old"><del></del></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-4.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-15.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>sale</span>
                                            </div>
                                            <div className="product-label discount">
                                                <span>15%</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">silver</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Diamond Exclusive Ornament</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$55.00</span>
                                            <span className="price-old"><del>$75.00</del></span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="product-item">
                                    <figure className="product-thumb">
                                        <a href="product-details.html">
                                            <img className="pri-img" src="assets/img/product/product-5.jpg" alt="product"/>
                                            <img className="sec-img" src="assets/img/product/product-14.jpg" alt="product"/>
                                        </a>
                                        <div className="product-badge">
                                            <div className="product-label new">
                                                <span>new</span>
                                            </div>
                                            <div className="product-label discount">
                                                <span>20%</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="pe-7s-like"></i></a>
                                            <a href="compare.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Compare"><i className="pe-7s-refresh-2"></i></a>
                                            <a href="#" data-bs-toggle="modal" data-bs-target="#quick_view"><span data-bs-toggle="tooltip" data-bs-placement="left" title="Quick View"><i className="pe-7s-search"></i></span></a>
                                        </div>
                                        <div className="cart-hover">
                                            <button className="btn btn-cart">add to cart</button>
                                        </div>
                                    </figure>
                                    <div className="product-caption text-center">
                                        <div className="product-identity">
                                            <p className="manufacturer-name"><a href="product-details.html">mony</a></p>
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
                                        <h6 className="product-name">
                                            <a href="product-details.html">Citygold Exclusive Ring</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="price-regular">$60.00</span>
                                            <span className="price-old"><del>$70.00</del></span>
                                        </div>
                                    </div>
                                </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
    

   
    <section className="testimonial-area section-padding bg-img" data-bg="assets/img/testimonial/testimonials-bg.jpg">
        <div className="container">
            <div className="row">
                <div className="col-12">
                   
                    <div className="section-title text-center">
                        <h2 className="title"> Ý kiến </h2>
                        <p className="sub-title">Kim cương lút xu rì</p>
                    </div>
                 
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                
                    <div className="testimonial-thumb-wrapper">
                    
                        <div className="testimonial-thumb-carousel">     
                        <Slider {...First_FourthSliderSettings}>               
                            <div className="testimonial-thumb">
                                <img src="assets/img/testimonial/tran-thanh.png" alt="testimonial-thumb"/>
                            </div>
                            <div className="testimonial-thumb">
                                <img src="assets/img/testimonial/ly-nha-ky-.png" alt="testimonial-thumb"/>
                            </div>
                            <div className="testimonial-thumb">
                                <img src="assets/img/testimonial/Johnny_Dang.png" alt="testimonial-thumb"/>
                            </div>
                            <div className="testimonial-thumb">
                                <img src="assets/img/testimonial/testimonial-2.png" alt="testimonial-thumb"/>
                            </div>    
                            </Slider>                 
                        </div>
                        
                    </div>
                    
                    <div className="testimonial-content-wrapper">
                    
                        <div className="testimonial-content-carousel">
                        <Slider {...Second_FourthSliderSettings}>
                            <div className="testimonial-content">
                                <p>Tôi đã khóc khi đã mua được sản phẩm tuyệt vời như thế này. Cảm ơn cửa hàng Enternal Sparkle</p>
                                <div className="ratings">
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                </div>
                                <h5 className="testimonial-author">Trấn Thành aka Thành Cry</h5>
                            </div>
                            <div className="testimonial-content">
                                <p>Ở nhà tôi đã có rất nhiều trang sức và kim cương nhưng khi tôi mua sắm tại Enternal Sparkle, tôi đã mua thêm nhiều cái nữa...</p>
                                <div className="ratings">
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                </div>
                                <h5 className="testimonial-author">lý nhã kì</h5>
                            </div>
                            <div className="testimonial-content">
                                <p>Tôi có một cửa hàng kim cương ở Texas, sau khi được trải nghiệm mua hàng ở đây tôi rất muốn hợp tác với Enternal Sparkle </p>
                                <div className="ratings">
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                </div>
                                <h5 className="testimonial-author">Johny Dang </h5>
                            </div>
                            <div className="testimonial-content">
                                <p>Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque</p>
                                <div className="ratings">
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                    <span><i className="fa fa-star-o"></i></span>
                                </div>
                                <h5 className="testimonial-author">Maria Mora</h5>
                            </div>
                            </Slider> 
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>
    </section>
  
    <section className="group-product-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="group-product-banner">
                        <figure className="banner-statistics">
                            <a href="#">
                                <img src="assets/img/banner/img-bottom-banner.jpg" alt="product banner"/>
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
                                                <img src="assets/img/product/product-1.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-3.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-5.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-7.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-9.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-11.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-13.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-15.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-17.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-16.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-12.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-11.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-7.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-2.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-18.jpg" alt=""/>
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
                                                <img src="assets/img/product/product-14.jpg" alt=""/>
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
   
    <div className="brand-logo section-padding pt-0">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="brand-logo-carousel slick-row-10 slick-arrow-style">
                    <Slider {...SixthSliderSettings}> 
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/img/brand/1.png" alt=""/>
                            </a>
                        </div>
                   
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/img/brand/2.png" alt=""/>
                            </a>
                        </div>
                 
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/img/brand/3.png" alt=""/>
                            </a>
                        </div>
                    
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/img/brand/4.png" alt=""/>
                            </a>
                        </div>
                      
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/img/brand/5.png" alt=""/>
                            </a>
                        </div>
                    
                        <div className="brand-item">
                            <a href="#">
                                <img src="assets/img/brand/6.png" alt=""/>
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
