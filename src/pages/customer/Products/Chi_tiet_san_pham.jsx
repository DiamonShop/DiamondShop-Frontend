import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function Chi_tiet_san_pham(props) {
    const largeSliderRef = useRef(null);
    const navSliderRef = useRef(null);

    const largeSliderSettings = {
        fade: true,
        arrows: false,
        speed: 1000,
        asNavFor: navSliderRef.current,
        ref: largeSliderRef
    };

    const navSliderSettings = {
        slidesToShow: 4,
        asNavFor: largeSliderRef.current,
        centerMode: true,
        speed: 1000,
        centerPadding: '0',
        focusOnSelect: true,
        //prevArrow: <button type="button" className="slick-prev"><i className="lnr lnr-chevron-left"></i></button>,
        //nextArrow: <button type="button" className="slick-next"><i className="lnr lnr-chevron-right"></i></button>,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        }],
        ref: navSliderRef
    };
    const relatedSliderSettings = {
        speed: 1000,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToRoll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: <button type="button" class="slick-prev"><i class="pe-7s-angle-left"></i></button>,
        nextArrow: <button type="button" class="slick-next"><i class="pe-7s-angle-right"></i></button>,

    };

    // In ra dữ liệu truyền qua từ props


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
                                        <li class="breadcrumb-item"><a href="shop.html">shop</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Chi tiết sản phẩm</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shop-main-wrapper section-padding pb-0">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 order-1 order-lg-2">

                            <div class="product-details-inner">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <Slider {...largeSliderSettings} className="product-large-slider">
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-1.png" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-2.png" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-3.png" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-4.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-5.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-6.jpg" alt="product-details" />
                                            </div>
                                        </Slider>
                                        <Slider {...navSliderSettings} className="pro-nav">
                                            <div className="pro-nav-thumb">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-1.png" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-2.png" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-3.png" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-4.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-5.jpg" alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src="assets\img\product\Nhan\2\nhan-vang-trang-14k-dinh-da-ecz-6.jpg" alt="product-details" />
                                            </div>
                                        </Slider>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="product-details-des">
                                            {/* <div class="manufacturer-name">
                                                <a href="product-details.html">HasTech</a>
                                            </div> */}
                                            <h3 class="product-name">Nhẫn Vàng trắng 14K đính đá ECZ</h3>
                                            <div class="ratings d-flex">
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <span><i class="fa fa-star"></i></span>
                                                <div class="pro-review">
                                                    <span>1 Đánh giá</span>
                                                </div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price-regular">8.365.000đ</span>
                                                <span class="price-old"><del>10.156.160đ</del></span>
                                            </div>
                                            {/* <h5 class="offer-text"><strong>Hurry up</strong>! offer ends in:</h5>
                                            <div class="product-countdown" data-countdown="2022/12/20"></div> */}
                                            {/* <div class="availability">
                                                <i class="fa fa-check-circle"></i>
                                                <span>sdf</span>
                                            </div> */}
                                            {/* <p class="pro-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua. Phasellus id nisi quis justo tempus mollis sed et dui. In hac
                                                habitasse platea dictumst.</p> */}
                                            <ul class="diamond-filter-container">
                                                <li class="filter-group">
                                                    <p className='filter-name'>Chất liệu</p>
                                                    <select id='color-select'>
                                                        <option value="G">G</option>
                                                    </select>
                                                </li>
                                                <li class="filter-group">
                                                    <p className='filter-name'>Kích thước</p>
                                                    <select id='clarity-select'>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="18">22</option>
                                                        <option value="19">23</option>
                                                        <option value="20">24</option>
                                                        <option value="21">25</option>
                                                        <option value="19">26</option>
                                                        <option value="20">27</option>
                                                        <option value="21">28</option>
                                                        <option value="20">29</option>
                                                        <option value="21">30</option>
                                                        <option value="19">31</option>
                                                        <option value="20">32</option>
                                                        <option value="21">33</option>
                                                    </select>
                                                </li>
                                                <li class="filter-group">
                                                    <p className='filter-name'>Số lượng</p>
                                                    <select id='cut-select'>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                    </select>
                                                </li>
                                            </ul>
                                            {/* <div class="container">
                                                <strong>Ưu đãi:</strong>
                                                <img src="assets\img\vnpay48x48.png" alt="VN-PAY" />
                                                <p>Giảm tới 500K khi thanh toán bằng VNPAY-QR</p>
                                            </div> */}
                                            <div class="">
                                                {/* <div class="action_link">
                                                    <a class="btn btn-cart2" href="#">Thêm vào danh sách yêu thích</a>
                                                </div> */}
                                                <div class="action_link">
                                                    <a class="btn btn-cart2" href="#">Thêm vào giỏ hàng</a>
                                                </div>
                                            </div>
                                            {/* <div class="quantity-cart-box d-flex align-items-center">
                                                <h6 class="option-title">Số lượng:</h6>
                                                <div class="quantity">
                                                    <div class="pro-qty"><input type="text" value="1" /></div>
                                                </div>
                                                <div class="action_link">
                                                    <a class="btn btn-cart2" href="#">Thêm vào giỏ hàng</a>
                                                </div>
                                            </div> */}
                                            {/* <div class="pro-size">
                                                <h6 class="option-title">Kích thước :</h6>
                                                <select class="nice-select">
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select>
                                            </div> */}
                                            {/* <div class="color-option">
                                                <h6 class="option-title">color :</h6>
                                                <ul class="color-categories">
                                                    <li>
                                                        <a class="c-lightblue" href="#" title="LightSteelblue"></a>
                                                    </li>
                                                    <li>
                                                        <a class="c-darktan" href="#" title="Darktan"></a>
                                                    </li>
                                                    <li>
                                                        <a class="c-grey" href="#" title="Grey"></a>
                                                    </li>
                                                    <li>
                                                        <a class="c-brown" href="#" title="Brown"></a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                            <div class="like-icon">
                                                <a class="facebook" href="#"><i class="fa fa-facebook"></i>like</a>
                                                <a class="twitter" href="#"><i class="fa fa-twitter"></i>tweet</a>
                                                <a class="pinterest" href="#"><i class="fa fa-pinterest"></i>save</a>
                                                <a class="google" href="#"><i class="fa fa-google-plus"></i>share</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="product-details-reviews section-padding pb-0">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="product-review-info">
                                            <ul class="nav review-tab">
                                                <li>
                                                    <a class="active" data-bs-toggle="tab" href="#tab_one">Mô tả sản phẩm</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="tab" href="#tab_two">Thông số</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="tab" href="#tab_three">Phản hồi</a>
                                                </li>
                                                <li>
                                                    <a data-bs-toggle="tab" href="#tab_four">Dịch vụ sau mua</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content reviews-tab">
                                                <div class="tab-pane fade show active" id="tab_one">
                                                    <div class="tab-one">
                                                        <p>Kim cương vốn là món trang sức mang đến niềm kiêu hãnh và cảm hứng thời trang bất tận.
                                                            Sở hữu riêng cho mình món trang sức kim cương chính là điều mà ai cũng mong muốn.
                                                            Chiếc nhẫn được chế tác từ vàng 14K cùng điểm nhấn kim cương với 57 giác cắt chuẩn xác,
                                                            tạo nên món trang sức đầy sự sang trọng và đẳng cấp.
                                                        </p>
                                                        <p>Kim cương đã đẹp, trang sức kim cương lại càng mang sức hấp dẫn khó cưỡng. Sự kết hợp mới mẻ này chắc chắn sẽ tạo nên dấu ấn thời trang hiện đại và giúp quý cô trở nên nổi bật, tự tin và thu hút sự ngưỡng mộ của mọi người</p>


                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="tab_two">
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>Trọng lượng tham khảo</td>
                                                                <td>6.87589 phân</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Loại đá chính</td>
                                                                <td>Kim cương</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Kích thước đá chính (tham khảo):</td>
                                                                <td>4.9 li</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Hình dạng đá</td>
                                                                <td>Tròn</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Loại đá phụ</td>
                                                                <td>Kim cương</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Số viên đá chính</td>
                                                                <td>1 viên</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Số viên đá phụ</td>
                                                                <td>18 viên</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Thương hiệu</td>
                                                                <td>Eternal Sparkle</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Color (Màu sắc/ Nước kim cương)</td>
                                                                <td>F</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Clarity (Độ tinh khiết)</td>
                                                                <td>SI1</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Cut (Giác cắt/ Hình dạng kim cương)</td>
                                                                <td>Facet</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Giấy kiểm định</td>
                                                                <td>Có</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Cut (Giác cắt/ Hình dạng kim cương)</td>
                                                                <td>Facet</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Giới tính</td>
                                                                <td>Nữ</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="tab-pane fade" id="tab_three">
                                                    <form action="#" class="review-form">
                                                        <h5>1 review for <span>Chaz Kangeroo</span></h5>
                                                        <div class="total-reviews">
                                                            <div class="rev-avatar">
                                                                <img src="assets/img/about/avatar.jpg" alt="" />
                                                            </div>
                                                            <div class="review-box">
                                                                <div class="ratings">
                                                                    <span class="good"><i class="fa fa-star"></i></span>
                                                                    <span class="good"><i class="fa fa-star"></i></span>
                                                                    <span class="good"><i class="fa fa-star"></i></span>
                                                                    <span class="good"><i class="fa fa-star"></i></span>
                                                                    <span><i class="fa fa-star"></i></span>
                                                                </div>
                                                                <div class="post-author">
                                                                    <p><span>Nguyễn Đăng Khoa </span> 30/4/2024</p>
                                                                </div>
                                                                <p>Nhẫn đẹp như hình nè, không hề thất vọng khi bóc hộp. Like mạnh, Mình rất hài lòng với cách nhân viên tư vấn trả lời câu hỏi</p>
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col">
                                                                <label class="col-form-label"><span class="text-danger">*</span>
                                                                    Tên của bạn:</label>
                                                                <input type="text" class="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col">
                                                                <label class="col-form-label"><span class="text-danger">*</span>
                                                                    Email:</label>
                                                                <input type="email" class="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col">
                                                                <label class="col-form-label"><span class="text-danger">*</span>
                                                                    Tin nhắn của bạn</label>
                                                                <textarea class="form-control" required></textarea>
                                                                {/* <div class="help-block pt-10"><span
                                                                    class="text-danger">Note:</span>
                                                                    HTML is not translated!
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                        <div class="form-group row">
                                                            <div class="col">
                                                                <label class="col-form-label"><span class="text-danger">*</span>
                                                                    Đánh giả</label>
                                                                &nbsp;&nbsp;&nbsp; Tệ&nbsp;
                                                                <input type="radio" value="1" name="rating" />
                                                                &nbsp;
                                                                <input type="radio" value="2" name="rating" />
                                                                &nbsp;
                                                                <input type="radio" value="3" name="rating" />
                                                                &nbsp;
                                                                <input type="radio" value="4" name="rating" />
                                                                &nbsp;
                                                                <input type="radio" value="5" name="rating" checked />
                                                                &nbsp;Tốt
                                                            </div>
                                                        </div>
                                                        <div class="buttons">
                                                            <button class="btn btn-sqr" type="submit">Continue</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="tab-pane fade" id="tab_four">
                                                    <form action="#" class="review-form">
                                                        <p color="blue"><b>Bảo hành miễn phí 6 tháng</b></p>
                                                        <p>- Bảo hành 6 tháng lỗi kỹ thuật, nước xi.</p>
                                                        <p><b>Miễn phí siêu âm và đánh bóng bằng máy chuyên dụng trọn đời</b></p>
                                                        <ul>
                                                            <li>- Đối với sản phẩm bị oxy hóa, xuống màu, sẽ được siêu âm làm sạch bằng máy chuyên dụng (siêu âm, không xi) miễn phí trọn đời tại cửa hàng.​</li>
                                                            <li>- Miễn phí đánh bóng trọn đời . Nhẫn cưới sẽ được bảo hành, làm mới, đánh bóng, xi miễn phí trọn đời.​</li>
                                                        </ul>
                                                        <p><b>Miễn phí thay đá CZ và đá tổng hợp</b></p>
                                                        <ul>Không áp dụng bảo hành cho các trường hợp sau:
                                                            <li>- Dây chuyền, lắc chế tác bị đứt gãy; bị biến dạng hoặc hư hỏng nặng</li>
                                                            <li>- Khách hàng cung cấp thông tin truy lục hóa đơn không chính xác.​​​​​</li>
                                                        </ul>
                                                        <ul><i>Lưu ý:</i>
                                                            <li><i>- PNJ bảo hành các sản phẩm thuộc hệ thống cửa hàng kênh lẻ và online của PNJ.</i>​​</li>
                                                            <li><i>- Chế độ bảo hành sản phẩm có thể thay đổi theo chính sách của PNJ đối với các dòng hàng và chương trình khuyến mãi vào từng thời điểm.​</i></li>
                                                        </ul>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <section class="related-products section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-12">

                            <div class="section-title text-center">
                                <h2 class="title">Sản phẩm tương tự</h2>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">

                            <Slider {...relatedSliderSettings} class="product-carousel-4 slick-row-10 slick-arrow-style">
                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets\img\product\Nhan\11\nhan-cuoi-kim-cuong-nam-pnj-long-phung-vang-18k-1.png" alt="product" />
                                            <img class="sec-img" src="assets\img\product\Nhan\11\nhan-cuoi-kim-cuong-nam-pnj-long-phung-vang-18k-2.png" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>Mới</span>
                                            </div>
                                        </div>
                                        <div class="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i class="pe-7s-like"></i></a>
                                        </div>
                                        <div class="cart-hover">
                                            <button class="btn btn-cart">Thêm vào giỏ hàng</button>
                                        </div>
                                    </figure>
                                    <div class="product-caption text-center">
                                        <h6 class="product-name">
                                            <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng 18K Long Phụng</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">16.925.000đ</span>
                                            <span class="price-old"><del>19.161.000đ</del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets\img\product\Nhan\12\nhan-kim-cuong-vang-trang-14k-first-diamond-1.png" alt="product" />
                                            <img class="sec-img" src="assets\img\product\Nhan\12\nhan-kim-cuong-vang-trang-14k-first-diamond-2.png" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>Mới</span>
                                            </div>
                                        </div>
                                        <div class="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i class="pe-7s-like"></i></a>
                                        </div>
                                        <div class="cart-hover">
                                            <button class="btn btn-cart">Thêm vào giỏ hàng</button>
                                        </div>
                                    </figure>
                                    <div class="product-caption text-center">
                                        <h6 class="product-name">
                                            <a href="product-details.html">Nhẫn Kim cương Vàng trắng 14K First Diamond</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">7.565.000đ</span>
                                            <span class="price-old"><del>8.115.000đ</del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets\img\product\Nhan\13\nhan-cuoi-kim-cuong-vang-18k-tinh-hong-1.png" alt="product" />
                                            <img class="sec-img" src="assets\img\product\Nhan\13\nhan-cuoi-kim-cuong-vang-18k-tinh-hong-2.png" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>Mới</span>
                                            </div>
                                        </div>
                                        <div class="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i class="pe-7s-like"></i></a>
                                        </div>
                                        <div class="cart-hover">
                                            <button class="btn btn-cart">Thêm vào giỏ hàng</button>
                                        </div>
                                    </figure>
                                    <div class="product-caption text-center">
                                        <h6 class="product-name">
                                            <a href="product-details.html">Nhẫn cưới Kim cương Vàng 18K Tình Hồng</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">7.497.000đ</span>
                                            <span class="price-old">8.151.000đ<del></del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets\img\product\Nhan\14\nhan-cuoi-nam-kim-cuong-vang-18k-chung-doi-1.png" alt="product" />
                                            <img class="sec-img" src="assets\img\product\Nhan\14\nhan-cuoi-nam-kim-cuong-vang-18k-chung-doi-2.png" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>Mới</span>
                                            </div>
                                            {/* <div class="product-label discount">
                                                <span>15%</span>
                                            </div> */}
                                        </div>
                                        <div class="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i class="pe-7s-like"></i></a>
                                        </div>
                                        <div class="cart-hover">
                                            <button class="btn btn-cart">Thêm vào giỏ hàng</button>
                                        </div>
                                    </figure>
                                    <div class="product-caption text-center">
                                        <h6 class="product-name">
                                            <a href="product-details.html">Nhẫn cưới nam Kim cương Vàng 18K Chung Đôi</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">11.485.000đ</span>
                                            <span class="price-old"><del>13.666.000đ</del></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-item">
                                    <figure class="product-thumb">
                                        <a href="product-details.html">
                                            <img class="pri-img" src="assets\img\product\Nhan\15\nhan-cuoi-kim-cuong-vang-trang-14k-long-phung-1.png" alt="product" />
                                            <img class="sec-img" src="assets\img\product\Nhan\15\nhan-cuoi-kim-cuong-vang-trang-14k-long-phung-2.png" alt="product" />
                                        </a>
                                        <div class="product-badge">
                                            <div class="product-label new">
                                                <span>Mới</span>
                                            </div>
                                        </div>
                                        <div class="button-group">
                                            <a href="wishlist.html" data-bs-toggle="tooltip" data-bs-placement="left" title="Thêm vào danh sách yêu thích"><i class="pe-7s-like"></i></a>
                                            
                                        </div>
                                        <div class="cart-hover">
                                            <button class="btn btn-cart">Thêm vào giỏ hàng</button>
                                        </div>
                                    </figure>
                                    <div class="product-caption text-center">
                                        <h6 class="product-name">
                                            <a href="product-details.html">Nhẫn cưới Kim cương Vàng trắng 14K Long Phụng</a>
                                        </h6>
                                        <div class="price-box">
                                            <span class="price-regular">8.323.200đ</span>
                                            <span class="price-old"><del>9.248.000đ</del></span>
                                        </div>
                                    </div>
                                </div>
                            </Slider>

                        </div>
                    </div>
                </div>
            </section>

            <div class="scroll-top not-visible">
                <i class="fa fa-angle-up"></i>
            </div>

        </div>
    )
}
