import React from 'react';
import { useTranslation } from "react-i18next";

function Filter_product({ sortOption, handleSortChange, count}) {
    const { t } = useTranslation();
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
                            <p>{t("showing")} {count} {t("result")}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 order-1 order-md-2">
                    <div className="top-bar-right">
                        <div className="product-short">
                            <p>{t("listBy")} </p>
                            <select className="nice-select" name="sortby" value={sortOption} onChange={handleSortChange}>
                                <option value="name-asc">{t("name")} (A - Z)</option>
                                <option value="name-desc">{t("name")} (Z - A)</option>
                                <option value="price-asc">{t("price")} ({t("low")} &gt; {t("high")})</option>
                                <option value="price-desc">{t("price")} ({t("high")} &gt; {t("low")})</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter_product;
