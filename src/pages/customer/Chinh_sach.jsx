import React from 'react'
import { Link } from 'react-router-dom';
export default function Chinh_sach() {
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
                                    <li class="breadcrumb-item active" aria-current="page">Chính Sách và Bảo Mật</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <section class="policy-section section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="policy-list">
                            <h3 class="policy-title">Chính Sách Bán Hàng : </h3>
                            <p>1. <b>Cam Kết Chất Lượng :</b> Tất cả sản phẩm kim cương của chúng tôi
                                 đều được kiểm định chất lượng, 
                                 đảm bảo nguồn gốc rõ ràng và đạt tiêu chuẩn quốc tế.
                            </p>
                            <p>2. <b>Chính Sách Mua Hàng</b> : Vì giá tiền của đơn hàng quá lớn, Quý Khách <strong>NÊN KIỂM TRA KĨ ĐƠN HÀNG TRƯỚC KHI THANH TOÁN</strong>. Cửa hàng chúng tôi không cho phép <strong>HỦY BỎ ĐƠN HÀNG</strong>  nếu như Quý Khách đã <strong>THANH TOÁN THÀNH CÔNG</strong>.
                                
                            </p>
                            <p>3. <b>Chính Sách Bảo Hành</b> : Chúng tôi cung cấp dịch vụ bảo hành 12 tháng
                                cho các sản phẩm trang sức kim cương. Dịch vụ bao gồm làm sạch, 
                                đánh bóng và kiểm tra định kỳ miễn phí.</p>
                        </div>
                        <div class="policy-list">
                            <h3 class="policy-title">Chính Sách Bảo Mật:</h3>
                            <p>1. <b>Bảo Mật Thông Tin Cá Nhân</b>: Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng. 
                                Mọi thông tin thu thập được chỉ sử dụng cho mục đích phục vụ khách hàng và nâng cao chất lượng dịch vụ.</p>
                            <p> 2. <b>Chính Sách Sử Dụng Thông Tin</b>: Chúng tôi không chia sẻ, 
                                trao đổi hoặc bán thông tin cá nhân của khách hàng cho bên thứ ba, 
                                trừ khi có sự đồng ý của khách hàng hoặc theo yêu cầu của pháp luật.</p>
                                <p>3. <b>Bảo Mật Giao Dịch</b>: Tất cả các giao dịch trực tuyến 
                                    đều được mã hóa và bảo vệ bằng công nghệ bảo mật tiên tiến, 
                                    đảm bảo an toàn tuyệt đối cho thông tin tài chính của khách hàng.</p>
                        </div>
                      
                        <div class="policy-list">
                            <h3 class="policy-title">Liên Hệ:</h3>
                            <p>Nếu có bất kỳ thắc mắc nào về chính sách của chúng tôi, 
                                vui lòng liên hệ qua email <strong>passswp159753@gmail.com</strong> hoặc gọi đến hotline <strong>0123456789</strong> .
                                Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi câu hỏi của bạn.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
      
    </div>
      )
    }
    
