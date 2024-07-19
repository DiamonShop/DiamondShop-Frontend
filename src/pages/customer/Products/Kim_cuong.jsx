import React, { useState } from 'react'
import Filter_product from '../../../components/Filter_product';
import { Product_kimcuong3_6_data } from '../../../Data/Product_kimcuong3.6_data';
import Du_lieu_san_pham from '../../../components/Du_lieu_san_pham';
export default function Kim_cuong({ onProductClick }) {
    const [sortOption, setSortOption] = useState('');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortedProducts = Product_kimcuong3_6_data.slice().sort((a, b) => {
        switch (sortOption) {
            case 'name-asc':
                return a.productName.localeCompare(b.productName);
            case 'name-desc':
                return b.productName.localeCompare(a.productName);
            case 'price-asc':
                return a.newPrice - b.newPrice;
            case 'price-desc':
                return b.newPrice - a.newPrice;
            default:
                return 0;
        }
    });

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);  //Bắt đầu từ trang 1
    const itemsPerPage = 8;
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleClick = (event, pageNumber) => {
        event.preventDefault();
        setCurrentPage(pageNumber);
    };

    // Create pagination items
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedProducts.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div className="hero-slider-item bg-img" style={{ backgroundImage: `url(/assets/img/slider/label-kim-cuong.png)` }}>

            </div>
            <div className="shop-main-wrapper section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="shop-product-wrapper">
                                <div className="shop-product-wrapper">
                                    <Filter_product sortOption={sortOption} handleSortChange={handleSortChange} />
                                    <div className="shop-product-wrap grid-view row mbn-30">
                                        {currentProducts.map((item) => (
                                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-30">
                                                <Du_lieu_san_pham
                                                    productId={item.id}
                                                    image1={item.image1}
                                                    image2={item.image2}
                                                    image3={item.image3}
                                                    label={item.label}
                                                    productName={item.productName}
                                                    categoryName={item.categoryName}
                                                    newPrice={item.newPrice}

                                                    description={item.description}
                                                    onProductClick={onProductClick}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="pagination-area text-center">
                                        <ul className="pagination-box">
                                            <li>
                                                <a href="#" onClick={(e) => handleClick(e, 1)}>
                                                    <i className="pe-7s-angle-left"></i>
                                                </a>
                                            </li>
                                            {pageNumbers.map(number => (
                                                <li key={number} className={currentPage === number ? 'active' : ''}>
                                                    <a href="#" onClick={(e) => handleClick(e, number)}>
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                            <li>
                                                <a href="#" onClick={(e) => handleClick(e, pageNumbers.length)}>
                                                    <i className="pe-7s-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>




            <div className="scroll-top not-visible">
                <i className="fa fa-angle-up"></i>
            </div>


        </div>
    )
}
