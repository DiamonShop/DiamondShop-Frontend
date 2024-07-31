import React from 'react'
import { Link } from 'react-router-dom';
export default function Lien_he() {
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
                                        <li class="breadcrumb-item active" aria-current="page">Liên hệ</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="map-area section-padding">
               
            </div>

            <div class="contact-area section-padding pt-0">
                <div class="container">
                    <div class="row">
                       
                        <div class="col-lg-12">
                            <div class="contact-info">
                                <h4 class="contact-title">Liên hệ với chúng tôi</h4>
                                <p>Để biết thêm thông tin và nhận tư vấn về sản phẩm,
                                    vui lòng liên hệ với chúng tôi qua thông tin sau đây:</p>
                                <ul>
                                    <li><i class="fa fa-fax"></i> Địa chỉ : Lô E2a-7, Đường D1, Đ. D1,
                                        Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh.</li>
                                    <li><i class="fa fa-phone"></i> E-mail: passswp159753@gmail.com</li>
                                    <li><i class="fa fa-envelope-o"></i> Số liên lạc: 0123456789</li>
                                </ul>
                                <div class="working-time">
                                    <h6>Thời gian làm việc:</h6>
                                    <p><span>Thứ 2 – Thứ 7:</span>08AM – 22PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
