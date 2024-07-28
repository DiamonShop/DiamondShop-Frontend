import React from 'react'
import { useTranslation } from 'react-i18next';

function Service_policy() {
    const { t } = useTranslation();//luon luon co de dich

    return (
        <div>
            <div className="service-policy">
                <div className="container">
                    <div className="policy-block section-padding">
                        <div className="row mtn-30">
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-plane"></i>
                                    </div>
                                    <div className="policy-content">
                                        <h6>{t("freeShip")}</h6>
                                        <p>Miễn phí vận chuyển cho tất cả đơn hàng</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-help2"></i>
                                    </div>
                                    <div className="policy-content">
                                        <h6>{t("customerCare")}</h6>
                                        <p>Hỗ trợ tư vấn 24/7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-back"></i>
                                    </div>
                                    <div className="policy-content">
                                        <h6>{t("warrantyCommit")}</h6>
                                        <p>Cam kết bảo hành 1 năm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="policy-item">
                                    <div className="policy-icon">
                                        <i className="pe-7s-credit"></i>
                                    </div>
                                    <div className="policy-content">
                                        <h6>{t("security")}</h6>
                                        <p>Cam kết bảo mật thông tin khách hàng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service_policy
