// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Chinh_sach_khach_hang_than_thiet() {
//     useEffect(() => {
//         const sectionHeaders = document.querySelectorAll('.faq-section-header');
//         const questions = document.querySelectorAll('.faq-question');

//         const toggleDisplay = (element) => {
//             const content = element.nextElementSibling;
//             content.style.display = content.style.display === 'block' ? 'none' : 'block';
//         };

//         const headerClickListener = function () {
//             toggleDisplay(this);
//         };

//         const questionClickListener = function () {
//             toggleDisplay(this);
//         };

//         sectionHeaders.forEach((header) => {
//             header.addEventListener('click', headerClickListener);
//         });

//         questions.forEach((question) => {
//             question.addEventListener('click', questionClickListener);
//         });

//         return () => {
//             sectionHeaders.forEach((header) => {
//                 header.removeEventListener('click', headerClickListener);
//             });
//             questions.forEach((question) => {
//                 question.removeEventListener('click', questionClickListener);
//             });
//         };
//     }, []);
//     return (
//         <div>
//             <div class="faq-container">
//                 <h2 class="faq-title">CHÍNH SÁCH KHÁCH HÀNG THÂN THIẾT TẠI PNJ</h2>
//                 <p>Với mong muốn đem lại nhiều quyền lợi thiết thực dành cho khách hàng khi mua sắm và sử dụng dịch vụ, PNJ hân hạnh giới thiệu chương trình Khách hàng thân thiết.</p>

