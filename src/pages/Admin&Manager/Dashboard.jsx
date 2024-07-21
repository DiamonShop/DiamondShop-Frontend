import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { sendToken } from "../../api/TokenAPI";
import { logout } from '../../api/LogoutAPI';
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, LinearScale, CategoryScale); 

const Dashboard = () => {
  const { user: currentUser, logout: userLogout } = useUser();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  // monthly income
  const [revenue, setRevenue] = useState("");
  const [prevRevenue, setPrevRevenue] = useState("");
  const [revenueColor, setRevenueColor] = useState("dashboard-text-primary");
  const [revenueDifference, setRevenueDifference] = useState(0);

  // count Orders
  const [countOrders, setCountOrders] = useState(0);
  const [prevCountOrders, setPrevCountOrders] = useState(0);
  const [ordersColor, setOrdersColor] = useState("dashboard-text-primary");
  const [ordersDifference, setOrdersDifference] = useState(0);

  // sales
  const [salesData, setSalesData] = useState({});
  const [chartData, setChartData] = useState({});

  //Revenue line chart
  const [revenueData, setRevenueData] = useState(Array(12).fill(0));

  //newst Orders
  const [orders, setOrders] = useState([]);

  //calculate Revenue
  // Format currency
  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN") + " đ";
  };

  const getRevenue = async (month, year) => {
    try {
      const headers = sendToken(); // Get headers with Authorization token
      const response = await axios.get(
        `https://localhost:7101/api/orders/orders/revenue?month=${month}&year=${year}`,
        {
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching revenue:", error.response || error.message);
      throw error;
    }
  };

  const fetchRevenues = async () => {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so add 1
      const currentYear = currentDate.getFullYear();

      // Calculate previous month and year
      const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;

      const currentRevenue = await getRevenue(currentMonth, currentYear);
      const previousRevenue = await getRevenue(prevMonth, prevYear);

      setRevenue(currentRevenue);
      setPrevRevenue(previousRevenue);

      const difference = currentRevenue - previousRevenue;
      const percentageDifference = (difference / previousRevenue) * 100;
      setRevenueDifference(percentageDifference);

      if (percentageDifference > 0) {
        setRevenueColor("dashboard-text-success"); // Green color for increased revenue
      } else {
        setRevenueColor("dashboard-text-danger"); // Red color for decreased revenue
      }
    } catch (error) {
      console.error("Error fetching revenues:", error);
    }
  };

  useEffect(() => {
    fetchRevenues();
  }, []);

  //end calculate Revenue

  // Count Orders
  const getCountOrders = async (month, year) => {
    try {
      const headers = sendToken(); // Get headers with Authorization token
      const response = await axios.get(
        `https://localhost:7101/api/orders/orders/count?month=${month}&year=${year}`,
        {
          headers: {
            ...headers,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(
        "Error fetching order count:",
        error.response || error.message
      );
      throw error;
    }
  };

  const fetchOrderCounts = async () => {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so add 1
      const currentYear = currentDate.getFullYear();

      const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;

      const currentCountOrders = await getCountOrders(
        currentMonth,
        currentYear
      );
      const previousCountOrders = await getCountOrders(prevMonth, prevYear);

      setCountOrders(currentCountOrders);
      setPrevCountOrders(previousCountOrders);

      const diff = currentCountOrders - previousCountOrders;
      setOrdersDifference(diff);

      if (diff > 0) {
        setOrdersColor("dashboard-text-success"); // Green color for increased orders
      } else {
        setOrdersColor("dashboard-text-danger"); // Red color for decreased orders
      }
    } catch (error) {
      console.error("Error fetching order counts:", error);
    }
  };

  useEffect(() => {
    fetchOrderCounts();
  }, []);

  // Sales By Category
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const currentMonth = new Date().getMonth() + 1; // getMonth returns 0-indexed month
        const currentYear = new Date().getFullYear();
        const response = await axios.get(
          `https://localhost:7101/api/orders/orders/sales-by-category?month=${currentMonth}&year=${currentYear}`
        );
        setSalesData(response.data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchSalesData();
  }, []);

  useEffect(() => {
    if (Object.keys(salesData).length > 0) {
      const categories = Object.keys(salesData);
      const quantities = Object.values(salesData);

      setChartData({
        labels: categories,
        datasets: [
          {
            label: "Sales by Category",
            data: quantities,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    } else {
      // Set empty chart data
      setChartData({
        labels: ["Không có dữ liệu"],
        datasets: [
          {
            label: "Số lượng",
            data: [0],
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [salesData]);

  //End Sales By Category

  //line chart revenue
  const RevenueChart = () => {
    const [revenueData, setRevenueData] = useState(Array(12).fill(0));

    useEffect(() => {
      const fetchData = async () => {
        const year = new Date().getFullYear();
        const data = [];
        for (let month = 1; month <= 12; month++) {
          const response = await axios.get(
            `https://localhost:7101/api/orders/orders/revenue?month=${month}&year=${year}`
          );
          data.push(response.data);
        }
        setRevenueData(data);
      };

      fetchData();
    }, []);

    const chartData = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Doanh thu hằng tháng",
          data: revenueData,
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        },
      ],
    };

    return (
      <div>
        <Line data={chartData} height={86} />
      </div>
    );
  };

  //end line chart revenue

  //today Orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7101/api/orders/GetAllOrders"
        );
        const allOrders = response.data;
        const today = new Date().toISOString().split("T")[0];
        const todayOrders = allOrders.filter(
          (order) =>
            new Date(order.orderDate).toISOString().split("T")[0] === today
        );
        setOrders(todayOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);
  //end today Orders

  // Fetch User Data
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
  return (
    <div>
      <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="/">
              <span className="align-middle">
                <img src="assets/img/logo/Logo.png" alt="" />
              </span>
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
                  <li className="sidebar-item active">
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
                  <li className="sidebar-item">
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
                    <span className="text-dark">
                      Xin chào, {`${displayName}`}
                    </span>
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
            <div className="container-fluid p-0">
              <h1 className="h3 mb-3">
              <h2 style={{ color: '#8C6B2F', marginLeft: '20px' }}>Bảng phân tích</h2>
                {/* Bảng điều khiển <strong> phân tích</strong>{" "} */}
              </h1>
              <div className="row">
                <div className="col-xl-6 col-xxl-5 d-flex">
                  <div className="w-100">
                    <div className="col">
                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">
                                  Doanh thu tháng này
                                </h5>
                              </div>
                            </div>
                            <h1 className="mt-1 mb-3">
                              {formatCurrency(revenue)}
                            </h1>
                            <div className="mb-0">
                              <span className={revenueColor}>
                                {revenueDifference > 0 ? "+" : ""}
                                {revenueDifference.toFixed(2)}%
                              </span>
                              <span className="text-muted">
                                {" "}
                                So với tháng trước
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col mt-0">
                                <h5 className="card-title">
                                  Đơn hàng tháng này
                                </h5>
                              </div>
                              <div className="col-auto"></div>
                            </div>
                            <h1 className={`mt-1 mb-3`}>{countOrders}</h1>
                            <div className="mb-0">
                              <span className={ordersColor}>
                                {ordersDifference > 0 ? "+" : ""}
                                {ordersDifference}
                              </span>
                              <span className="text-muted">
                                {" "}
                                Đơn so với tháng trước
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-7">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Biến động gần đây</h5>
                    </div>
                    <div className="dashboard-line-chart">
                      <RevenueChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Đơn hàng hôm nay</h5>
                    </div>
                    <table className="taadmin-page-table">
                      <thead>
                        <tr className="admin-page-column-table">
                          <th>MÃ ĐƠN HÀNG</th>
                          <th>NGÀY ĐẶT ĐƠN</th>
                          <th>TỔNG CỘNG</th>
                          <th>TRẠNG THÁI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.length > 0 ? (
                          orders.map((order) => (
                            <tr key={order.orderId}>
                              <td>{order.orderId}</td>
                              <td>
                                {new Date(order.orderDate).toLocaleString()}
                              </td>
                              <td>
                                {order.totalPrice.toLocaleString("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </td>
                              <td>{order.status}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4">Không có đơn hàng nào hôm nay</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Số lượng theo mặt hàng
                      </h5>
                    </div>
                    <div className="card-body d-flex w-100">
                      <div className="dashboard-bar-graph">
                        {chartData.labels ? (
                          <Bar
                            data={chartData}
                            options={{
                              responsive: true,
                              maintainAspectRatio: false, // Đảm bảo biểu đồ không duy trì tỉ lệ cố định
                              scales: {
                                y: {
                                  beginAtZero: true,
                                  ticks: {
                                    stepSize: 5, // Thiết lập khoảng cách giữa các nhãn là 5
                                  },
                                },
                              },
                            }}
                          />
                        ) : (
                          <p>Loading...</p>
                        )}
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
  );
};

export default Dashboard;
