import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../slick-min'
import { HandleGetAll } from '../api/JewelryAPI';
import { Product_Jewelry_Data } from '../Data/Product_jewelry_data';
import Du_lieu_san_pham_vtxmdc from './Du_lieu_san_pham_vtxmdc';
import { useTranslation } from "react-i18next";// luon luon co de dich
function Main_product({ onProductClick }) {
    const { t } = useTranslation();//luon luon co de dich
    const [randomProductsJewelry, setRandomProductsJewelry] = useState([]);

    useEffect(() => {
        function getRandomProductsJewelry(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsJewelry(getRandomProductsJewelry(Product_Jewelry_Data, 10));

        const initializeSlick = () => {
            if ($('.product-carousel-4_2').hasClass('slick-initialized')) {
                $('.product-carousel-4_2').slick('unslick');
            }
            $('.product-carousel-4_2').slick({
                speed: 1000,
                slidesToShow: 4,
                autoplay: true,
                rows: 2,
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
                        arrows: false,
                        rows: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        rows: 1
                    }
                }]
            });
        };

        const timer = setTimeout(() => {
            initializeSlick();
        }, 100);

        return () => {
            clearTimeout(timer);
            if ($('.product-carousel-4_2').hasClass('slick-initialized')) {
                $('.product-carousel-4_2').slick('unslick');
            }
        };
    }, []);

    return (
        <div>
            <section className="feature-product section-padding">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2 className="title">{t("product")}</h2>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-carousel-4_2 slick-row-10 slick-arrow-style">
                                {randomProductsJewelry.map((item) => (
                                    <div key={item.id}>
                                        <Du_lieu_san_pham_vtxmdc
                                            productId={item.id}
                                            image1={item.image1}
                                            image2={item.image2}
                                            image3={item.image3}
                                            image4={item.image4}
                                            label={item.label}
                                            material={item.material}
                                            mainDiamondName={item.mainDiamondName}
                                            sideDiamondName={item.sideDiamondName}
                                            mainDiamondQuantity={item.mainDiamondQuantity}
                                            sideDiamondQuantity={item.sideDiamondQuantity}
                                            jewelrySizes={item.jewelrySizes}
                                            productName={item.productName}
                                            categoryName={item.categoryName}
                                            newPrice={item.newPrice}
                                            description={item.description}
                                            onProductClick={onProductClick}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main_product
