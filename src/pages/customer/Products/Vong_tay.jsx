import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product_Vongtay_Data } from '../../../Data/Product_vongtay_data';
import Filter_product from '../../../components/Filter_product';
import Du_lieu_san_pham_vtxmdc from '../../../components/Du_lieu_san_pham_vtxmdc';
import { useTranslation } from 'react-i18next';

export default function Vongtay({ onProductClick }) {
    const [sortOption, setSortOption] = useState('');
    const { t } = useTranslation();

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };


    const sortedProducts = Product_Vongtay_Data.slice().sort((a, b) => {
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
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">{t("bracelet")}</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-main-wrapper section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop-product-wrapper">
                                <Filter_product sortOption={sortOption} handleSortChange={handleSortChange} />
                                <div className="shop-product-wrap grid-view row mbn-30">
                                    {currentProducts.map((item) => (
                                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-30">
                                            <Du_lieu_san_pham_vtxmdc
                                                productId={item.id}
                                                image1={item.image1}
                                                label={item.label}
                                                material={item.material}
                                                mainDiamondName={item.mainDiamondName}
                                                sideDiamondName={item.sideDiamondName}
                                                mainDiamondQuantity={item.mainDiamondQuantity}
                                                sideDiamondQuantity={item.sideDiamondQuantity}
                                                productName={item.productName}
                                                stock={item.stock}
                                                categoryName={item.categoryName}
                                                categoryId={item.categoryId}
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
    );
}
