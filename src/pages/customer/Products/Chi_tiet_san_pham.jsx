import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/NumberFormat';
import { handleAddProductToOrder, handleCreateOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { decodeToken } from '../../../api/TokenAPI';
import '../../../nice-select'
import '../../../image-zoom'


import Sanphamtuongtu from '../../../components/Sanphamtuongtu';
import Mota_danhgia from '../../../components/Mota_danhgia';
export default function Chi_tiet_san_pham() {

    useEffect(() => {

        // Khởi tạo plugin nice-select sau khi component đã được render
        $('select').niceSelect();
        $('.img-zoom').zoom();
        // Cleanup khi component unmount
        return () => {
            $('select').niceSelect('destroy');
            $('.img-zoom').zoom('destroy');
        };
    }, []);

    //Get product when reload
    const productObj = JSON.parse(localStorage.getItem('product'));
    const largeSliderRef = useRef(null);
    const navSliderRef = useRef(null);

    const largeSliderSettings = {
        fade: true,
        arrows: false,
        speed: 1000,
        asNavFor: navSliderRef.current,
        ref: largeSliderRef,
        autoplay: true, // Thêm dòng này
        autoplaySpeed: 5000, // Thêm dòng này (5000 milliseconds = 5 seconds)
    };

    const navSliderSettings = {
        slidesToShow: 4,
        asNavFor: largeSliderRef.current,
        centerMode: true,
        speed: 1000,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        }],
        ref: navSliderRef,
        autoplay: true, // Thêm dòng này
        autoplaySpeed: 5000, // Thêm dòng này (5000 milliseconds = 5 seconds)
    };

    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const [showMessage, setShowMessage] = useState(false);

    const successAddMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    const handleAddToCart = async () => {
        //Lấy userId để tạo order
        const token = localStorage.getItem('token');
        if (token) {
            const userId = decodeToken(token).sid;
            //Gọi API để tạo order
            const orders = await handleGetOrderByUserId(parseInt(userId, 10));
            let orderId = null;
    
            if (orders != null) {
                for (const item of orders) {
                    if (item.status === 'Ordering') {
                        orderId = item.orderId;
                        break;
                    }
                }
            }
    
            if (orderId === null) {
                // Create a new order if no "Ordering" order is found
                orderId = await handleCreateOrder(userId);
            }
    
            if (orderId !== null) {
                const addProductResponse = await handleAddProductToOrder(orderId, productObj.productId, quantity);
                if (addProductResponse !== null) {
                    successAddMessage();
                } else {
                    console.error('Failed to add product to order');
                }
            } else {
                console.error('Failed to create or retrieve order');
            }
        }
    };

    return (
        <div>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/"><i class="fa fa-home"></i></Link></li>
                                        <li class="breadcrumb-item"><Link to="/Nhan">{productObj.categoryName}</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shop-main-wrapper section-padding pb-0">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 order-1 order-lg-2">

                            <div class="product-details-inner">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <Slider {...largeSliderSettings} className="product-large-slider">
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

                                        </Slider>
                                        <Slider {...navSliderSettings} className="pro-nav">
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

                                        </Slider>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="product-details-des">
                                            <h3 class="product-name">{productObj.productName}</h3>
                                            <div class="ratings d-flex">
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <div class="pro-review">
                                                    <span>1 Reviews</span>
                                                </div>
                                            </div>
                                            
                                            <div class="price-box">
                                                <span class="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
                                            </div>
                                            <div class="pro-size">
                                                <h6 class="option-title">Chất liệu:</h6>
                                                <input class="nice-select-chatlieu" value='Vàng' type='text' readOnly>
                                                </input>
                                            </div>
                                            <div class="pro-size">
                                                <h6 class="option-title">Viên chính:</h6>
                                                <input class="nice-select-chatlieu" value='Thêm viên vào đây' type='text' readOnly>
                                                </input>
                                            </div>
                                            <div class="pro-size">
                                                <h6 class="option-title">Viên phụ:</h6>
                                                <input class="nice-select-chatlieu" value='Thêm viên vào đây' type='text' readOnly>
                                                </input>
                                            </div>

                                            <div class="quantity-cart-box d-flex align-items-center">
                                                <h6 class="option-title">Số lượng:</h6>
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
                                            {productObj.categoryName === 'Nhẫn' && (
                                                <div class="pro-size">
                                                    <h6 class="option-title">Size :</h6>

                                                    <select class="nice-select">
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                        <option>11</option>
                                                    </select>
                                                    <Link to='/Huongdandoni' className="huong-dan-do-ni">Hướng dẫn đo ni (Size)</Link>
                                                </div>
                                            )}
                                            <div class="button-them-vao-gio-hang">
                                                <div class="action_link">
                                                    <a class="btn btn-cart2" onClick={handleAddToCart}>Thêm vào giỏ hàng</a>
                                                </div>
                                            </div>

                                            {showMessage && (
                                                <div class="message-add-to-cart-success">
                                                    <span style={{ color: 'red' }}>Thêm vào giỏ hàng thành công</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Mota_danhgia />

                        </div>

                    </div>
                </div>
            </div>

            <Sanphamtuongtu ></Sanphamtuongtu>

            <div class="scroll-top not-visible">
                <i class="fa fa-angle-up"></i>
            </div>

        </div>
    )
}
