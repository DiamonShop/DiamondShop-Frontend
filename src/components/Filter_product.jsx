import React from 'react'

function Filter_product(props) {
    return (
        <div>
            <div className="shop-top-bar">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6 order-2 order-md-1">
                        <div className="top-bar-left">
                            <div className="product-view-mode">
                                <a className="active" data-target="grid-view"
                                    data-bs-toggle="tooltip" title="Hiển thị lưới"><i
                                        className="fa fa-th"></i></a>
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
                                <select className="nice-select" name="sortby">
                                    <option value="trending">Độ liên quan</option>
                                    <option value="sales">Tên (A - Z)</option>
                                    <option value="sales">Tên (Z - A)</option>
                                    <option value="rating">Giá (Thấp &gt; Cao)</option>
                                    <option value="date">Đánh giá (Thâp nhất)</option>
                                    <option value="price-asc">Mẫu (A - Z)</option>
                                    <option value="price-asc">Mẫu (Z - A)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter_product
