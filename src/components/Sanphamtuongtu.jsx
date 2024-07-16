import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Product_Daychuyen_Data } from '../Data/Product_daychuyen_data';
import { Product_Matdaychuyen_Data } from '../Data/Product_matdaychuyen_data';
import { Product_Nhan_Data } from '../Data/Product_nhan_data';
import { Product_Vongtay_Data } from '../Data/Product_vongtay_data';

import Du_lieu_san_pham_tt from './Du_lieu_san_pham_tt';

function Sanphamtuongtu({ onProductClick }) {
    const productObj = JSON.parse(localStorage.getItem('product'));
    const [randomProducts, setRandomProducts] = useState([]);

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
    }, [productObj.categoryId]);

    function getRandomProducts(products, count) {
        const shuffled = products.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const relatedSliderSettings = {
        speed: 1000,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><i className="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" className="slick-next"><i className="pe-7s-angle-right"></i></button>,
    };

    return (
        <div>
            <section className="related-products section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2 className="title">Sản phẩm tương tự</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...relatedSliderSettings} className="product-carousel-4 slick-row-10 slick-arrow-style">
                                {randomProducts.map((item) => (
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
    );
}

export default Sanphamtuongtu;
