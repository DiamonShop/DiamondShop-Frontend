import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Chinh_sach_giao_hang() {
    useEffect(() => {
        const sectionHeaders = document.querySelectorAll('.faq-section-header');
        const questions = document.querySelectorAll('.faq-question');

        const toggleDisplay = (element) => {
            const content = element.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        };

        const headerClickListener = function () {
            toggleDisplay(this);
        };

        const questionClickListener = function () {
            toggleDisplay(this);
        };

        sectionHeaders.forEach((header) => {
            header.addEventListener('click', headerClickListener);
        });

        questions.forEach((question) => {
            question.addEventListener('click', questionClickListener);
        });

        return () => {
            sectionHeaders.forEach((header) => {
                header.removeEventListener('click', headerClickListener);
            });
            questions.forEach((question) => {
                question.removeEventListener('click', questionClickListener);
            });
        };
    }, []);
    return (
        <div>
            <div className="faq-container">
                <h2 className="faq-title">CHÍNH SÁCH GIAO HÀNG</h2>
                <div className="faq-section">
                    <button className="faq-section-header"><strong> Chi phí và phạm vi giao hàng</strong></button>
                    <div className="faq-content">
                        <p> Miễn phí giao hàng trong thành phố</p>
                    </div>
                </div>
                <div className="faq-section">
                    <button className="faq-section-header"><strong>Thời gian giao hàng nhanh</strong></button>
                    <div className="faq-content">
                        <p>Thời gian giao dự kiến sẽ được thể hiện cụ thể trong quá trình đặt hàng dựa vào khoảng cách đến nhà khách từ cửa hàng gần nhất có hàng:</p>
                        <table className="faq-table">
                            <tr>
                                <th className="th-faq">Khoảng cách</th>
                                <th className="th-faq">Thời gian dự kiến giao hàng (08:00 - 17:00)</th>
                            </tr>
                            <tr>
                                <td>Dưới 20km tại HCM, Hà Nội</td>
                                <td>Trong ngày hoặc ngày kế tiếp</td>
                            </tr>
                            <tr>
                                <td>Dưới 20km tại khu vực khác</td>
                                <td>Trong vòng 1-3 ngày</td>
                            </tr>
                            <tr>
                                <td>Trên 20km</td>
                                <td>Trong vòng 2-7 ngày</td>
                            </tr>
                        </table>
                        <p>Thời gian dự kiến được tính từ lúc chuyên viên tư vấn Eternal Sparkle liên hệ khách xác nhận đơn hàng thành công và có thể dao động sớm hoặc hy hữu muộn hơn.</p>
                        <p>Thời gian giao hàng tại khu vực biển đảo có thể dài hơn dự kiến từ 3-5 ngày tùy vào tình hình thời tiết và chuyến tàu ra đảo.</p>
                    </div>
                </div>
                <div className="faq-section">
                    <button className="faq-section-header"><strong>Quy cách giao hàng</strong></button>
                    <div className="faq-content">
                        <p>Eternal Sparkle cam kết tất cả các đơn hàng được giao đều là hàng chính hãng, đi kèm hóa đơn, được đóng gói bằng bao bì có logo, dán băng keo và 04 tem niêm phong của Eternal Sparkle.</p>
                        <p>Trước khi chấp nhận và thanh toán cho một đơn hàng, <strong>quý khách hàng có quyền yêu cầu được mở thùng hàng để kiểm tra hàng hóa bên trong</strong> có đúng với thông tin đặt hàng hay không, bao gồm: số lượng, chủng loại, màu sắc, hình thức, tính nguyên vẹn của hàng hóa.</p>
                        <p><strong>Quý khách hàng có quyền từ chối nhận hàng nếu phát hiện thùng hàng không còn nguyên vẹn hoặc thiếu tem mác.</strong></p>
                        <p>Quý khách vui lòng <strong>quay lại video toàn bộ quá trình mở hàng</strong> để những vấn đề phát sinh được dễ dàng xử lý.</p>
                       
                    </div>
                </div>
                <div className="faq-section">
                    <button className="faq-section-header"><strong>Phương tiện và công cụ để người tiêu dùng tiếp cận và chỉnh sửa dữ liệu thông tin cá nhân của mình</strong></button>
                    <div className="faq-content">
                        <p>Khách hàng có quyền tự kiểm tra, cập nhật hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào website www.eternalsparkle.com.vn và chỉnh sửa hoặc yêu cầu ban quản trị thực hiện việc này.</p>
                        <p>Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân của mình cho bên thứ 3 đến ban quản trị. Khi tiếp nhận những phản hồi này, Eternal Sparkle sẽ xác nhận lại thông tin, chịu trách nhiệm trả lời lý do cũng như hướng dẫn khách hàng khôi phục và bảo mật lại thông tin.</p>
                    </div>
                </div>
                <div className="faq-section">
                    <button className="faq-section-header"><strong>Phản hồi về dịch vụ giao hàng</strong></button>
                    <div className="faq-content">
                        <p>Nếu có bất kỳ vấn đề phát sinh trong khâu giao hàng khiến quý khách hàng không hài lòng, Eternal Sparkle xin thành thật cáo lỗi và mong quý khách hàng có thể liên hệ phản ánh trực tiếp với Eternal Sparkle để chúng tôi có thể nâng cao chất lượng dịch vụ.</p>
                        <p>Tổng đài 0123-456-789 hoàn toàn miễn phí từ 08:00 đến 21:00 (kể cả lễ Tết).</p>
                        <p>Thời gian xử lý khiếu nại hoặc phát sinh về dịch vụ giao hàng từ 2-7 ngày làm việc.</p>
                        <p>Cảm ơn quý khách hàng đã lựa chọn sản phẩm Eternal Sparkle.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}