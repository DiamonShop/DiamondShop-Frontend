import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation();
  return (
    <div className="footer-widget-area">
        <div className="footer-top ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="widget-item">
                            <div className="widget-title">
                                <div className="widget-logo">
                                    <a href="/">
                                        <img src="assets/img/logo/logo.png" alt="brand logo"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="widget-item">
                            <h6 className="widget-title">{t("contact")}</h6>
                            <div className="widget-body">
                                <address className="contact-block">
                                    <ul>
                                        <li><i className="pe-7s-home"></i> {t("address")}</li>
                                        <li><i className="pe-7s-mail"></i> <a href="mailto:demo@plazathemes.com">passswsp@gmail.com </a></li>
                                        <li><i className="pe-7s-call"></i> <a href="tel:(012)800456789987">(012) 800 456 789-987</a></li>
                                    </ul>
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget-item">
                            <h6 className="widget-title">{t("information")}</h6>
                            <div className="widget-body">
                                <ul className="info-list">
                                    <li><Link to="/Lienhe">{t("contact")}</Link></li><br/>
                                    <li><Link to="/Vechungtoi">{t("aboutUs")}</Link></li><br/>
                                    <li><a href="Chinhsachbaomat">{t("privacyPolicy")}</a></li><br/>
                                    <li><Link to="/Chinhsachgiaohang">{t("deliveryPolicy")}</Link></li><br/>
                                    <li><Link to="/Chinhsach">{t("termsandPolicies")}</Link></li><br/>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="copyright-text text-center">
                            <p>{t("copyright")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
