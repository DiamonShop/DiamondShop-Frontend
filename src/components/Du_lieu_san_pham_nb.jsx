import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { formatCurrency } from '../utils/NumberFormat';
function Du_lieu_san_pham_nb(props) {
  
    return (
        <div>
                    <div className="product-item">
                        <figure className="product-thumb">
                            <Link to={{ pathname: "/Chitietsanpham" }} onClick={() => props.onProductClick(props)}>
                                <img className="pri-img"
                                    src={props.image1} alt="product1" />
                                <img className="sec-img"
                                    src={props.image2} alt="product2" />
                            </Link>
                            <div className="product-badge">
                                <div className="product-label new">
                                    <span>{props.label}</span>
                                </div>
                            </div>
                            <div className="button-group">
                                <Link to="/Yeuthich"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="left"
                                    title="Add to wishlist">
                                    <i className="pe-7s-like"></i>
                                </Link>

                            </div>
                            <div className="cart-hover">
                                <button className="btn btn-cart">Thêm vào giỏ hàng</button>
                            </div>
                        </figure>
                        <div className="product-caption text-center">
                            <h6 className="product-name">
                                <Link to={{ pathname: "/Chitietsanpham" }} onClick={() => props.onProductClick(props)}>
                                    {props.productName}
                                </Link>
                            </h6>
                            <div className="price-box">
                            <span className="price-regular">{formatCurrency(props.newPrice)}đ</span>
                            <span className="price-old"><del>{formatCurrency(props.oldPrice)}đ</del></span>
                            </div>
                        </div>
                    </div>
                    
               
            </div>
       
    )
}

export default Du_lieu_san_pham_nb
