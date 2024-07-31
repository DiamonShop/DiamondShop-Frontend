// import React, { useEffect, useRef, useState } from 'react';
// import $ from 'jquery';
// import '../../../slick-min'
// import { Link } from 'react-router-dom';
// import { formatCurrency } from '../../../utils/NumberFormat';
// import { handleAddProductToOrder, handleCreateOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
// import { decodeToken } from '../../../api/TokenAPI';
// import Sanphamtuongtu from '../../../components/Sanphamtuongtu';
// import Mota_danhgia from '../../../components/Mota_danhgia';
// import StarRating from '../../../components/StarRating';
// import { notification } from 'antd';
// import { useTranslation } from 'react-i18next';

// export default function Chi_tiet_san_pham() {
//     const initialProductObj = JSON.parse(localStorage.getItem('product'));
//     const [productObj, setProductObj] = useState(initialProductObj);
//     const [quantity, setQuantity] = useState(1);
//     const [rating, setRating] = useState(0);
//     const [reviewCount, setReviewCount] = useState(0);
//     const [api, contextHolder] = notification.useNotification();
//     const [averageRating, setAverageRating] = useState(0);
//     const [jewelrySizes, setJewelrySizes] = useState([]);
//     const { t } = useTranslation();

//     const handleIncrement = () => {
//         setQuantity(prevQuantity => prevQuantity + 1);
//     };

//     const handleDecrement = () => {
//         setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
//     };

//     const openNotificationWithIcon = (type, message, description) => {
//         api[type]({
//             message: message,
//             description: description,
//             duration: 1.5,
//         });
//     };

//     const handleAddToCart = async () => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             const userId = decodeToken(token).sid;
//             const orders = await handleGetOrderByUserId(parseInt(userId, 10));
//             if (orders != null) {
//                 for (const item of orders) {
//                     if (item.status === 'Ordering') {
//                         await handleAddProductToOrder(item.orderId, productObj.productId, quantity);
//                         openNotificationWithIcon('success', `${t("success")}`, `${t("productAddSuccess")}`);
//                         break;
//                     } else if (item.status === 'Completed' || item.status === 'Shipping') {
//                         const orderId = await handleCreateOrder(userId);
//                         await handleAddProductToOrder(orderId, productObj.productId, quantity);
//                         openNotificationWithIcon('success', `${t("success")}`, `${t("productAddSuccess")}`);
//                         break;
//                     }
//                 }
//             } else {
//                 const orderId = await handleCreateOrder(userId);
//                 const order = await handleGetOrderByUserId(parseInt(userId, 10));
//                 for (const item of order) {
//                     if (item.status === 'Ordering' && item.orderId === orderId) {
//                         await handleAddProductToOrder(orderId, productObj.productId, quantity);
//                         openNotificationWithIcon('success', `${t("success")}`, `${t("productAddSuccess")}`);
//                         break;
//                     }
//                 }
//             }
//         } else {
//             openNotificationWithIcon('warning', `${t("warning")}`, `${t("logintoOrder")}`, 'top');
//         }
//     };

//     const updateReviewCountAndAverageRating = (feedbackCount, avgRating) => {
//         setReviewCount(feedbackCount);
//         setAverageRating(avgRating);
//     };

//     useEffect(() => {
//         if (productObj && productObj.jewelrySizes) {
//             setJewelrySizes(productObj.jewelrySizes);
//             console.log('Jewelry Sizes:', productObj.jewelrySizes);
//         } else {
//             console.log('Product Object or Jewelry Sizes not found:', productObj);
//         }
//     }, [productObj]);

//     useEffect(() => {
//         const initSlickSliders = () => {
//             $('.product-large-slider').slick({
//                 fade: true,
//                 arrows: false,
//                 speed: 1000,
//                 asNavFor: '.pro-nav'
//             });

//             $('.pro-nav').slick({
//                 slidesToShow: 3,
//                 asNavFor: '.product-large-slider',
//                 centerMode: true,
//                 speed: 1000,
//                 centerPadding: 0,
//                 focusOnSelect: true,
//                 prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-chevron-left"></i></button>',
//                 nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-chevron-right"></i></button>',
//                 responsive: [{
//                     breakpoint: 576,
//                     settings: {
//                         slidesToShow: 3,
//                     }
//                 }]
//             });
//         };

//         const timer = setTimeout(() => {
//             initSlickSliders();
//         }, 100); // Adjust the delay as needed

//         $('select').niceSelect();
//         $('.img-zoom').zoom();

