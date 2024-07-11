import React from 'react'

function Mota_danhgia() {
    return (
        <div>
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
                                            <li><i>- PNJ bảo hành các sản phẩm thuộc hệ thống cửa hàng online của ES.</i>​​</li>
                                            <li><i>- Chế độ bảo hành sản phẩm có thể thay đổi theo chính sách của ES đối với các dòng hàng và chương trình khuyến mãi vào từng thời điểm.​</i></li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mota_danhgia
