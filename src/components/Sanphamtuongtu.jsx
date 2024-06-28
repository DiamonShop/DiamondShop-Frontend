import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
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
        setRandomProductsNhan(getRandomProducts(Product_Nhan_Data, 5));
        setRandomProductsDaychuyen(getRandomProducts(Product_Daychuyen_Data, 5));
        setRandomProductsMatdaychuyen(getRandomProducts(Product_Matdaychuyen_Data, 5));
        setrandomProductsVongtay(getRandomProducts(Product_Vongtay_Data, 5));
    }, []);

    function getRandomProducts(products, count) {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const relatedSliderSettings = {
        speed: 1000,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToRoll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,
    };
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

                            <Slider {...relatedSliderSettings} class="product-carousel-4 slick-row-10 slick-arrow-style">

                                {productObj.categoryName === 'Nhẫn' && randomProductsNhan.map((item) => (
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

                            </Slider>


                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sanphamtuongtu
