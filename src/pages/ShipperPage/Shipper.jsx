import { message, Select, Input } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed

const { Option } = Select;

const Shipper = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchType, setSearchType] = useState('OrderId');
  const [searchValue, setSearchValue] = useState('');
  const { user: currentUser, logout: userLogout } = useUser();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [selectedCancelOrder, setSelectedCancelOrder] = useState(null);

  const filteredOrders = orders.filter(order => order.orderStatus === 'Shipping');

  const getStatusClass = (orderStatus) => {
    if (orderStatus === 'Shipping') {
      return 'Shipper-Status-Shipping';
    }
    return '';
  };

  const handleConfirmClick = (order) => {
    setSelectedOrder(order);
    setShowPopup(true);
  };

  const handleStatusUpdate = async () => {
    if (selectedOrder) {
      try {
        await updateStatus(selectedOrder.orderId);
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== selectedOrder.orderId));
        message.success('Đơn hàng đã được hoàn thành');
        setShowPopup(false);
        setSelectedOrder(null);
      } catch (error) {
        console.error('Error updating order status:', error.response || error.message);
        message.error('Lỗi khi cập nhật trạng thái đơn hàng.');
      }
    }
  };

  const handleCancelClick = (order) => {
    setSelectedCancelOrder(order);
    setShowCancelPopup(true);
  };

  const handleCancelOrder = async () => {
    if (cancelReason.trim() === '') {
      message.error('Vui lòng nhập lý do hủy đơn hàng.');
      return;
    }

    if (selectedCancelOrder) {
      try {
        await updateCancelStatus(selectedCancelOrder.orderId, cancelReason);
        setOrders(prevOrders => prevOrders.filter(order => order.orderId !== selectedCancelOrder.orderId));
        message.success('Đơn hàng đã được hủy');
        setShowCancelPopup(false);
        setSelectedCancelOrder(null);
        setCancelReason('');
      } catch (error) {
        console.error('Error updating order cancel status:', error.response || error.message);
        message.error('Lỗi khi cập nhật trạng thái đơn hàng.');
      }
    }
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleSearchTypeChange = (value) => {
    setSearchType(value);
  };

  const searchOrders = () => {
    return filteredOrders.filter(order => {
      if (searchType === 'OrderId') {
        return order.orderId.toString().includes(searchValue);
      } else if (searchType === 'FullName') {
        return order.fullName.toLowerCase().includes(searchValue.toLowerCase());
      }
      return false;
    });
  };

  const updateStatus = async (orderId) => {
    const headers = sendToken();
    try {
      const response = await axios.put(`https://localhost:7101/api/orders/UpdateStatusCompleted?orderId=${orderId}`, null, {
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        }
      });
      console.log('Order status updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating order status:', error.response || error.message);
      throw error;
    }
  };

  const updateCancelStatus = async (orderId, cancelReason) => {
    const headers = sendToken();
    try {
      const response = await axios.put(`https://localhost:7101/api/orders/UpdateStatusCancel?orderId=${orderId}&cancelReason=${cancelReason}`, null, {
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        }
      });
      console.log('Order cancel status updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating order cancel status:', error.response || error.message);
      throw error;
    }
  };

  const fetchShipperData = async () => {
    try {
      const headers = sendToken(); // Get headers with Authorization token

      // Get Shipping data
      const ordersResponse = await axios.get('https://localhost:7101/api/Bill/GetAllBills', {
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        }
      });
      const orders = ordersResponse.data;
      setOrders(orders); // Update state with fetched orders

    } catch (error) {
      console.error('Error fetching user data:', error.response || error.message);
      if (error.response && error.response.status === 401) {
        userLogout();
      } else {
        setErrorMessage('Error fetching user data.');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipperData();
  }, [currentUser, userLogout, navigate]);

  return (
    <div className="Shipper-App">
      <main className="Shipper-Main">
        <h2 className="Shipper-Title">Quản lý đơn giao hàng</h2>
        <div className="Shipper-SearchContainer">
          <p>Tìm kiếm theo:</p>
          <Select defaultValue="OrderId" style={{ width: 150 }} onChange={handleSearchTypeChange}>
            <Option value="OrderId">Mã đơn hàng</Option>
            <Option value="FullName">Họ và tên</Option>
          </Select>
          <Input
            style={{ width: 300, marginLeft: 10 }}
            placeholder="Nhập thông tin tìm kiếm"
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <table className="Shipper-Table">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Họ và tên</th>
              <th>Số điện thoại</th>
              <th>Địa chỉ nhận hàng</th>
              <th>Ghi chú</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {searchOrders().map(order => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.fullName}</td>
                <td>{order.numberPhone}</td>
                <td>{order.address}</td>
                <td>{order.orderNote}</td>
                <td className={getStatusClass(order.orderStatus)}>{order.orderStatus}</td>
                <td>
                  <button className="Shipper-ConfirmButton" onClick={() => handleConfirmClick(order)}>Xác nhận</button>
                  <button className="Shipper-CancelButton" onClick={() => handleCancelClick(order)}>Hủy đơn hàng</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showPopup && (
          <div className="Shipper-Popup">
            <div className="Shipper-PopupContent">
              <h3>Xác nhận hoàn thành đơn hàng</h3>
              <p>Bạn có chắc chắn muốn hoàn thành đơn hàng này không?</p>
              <button className="Shipper-StatusButton Shipper-ConfirmButton" onClick={handleStatusUpdate}>Xác nhận</button>
              <button className="Shipper-StatusButton Shipper-CancelButton" onClick={() => setShowPopup(false)}>Hủy bỏ</button>
            </div>
          </div>
        )}

        {showCancelPopup && (
          <div className="Shipper-Popup">
            <div className="Shipper-PopupContent">
              <h3>Hủy đơn hàng</h3>
              <p>Lý do:</p>
              <Input
                type="text"
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                placeholder="Nhập lý do hủy đơn hàng"
              />
              <button className="Shipper-StatusButton Shipper-ConfirmButton" onClick={handleCancelOrder}>Xác nhận</button>
              <button className="Shipper-StatusButton Shipper-CancelButton" onClick={() => setShowCancelPopup(false)}>Hủy bỏ</button>
            </div>
          </div>
        )}
      </main>
      {errorMessage && <p className="Shipper-Error">{errorMessage}</p>}
    </div>
  );
};

export default Shipper;
