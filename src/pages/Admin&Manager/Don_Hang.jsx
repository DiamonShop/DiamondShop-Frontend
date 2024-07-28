import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button, Table, Input, Select, message } from "antd";
import axios from "axios";
import { useUser } from "../../UserContext";
import { logout } from '../../api/LogoutAPI';
import { sendToken } from "../../api/TokenAPI";
import { jwtDecode } from "jwt-decode";
import ReactPaginate from "react-paginate";
const formatCurrency = (value) => {
  return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '');
};

const { Option } = Select;

const Don_Hang = () => {
  const { user: currentUser, logout: userLogout } = useUser();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortType, setSortType] = useState("");
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [selectedCancelOrder, setSelectedCancelOrder] = useState(null);
  const [ordersDetailProduct, setOrdersDetailProduct] = useState([]);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [selectedUpdateOrder, setSelectedUpdateOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const ordersPerPage = 6;

  const orderStatuses = [
    "Pending",
    "Ordering",
    "Shipping",
    "Cancel",
    "Completed",
  ];

  const sortOrders = (orders) => {
    const statusOrder = {
      "Pending": 1,
      "Ordering": 2,
      "Shipping": 3,
      "Cancel": 4,
      "Completed": 5,
    };

    return orders.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  };

  const handleViewDetails = async (order) => {
    try {
      const headers = sendToken(); // Get headers with Authorization token
      // Fetching order details
      const ordersDetailProductResponse = await axios.get(
        "https://localhost:7101/api/orders/GetAllOrderDetail",
        {
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        }
      );

      const orderWithDetails = {
        ...order,
        items: ordersDetailProductResponse.data.filter(
          (item) => item.orderId === order.orderId
        ),
      };

      console.log(orderWithDetails);
      setSelectedOrder(orderWithDetails);
      setOrdersDetailProduct(orderWithDetails.items);
    } catch (error) {
      console.error("Error fetching order details:", error);
      message.error("Failed to fetch order details.");
    }
  };

  const handleViewUpdate = (order) => {
    if (["Shipping", "Complete", "Cancel"].includes(order.status)) {
      message.error("Bạn không thể cập nhật trạng thái đơn hàng này.");
      return;
    }
    setSelectedUpdateOrder(order);
    setShowUpdatePopup(true);
  };

  const handleUpdateOrder = async () => {
    const headers = sendToken();
    try {
      const response = await axios.put(
        `https://localhost:7101/api/orders/UpdateStatusToShipping?orderId=${selectedUpdateOrder.orderId}`,
        null,
        {
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Order update status updated successfully:", response.data);
      message.success("Đơn hàng đã được cập nhật trạng thái thành đang giao.");
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === selectedUpdateOrder.orderId
            ? { ...order, status: "Shipping" }
            : order
        )
      );
      setShowUpdatePopup(false);
      setSelectedUpdateOrder(null);
    } catch (error) {
      console.error(
        "Error updating order status:",
        error.response || error.message
      );
      message.error("Lỗi khi cập nhật trạng thái đơn hàng.");
    }
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleCancelClick = (order) => {
    if (["Complete", "Shipping", "Cancel"].includes(order.status)) {
      message.error("Bạn không thể hủy đơn hàng này.");
      return;
    }
    setSelectedCancelOrder(order);
    setShowCancelPopup(true);
  };

  const updateCancelStatus = async (orderId, cancelReason) => {
    const headers = sendToken();
    try {
      const response = await axios.put(
        `https://localhost:7101/api/orders/UpdateStatusCancel?orderId=${orderId}&cancelReason=${cancelReason}`,
        null,
        {
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Order cancel status updated successfully:", response.data);
    } catch (error) {
      console.error(
        "Error updating order cancel status:",
        error.response || error.message
      );
      throw error;
    }
  };

  const handleCancelOrder = async () => {
    if (cancelReason.trim() === "") {
      message.error("Vui lòng nhập lý do hủy đơn hàng.");
      return;
    }

    if (selectedCancelOrder) {
      try {
        await updateCancelStatus(selectedCancelOrder.orderId, cancelReason);
        setOrders((prevOrders) =>
          prevOrders.filter(
            (order) => order.orderId !== selectedCancelOrder.orderId
          )
        );
        message.success("Đơn hàng đã được hủy");
        setShowCancelPopup(false);
        setSelectedCancelOrder(null);
        setCancelReason("");
      } catch (error) {
        console.error(
          "Error updating order cancel status:",
          error.response || error.message
        );
        message.error("Lỗi khi cập nhật trạng thái đơn hàng.");
      }
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order &&
      order.orderId &&
      order.orderId.toString().includes(searchValue) &&
      (!statusFilter || order.status === statusFilter)
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "Ordering":
        return "Shipper-Status-Ordering";
      case "Completed":
        return "Shipper-Status-Completed";
      case "Cancel":
        return "Shipper-Status-Cancelled";
      case "Shipping":
        return "Shipper-Status-Shipping";
      default:
        return "";
    }
  };

  const columns = [
    {
      title: "MÃ ĐƠN HÀNG",
      dataIndex: "orderId",
      key: "orderId",
      className: "column-order-id",
    },
    {
      title: "NGÀY ĐẶT ĐƠN",
      dataIndex: "orderDate",
      key: "orderDate",
      className: "column-order-date",
    },
    {
      title: "TỔNG CỘNG",
      dataIndex: "totalPrice",
      key: "totalPrice",
      className: "column-total-price",
    },
    {
      title: "TRẠNG THÁI",
      dataIndex: "status",
      key: "status",
      className: "column-status",
      render: (status) => (
        <span className={getStatusClass(status)}>{status}</span>
      ),
    },
    {
      title: "HÀNH ĐỘNG",
      key: "action",
      className: "column-action",
      render: (text, record) => (
        <span>
          <Button type='default'
            onClick={() => handleViewDetails(record)}
          >
            Xem chi tiết
          </Button>
          <Button type="dashed"
            onClick={() => handleViewUpdate(record)}
          >
            Cập nhật trạng thái
          </Button>
        </span>
      ),
    },
  ];

  const fetchUserData = async () => {
    if (!currentUser) {
      console.log("User not logged in. Redirecting to login.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token not found or expired. Logging out.");
      userLogout();
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      setLoading(true);
      const headers = sendToken(); // Get headers with Authorization token
      const Userresponse = await axios.get(
        `https://localhost:7101/api/User/GetUserProfile?id=${decodedToken.sid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDisplayName(Userresponse.data.fullName || "");

      // Get all Orders
      const ordersResponse = await axios.get(
        "https://localhost:7101/api/orders/GetAllOrders",
        {
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        }
      );

      const sortedOrders = sortOrders(ordersResponse.data);
      setOrders(sortedOrders);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 401) {
        console.log("Token expired or invalid. Redirecting to login.");
        userLogout();
      } else {
        setErrorMessage("Error fetching user data.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [currentUser, userLogout, navigate]);

  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      userLogout();
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
    } catch (error) {
      console.error('Error decoding token:', error);
      userLogout();
    }
  }, [userLogout]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const displayOrders = filteredOrders.slice(currentPage * ordersPerPage, (currentPage + 1) * ordersPerPage);

  return (
    <div className="wrapper">
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <a className="sidebar-brand" href="/">
            <img src="assets/img/logo/logo.png" alt="Logo" />
          </a>
          <ul className="sidebar-nav">
            {userRole === 'Admin' && (
              <>
                <li className="sidebar-header">Trang chủ</li>
                <li className="sidebar-item active">
                  <a className="sidebar-link" >
                    <i className="align-middle" data-feather="sliders"></i>
                    <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                  </a>
                </li>
                <li className="sidebar-header">Quản lý</li>
                <li className="sidebar-item">
                  <a className="sidebar-link">
                    <i className="align-middle" data-feather="square"></i>
                    <span className="align-middle"><Link to="/TaiKhoan">Tài khoản</Link></span>
                  </a>
                </li>
              </>
            )}
            {userRole === 'Manager' && (
              <>
                <li className="sidebar-header">Trang chủ</li>
                <li className="sidebar-item">
                  <a className="sidebar-link" >
                    <i className="align-middle" data-feather="sliders"></i>
                    <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                  </a>
                </li>
                <li className="sidebar-header">Quản lý</li>
                <li className="sidebar-item " >
                  <a className="sidebar-link" >
                    <i className="align-middle" data-feather="sliders"></i>
                    <span className="align-middle"><Link to="/TrangSuc">Trang sức</Link></span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" >
                    <i className="align-middle" data-feather="sliders"></i>
                    <span className="align-middle"><Link to="/KimCuongDashboard">Kim cương</Link></span>
                  </a>
                </li>
              </>
            )}
            {userRole === 'Staff' && (
              <>
                <li className="sidebar-header">Quản lý</li>
                <li className="sidebar-item active">
                  <a className="sidebar-link" >
                    <i className="align-middle" data-feather="square"></i>
                    <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div className="main">
        <nav className="navbar navbar-expand navbar-light navbar-bg">
          <a className="sidebar-toggle js-sidebar-toggle">
            <i className="hamburger align-self-center"></i>
          </a>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav navbar-align">
              <li className="nav-item dropdown">
                <a
                  className="nav-icon dropdown-toggle d-inline-block d-sm-none"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <i className="align-middle" data-feather="settings"></i>
                </a>
                <a
                  className="nav-link dropdown-toggle d-none d-sm-inline-block"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  <span className="text-dark">Xin chào, {displayName}</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href='/' onClick={logout}>
                    Đăng xuất
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <div className="container">
            <h2 className="text-center admin-page-title">Quản lí đơn hàng</h2>
            <div className="admin-page-container">
              <div className="search-filter-container">
                <Input
                  style={{ width: 200, marginRight: 10 }}
                  placeholder="Tìm kiếm mã đơn hàng"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Select
                  style={{ width: 200, marginRight: 10 }}
                  placeholder="Sắp xếp trạng thái"
                  onChange={(value) => setStatusFilter(value)}
                  allowClear
                >
                  {orderStatuses.map((status) => (
                    <Option key={status} value={status}>
                      {status}
                    </Option>
                  ))}
                </Select>
                <Select
                  style={{ width: 250 }}
                  placeholder="Sắp xếp theo"
                  onChange={(value) => setSortType(value)}
                  allowClear
                >
                  <Option value="price-asc">Giá tiền từ thấp đến cao</Option>
                  <Option value="price-desc">Giá tiền từ cao đến thấp</Option>
                  <Option value="id-asc">Mã đơn hàng từ thấp đến cao</Option>
                  <Option value="id-desc">Mã đơn hàng từ cao đến thấp</Option>
                </Select>
              </div>
              <table className="admin-page-table">
                <thead>
                  <tr className="admin-page-column-table">
                    <th>MÃ ĐƠN HÀNG</th>
                    <th>NGÀY ĐẶT ĐƠN</th>
                    <th>TỔNG CỘNG</th>
                    <th>TRẠNG THÁI</th>
                    <th>HÀNH ĐỘNG</th>
                  </tr>
                </thead>
                <tbody>
                  {displayOrders.map((order) => (
                    <tr key={order.orderId}>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{formatCurrency(order.totalPrice)}VND</td>
                      <td className={getStatusClass(order.status)}>{order.status}</td>
                      <td className="admin-page-buttons">
                        <Button type='default' onClick={() => handleViewDetails(order)}>Xem chi tiết</Button>
                        <Button type="dashed" onClick={() => handleViewUpdate(order)}>Cập nhật trạng thái</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={"Trước"}
                nextLabel={"Sau"}
                breakLabel={"..."}
                pageCount={Math.ceil(filteredOrders.length / ordersPerPage)}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
              />
            </div>


          </div>

          {selectedOrder && (
            <Modal
              title={<span className="modal-title">Chi tiết đơn hàng</span>}
              visible={!!selectedOrder}
              onCancel={handleCloseModal}
              footer={null}
              centered
            >
              <p>
                <strong>Mã đơn hàng:</strong> {selectedOrder.orderId}
              </p>
              <p>
                <strong>Họ và tên:</strong> {selectedOrder.userName}
              </p>
              <p>
                <strong>Tổng cộng:</strong> {formatCurrency(selectedOrder.totalPrice) + "VND"}
              </p>
              <p>
                <strong>Trạng thái:</strong> {selectedOrder.status}
              </p>
              <p>
                <strong>Ngày đặt đơn:</strong> {selectedOrder.orderDate}
              </p>
              <p>
                <strong>Ghi chú:</strong> {selectedOrder.orderNote}
              </p>
              {selectedOrder.cancelReason && (
                <p>
                  <strong>Lý do hủy:</strong> {selectedOrder.cancelReason}
                </p>
              )}
              <table className="admin-page-table">
                <thead>
                  <tr className="admin-page-column-table">
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                  </tr>
                </thead>
                <tbody>
                  {ordersDetailProduct.map((product) => (
                    <tr key={product.productId}>
                      <td>{product.productId}</td>

                      <td>{product.productName}</td>
                      <td>{formatCurrency(product.unitPrice) + "VND"}</td>
                      <td>{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="total-container">
                <p>
                  <strong>Tổng cộng:</strong> {formatCurrency(selectedOrder.totalPrice) + "VND"}
                </p>
              </div>
            </Modal>
          )}

          {showUpdatePopup && (
            <Modal
              title={<span className="modal-title">Cập nhật đơn hàng</span>}
              visible={showUpdatePopup}
              onCancel={() => setShowUpdatePopup(false)}
              footer={[
                <Button key="back" onClick={() => setShowUpdatePopup(false)}>
                  Hủy bỏ
                </Button>,
                <Button key="submit" type="primary" onClick={handleUpdateOrder}>
                  Xác nhận
                </Button>,
              ]}
            >
              <p>
                <strong>
                  Bạn có muốn cập nhật trạng thái đơn hàng thành Đang giao?
                </strong>
              </p>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Don_Hang;
