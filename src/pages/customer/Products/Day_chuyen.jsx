import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Du_lieu_san_pham from '../../../components/Du_lieu_san_pham';
import Filter_product from '../../../components/Filter_product';
import { Product_Daychuyen_Data } from '../../../Data/Product_daychuyen_data';
export default function Day_chuyen({onDayChuyenClick}) {
    const [sortOption, setSortOption] = useState('');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const parsePrice = (price) => {
        return parseFloat(price.replace(/[^\d]/g, '')) || 0;
    };

    const sortedProducts = Product_Daychuyen_Data.slice().sort((a, b) => {
        switch (sortOption) {
            case 'name-asc':
                return a.productName.localeCompare(b.productName);
            case 'name-desc':
                return b.productName.localeCompare(a.productName);
            case 'price-asc':
                return parsePrice(a.newPrice) - parsePrice(b.newPrice);
            case 'price-desc':
                return parsePrice(b.newPrice) - parsePrice(a.newPrice);
            default:
                return 0;
        }
    });

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Dây chuyền</li>
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
                                    {sortedProducts.map((item) => (
                                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-30">
                                            <Du_lieu_san_pham 
                                                productId={item.id}
                                                image1={item.image1}
                                                image2={item.image2}
                                                label={item.label}
                                                productName={item.productName}
                                                categoryName={item.categoryName}
                                                newPrice={item.newPrice}
                                                oldPrice={item.oldPrice}
                                                description={item.description}
                                                onProductClick={onDayChuyenClick}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-top not-visible">
                    <i className="fa fa-angle-up"></i>
                </div>
            </div>
            </div>

            )
}
