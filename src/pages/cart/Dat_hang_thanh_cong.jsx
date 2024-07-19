import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../api/TokenAPI';
import { handleGetLatestOrderByUserId, handleUpdateStatusToPending } from '../../api/OrderAPI';
import { handleUpdateUserLoyalPoint} from '../../api/UpdateProfile';

function Dat_hang_thanh_cong() {
  const [order, setOrder] = useState([]);

  const getUserId = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const userId = decodeToken(token).sid;
      await handleUpdateStatusToPending(userId);
      await handleUpdateUserLoyalPoint(userId);
    }
  }

  useEffect(() => {
    const fetchOrder = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userId = decodeToken(token).sid;
        const data = await handleGetLatestOrderByUserId(parseInt(userId, 10));
        if (data) {
          setOrder(data);
        }
      } else {
        setOrder(null);
      }
    };

    fetchOrder();
    getUserId();
  }, []);

  const handleViewOrderDetails = (orderId) => {
    localStorage.setItem('selectedOrderId', orderId);
  };

  console.log(order.orderId)
  return (
    <div>
      <div className='box-dat-hang'>
        <div className="container-dat-hang">
          <div className="printer-top"></div>

          <div className="paper-container">
            <div className="printer-bottom"></div>

            <div className="paper">
              <div className="main-contents">
                <div className="success-icon">&#10004;</div>
                <div className="success-title">
                  Đặt hàng thành công
                </div>
                <div className="success-description">
                  Cảm ơn bạn đã hoàn tất thanh toán! Bạn sẽ nhận được sản phẩm bạn đã mua trong thời gian sớm nhất.
                </div>
                <div className="order-details">
                  <div className="order-number-label">Mã thanh toán</div>
                  <div className="order-number">{order ? order.orderId : ''}</div>
                  <div className="complement">Thank You!</div>
                  <div className='btn-dat-hang-thanh-cong'>
                    <Link to="/" className="btn-return-home">Tiếp tục mua hàng</Link>
                    <div>
                      <Link to="/Chitietdonhang"
                        className="btn-view-cart" onClick={() => handleViewOrderDetails(order.orderId)}>Xem đơn hàng</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="jagged-edge"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dat_hang_thanh_cong;