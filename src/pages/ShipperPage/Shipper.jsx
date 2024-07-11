import React, { useState } from 'react';
import { message, Select, Input } from 'antd';

const { Option } = Select;

export default function Shipper() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchType, setSearchType] = useState('billid');
  const [searchValue, setSearchValue] = useState('');
  const [orders, setOrders] = useState([
    { billid: 1, fullname: 'Nguyễn Văn A', numberphone: '0123456789', address: '123 Cao Thắng', ordernote: '', status: 'Đang giao hàng' },
    { billid: 2, fullname: 'Trần Thị B', numberphone: '0123456789', address: '123 Cao Thắng', ordernote: '', status: 'Đang giao hàng' },
    { billid: 3, fullname: 'Lê Bảo C', numberphone: '0123456789', address: '123 Nguyễn Đình Chiểu', ordernote: 'giao vào 4h chiều', status: 'Đang giao hàng' },
    { billid: 4, fullname: 'Nguyễn Quốc D', numberphone: '0123456789', address: '123 Cao Thắng', ordernote: '', status: 'Đang giao hàng' },
    // Thêm các đơn hàng khác nếu cần
  ]);

  const filteredOrders = orders.filter(order => order.status === 'Đang giao hàng');

  const getStatusClass = (status) => {
    if (status === 'Đang giao hàng') {
      return 'Shipper-Status-Shipping';
    }
    return '';
  };

  const handleConfirmClick = (order) => {
    setSelectedOrder(order);
    setShowPopup(true);
  };

  const handleStatusUpdate = () => {
    if (selectedOrder) {
      setOrders(prevOrders => prevOrders.filter(order => order.billid !== selectedOrder.billid));
      message.success('Đơn hàng đã được hoàn thành');
      setShowPopup(false);
      setSelectedOrder(null);
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
      if (searchType === 'billid') {
        return order.billid.toString().includes(searchValue);
      } else if (searchType === 'fullname') {
        return order.fullname.toLowerCase().includes(searchValue.toLowerCase());
      }
      return false;
    });
  };

  return (
    <div className="Shipper-App">
      <main className="Shipper-Main">
        <h2 className="Shipper-Title">Quản lý đơn giao hàng</h2>
        <div className="Shipper-SearchContainer">
          <p>Tìm kiếm theo:</p>
          <Select defaultValue="billid" style={{ width: 150 }} onChange={handleSearchTypeChange}>
            <Option value="billid">Mã đơn hàng</Option>
            <Option value="fullname">Họ và tên</Option>
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
              <tr key={order.billid}>
                <td>{order.billid}</td>
                <td>{order.fullname}</td>
                <td>{order.numberphone}</td>
                <td>{order.address}</td>
                <td>{order.ordernote}</td>
                <td className={getStatusClass(order.status)}>{order.status}</td>
                <td><button className="Shipper-ConfirmButton" onClick={() => handleConfirmClick(order)}>Xác nhận</button></td>
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
      </main>
    </div>
  );
}