import React, { useEffect, useState } from 'react';
import { Await, Link } from 'react-router-dom';
import { decodeToken } from '../../api/TokenAPI';
import { handleGetLatestOrderByUserId, handleUpdateStatusToPending, handleUpdateTotalPriceByUserId } from '../../api/OrderAPI';
import { handleUpdateUserLoyalPoint, handleUpdateJewelryQuantity, handleSetUserLoyalPointToZero } from '../../api/UpdateProfile';
import { handleUpdateDiamondQuantity } from '../../api/DiamondAPI'
import { useTranslation } from "react-i18next";

function Dat_hang_thanh_cong() {
  const [order, setOrder] = useState([]);
  const { t } = useTranslation();
  const getUserId = async () => {
    const token = localStorage.getItem("token");
    const checked = localStorage.getItem("loyaltyChecked");
    const price = localStorage.getItem("priceToUpdate");
    if (token) {
      const userId = decodeToken(token).sid;
      if (checked === "1") {
        await handleSetUserLoyalPointToZero(userId);
        localStorage.removeItem('loyaltyChecked');
      }
      //await handleUpdateTotalPriceByUserId(userId,price);      
      await handleUpdateStatusToPending(userId);
      await handleUpdateUserLoyalPoint(userId,price);
      localStorage.removeItem("priceToUpdate");
      await handleUpdateJewelryQuantity(userId);
      await handleUpdateDiamondQuantity(userId);
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
                  {t("ordersSuccess")}
                </div>
                <div className="success-description">
                  {t("ordersMessage")}
                </div>
                <div className="order-details">
                  <div className="order-number-label">{t("ordersCode")}</div>
                  <div className="order-number">{order ? order.orderId : ''}</div>
                  <div className="complement">Thank You!</div>
                  <div className='btn-dat-hang-thanh-cong'>
                    <Link to="/" className="btn-return-home">{t("continueShopping")}</Link>
                    <div>
                      <Link to="/Chitietdonhang"
                        className="btn-view-cart" onClick={() => handleViewOrderDetails(order.orderId)}>{t("viewOrders")}</Link>
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