//         return () => {
//             clearTimeout(timer);
//             $('select').niceSelect('destroy');
//             $('.img-zoom').trigger('zoom.destroy');
//         };
//     }, []);

    

//     return (
//         <div>
//             {contextHolder}
//             <div className="breadcrumb-area">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="breadcrumb-wrap">
//                                 <nav aria-label="breadcrumb">
//                                     <ul className="breadcrumb">
//                                         <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
//                                         <li className="breadcrumb-item"><Link to={`/${productObj.categoryName}`}>{productObj.categoryName}</Link></li>
//                                         <li className="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="shop-main-wrapper section-padding pb-0">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 order-1 order-lg-2">
//                             <div className="product-details-inner">
//                                 <div className="row">
//                                     {productObj.categoryName === 'Mặt dây chuyền' || productObj.categoryName === 'Vòng tay' ? (
//                                         <div className="col-lg-5">
//                                             <div className="product-large-slider">
//                                                 <div className="pro-large-img img-zoom">
//                                                     <img src={productObj.image1} alt="product-details" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div className="col-lg-5">
//                                             <div className="product-large-slider">
//                                                 <div className="pro-large-img img-zoom">
//                                                     <img src={productObj.image1} alt="product-details" />
//                                                 </div>
//                                                 <div className="pro-large-img img-zoom">
//                                                     <img src={productObj.image2} alt="product-details" />
//                                                 </div>
//                                                 <div className="pro-large-img img-zoom">
//                                                     <img src={productObj.image3} alt="product-details" />
//                                                 </div>
//                                                 <div className="pro-large-img img-zoom">
//                                                     <img src={productObj.image4} alt="product-details" />
//                                                 </div>
//                                             </div>
//                                             <div class="pro-nav slick-row-10 slick-arrow-style">
//                                                 <div className="pro-nav-thumb">
//                                                     <img src={productObj.image1} alt="product-details" />
//                                                 </div>
//                                                 <div className="pro-nav-thumb">
//                                                     <img src={productObj.image2} alt="product-details" />
//                                                 </div>
//                                                 <div className="pro-nav-thumb">
//                                                     <img src={productObj.image3} alt="product-details" />
//                                                 </div>
//                                                 <div className="pro-nav-thumb">
//                                                     <img src={productObj.image4} alt="product-details" />
//                                                 </div>
//                                             </div>
//                                         </div>

//                                     )}
//                                     <div className="col-lg-7">
//                                         <div className="product-details-des">
//                                             <h3 className="product-name">{productObj.productName}</h3>
//                                             <div className="ratings d-flex align-items-center">
//                                                 <span><i className="fa fa-star"></i></span>
//                                                 <span><i className="fa fa-star"></i></span>
//                                                 <span><i className="fa fa-star"></i></span>
//                                                 <span><i className="fa fa-star"></i></span>
//                                                 <span><i className="fa fa-star"></i></span>
//                                                 <div className="pro-review">
//                                                     <span>{reviewCount} Review{reviewCount !== 1 ? 's' : ''}</span>
//                                                 </div>
//                                                 <div className="average-rating">
//                                                     <span>({averageRating} )</span>
//                                                 </div>
//                                             </div>

//                                             <div className="price-box">
//                                                 <span className="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
//                                             </div>

//                                             <p className='jewelry-filter-line'>------------------------------------------------------------------------------------</p>
//                                             {productObj.categoryName === 'Dây chuyền' ? (
//                                                 <ul class="jewelry-filter-container">
//                                                     <li class="filter-group">
//                                                         <h6 className='filter-name-jewelry'>{t("material")}:</h6>
//                                                         <select className='nice-select'>
//                                                             <option value="Vàng">{productObj.material}</option>
//                                                         </select>
//                                                     </li>
//                                                     <li class="filter-group">
//                                                         <div class="quantity-cart-box d-flex align-items-center">
//                                                             <h6 className='filter-name-jewelry'>{t("cartQuantity")}:</h6>
//                                                             <div class="quantity">
//                                                                 <div class="pro-qty">
//                                                                     <span className=" qtybtn" onClick={handleDecrement}>-</span>
//                                                                     <input
//                                                                         name='txtQuantity'
//                                                                         type="text"
//                                                                         value={quantity}
//                                                                         readOnly
//                                                                     />
//                                                                     <span className=" qtybtn" onClick={handleIncrement}>+</span>

//                                                                 </div>
//                                                             </div>
//                                                         </div>
                                                        
//                                                     </li>
//                                                 </ul>
//                                             ) : (

