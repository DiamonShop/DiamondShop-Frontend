import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Du_lieu_san_pham_tt from './Du_lieu_san_pham_tt';
import { HandleGetAll } from '../api/JewelryAPI';

const productObj = JSON.parse(localStorage.getItem('product'));

function Sanphamtuongtu({ onProductClick }) {
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const allProducts = await HandleGetAll();
                console.log(allProducts);
                const similarProducts = allProducts.filter(product => product.categoryId === productObj.categoryId);
                setRandomProducts(getRandomProducts(similarProducts, 5));
            } catch (error) {
                console.error("There was an error fetching the jewelry data!", error);
            }
        };

        fetchProducts();
    }, []); // Dependency array is empty to prevent re-fetching

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
                                            categoryId={item.categoryId}
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
