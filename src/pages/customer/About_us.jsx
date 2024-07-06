import React from 'react'
import { Link } from 'react-router-dom';
export default function About_us() {
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
                                        <li class="breadcrumb-item active" aria-current="page">Về chúng tôi</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="about-us section-padding">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="about-thumb">
                                <img src="assets/img/about/about.jpg" alt="about thumb" />
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="about-content">
                                <h2 class="about-title">Về Chúng Tôi</h2>
                                <h5 class="about-sub-title">
                                    Được thành lập vào năm 2024, Eternal Sparkle là cửa hàng kim cương danh tiếng tại Hồ Chí Minh. Chúng tôi tự hào mang đến những sản phẩm kim cương tinh tế, độc đáo và chất lượng cao cho khách hàng. Với mục tiêu tạo ra trải nghiệm mua sắm tuyệt vời, Eternal Sparkle không ngừng nỗ lực để đáp ứng mọi nhu cầu và mong muốn của khách hàng.
                                </h5>
                                <p>Eternal Sparkle sở hữu một bộ sưu tập kim cương đa dạng, từ những thiết kế cổ điển đến hiện đại, phù hợp với mọi phong cách và dịp lễ. Chúng tôi cam kết chỉ cung cấp những viên kim cương đạt chuẩn quốc tế, đảm bảo về nguồn gốc và chất lượng. Đội ngũ nhân viên chuyên nghiệp và tận tâm của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho khách hàng, giúp họ tìm được món trang sức hoàn hảo nhất.</p>
                                <p>Với trụ sở tọa lạc tại trung tâm thành phố Hồ Chí Minh, Eternal Sparkle mong muốn trở thành điểm đến tin cậy cho những ai yêu thích kim cương. Chúng tôi không chỉ bán sản phẩm, mà còn mang đến những giá trị vượt trội và trải nghiệm khó quên cho khách hàng. Hãy đến với Eternal Sparkle để cảm nhận vẻ đẹp vĩnh cửu và sự lấp lánh không ngừng nghỉ của kim cương.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="choosing-area section-padding pt-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title text-center">
                                <h2 class="title">Tại sao lại chọn chúng tôi</h2>
                                <p>Cung cấp kim cương chất lượng, dịch vụ tận tâm.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mbn-30">
                        <div class="col-lg-4 col-md-4">
                            <div class="single-choose-item text-center mb-30">
                                <i class="fa fa-globe"></i>
                                <h4>Giao hàng miễn phí</h4>
                                <p>Dịch vụ giao hàng tận tâm và miễn phí</p>
                            </div>
                        </div>  
                        <div class="col-lg-4 col-md-4">
                            <div class="single-choose-item text-center mb-30">
                                <i class="fa fa-plane"></i>
                                <h4>Giao hàng nhanh chóng</h4>
                                <p>Chúng tôi đảm bảo giao hàng đúng hẹn, an toàn và đáng tin cậy.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="single-choose-item text-center mb-30">
                                <i class="fa fa-comments"></i>
                                <h4>Hỗ trợ khách hàng tận tâm</h4>
                                <p>Đội ngũ chuyên nghiệp, luôn sẵn sàng tư vấn và giải đáp mọi thắc mắc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="scroll-top not-visible">
                <i class="fa fa-angle-up"></i>
            </div>
        </div>

    )
}
