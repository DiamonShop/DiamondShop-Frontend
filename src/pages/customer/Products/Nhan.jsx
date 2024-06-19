// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Du_lieu_san_pham from '../../../components/Du_lieu_san_pham';
// import { Product_Nhan_Data } from '../../../Data/Product_nhan_data';
// import Filter_product from '../../../components/Filter_product';

// export default function Nhan() {
//     const [sortOption, setSortOption] = useState('');
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // Giả sử Product_Nhan_Data đã được cập nhật với URL ảnh
//         setProducts(Product_Nhan_Data);
//     }, []);

//     const handleSortChange = (event) => {
//         setSortOption(event.target.value);
//     };

//     const parsePrice = (price) => {
//         return parseFloat(price.replace(/[^\d]/g, '')) || 0;
//     };

//     const sortedProducts = Product_Nhan_Data.slice().sort((a, b) => {
//         switch (sortOption) {
//             case 'name-asc':
//                 return a.productName.localeCompare(b.productName);
//             case 'name-desc':
//                 return b.productName.localeCompare(a.productName);
//                 case 'price-asc':
//                     return parsePrice(a.newPrice) - parsePrice(b.newPrice);
//                 case 'price-desc':
//                     return parsePrice(b.newPrice) - parsePrice(a.newPrice);
//             default:
//                 return 0;
//         }
//     });

//     return (
//         <div>
//             <div className="breadcrumb-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="breadcrumb-wrap">
//                                 <nav aria-label="breadcrumb">
//                                     <ul className="breadcrumb">
//                                         <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
//                                         <li className="breadcrumb-item active" aria-current="page">Nhẫn</li>
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="shop-main-wrapper section-padding">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="shop-product-wrapper">
//                                 <Filter_product sortOption={sortOption} handleSortChange={handleSortChange} />
//                                 <div className="shop-product-wrap grid-view row mbn-30">
//                                     {sortedProducts.map((item) => (
//                                         <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 mb-30">
//                                             <Du_lieu_san_pham
//                                                 productId={item.id}
//                                                 image1={item.image1}
//                                                 image2={item.image2}
//                                                 label={item.label}
//                                                 productName={item.productName}
//                                                 newPrice={item.newPrice}
//                                                 oldPrice={item.oldPrice}
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div className="paginatoin-area text-center">
//                                     <ul className="pagination-box">
//                                         <li><a className="previous" href="#"><i className="pe-7s-angle-left"></i></a></li>
//                                         <li className="active"><a href="#">1</a></li>
//                                         <li><a href="#">2</a></li>
//                                         <li><a href="#">3</a></li>
//                                         <li><a className="next" href="#"><i className="pe-7s-angle-right"></i></a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="scroll-top not-visible">
//                 <i className="fa fa-angle-up"></i>
//             </div>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Du_lieu_san_pham from '../../../components/Du_lieu_san_pham';
import { Product_Nhan_Data } from '../../../Data/Product_nhan_data';
import Filter_product from '../../../components/Filter_product';

export default function Nhan() {
    const [sortOption, setSortOption] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Giả sử Product_Nhan_Data đã được cập nhật với URL ảnh
        setProducts(Product_Nhan_Data);
    }, []);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const parsePrice = (price) => {
        return parseFloat(price.replace(/[^\d]/g, '')) || 0;
    };

    const sortedProducts = products.slice().sort((a, b) => {
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
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Nhẫn</li>
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
                                                newPrice={item.newPrice}
                                                oldPrice={item.oldPrice}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="paginatoin-area text-center">
                                    <ul className="pagination-box">
                                        <li><a className="previous" href="#"><i className="pe-7s-angle-left"></i></a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a className="next" href="#"><i className="pe-7s-angle-right"></i></a></li>
                                    </ul>
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
    );
}