//                                                 <ul class="jewelry-filter-container">
//                                                     <li class="filter-group">
//                                                         <h6 className='filter-name-jewelry'>{t("material")}:</h6>
//                                                         <select className='nice-select'>
//                                                             <option value="Vàng">{productObj.material}</option>
//                                                         </select>
//                                                     </li>
//                                                     <li class="filter-group">
//                                                         <h6 className='filter-name-jewelry' >{t("main")}:</h6>
//                                                         <select className='nice-select' >
//                                                             <option value="VS2">{productObj.mainDiamondName} x{productObj.mainDiamondQuantity}</option>
//                                                         </select>
//                                                     </li>
//                                                     <li class="filter-group">
//                                                         <h6 className='filter-name-jewelry'>{t("second")}:</h6>
//                                                         <select  >
//                                                             <option value="VS2">{productObj.sideDiamondName} x{productObj.sideDiamondQuantity}</option>
//                                                         </select>
//                                                     </li>
//                                                     <li class="filter-group">
//                                                         {productObj && productObj.categoryName === 'Nhẫn' && (
//                                                             <>
//                                                                 <label htmlFor="jewelry-size" className="filter-name-jewelry">Size:</label>
//                                                                 <select id="jewelry-size" className="jewelry-size-dropdown">
//                                                                     {Array.isArray(productObj.jewelrySizes) && productObj.jewelrySizes.map((item, index) => (
//                                                                         <option key={index} value={item.quantity}>
//                                                                             {item.size}
//                                                                         </option>
//                                                                     ))}
//                                                                 </select>
//                                                                 <Link to="/Huongdandoni" className="huong-dan-do-ni">{t("ringMeasurementGuide")} (Size)</Link>
//                                                             </>
//                                                         )}

//                                                     </li>
//                                                     <li class="filter-group">
//                                                         <div class="quantity-cart-box d-flex align-items-center">
//                                                             <h6 className='filter-name-jewelry'>{t("cartQuantity")}:</h6>
//                                                             <div class="quantity">
//                                                                 <div class="pro-qty">
//                                                                     <span className=" qtybtn" onClick={handleDecrement}>-</span>
//                                                                     <input
//                                                                         name='txtQuantity'
//                                                                         type="text"
//                                                                         value={quantity}
//                                                                         readOnly
//                                                                     />
//                                                                     <span className=" qtybtn" onClick={handleIncrement}>+</span>

//                                                                 </div>
//                                                             </div>
//                                                         </div>

//                                                     </li>
//                                                 </ul>

//                                             )}
//                                             <div class="button-them-vao-gio-hang">
//                                                 <div class="action_link">
//                                                     <a class="btn btn-cart2" onClick={handleAddToCart}>{t("addtoCart")}</a>

//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <Mota_danhgia
//                                 productId={productObj.productId}
//                                 onReviewCountChange={(count, avgRating) => updateReviewCountAndAverageRating(count, avgRating)}
//                             />

//                         </div>
//                     </div>
//                 </div>
//                 <Sanphamtuongtu />
//                 <div className="scroll-top not-visible">
//                     <i className="fa fa-angle-up"></i>
//                 </div>
//             </div>
//         </div>

