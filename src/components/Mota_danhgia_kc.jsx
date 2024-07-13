import React from 'react'

function Mota_danhgia_kc() {
  const productObj = JSON.parse(localStorage.getItem('product'));
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
                  <a data-bs-toggle="tab" href="#tab_two">Thông số</a>
                </li>
                <li>
                  <a data-bs-toggle="tab" href="#tab_three">Phản hồi</a>
                </li>
                {/* <li>
                  <a data-bs-toggle="tab" href="#tab_four">Chính sách bảo hành</a>
                </li> */}
              </ul>
              <div class="tab-content reviews-tab">
                <div class="tab-pane fade show active" id="tab_one">
                  <div class="tab-one">
                    <p>{productObj.description} </p>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab_two">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Tên sản phẩm </td>
                        <td>{productObj.productName}</td>
                      </tr>
                      <tr>
                        <td>Trọng lượng (Carat) </td>
                        <td>{productObj.Carat} carat</td>
                      </tr>
                      <tr>
                        <td>Màu sắc (Color) </td>
                        <td>{productObj.Color}</td>
                      </tr>
                      <tr>
                        <td>Độ Tinh Khiết (Clarity) </td>
                        <td>{productObj.Clarity}</td>
                      </tr>
                      <tr>
                        <td>Giác Cắt (Cut) </td>
                        <td>{productObj.Cut}</td>
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
                          <p><span>admin -</span> 30 Mar, 2019</p>
                        </div>
                        <p>Aliquam fringilla euismod risus ac bibendum. Sed sit
                          amet sem varius ante feugiat lacinia. Nunc ipsum nulla,
                          vulputate ut venenatis vitae, malesuada ut mi. Quisque
                          iaculis, dui congue placerat pretium, augue erat
                          accumsan lacus</p>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col">
                        <label class="col-form-label"><span class="text-danger">*</span>
                          Đánh giá:</label>
                        <textarea class="form-control" required></textarea>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col">
                        <label class="col-form-label"><span class="text-danger">*</span>
                          Rating</label>
                        &nbsp;&nbsp;&nbsp; Bad&nbsp;
                        <input type="radio" value="1" name="rating" />
                        &nbsp;
                        <input type="radio" value="2" name="rating" />
                        &nbsp;
                        <input type="radio" value="3" name="rating" />
                        &nbsp;
                        <input type="radio" value="4" name="rating" />
                        &nbsp;
                        <input type="radio" value="5" name="rating" checked />
                        &nbsp;Good
                      </div>
                    </div>
                    <div class="buttons">
                      <button class="btn btn-sqr" type="submit">Gửi</button>
                    </div>
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

export default Mota_danhgia_kc
