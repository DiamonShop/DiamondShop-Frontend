import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Du_lieu_san_pham from '../../../components/Du_lieu_san_pham';
import Du_lieu_san_pham_kc from '../../../components/Du_lieu_san_pham_kc';
import Filter_product from '../../../components/Filter_product';
import GetProductByName from '../../../Data/Product_all_data';

export default function Ket_qua_tim_kiem({ onProductClick }) {
    const [sortOption, setSortOption] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productCount, setProductCount] = useState(0);
    const itemsPerPage = 8;

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const txtSearchValue = query.get('txtSearchValue')?.toLowerCase() || '';

    useEffect(() => {
        const fetchProducts = async () => {
            const filtered = await GetProductByName(txtSearchValue);
            const validProducts = filtered.filter(item => Object.keys(item).length !== 0); // Filter out empty objects
            setProductCount(validProducts.length);
            setFilteredProducts(validProducts);
        };

        fetchProducts();
    }, [txtSearchValue]);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const sortedProducts = [...filteredProducts].sort((a, b) => {
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

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleClick = (event, pageNumber) => {
        event.preventDefault();
        if (pageNumber < 1 || pageNumber > Math.ceil(productCount / itemsPerPage)) return;
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productCount / itemsPerPage); i++) {
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
                                        <li className="breadcrumb-item">
                                            <Link to="/"><i className="fa fa-home"></i></Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Kết quả tìm kiếm
                                        </li>
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
                            {productCount > 0 ? (
                                <div className="shop-product-wrapper">
                                    <Filter_product count={productCount} sortOption={sortOption} handleSortChange={handleSortChange} />
                                    {currentProducts && currentProducts.length > 0 ? (
                                        <div className="shop-product-wrap grid-view row mbn-30">
                                            {currentProducts.map((item) => (
                                                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-30">
                                                    {item.productType === 'Jewelry' ? (
                                                        <Du_lieu_san_pham
                                                            productId={item.productId}
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
                                                    ) : (
                                                        <Du_lieu_san_pham_kc
                                                            productId={item.productId}
                                                            image1={item.image1}
                                                            image2={item.image2}
                                                            image3={item.image3}
                                                            image4={item.image4}
                                                            label={item.label}
                                                            Carat={item.carat}
                                                            Clarity={item.clarity}
                                                            Cut={item.cut}
                                                            Color={item.color}
                                                            Quantity={item.quantity}
                                                            productName={item.productName}
                                                            categoryName={item.categoryName}
                                                            newPrice={item.newPrice}
                                                            description={item.description}
                                                            onProductClick={onProductClick}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="no-products">
                                            <p>Không có sản phẩm nào được tìm thấy.</p>
                                        </div>
                                    )}
                                    <div className="pagination-area text-center">
                                        <ul className="pagination-box">
                                            <li>
                                                <a href="#" onClick={(e) => handleClick(e, currentPage - 1)}>
                                                    Trước
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
                                                <a href="#" onClick={(e) => handleClick(e, currentPage + 1)}>
                                                    Sau
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="no-products">
                                    <p>Không có sản phẩm nào được tìm thấy.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
