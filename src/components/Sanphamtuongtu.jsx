import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import '../slick-min'
import { Product_Daychuyen_Data } from '../Data/Product_daychuyen_data';
import { Product_Matdaychuyen_Data } from '../Data/Product_matdaychuyen_data';
import { Product_Nhan_Data } from '../Data/Product_nhan_data';
import { Product_Vongtay_Data } from '../Data/Product_vongtay_data';

import Du_lieu_san_pham_tt from './Du_lieu_san_pham_tt';
function Sanphamtuongtu({ onProductClick }) {
    const productObj = JSON.parse(localStorage.getItem('product'));
    const [randomProductsNhan, setRandomProductsNhan] = useState([]);
    const [randomProductsDaychuyen, setRandomProductsDaychuyen] = useState([]);
    const [randomProductsMatdaychuyen, setRandomProductsMatdaychuyen] = useState([]);
    const [randomProductsVongtay, setrandomProductsVongtay] = useState([]);

    useEffect(() => {
        function getRandomProductsNhan(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsNhan(getRandomProductsNhan(Product_Nhan_Data, 5));
        function getRandomProductsDaychuyen(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsDaychuyen(getRandomProductsDaychuyen(Product_Daychuyen_Data, 5));
        function getRandomProductsMatdaychuyen(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setRandomProductsMatdaychuyen(getRandomProductsMatdaychuyen(Product_Matdaychuyen_Data, 5));
        function getRandomProductsVongtay(products, count) {
            const shuffled = products.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        setrandomProductsVongtay(getRandomProductsVongtay(Product_Vongtay_Data, 5));
        const initializeSlick = () => {
            $('.product-carousel-4').slick({
                speed: 1000,
                autoplay: true,
                slidesToShow: 4,
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
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }]
            });

        };

        $(document).ready(initializeSlick);

       
      
        return () => {
            if ($('.product-carousel-4').hasClass('slick-initialized')) {
                $('.product-carousel-4').slick('unslick');
            }
        
        };
    }, []);

   

   
    return (

        <div>
            <section class="related-products section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-12">

                            <div class="section-title text-center">
                                <h2 class="title">Sản phẩm tương tự</h2>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">

                            <div class="product-carousel-4 slick-row-10 slick-arrow-style">

                                {productObj.categoryName === 'Nhẫn' && randomProductsNhan.map((item) => (
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
                                            newPrice={item.newPrice}
                                            description={item.description}
                                            onProductClick={onProductClick}
                                        />
                                    </div>
                                ))}

                                {productObj.categoryName === 'Dây chuyền' && randomProductsDaychuyen.map((item) => (
                                    <div key={item.id}>
                                        <Du_lieu_san_pham_tt
                                            productId={item.id}
                                            image1={item.image1}
                                            image2={item.image2}
                                            image3={item.image3}
                                            image4={item.image4}
                                            label={item.label}
                                            productName={item.productName}
                                            categoryName={item.categoryName}
                                            newPrice={item.newPrice}
                                            oldPrice={item.oldPrice}
                                            description={item.description}
                                            onProductClick={onProductClick}
                                        />
                                    </div>
                                ))}
                                {productObj.categoryName === 'Mặt dây chuyền' && randomProductsMatdaychuyen.map((item) => (
                                    <div key={item.id}>
                                        <Du_lieu_san_pham_tt
                                            productId={item.id}
                                            image1={item.image1}
                                            image2={item.image2}
                                            image3={item.image3}
                                            image4={item.image4}
                                            label={item.label}
                                            productName={item.productName}
                                            categoryName={item.categoryName}
                                            newPrice={item.newPrice}
                                            oldPrice={item.oldPrice}
                                            description={item.description}
                                            onProductClick={onProductClick}
                                        />
                                    </div>
                                ))}
                                {productObj.categoryName === 'Vòng tay' && randomProductsVongtay.map((item) => (
                                    <div key={item.id}>
                                        <Du_lieu_san_pham_tt
                                            productId={item.id}
                                            image1={item.image1}
                                            image2={item.image2}
                                            image3={item.image3}
                                            image4={item.image4}
                                            label={item.label}
                                            productName={item.productName}
                                            categoryName={item.categoryName}
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
    )
}

export default Sanphamtuongtu
