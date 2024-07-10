import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Table, Input, Select } from 'antd';

import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is imported correctly
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed


const { Option } = Select;

const orderStatuses = ['Đã hoàn thành', 'Đã hủy', 'Đang giao hàng', 'Đang tiếp nhận'];
const jewelryItems = [
    'Nhẫn kim cương', 'Dây chuyền vàng', 'Bông tai ngọc trai', 'Lắc tay bạc',
    'Vòng cổ hồng ngọc', 'Nhẫn sapphire', 'Bông tai vàng', 'Lắc chân kim cương',
    'Dây chuyền bạc', 'Vòng tay ruby'
];

const orders = [
    {
        id: 1,
        date: '2024-05-01 20:05:01',
        total: '$1500',
        status: 'Đã hoàn thành',
        customer: {
            name: 'Khách hàng 1',
            email: 'customer1@example.com',
            phone: '0123456781',
            address: 'Địa chỉ 1',
            note: 'Ghi chú đơn hàng 1'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Nhẫn kim cương',
                quantity: 2,
                price: '$750',
                discount: '10%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: ''
    },
    {
        id: 2,
        date: '2024-05-02 20:05:01',
        total: '$2000',
        status: 'Đã hủy',
        customer: {
            name: 'Khách hàng 2',
            email: 'customer2@example.com',
            phone: '0123456782',
            address: 'Địa chỉ 2',
            note: 'Ghi chú đơn hàng 2'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Dây chuyền vàng',
                quantity: 1,
                price: '$2000',
                discount: '15%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: 'Lý do hủy đơn hàng'
    },
    {
        id: 3,
        date: '2024-05-03 20:05:01',
        total: '$3000',
        status: 'Đang giao hàng',
        customer: {
            name: 'Khách hàng 3',
            email: 'customer3@example.com',
            phone: '0123456783',
            address: 'Địa chỉ 3',
            note: 'Ghi chú đơn hàng 3'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Bông tai ngọc trai',
                quantity: 3,
                price: '$1000',
                discount: '20%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: ''
    },
    {
        id: 4,
        date: '2024-05-04 20:05:01',
        total: '$4000',
        status: 'Đang tiếp nhận',
        customer: {
            name: 'Khách hàng 4',
            email: 'customer4@example.com',
            phone: '0123456784',
            address: 'Địa chỉ 4',
            note: 'Ghi chú đơn hàng 4'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Lắc tay bạc',
                quantity: 4,
                price: '$1000',
                discount: '25%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: ''
    },
    {
        id: 5,
        date: '2024-05-05 20:05:01',
        total: '$5000',
        status: 'Đã hoàn thành',
        customer: {
            name: 'Khách hàng 5',
            email: 'customer5@example.com',
            phone: '0123456785',
            address: 'Địa chỉ 5',
            note: 'Ghi chú đơn hàng 5'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Vòng cổ hồng ngọc',
                quantity: 5,
                price: '$1000',
                discount: '30%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: ''
    },
    {
        id: 6,
        date: '2024-05-06 20:05:01',
        total: '$6000',
        status: 'Đã hủy',
        customer: {
            name: 'Khách hàng 6',
            email: 'customer6@example.com',
            phone: '0123456786',
            address: 'Địa chỉ 6',
            note: 'Ghi chú đơn hàng 6'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Nhẫn sapphire',
                quantity: 6,
                price: '$1000',
                discount: '35%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: 'Lý do hủy đơn hàng'
    },
    {
        id: 7,
        date: '2024-05-07 20:05:01',
        total: '$7000',
        status: 'Đang giao hàng',
        customer: {
            name: 'Khách hàng 7',
            email: 'customer7@example.com',
            phone: '0123456787',
            address: 'Địa chỉ 7',
            note: 'Ghi chú đơn hàng 7'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Bông tai vàng',
                quantity: 7,
                price: '$1000',
                discount: '40%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: ''
    },
    {
        id: 8,
        date: '2024-05-08 20:05:01',
        total: '$8000',
        status: 'Đang tiếp nhận',
        customer: {
            name: 'Khách hàng 8',
            email: 'customer8@example.com',
            phone: '0123456788',
            address: 'Địa chỉ 8',
            note: 'Ghi chú đơn hàng 8'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Lắc chân kim cương',
                quantity: 8,
                price: '$1000',
                discount: '45%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: ''
    },
    {
        id: 9,
        date: '2024-05-09 20:05:01',
        total: '$9000',
        status: 'Đã hoàn thành',
        customer: {
            name: 'Khách hàng 9',
            email: 'customer9@example.com',
            phone: '0123456789',
            address: 'Địa chỉ 9',
            note: 'Ghi chú đơn hàng 9'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Dây chuyền bạc',
                quantity: 9,
                price: '$1000',
                discount: '50%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: ''
    },
    {
        id: 10,
        date: '2024-05-10 20:05:01',
        total: '$10000',
        status: 'Đã hủy',
        customer: {
            name: 'Khách hàng 10',
            email: 'customer10@example.com',
            phone: '0123456790',
            address: 'Địa chỉ 10',
            note: 'Ghi chú đơn hàng 10'
        },
        items: [
            {
                id: 1,
                image: 'https://via.placeholder.com/50',
                name: 'Vòng tay ruby',
                quantity: 10,
                price: '$1000',
                discount: '55%',
                category: 'Trang sức',
                condition: 'Mới'
            }
        ],
        cancelReason: 'Lý do hủy đơn hàng'
    }
];

const OrderManagement = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [sortType, setSortType] = useState('');

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
    };

    const handleCloseModal = () => {
        setSelectedOrder(null);
    };

    const filteredOrders = orders.filter(order =>
        order.id.toString().includes(searchValue) &&
        (statusFilter ? order.status === statusFilter : true)
    );

    const sortedOrders = [...filteredOrders].sort((a, b) => {
        if (sortType === 'price-asc') {
            return parseInt(a.total.slice(1)) - parseInt(b.total.slice(1));
        }
        if (sortType === 'price-desc') {
            return parseInt(b.total.slice(1)) - parseInt(a.total.slice(1));
        }
        if (sortType === 'id-asc') {
            return a.id - b.id;
        }
        if (sortType === 'id-desc') {
            return b.id - a.id;
        }
        return 0;
    });

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (text, record) => (
                <>
                    <img src={text} alt="Product" width={50} height={50} />
                    <span>{record.name}</span>
                </>
            )
        },
        { title: 'Tên món hàng', dataIndex: 'name', key: 'name' },
        { title: 'Số lượng', dataIndex: 'quantity', key: 'quantity' },
        { title: 'Giá gốc', dataIndex: 'price', key: 'price' },
        { title: 'Loại sản phẩm', dataIndex: 'category', key: 'category' },
        { title: 'Tình trạng', dataIndex: 'condition', key: 'condition' }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Đã hoàn thành':
                return 'Shipper-Status-Completed';
            case 'Đã hủy':
                return 'Shipper-Status-Cancelled';
            case 'Đang giao hàng':
                return 'Shipper-Status-Shipping';
            default:
                return '';
        }
    };

    return (
        <div className="content">
            <div className="container">
                <h2 className="text-center admin-page-title">Order Management</h2>
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
                        {orderStatuses.map(status => (
                            <Option key={status} value={status}>{status}</Option>
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
                <div >
                    <table className="admin-page-table">
                        <thead >
                            <tr className='admin-page-column-table'>
                                <th>Mã đơn hàng</th>
                                <th>Ngày đặt đơn</th>
                                <th>Tổng cộng</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedOrders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.date}</td>
                                    <td>{order.total}</td>
                                    <td className={getStatusClass(order.status)}>{order.status}</td>
                                    <td>
                                        <button type="button" className='admin-page-view-button' onClick={() => handleViewDetails(order)}>Xem chi tiết</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                    <p><strong>Mã đơn hàng:</strong> {selectedOrder.id}</p>
                    <p><strong>Họ và tên:</strong> {selectedOrder.customer.name}</p>
                    <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
                    <p><strong>Số điện thoại:</strong> {selectedOrder.customer.phone}</p>
                    <p><strong>Địa chỉ nhận hàng:</strong> {selectedOrder.customer.address}</p>
                    <p><strong>Ghi chú:</strong> {selectedOrder.customer.note}</p>
                    <p><strong>Trạng thái:</strong> {selectedOrder.status}</p>
                    {selectedOrder.cancelReason && (
                        <p><strong>Lý do hủy:</strong> {selectedOrder.cancelReason}</p>
                    )}
                    <Table
                        dataSource={selectedOrder.items}
                        columns={columns}
                        pagination={false}
                        rowKey="id"
                    />
                    <div className="total-container">
                        <p><strong>Tổng cộng:</strong> {selectedOrder.total}</p>
                    </div>
                </Modal>
            )}
        </div>
    );
};

const Don_Hang = () => {
    const { user: currentUser, logout: userLogout } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate();
    const fetchUserData = async () => {
        if (!currentUser) {
            console.log("User not logged in. Redirecting to login.");
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const decodedToken = jwtDecode(token);
            const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            if (userRole !== 'Admin') {
                console.log("User is not an admin. Redirecting to home.");
                navigate('/');
                return;
            }

            setLoading(true);
            const headers = sendToken(); // Get headers with Authorization token
            const Userresponse = await axios.get(`https://localhost:7101/api/User/GetUserProfile?id=${decodedToken.sid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setDisplayName(Userresponse.data.fullName || '');
        } catch (error) {
            console.error('Error fetching user data:', error);
            if (error.response && error.response.status === 401) {
                console.log('Token expired or invalid. Redirecting to login.');
                userLogout();
            } else {
                setErrorMessage('Error fetching user data.');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [currentUser, userLogout, navigate]);
    return (
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href='/'>
                        <img src="assets/img/logo/logo.png" alt="Logo" />
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">Trang chủ</li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-header">Quản lý</li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/TaiKhoan">Tài khoản</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                            </a>

                        </li>
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
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                    <i className="align-middle" data-feather="settings"></i>
                                </a>
                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                    <span className="text-dark">Xin chào, {`${displayName}`}</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href='/'>Đăng xuất</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <OrderManagement />
            </div>
        </div>
    );
}

export default Don_Hang;
