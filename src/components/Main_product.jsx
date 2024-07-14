import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { HandleGetAll } from '../api/JewelryAPI';
import Du_lieu_san_pham from './Du_lieu_san_pham';
import { Product_Jewelry_Data } from '../Data/Product_jewelry_data';
function Main_product({ onProductClick }) {
    const [randomProductsJewelry, setRandomProductsJewelry] = useState([]);
    const ThirdSliderSettings = {
        speed: 1000,
        slidesToShow: 4,
        autoplay: true,
        infinite: true,
        rows: 2,
        adaptiveHeight: true,
        prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,
        slidesToScroll: 1
    };
    useEffect(()=>{
        function getRandomProductsJewelry(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsJewelry(getRandomProductsJewelry(Product_Jewelry_Data, 20));
    }, []);
   
    return (
        <div>
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
                                            {randomProductsJewelry.map((item) => (
                                                <div key={item.id}>
                                                        <Du_lieu_san_pham
                                                            productId={item.id}
                                                            image1={item.image1}
                                                            image2={item.image2}
                                                            image3={item.image3}
                                                            image4={item.image4}
                                                            label={item.label}
                                                            productName={item.productName}
                                                            categoryName={item.categoryName}
                                                            newPrice={item.newPrice}
                                                            description={item.description}
                                                            onProductClick={onProductClick}
                                                        />           
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

        </div>
    )
}

export default Main_product
