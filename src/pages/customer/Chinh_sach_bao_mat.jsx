import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ChinhSachBaoMat() {
    useEffect(() => {
        const sectionHeaders = document.querySelectorAll('.faq-section-header');
        sectionHeaders.forEach((header) => {
            header.addEventListener('click', function () {
                const content = this.nextElementSibling;
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            });
        });

        const questions = document.querySelectorAll('.faq-question');
        questions.forEach((question) => {
            question.addEventListener('click', function () {
                const answer = this.nextElementSibling;
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });

        // Clean up the event listeners on component unmount
        return () => {
            sectionHeaders.forEach((header) => {
                header.removeEventListener('click', () => { });
            });
            questions.forEach((question) => {
                question.removeEventListener('click', () => { });
            });
        };
    }, []);

    return (
        <div className="faq-container">
            <h2 className="faq-title">CHÍNH SÁCH BẢO MẬT THÔNG TIN KHÁCH HÀNG</h2>
            <p>Cảm ơn bạn đã truy cập vào trang website được vận hành bởi Công ty Cổ phần Vàng bạc Đá quý Phú Nhuận. Bảo vệ thông tin khách hàng luôn là vấn đề hàng đầu của Eternal Sparkle. Do đó, chúng tôi tôn trọng và cam kết sẽ bảo mật những thông tin mang tính riêng tư và chỉ thu thập những thông tin cần thiết liên quan đến giao dịch mua bán. Để đảm bảo tính bảo mật của thông tin khách hàng, Eternal Sparkle thực hiện các nguyên tắc sau:</p>
            <div className="faq-section">
                <button className="faq-section-header"><strong>Mục đích thu thập thông tin cá nhân của khách hàng</strong></button>
                <div className="faq-content">
                    <p>Cung cấp dịch vụ và quản lý, sử dụng thông tin cá nhân của khách hàng nhằm mục đích quản lý cơ sở dữ liệu của khách hàng và kịp thời xử lý các tình huống phát sinh (nếu có).</p>
                    <p>Mục đích của việc thu thập thông tin là nhằm xây dựng thống thống mang lại nhiều tiện ích nhất cho khách Hàng. Vì thế, việc sử dụng thông tin sẽ phục vụ cho những hoạt động sau:</p>
                    <ul>
                        <li>Cung cấp dịch vụ và gửi thông báo về các hoạt động trao đổi thông tin giữa khách hàng và Eternal Sparkle.</li>
                        <li>Ngăn ngừa các hoạt động phá hủy, chiếm đoạt tài khoản hoặc các hoạt động giả mạo.</li>
                        <li>Liên lạc giải quyết khiếu nại với khách hàng.</li>
                        <li>Xác nhận và trao đổi thông tin về giao dịch của khách hàng tại Eternal Sparkle.</li>
                        <li>Trong trường hợp có yêu cầu của cơ quan quản lý nhà nước có thẩm quyền.</li>
                    </ul>
                </div>
            </div>
            <div className="faq-section">
                <button className="faq-section-header"><strong>Cam kết bảo mật thông tin cá nhân của người tiêu dùng</strong></button>
                <div className="faq-content">
                    <p>Thông tin cá nhân của khách hàng trên website www.EternalSparkle.com.vn được ban quản trị cam kết bảo mật tuyệt đối theo chính sách bảo mật thông tin đã được đăng tải. Việc thu thập và sử dụng thông tin của khách hàng chỉ được thực hiện khi có sự đồng ý của chính khách hàng trừ những trường hợp pháp luật có quy định khác và quy định này.</p>
                    <p>Không sử dụng, không chuyển giao, cung cấp hoặc tiết lộ cho bên thứ 3 về thông tin cá nhân của khách hàng khi không có sự đồng ý ngoại trừ các trường hợp được quy định tại quy định này hoặc quy định của pháp luật.</p>
                    <p>Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất dữ liệu cá nhân của khách hàng, ban quản trị có trách nhiệm thông báo và làm việc với cơ quan chức năng điều tra và xử lý kịp thời, đồng thời thông báo cho khách hàng được biết về vụ việc.</p>
                    <p>Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn cấp 1 của Eternal Sparkle.</p>
                </div>
            </div>
            <div className="faq-section highlight-background">
                <button className="faq-section-header"><strong>Địa chỉ của đơn vị thu thập và quản lý thông tin</strong></button>
                <div className="faq-content">
                    <p>Đại học FPT.</p>
                    <ul>
                        <li>Địa chỉ: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh</li>
                        <li>Điện thoại: 0123-456-789</li>
                        <li>Email: passswp159753@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="faq-section">
                <button className="faq-section-header"><strong>Phương tiện và công cụ để người tiêu dùng tiếp cận và chỉnh sửa dữ liệu thông tin cá nhân của mình</strong></button>
                <div className="faq-content">
                    <p>Khách hàng có quyền tự kiểm tra, cập nhật hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào website www.EternalSparkle.com.vn và chỉnh sửa hoặc yêu cầu ban quản trị thực hiện việc này.</p>
                    <p>Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân của mình cho bên thứ 3 đến ban quản trị. Khi tiếp nhận những phản hồi này, Eternal Sparkle sẽ xác nhận lại thông tin, chịu trách nhiệm trả lời lý do cũng như hướng dẫn khách hàng khôi phục và bảo mật lại thông tin.</p>
                </div>
            </div>
            <div className="faq-section">
                <button className="faq-section-header"><strong>Cơ chế tiếp nhận và giải quyết khiếu nại liên quan đến việc thông tin khách hàng</strong></button>
                <div className="faq-content">
                    <p>Khi phát hiện thông tin cá nhân của mình bị sử dụng sai mục đích hoặc phạm vi, khách hàng có thể gửi thông tin phản ánh và cung cấp chứng cứ liên quan tới vụ việc cho ban quản trị. Ban quản trị cam kết sẽ phản hồi ngay lập tức hoặc muộn nhất là trong vòng 24h làm việc kể từ thời điểm nhận được khiếu nại.</p>
                    <p>Các hình thức tiếp nhận thông tin khiếu nại:</p>
                    <ul>
                        <li>Qua điện thoại: 0123-456-789</li>
                        <li>Qua email: passswp159753@gmail.com</li>
                    </ul>
                </div>
            </div>
            <Link to="/">Quay về trang chủ</Link>
        </div>
    );
}
