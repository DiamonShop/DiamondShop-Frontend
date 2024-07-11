import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { decodeToken } from '../../api/TokenAPI';
import { handleUpdateStatusByUserId } from '../../api/OrderAPI';

function Dat_hang_thanh_cong() {
  const [transactionId, setTransactionId] = useState('');
  const [billCreateDTO, setBillCreateDTO] = useState(null);
  const getUserId = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = decodeToken(token).sid;
      await handleUpdateStatusByUserId(userId);
    }
  }
  useEffect(() => {
    setTransactionId(Math.floor(100000000 + Math.random() * 900000000));
    const storedBill = localStorage.getItem('billCreateDTO');
    if (storedBill) {
      setBillCreateDTO(JSON.parse(storedBill));
    }
    getUserId();
  }, []);

  return (
    <div>
      <div className='box-dat-hang'>
        <div class="container-dat-hang">
          <div class="printer-top"></div>

          <div class="paper-container">
            <div class="printer-bottom"></div>

            <div class="paper">
              <div class="main-contents">
                <div class="success-icon">&#10004;</div>
                <div class="success-title">
                  Đặt hàng thành công
                </div>
                <div class="success-description">
                  Cảm ơn bạn đã hoàn tất thanh toán! Bạn sẽ nhận được sản phẩm bạn đã mua trong thời gian sớm nhất.
                </div>
                <div class="order-details">
                  <div class="order-number-label">Mã đơn hàng</div>
                  <div class="order-number" >{transactionId}</div>
                  {billCreateDTO && (
                    <div>
                      <div>User ID: {billCreateDTO.UserId}</div>
                      <div>Full Name: {billCreateDTO.FullName}</div>
                      <div>Phone Number: {billCreateDTO.NumberPhone}</div>
                      <div>Email: {billCreateDTO.Email}</div>
                      <div>Address: {billCreateDTO.Address}</div>
                      <div>Order Note: {billCreateDTO.OrderNote}</div>
                    </div>
                  )}
                  <div class="complement">Thank You!</div>
                  <div className='btn-dat-hang-thanh-cong'>
                    <Link to="/" class="btn-return-home">Tiếp tục mua hàng</Link>
                    <div>
                      <Link to="/" class="btn-view-cart">Xem đơn hàng</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div class="jagged-edge"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dat_hang_thanh_cong;