import React from 'react'
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/NumberFormat';
import { useTranslation } from "react-i18next";

function Du_lieu_san_pham_vtxmdc(props) {
    const { t } = useTranslation();
    return (
        <div>
            <div className="product-item">
                <figure className="product-thumb">
                    <Link to={{ pathname: "/Chitietsanpham" }} onClick={() => props.onProductClick(props)}>
                        <img className="pri-img-vongtay" src={props.image1} alt="product" />
                    </Link>
                    <div className="product-badge">
                        <div className="product-label new">
                            <span>{props.label}</span>
                        </div>
                    </div>
                    <Link to={{ pathname: "/Chitietsanpham" }} onClick={() => props.onProductClick(props)}>
                        <div className="cart-hover">
                            <button className="btn btn-cart">{t("discoveryNow")}</button>
                        </div>
                    </Link>
                </figure>

                <div className="product-caption text-center">
                    <h6 className="product-name">
                        <Link to={{ pathname: "/Chitietsanpham" }} onClick={() => props.onProductClick(props)}>
                            {props.productName}
                        </Link>
                    </h6>
                    <div className="price-box">
                        <span className="price-regular">{formatCurrency(props.newPrice)}đ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Du_lieu_san_pham_vtxmdc
