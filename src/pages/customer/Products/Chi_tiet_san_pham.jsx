import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../utils/NumberFormat';
import { handleAddProductToOrder, handleCreateOrder, handleGetOrderByUserId } from '../../../api/OrderAPI';
import { decodeToken } from '../../../api/TokenAPI';
import '../../../nice-select'
import '../../../image-zoom'
export default function Chi_tiet_san_pham() {
    useEffect(() => {
        // Khởi tạo plugin nice-select sau khi component đã được render
        $('select').niceSelect();
        $('.img-zoom').zoom();
        // Cleanup khi component unmount
        return () => {
            $('select').niceSelect('destroy');
            $('.img-zoom').zoom('destroy');
        };
    }, []);


    //Get product when reload
    const productObj = JSON.parse(localStorage.getItem('product'));
    const largeSliderRef = useRef(null);
    const navSliderRef = useRef(null);
    const [token, setToken] = useState();

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
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const [showMessage, setShowMessage] = useState(false);

    const successAddMessage = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    const handleAddToCart = async () => {
        //Lấy userId để tạo order
        const token = localStorage.getItem('token')
        if (token) {
            const userId = decodeToken(token).sid;
            //Gọi API để tạo order
            const order = await handleGetOrderByUserId(parseInt(userId, 10));
            //Nếu Order bằng null thì tạo Order mới
            if (order != null) {
                for (const item of order) {
                    if (item.status == 'Ordering') {
                        handleAddProductToOrder(item.orderId, productObj.productId, quantity);
                        successAddMessage();
                        break;
                    } else if (item.status == 'Completed' || item.status == 'Shipped') {
                        const orderId = await handleCreateOrder(userId);
                        console.log(orderId)
                        handleAddProductToOrder(orderId, productObj.productId, quantity);
                        successAddMessage();
                        break;
                    }
                }
            } else {
                const orderId = await handleCreateOrder(userId);
                const order = await handleGetOrderByUserId(parseInt(userId, 10));
                for (const item of order) {
                    if (item.status == 'Ordering' && item.orderId == orderId) {
                        handleAddProductToOrder(orderId, productObj.productId, quantity);
                        successAddMessage();
                        break;
                    }
                }
            }
        }
    }

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
                                        <li class="breadcrumb-item"><Link to="/Nhan">{productObj.categoryName}</Link></li>
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
                                                <img src={productObj.image1} alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src={productObj.image2} alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src={productObj.image3} alt="product-details" />
                                            </div>
                                            <div className="pro-large-img img-zoom">
                                                <img src={productObj.image4} alt="product-details" />
                                            </div>

                                        </Slider>
                                        <Slider {...navSliderSettings} className="pro-nav">
                                            <div className="pro-nav-thumb">
                                                <img src={productObj.image1} alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src={productObj.image2} alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src={productObj.image3} alt="product-details" />
                                            </div>
                                            <div className="pro-nav-thumb">
                                                <img src={productObj.image4} alt="product-details" />
                                            </div>

                                        </Slider>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="product-details-des">
                                            <h3 class="product-name">{productObj.productName}</h3>
                                            <div class="ratings d-flex">
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <span><i class="fa fa-star-o"></i></span>
                                                <div class="pro-review">
                                                    <span>1 Reviews</span>
                                                </div>
                                            </div>
                                            <div class="price-box">
                                                <span class="price-regular-detail">{formatCurrency(productObj.newPrice)}đ</span>
                                                <span class="price-old-detail"><del>{formatCurrency(productObj.oldPrice)}đ</del></span>
                                            </div>
                                            <div class="pro-size">
                                                <h6 class="option-title">Chất liệu:</h6>
                                                <input class="nice-select-chatlieu" value='Vàng' type='text' readOnly>
                                                </input>
                                            </div>

                                            <div class="quantity-cart-box d-flex align-items-center">
                                                <h6 class="option-title">Số lượng:</h6>
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <span className=" qtybtn" onClick={handleDecrement}>-</span>
                                                        <input
                                                            name='txtQuantity'
                                                            type="text"
                                                            value={quantity}
                                                            readOnly
                                                        />
                                                        <span className=" qtybtn" onClick={handleIncrement}>+</span>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="pro-size">
                                                <h6 class="option-title">Size :</h6>
                                                <select class="nice-select">
                                                    <option >8</option>
                                                    <option >9</option>
                                                    <option >10</option>
                                                    <option >11</option>
                                                    <option >12</option>
                                                    <option >13</option>
                                                    <option >14</option>
                                                    <option >15</option>
                                                    <option >16</option>
                                                    <option >17</option>
                                                    <option >18</option>
                                                    <option >19</option>
                                                    <option >20</option>
                                                    <option >21</option>
                                                    <option >22</option>
                                                    <option >23</option>
                                                    <option >24</option>
                                                    <option >25</option>
                                                    <option >26</option>
                                                    <option >27</option>
                                                    <option >28</option>
                                                    <option >30</option>
                                                    <option >32</option>
                                                    <option >31</option>
                                                    <option >33</option>
                                                    <option >29</option>
                                                </select>

                                                <Link to='/Huongdandoni' className="huong-dan-do-ni">Hướng dẫn đo ni (Size)</Link>
                                            </div>

                                            <div class="button-them-vao-gio-hang">
                                                <div class="action_link">
                                                    <a class="btn btn-cart2" onClick={handleAddToCart}>Thêm vào giỏ hàng</a>
                                                </div>
                                            </div>

                                            {showMessage && (
                                                <div class="message-add-to-cart-success">
                                                    <span style={{ color: 'red' }}>Thêm vào giỏ hàng thành công</span>
                                                </div>
                                            )}
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

                                                <div class="tab-pane fade" id="tab_three">
                                                    <form action="#" class="review-form">
                                                        <h5>1 review for <span>Nguyễn Đăng Khoa</span></h5>
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
