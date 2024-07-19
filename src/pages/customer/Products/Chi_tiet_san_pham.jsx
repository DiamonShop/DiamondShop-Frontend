import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/NumberFormat';
import { handleAddProductToOrder, handleCreateOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { decodeToken } from '../../../api/TokenAPI';
import Sanphamtuongtu from '../../../components/Sanphamtuongtu';
import Mota_danhgia from '../../../components/Mota_danhgia';
import StarRating from '../../../components/StarRating';
import { notification } from 'antd';


export default function Chi_tiet_san_pham() {

    const productObj = JSON.parse(localStorage.getItem('product'));
    const [quantity, setQuantity] = useState(1);
    const [rating, setRating] = useState(0);
    const [reviewCount, setReviewCount] = useState(0);

    const [api, contextHolder] = notification.useNotification();

    const [averageRating, setAverageRating] = useState(0);


    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
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
                        openNotificationWithIcon('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng.');
                        break;
                    } else if (item.status === 'Completed' || item.status === 'Shipping') {
                        const orderId = await handleCreateOrder(userId);
                        await handleAddProductToOrder(orderId, productObj.productId, quantity);
                        openNotificationWithIcon('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng.');
                        break;
                    }
                }
            } else {
                const orderId = await handleCreateOrder(userId);
                const order = await handleGetOrderByUserId(parseInt(userId, 10));
                for (const item of order) {
                    if (item.status === 'Ordering' && item.orderId === orderId) {
                        await handleAddProductToOrder(orderId, productObj.productId, quantity);
                        openNotificationWithIcon('success', 'Thành công', 'Sản phẩm đã được thêm vào giỏ hàng.');
                        break;
                    }
                }
            }
        } else {
            openNotificationWithIcon('warning', 'Cảnh báo', 'Vui lòng đăng nhập để tiếp tục mua hàng', 'top');
        }
    };

    const updateReviewCountAndAverageRating = (feedbackCount, avgRating) => {
        setReviewCount(feedbackCount);
        setAverageRating(avgRating);
    };

    

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
    
    const getCategoryName = (categoryId) => {
        switch (categoryId) {
            case 1:
                return 'Nhan';
            case 2:
                return 'Daychuyen';
            case 3:
                return 'Matdaychuyen';
            case 4:
                return 'Vongtay';
            default:
                return 'Unknown';
        }
    };
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
                                        <li className="breadcrumb-item"><Link to={`/${getCategoryName(productObj.categoryId)}`}>{productObj.categoryName}</Link></li>
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
                                                <StarRating rating={rating} setRating={setRating} />
                                                <div className="pro-review">
                                                    <span>{reviewCount} Review(s)</span>
                                                </div>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
                                            </div>

                                            <p className='jewelry-filter-line'>------------------------------------------------------------------------------------</p>
                                            {productObj.categoryName === 'Dây chuyền' ? (
                                                <ul class="jewelry-filter-container">
                                                    <li class="filter-group">
                                                        <h6 className='filter-name-jewelry'>Chất liệu:</h6>
                                                        <select className='nice-select'>
                                                            <option value="Vàng">{productObj.material}</option>
                                                        </select>
                                                    </li>
                                                    <li class="filter-group">
                                                        <div class="quantity-cart-box d-flex align-items-center">
                                                            <h6 className='filter-name-jewelry'>Số lượng:</h6>
                                                            <div class="quantity">
                                                                <div class="pro-qty">
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

                                                <ul class="jewelry-filter-container">
                                                    <li class="filter-group">
                                                        <h6 className='filter-name-jewelry'>Chất liệu:</h6>
                                                        <select className='nice-select'>
                                                            <option value="Vàng">{productObj.material}</option>
                                                        </select>
                                                    </li>
                                                    <li class="filter-group">
                                                        <h6 className='filter-name-jewelry' >Viên chính:</h6>
                                                        <select className='nice-select' >
                                                            <option value="VS2">{productObj.mainDiamondName} x{productObj.mainDiamondQuantity}</option>
                                                        </select>
                                                    </li>
                                                    <li class="filter-group">
                                                        <h6 className='filter-name-jewelry'>Viên phụ:</h6>
                                                        <select  >
                                                            <option value="VS2">{productObj.sideDiamondName} x{productObj.sideDiamondQuantity}</option>
                                                        </select>
                                                    </li>
                                                    <li class="filter-group">
                                                        {productObj.categoryName === 'Nhẫn' && (
                                                            <>
                                                                <h6 className='filter-name-jewelry'>Size :</h6>

                                                                <select >
                                                                    <option >8</option>
                                                                    <option>9</option>
                                                                    <option>10</option>
                                                                    <option>11</option>
                                                                </select>
                                                                <Link to='/Huongdandoni' className="huong-dan-do-ni">Hướng dẫn đo ni (Size)</Link>
                                                            </>
                                                        )}
                                                    </li>
                                                    <li class="filter-group">
                                                        <div class="quantity-cart-box d-flex align-items-center">
                                                            <h6 className='filter-name-jewelry'>Số lượng:</h6>
                                                            <div class="quantity">
                                                                <div class="pro-qty">
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
                                            <div class="button-them-vao-gio-hang">
                                                <div class="action_link">
                                                    <a class="btn btn-cart2" onClick={handleAddToCart}>Thêm vào giỏ hàng</a>

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