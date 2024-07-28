
import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import '../slick-min'
import { Product_Daychuyen_Data } from '../Data/Product_daychuyen_data';
import { Product_Matdaychuyen_Data } from '../Data/Product_matdaychuyen_data';
import { Product_Nhan_Data } from '../Data/Product_nhan_data';
import { Product_Vongtay_Data } from '../Data/Product_vongtay_data';
import Du_lieu_san_pham_tt from './Du_lieu_san_pham_tt';
import { useTranslation } from "react-i18next"; 

function Sanphamtuongtu({ onProductClick }) {
    const productObj = JSON.parse(localStorage.getItem('product'));
    const [randomProducts, setRandomProducts] = useState([]);
    const { t } = useTranslation();
    useEffect(() => {

        let productsData;
        switch (productObj.categoryId) {
            case 1:
                productsData = Product_Nhan_Data;
                break;
            case 2:
                productsData = Product_Daychuyen_Data;
                break;
            case 3:
                productsData = Product_Matdaychuyen_Data;
                break;
            case 4:
                productsData = Product_Vongtay_Data;
                break;
            default:
                productsData = [];
        }
        setRandomProducts(getRandomProducts(productsData, 5));
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
    }, [productObj.categoryId]);
    function getRandomProducts(products, count) {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0 , count);
    }
    

    return (
        <div>
            <section className="related-products section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2 className="title">{t("similarProduct")}</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">

                            <div class="product-carousel-4 slick-row-10 slick-arrow-style">
                            {randomProducts.map((item) => (
                                    <div key={item.id}>
                                        <Du_lieu_san_pham_tt
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
                                            oldPrice={item.oldPrice}
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
    );
}

export default Sanphamtuongtu;
