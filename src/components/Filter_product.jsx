import React from 'react';

function Filter_product({ sortOption, handleSortChange }) {
    return (
        <div className="shop-top-bar">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 order-2 order-md-1">
                    <div className="top-bar-left">
                        <div className="product-view-mode">
                            <a className="active" data-target="grid-view" data-bs-toggle="tooltip" title="Hiển thị lưới">
                                <i className="fa fa-th"></i>
                            </a>
                        </div>
                        <div className="product-amount">
                            <p>Hiển thị 1–16 trên 21 kết quả</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 order-1 order-md-2">
                    <div className="top-bar-right">
                        <div className="product-short">
                            <p>Liệt kê theo: </p>
                            <select className="nice-select" name="sortby" value={sortOption} onChange={handleSortChange}>
                                <option value="name-asc">Tên (A - Z)</option>
                                <option value="name-desc">Tên (Z - A)</option>
                                <option value="price-asc">Giá (Thấp &gt; Cao)</option>
                                <option value="price-desc">Giá (Cao &gt; Thấp)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter_product;
