import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import '../slick-min';
import Du_lieu_san_pham_nb from './Du_lieu_san_pham_nb';
import { Product_Nhan_Data } from '../Data/Product_nhan_data';
import { Product_Matdaychuyen_Data } from '../Data/Product_matdaychuyen_data';
import { Product_Daychuyen_Data } from '../Data/Product_daychuyen_data';
import { Product_Vongtay_Data } from '../Data/Product_vongtay_data';
import Du_lieu_san_pham_vtxmdc from './Du_lieu_san_pham_vtxmdc';
import { useTranslation } from 'react-i18next';

function Sanphamnoibat({ onProductClick }) {
    const [randomProductsNhan, setRandomProductsNhan] = useState([]);
    const [randomProductsDaychuyen, setRandomProductsDaychuyen] = useState([]);
    const [randomProductsMatdaychuyen, setRandomProductsMatdaychuyen] = useState([]);
    const [randomProductsVongtay, setrandomProductsVongtay] = useState([]);
    const { t } = useTranslation();//luon luon co de dich

    useEffect(() => {
        setRandomProductsNhan(getRandomProducts(Product_Nhan_Data, 5));
        setRandomProductsDaychuyen(getRandomProducts(Product_Daychuyen_Data, 5));
        setRandomProductsMatdaychuyen(getRandomProducts(Product_Matdaychuyen_Data, 5));
        setrandomProductsVongtay(getRandomProducts(Product_Vongtay_Data, 5));

        const initializeSlick = () => {
            if ($('.product-carousel-4').hasClass('slick-initialized')) {
                $('.product-carousel-4').slick('unslick');
            }

            $('.product-carousel-4').slick({
                speed: 1000,
                autoplay: true,
                slidesToShow: 4,
                adaptiveHeight: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            arrows: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false
                        }
                    }
                ]
            });
        };

        const timer = setTimeout(() => {
            initializeSlick();
        }, 100);

        return () => {
            clearTimeout(timer);
            if ($('.product-carousel-4').hasClass('slick-initialized')) {
                $('.product-carousel-4').slick('unslick');
            }
        };
    }, []);

    function getRandomProducts(products, count) {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    return (
        <div>
            <section className="product-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2 className="title">{t("featuredJewelry1")}</h2>
                                <p className="sub-title">{t("featuredJewelry2")}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="product-container">
                                <div className="product-tab-menu">
                                    <ul className="nav justify-content-center">
                                        <li>
                                            <a href="#tab1" className="active" data-bs-toggle="tab"> {t("ring")}</a>
                                        </li>
                                        <li>
                                            <a href="#tab2" data-bs-toggle="tab"> {t("necklace")}</a>
                                        </li>
                                        <li>
                                            <a href="#tab3" data-bs-toggle="tab"> {t("pendant")}</a>
                                        </li>
                                        <li>
                                            <a href="#tab4" data-bs-toggle="tab"> {t("bracelet")}</a>
                                        </li>
                                    </ul>
                                </div>

                                <section className="slider-area">
                                    <div className="hero-slider-active slick-arrow-style slick-arrow-style_hero slick-dot-style">
                                        <div className="tab-content">
                                            <div className="tab-pane fade show active" id="tab1">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    {randomProductsNhan.map((item) => (
                                                        <div key={item.id}>
                                                            <Du_lieu_san_pham_nb
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
                                                                categoryId={item.categoryId}
                                                                newPrice={item.newPrice}
                                                                description={item.description}
                                                                onProductClick={onProductClick}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab2">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    {randomProductsDaychuyen.map((item) => (
                                                        <div key={item.id}>
                                                            <Du_lieu_san_pham_nb
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
                                                                categoryId={item.categoryId}
                                                                newPrice={item.newPrice}
                                                                description={item.description}
                                                                onProductClick={onProductClick}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab3">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    {randomProductsMatdaychuyen.map((item) => (
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
                                                                categoryId={item.categoryId}
                                                                newPrice={item.newPrice}
                                                                description={item.description}
                                                                onProductClick={onProductClick}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab4">
                                                <div className="product-carousel-4 slick-row-10 slick-arrow-style">
                                                    {randomProductsVongtay.map((item) => (
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
                                                               categoryId={item.categoryId}
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sanphamnoibat;
