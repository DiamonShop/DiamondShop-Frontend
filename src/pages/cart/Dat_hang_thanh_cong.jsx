import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../api/TokenAPI';
import { handleUpdateStatusByUserId } from '../../api/OrderAPI';

function Dat_hang_thanh_cong() {
  const [transactionId, setTransactionId] = useState('');
  const [billId, setBillId] = useState('');
  const getUserId = async () =>{
    const token = localStorage.getItem("token");
    if(token){
        const userId = decodeToken(token).sid;
        const status = await handleUpdateStatusByUserId(userId);        
    }
}

  useEffect(() => {
    setTransactionId(Math.floor(100000000 + Math.random() * 900000000));
    const storedBillId = localStorage.getItem('billId');
    if (storedBillId) {
        setBillId(storedBillId);
        //localStorage.removeItem('billId'); // Optionally remove it if not needed anymore
        
    } else {
        console.error("No billId found in localStorage");
    }

    getUserId();
  }, []);
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
                  <div className="order-number-label">Mã đơn hàng</div>
                  <div className="order-number">{transactionId}</div>
                  <div className="order-number-label">Mã hóa đơn</div>
                  <div className="order-number">{billId || "Not available"}</div>
                  <div className="complement">Thank You!</div>
                  <div className='btn-dat-hang-thanh-cong'>
                    <Link to="/" className="btn-return-home">Tiếp tục mua hàng</Link>
                    <div>
                      <Link to="/" className="btn-view-cart">Xem đơn hàng</Link>
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