//     );
// }
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import '../../../slick-min'
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/NumberFormat';
import { handleAddProductToOrder, handleCreateOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { decodeToken } from '../../../api/TokenAPI';
import Sanphamtuongtu from '../../../components/Sanphamtuongtu';
import Mota_danhgia from '../../../components/Mota_danhgia';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

export default function Chi_tiet_san_pham() {
    const initialProductObj = JSON.parse(localStorage.getItem('product'));
    const [productObj, setProductObj] = useState(initialProductObj);
    const [quantity, setQuantity] = useState(1);
    const [maxQuantity, setMaxQuantity] = useState(1);
    const [rating, setRating] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);
    const [api, contextHolder] = notification.useNotification();
    const [averageRating, setAverageRating] = useState(0);
    const [jewelrySizes, setJewelrySizes] = useState([]);
    const { t } = useTranslation();

    const handleIncrement = () => {
        setQuantity(prevQuantity => (prevQuantity < maxQuantity ? prevQuantity + 1 : prevQuantity));
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const openNotificationWithIcon = (type, message, description) => {
        api[type]({
            message: message,
            description: description,
            duration: 1.5,
        });
    };

    const handleAddToCart = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const userId = decodeToken(token).sid;
            const orders = await handleGetOrderByUserId(parseInt(userId, 10));
            if (orders != null) {
                for (const item of orders) {
                    if (item.status === 'Ordering') {
                        await handleAddProductToOrder(item.orderId, productObj.productId, quantity);
                        openNotificationWithIcon('success', `${t("success")}`, `${t("productAddSuccess")}`);
                        break;
                    } else if (item.status === 'Completed' || item.status === 'Shipping') {
                        const orderId = await handleCreateOrder(userId);
                        await handleAddProductToOrder(orderId, productObj.productId, quantity);
                        openNotificationWithIcon('success', `${t("success")}`, `${t("productAddSuccess")}`);
                        break;
                    }
                }
            } else {
                const orderId = await handleCreateOrder(userId);
                const order = await handleGetOrderByUserId(parseInt(userId, 10));
                for (const item of order) {
                    if (item.status === 'Ordering' && item.orderId === orderId) {
                        await handleAddProductToOrder(orderId, productObj.productId, quantity);
                        openNotificationWithIcon('success', `${t("success")}`, `${t("productAddSuccess")}`);
                        break;
                    }
                }
            }
        } else {
            openNotificationWithIcon('warning', `${t("warning")}`, `${t("logintoOrder")}`, 'top');
        }
    };

    const updateReviewCountAndAverageRating = (feedbackCount, avgRating) => {
        setReviewCount(feedbackCount);
        setAverageRating(avgRating);
    };

    const handleSizeChange = (e) => {
        const selectedSize = e.target.value;
        const selectedSizeObj = jewelrySizes.find(size => size.size === selectedSize);
        if (selectedSizeObj) {
            setMaxQuantity(selectedSizeObj.quantity);
            setQuantity(1); // Reset quantity về 1 mỗi khi đổi size
        }
    };

    useEffect(() => {
        if (productObj && productObj.jewelrySizes) {
            setJewelrySizes(productObj.jewelrySizes);
            const initialSize = productObj.jewelrySizes[0];
            setMaxQuantity(initialSize ? initialSize.quantity : 1);
        }
    }, [productObj]);

    useEffect(() => {
        const initSlickSliders = () => {
            $('.product-large-slider').slick({
                fade: true,
                arrows: false,
                speed: 1000,
                asNavFor: '.pro-nav'
            });

            $('.pro-nav').slick({
                slidesToShow: 3,
                asNavFor: '.product-large-slider',
                centerMode: true,
                speed: 1000,
                centerPadding: 0,
                focusOnSelect: true,
                prevArrow: '<button type="button" class="slick-prev"><i class="lnr lnr-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="lnr lnr-chevron-right"></i></button>',
                responsive: [{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                    }
                }]
            });
        };

        const timer = setTimeout(() => {
            initSlickSliders();
        }, 100); // Adjust the delay as needed

        $('select').niceSelect();
        $('.img-zoom').zoom();

        return () => {
            clearTimeout(timer);
            $('select').niceSelect('destroy');
            $('.img-zoom').trigger('zoom.destroy');
        };
    }, []);

    return (
        <div>
            {contextHolder}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li className="breadcrumb-item"><Link to={`/${productObj.categoryName}`}>{productObj.categoryName}</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-main-wrapper section-padding pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 order-1 order-lg-2">
                            <div className="product-details-inner">
                                <div className="row">
                                    {productObj.categoryName === 'Mặt dây chuyền' || productObj.categoryName === 'Vòng tay' ? (
                                        <div className="col-lg-5">
                                            <div className="product-large-slider">
                                                <div className="pro-large-img img-zoom">
                                                    <img src={productObj.image1} alt="product-details" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-lg-5">
                                            <div className="product-large-slider">
                                                <div className="pro-large-img img-zoom">
                                                    <img src={productObj.image1} alt="product-details" />
                                                </div>
                                                <div className="pro-large-img img-zoom">
                                                    <img src={productObj.image2} alt="product-details" />
                                                </div>
                                                <div className="pro-large-img img-zoom">
                                                    <img src={productObj.image3} alt="product-details" />
                                                </div>
                                                <div className="pro-large-img img-zoom">
                                                    <img src={productObj.image4} alt="product-details" />
                                                </div>
                                            </div>
                                            <div class="pro-nav slick-row-10 slick-arrow-style">
                                                <div className="pro-nav-thumb">
                                                    <img src={productObj.image1} alt="product-details" />
                                                </div>
                                                <div className="pro-nav-thumb">
                                                    <img src={productObj.image2} alt="product-details" />
                                                </div>
                                                <div className="pro-nav-thumb">
                                                    <img src={productObj.image3} alt="product-details" />
                                                </div>
                                                <div className="pro-nav-thumb">
                                                    <img src={productObj.image4} alt="product-details" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-lg-7">
                                        <div className="product-details-des">
                                            <h3 className="product-name">{productObj.productName}</h3>
                                            <div className="ratings d-flex align-items-center">
                                                <span><i className="fa fa-star"></i></span>
                                                <span><i className="fa fa-star"></i></span>
                                                <span><i className="fa fa-star"></i></span>
                                                <span><i className="fa fa-star"></i></span>
                                                <span><i className="fa fa-star"></i></span>
                                                <div className="pro-review">
                                                    <span>{reviewCount} Review{reviewCount !== 1 ? 's' : ''}</span>
                                                </div>
                                                <div className="average-rating">
                                                    <span>({averageRating} )</span>
                                                </div>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
                                            </div>
                                            <p className='jewelry-filter-line'>------------------------------------------------------------------------------------</p>
                                            {productObj.categoryName === 'Dây chuyền' ? (
                                                <ul className="jewelry-filter-container">
                                                    <li className="filter-group">
                                                        <h6 className='filter-name-jewelry'>{t("material")}:</h6>
                                                        <select className='nice-select'>
                                                            <option value="Vàng">{productObj.material}</option>
                                                        </select>
                                                    </li>
                                                    <li className="filter-group">
                                                        <div className="quantity-cart-box d-flex align-items-center">
                                                            <h6 className='filter-name-jewelry'>{t("cartQuantity")}:</h6>
                                                            <div className="quantity">
                                                                <div className="pro-qty">
                                                                    <span className=" qtybtn" onClick={handleDecrement}>-</span>
                                                                    <input
                                                                        name='txtQuantity'
                                                                        type="text"
                                                                        value={quantity}
                                                                        readOnly
                                                                    />
                                                                    <span className=" qtybtn" onClick={handleIncrement}>+</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            ) : (
                                                <ul className="jewelry-filter-container">
                                                    <li className="filter-group">
                                                        <h6 className='filter-name-jewelry'>{t("material")}:</h6>
                                                        <select className='nice-select'>
                                                            <option value="Vàng">{productObj.material}</option>
                                                        </select>
                                                    </li>
                                                    <li className="filter-group">
                                                        <h6 className='filter-name-jewelry'>{t("main")}:</h6>
                                                        <select className='nice-select' >
                                                            <option value="VS2">{productObj.mainDiamondName} x{productObj.mainDiamondQuantity}</option>
                                                        </select>
                                                    </li>
                                                    <li className="filter-group">
                                                        <h6 className='filter-name-jewelry'>{t("second")}:</h6>
                                                        <select className='nice-select'>
                                                            <option value="VS2">{productObj.sideDiamondName} x{productObj.sideDiamondQuantity}</option>
                                                        </select>
                                                    </li>
                                                    <li className="filter-group">
                                                        {productObj && productObj.categoryName === 'Nhẫn' && (
                                                            <>
                                                                <label htmlFor="jewelry-size" className="filter-name-jewelry">Size:</label>
                                                                <select id="jewelry-size" className="jewelry-size-dropdown" onChange={handleSizeChange}>
                                                                    {Array.isArray(productObj.jewelrySizes) && productObj.jewelrySizes.map((item, index) => (
                                                                        <option key={index} value={item.size}>
                                                                            {item.size}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                                <Link to="/Huongdandoni" className="huong-dan-do-ni">{t("ringMeasurementGuide")} (Size)</Link>
                                                            </>
                                                        )}
                                                    </li>
                                                    <li className="filter-group">
                                                        <div className="quantity-cart-box d-flex align-items-center">
                                                            <h6 className='filter-name-jewelry'>{t("cartQuantity")}:</h6>
                                                            <div className="quantity">
                                                                <div className="pro-qty">
                                                                    <span className=" qtybtn" onClick={handleDecrement}>-</span>
                                                                    <input
                                                                        name='txtQuantity'
                                                                        type="text"
                                                                        value={quantity}
                                                                        readOnly
                                                                    />
                                                                    <span className=" qtybtn" onClick={handleIncrement}>+</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )}
                                            <div className="button-them-vao-gio-hang">
                                                <div className="action_link">
                                                    <a className="btn btn-cart2" onClick={handleAddToCart}>{t("addtoCart")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Mota_danhgia
                                productId={productObj.productId}
                                onReviewCountChange={(count, avgRating) => updateReviewCountAndAverageRating(count, avgRating)}
                            />
                        </div>
                    </div>
                </div>
                <Sanphamtuongtu />
                <div className="scroll-top not-visible">
                    <i className="fa fa-angle-up"></i>
                </div>
            </div>
        </div>
    );
}
