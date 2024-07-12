import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/NumberFormat';
import { handleAddProductToOrder, handleCreateOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { decodeToken } from '../../../api/TokenAPI';
import '../../../nice-select';
import '../../../image-zoom';
import Sanphamtuongtu from '../../../components/Sanphamtuongtu';
import Mota_danhgia from '../../../components/Mota_danhgia';

export default function Chi_tiet_san_pham() {
    useEffect(() => {
        $('select').niceSelect();
        $('.img-zoom').zoom();

        return () => {
            $('select').niceSelect('destroy');
            $('.img-zoom').zoom('destroy');
        };
    }, []);

    const productObj = JSON.parse(localStorage.getItem('product'));
    const largeSliderRef = useRef(null);
    const navSliderRef = useRef(null);

    const largeSliderSettings = {
        fade: true,
        arrows: false,
        speed: 1000,
        asNavFor: navSliderRef.current,
        ref: largeSliderRef,
        autoplay: true,
        autoplaySpeed: 5000,
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
        autoplay: true,
        autoplaySpeed: 5000,
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
        }, 5000);
    };

    const handleAddToCart = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const userId = decodeToken(token).sid;
            const orders = await handleGetOrderByUserId(parseInt(userId, 10));
            if (orders != null) {
                for (const item of orders) {
                    if (item.status == 'Ordering') {
                        handleAddProductToOrder(item.orderId, productObj.productId, quantity);
                        successAddMessage();
                        break;
                    } else if (item.status == 'Completed' || item.status == 'Shipped') {
                        const orderId = await handleCreateOrder(userId);
                        handleAddProductToOrder(orderId, productObj.productId, quantity);
                        successAddMessage();
                        break;
                    }
                }
            } else {
                const orderId = await handleCreateOrder(userId);
                const order = await handleGetOrderByUserId(parseInt(userId, 10));
                for (const item of order) {
                    if (item.status === 'Ordering' && item.orderId === orderId) {
                        handleAddProductToOrder(orderId, productObj.productId, quantity);
                        successAddMessage();
                        break;
                    }
                }
            }
        }
    };

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
                                        <li className="breadcrumb-item"><Link to="/Nhan">{productObj.categoryName}</Link></li>
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
                                    <div className="col-lg-5">
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
                                    <div className="col-lg-7">
                                        <div className="product-details-des">
                                            <h3 className="product-name">{productObj.productName}</h3>
                                            <div className="ratings d-flex">
                                                <span><i className="fa fa-star-o"></i></span>
                                                <span><i className="fa fa-star-o"></i></span>
                                                <span><i className="fa fa-star-o"></i></span>
                                                <span><i className="fa fa-star-o"></i></span>
                                                <span><i className="fa fa-star-o"></i></span>
                                                <div className="pro-review">
                                                    <span>Reviews</span>
                                                </div>
                                            </div>
                                            <div className="price-box">
                                                <span className="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
                                            </div>
                                            <div className="pro-size">
                                                <h6 className="option-title">Chất liệu:</h6>
                                                <input className="nice-select-chatlieu" value='Vàng' type='text' readOnly />
                                            </div>
                                            <div className="quantity-cart-box d-flex align-items-center">
                                                <h6 className="option-title">Số lượng:</h6>
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <span className="qtybtn" onClick={handleDecrement}>-</span>
                                                        <input name='txtQuantity' type="text" value={quantity} readOnly />
                                                        <span className="qtybtn" onClick={handleIncrement}>+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pro-size">
                                                <h6 className="option-title">Size :</h6>
                                                {productObj.categoryName === 'Nhẫn' ? (
                                                    <select className="nice-select">
                                                        <option>8</option>
                                                        <option>9</option>
                                                        <option>10</option>
                                                        <option>11</option>
                                                    </select>
                                                ) : productObj.categoryName === 'Vòng tay' ? (
                                                    <select className="nice-select">
                                                        <option>3</option>
                                                        <option>5</option>
                                                        <option>6</option>
                                                    </select>
                                                ) : (
                                                    <></>
                                                )}
                                                {productObj.categoryName === 'Nhẫn' && (
                                                    <Link to='/Huongdandoni' className="huong-dan-do-ni">Hướng dẫn đo ni (Size)</Link>
                                                )}
                                            </div>
                                            <div className="button-them-vao-gio-hang">
                                                <div className="action_link">
                                                    <a className="btn btn-cart2" onClick={handleAddToCart}>Thêm vào giỏ hàng</a>
                                                </div>
                                            </div>
                                            {showMessage && (
                                                <div className="message-add-to-cart-success">
                                                    <span style={{ color: 'red' }}>Thêm vào giỏ hàng thành công</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Mota_danhgia productId={productObj.productId} />
                        </div>
                    </div>
                </div>
            </div>
            <Sanphamtuongtu />
            <div className="scroll-top not-visible">
                <i className="fa fa-angle-up"></i>
            </div>
        </div>
    );
}