//                 <div class="faq-section">
//                     <button class="faq-section-header"><strong> Quyền lợi khi trở thành khách hàng thân thiết tại PNJ?</strong></button>
//                     <div class="faq-content">
//                         <p>Là khách hàng thân thiết tại PNJ, quý khách sẽ nhận được những chiết khấu đặc quyền. Hiện tại chương trình bao gồm 4 hạng thẻ, trong đó thẻ Kết Nối là hạng mặc định:</p>
//                         <table>
//                             <tr>
//                                 <th rowspan="2">NHÓM HÀNG</th>
//                                 <th colspan="3">ƯU ĐÃI HẠNG THẺ</th>
//                             </tr>
//                             <tr>
//                                 <th>THÀNH VIÊN</th>
//                                 <th>ĐỒNG HÀNH</th>
//                                 <th>THÂN THIẾT</th>
//                             </tr>
//                             <tr>
//                                 <td>Sản phẩm tính công thuộc các nhãn PNJ, PNJArt (tiền công)</td>
//                                 <td align="center">5%</td>
//                                 <td align="center">6%</td>
//                                 <td align="center">10%</td>
//                             </tr>
//                             <tr>
//                                 <td>Đá rời:
//                                     <p>- Kim cương rời</p>
//                                     <p>- Đá màu rời được áp dụng ưu đãi của nhóm Kim cương rời</p>
//                                 </td>
//                                 <td align="center">2%</td>
//                                 <td align="center">2%</td>
//                                 <td align="center">3%</td>
//                             </tr>
//                             <tr>
//                                 <td>Sản phẩm hàng món:
//                                     <p>- Trang sức đá màu, Trang sức CZ, ECZ, Vỏ trang sức, Trang sức kim cương, Hàng Ý,
//                                         Trang sức bán gram.</p>
//                                     <p>- Vòng cẩm thạch, Trang sức ngọc trai và chuỗi ngọc trai thuộc nhóm Trang sức đá
//                                         màu.</p>
//                                 </td>
//                                 <td align="center">3%</td>
//                                 <td align="center">5%</td>
//                                 <td align="center">7%</td>
//                             </tr>
//                             <tr>
//                                 <td>Trang sức Bạc, Thau và sản phẩm có chất liệu hợp kim cao cấp</td>
//                                 <td align="center">7%</td>
//                                 <td align="center">10%</td>
//                                 <td align="center">12%</td>
//                             </tr>
//                         </table>
//                         <p>Lưu ý: Đối với các sản phẩm hàng thợ, PNJ Art, Disney, Style thuộc nhóm hàng nào sẽ được hưởng ưu đãi theo nhóm hàng đó.</p>
//                         <p> Ngoài ra, quý khách sẽ nhận được những quyền lợi chăm sóc đặc biệt tại PNJ như:</p>
//                         <ul>
//                             <li>Quà tặng đặc biệt vào các dịp sinh nhật, lễ Tết,...</li>
//                             <li>Ưu đãi hấp dẫn với các sản phẩm, dịch vụ là đối tác của PNJ.</li>
//                             <li>Thông báo thường xuyên về các chương trình ưu đãi hiện có tại PNJ.</li>
//                             <li>Đối với quý khách có tổng doanh thu trang sức bạc PNJSilver trên 3 triệu sẽ nhận code ưu đãi 35% tổng đơn hàng trang sức PNJSilver.</li>
//                         </ul>
//                         <table>
//                             <tbody>
//                                 <tr>
//                                     <th width="40%">ƯU ĐÃI HẠNG THẺ</th>
//                                     <th width="30%">ƯU ĐÃI ÁP DỤNG CHO ĐỒNG HỒ TISSOT, LONGINES VÀ RADO</th>
//                                     <th width="30%">ƯU ĐÃI ÁP DỤNG CHO CÁC ĐỒNG HỒ CÒN LẠI</th>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <p align="center">KẾT NỐI</p>
//                                         <p><strong><em>Lưu ý:</em></strong></p>
//                                         <p><em> Khách hàng đã có điểm trên hệ thống</em></p>
//                                     </td>
//                                     <td>
//                                         <p style="text-align: center;">5%</p>
//                                     </td>
//                                     <td>
//                                         <p style="text-align: center;">10%</p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <p align="center">THÀNH VIÊN</p>
//                                     </td>
//                                     <td>
//                                         <p style="text-align: center;">10%</p>
//                                     </td>
//                                     <td>
//                                         <p style="text-align: center;">15%</p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td><span style="color: rgb(70, 70, 70); font-size: 15px; text-align: justify;">ĐỒNG HÀNH</span></td>
//                                     <td style="text-align: center;">12%</td>
//                                     <td>
//                                         <p style="text-align: center;">17%</p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <p align="center">THÂN THIẾT</p>
//                                     </td>
//                                     <td>
//                                         <p style="text-align: center;">15%</p>
//                                     </td>
//                                     <td>
//                                         <p style="text-align: center;">20%</p>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//                 <div class="faq-section">
//                     <button class="faq-section-header"><strong>Làm sao để trở thành khách hàng thân thiết?</strong></button>
//                     <div class="faq-content">
//                         <p>Thời gian giao dự kiến sẽ được thể hiện cụ thể trong quá trình đặt hàng dựa vào khoảng cách đến nhà khách từ cửa hàng gần nhất có hàng:</p>
//                         <table class="faq-table">
//                             <tr>
//                                 <th>Khoảng cách</th>
//                                 <th>Thời gian dự kiến giao hàng (08:00 - 18:00)</th>
//                             </tr>
//                             <tr>
//                                 <td>Dưới 20km tại HCM, Hà Nội</td>
//                                 <td>Trong ngày hoặc ngày kế tiếp</td>
//                             </tr>
//                             <tr>
//                                 <td>Dưới 20km tại khu vực khác</td>
//                                 <td>Trong vòng 1-3 ngày</td>
//                             </tr>
//                             <tr>
//                                 <td>Trên 20km</td>
//                                 <td>Trong vòng 2-7 ngày</td>
//                             </tr>
//                         </table>
//                         <p>Thời gian dự kiến được tính từ lúc chuyên viên tư vấn Eternal Sparkle liên hệ khách xác nhận đơn hàng thành công và có thể dao động sớm hoặc hy hữu muộn hơn.</p>
//                         <p>Thời gian giao hàng tại khu vực biển đảo có thể dài hơn dự kiến từ 3-5 ngày tùy vào tình hình thời tiết và chuyến tàu ra đảo.</p>
//                     </div>
//                 </div>
//                 <div class="faq-section">
//                     <button class="faq-section-header"><strong>Làm sao để nâng cấp hạng thẻ khách hàng thân thiết?</strong></button>
//                     <div class="faq-content">
//                         <p>Eternal Sparkle cam kết tất cả các đơn hàng được giao đều là hàng chính hãng, đi kèm hóa đơn, được đóng gói bằng bao bì có logo, dán băng keo và 04 tem niêm phong của Eternal Sparkle.</p>
//                         <p>Trước khi chấp nhận và thanh toán cho một đơn hàng, <strong>quý khách hàng có quyền yêu cầu được mở thùng hàng để kiểm tra hàng hóa bên trong</strong> có đúng với thông tin đặt hàng hay không, bao gồm: số lượng, chủng loại, màu sắc, hình thức, tính nguyên vẹn của hàng hóa.</p>
//                         <p><strong>Quý khách hàng có quyền từ chối nhận hàng nếu phát hiện thùng hàng không còn nguyên vẹn hoặc thiếu tem mác.</strong></p>
//                         <p>Quý khách vui lòng <strong>quay lại video toàn bộ quá trình mở hàng</strong> để những vấn đề phát sinh được dễ dàng xử lý.</p>
//                         <p>Trường hợp đơn hàng giá trị cao trên 20 triệu, quý khách vui lòng đặt cọc trước:</p>
//                         <table>
//                             <tr>
//                                 <th>Giá trị đơn hàng</th>
//                                 <th>Quy định đặt cọc</th>
//                             </tr>
//                             <tr>
//                                 <td>Từ 20 Triệu đến dưới 50 Triệu	</td>
//                                 <td>30%</td>
//                             </tr>
//                             <tr>
//                                 <td>Từ 50 Triệu đến dưới 100 Triệu	</td>
//                                 <td>50%</td>
//                             </tr>
//                             <tr>
//                                 <td>Trên 100 Triệu	</td>
//                                 <td>70%</td>
//                             </tr>
//                         </table>
//                     </div>
//                 </div>
//                 <div class="faq-section">
//                     <button class="faq-section-header"><strong>Làm sao để sử dụng chiết khấu hạng thẻ khách hàng VIP?</strong></button>
//                     <div class="faq-content">
//                         <p>Khách hàng có quyền tự kiểm tra, cập nhật hoặc hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào website www.eternalsparkle.com.vn và chỉnh sửa hoặc yêu cầu ban quản trị thực hiện việc này.</p>
//                         <p>Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân của mình cho bên thứ 3 đến ban quản trị. Khi tiếp nhận những phản hồi này, Eternal Sparkle sẽ xác nhận lại thông tin, chịu trách nhiệm trả lời lý do cũng như hướng dẫn khách hàng khôi phục và bảo mật lại thông tin.</p>
//                     </div>
//                 </div>
//                 <div class="faq-section">
//                     <button class="faq-section-header"><strong>Quy định tích lũy điểm</strong></button>
//                     <div class="faq-content">
//                         <p>Nếu có bất kỳ vấn đề phát sinh trong khâu giao hàng khiến quý khách hàng không hài lòng, Eternal Sparkle xin thành thật cáo lỗi và mong quý khách hàng có thể liên hệ phản ánh trực tiếp với Eternal Sparkle để chúng tôi có thể nâng cao chất lượng dịch vụ.</p>
//                         <p>Tổng đài 0123-456-789 hoàn toàn miễn phí từ 08:00 đến 21:00 (kể cả lễ Tết).</p>
//                         <p>Thời gian xử lý khiếu nại hoặc phát sinh về dịch vụ giao hàng từ 2-7 ngày làm việc.</p>
//                         <p>Cảm ơn quý khách hàng đã lựa chọn sản phẩm Eternal Sparkle.</p>
//                     </div>
//                 </div>
//                 <div class="faq-section">
//                     <button class="faq-section-header"><strong>Lưu ý chung</strong></button>
//                     <div class="faq-content">

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }