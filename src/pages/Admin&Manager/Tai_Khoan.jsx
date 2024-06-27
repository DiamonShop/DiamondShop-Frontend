import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is imported correctly
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { Link } from 'react-router-dom';

const Taikhoan = () => {
    const { user: currentUser, logout: userLogout } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [showAddOverlay, setShowAddOverlay] = useState(false);

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

            const response = await axios.get('https://localhost:7101/api/User/GetAllUsers', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            console.log("All Users:", response.data);
            // Extracting only necessary fields: ID, username, email, roleName, isActive
            const formattedUsers = response.data.map((user, index) => ({
                id: index + 1,
                fullname: user.fullName,
                username: user.username,
                email: user.email,
                roleName: user.roleName,
                isActive: user.isActive,
            }));
            setUsers(formattedUsers);
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

    const [newAccount, setNewAccount] = useState({
        fullname: '',
        username: '',
        password: '', // Add password field
        email: '',
        isActive: true,
        roleId: 0,
        address: '', // Add address field
    });

    const handleAddInputChange = (e) => {
        const { name, value } = e.target;
        setNewAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddAccount = async () => {
        try {
            const headers = sendToken(); // Get headers with Authorization token
            const response = await axios.post('https://localhost:7101/api/User/CreateUser', {
                fullname: newAccount.fullname,
                username: newAccount.username,
                password: newAccount.password,
                email: newAccount.email,
                isActive: newAccount.isActive,
                roleId: newAccount.roleId,
                address: newAccount.address,
            }, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            console.log('New Account added:', response.data);
            // Refresh user list
            fetchUserData();
            // Clear input fields
            setNewAccount({
                fullname: '',
                username: '',
                password: '',
                email: '',
                isActive: true,
                roleId: 0,
                address: '',
            });
            setShowAddOverlay(false);
        } catch (error) {
            console.error('Error adding new account:', error);
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Unknown error occurred');
            } else {
                setErrorMessage('Error adding new account.');
            }
        }
    };

    const [roleFilter, setRoleFilter] = useState('Tất cả');
    const [statusFilter, setStatusFilter] = useState('Tất cả');

    const handleRoleFilterChange = (e) => {
        setRoleFilter(e.target.value);
    };

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };

    // Filtered accounts based on role and status
    let filteredAccounts = users; // Use users state for filtering

    if (roleFilter !== 'Tất cả') {
        filteredAccounts = filteredAccounts.filter(account => account.roleName === roleFilter);
    }

    if (statusFilter !== 'Tất cả') {
        filteredAccounts = filteredAccounts.filter(account => (account.isActive ? 'Hoạt động' : 'Ngừng hoạt động') === statusFilter);
    }
    const handleOpenAddButtonClick = () => {
        setShowAddOverlay(true);
    };

    const handleCloseAddButtonClick = () => {
        setShowAddOverlay(false);
    };

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
                        <li className="sidebar-item ">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle"><Link to="/TaiKhoan">Tài khoản</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                            </a>
                            <a className="sidebar-link">
                                <i className="align-middle"
                                    data-feather="check-square">
                                </i>
                                <span className="align-middle">Chứng nhận sản phẩm</span>
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
                                <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                    <div className="position-relative">
                                        <i className="align-middle pe-7s-bell" data-feather="bell"></i>
                                        <span className="indicator">4</span>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                    <div className="dropdown-menu-header">
                                        4 New Notifications
                                    </div>
                                    <div className="list-group">
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-danger" data-feather="alert-circle"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Update completed</div>
                                                    <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                    <div className="text-muted small mt-1">30m ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-warning" data-feather="bell"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Lorem ipsum</div>
                                                    <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                    <div className="text-muted small mt-1">2h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-primary" data-feather="home"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">Login from 192.186.1.8</div>
                                                    <div className="text-muted small mt-1">5h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <div className="row g-0 align-items-center">
                                                <div className="col-2">
                                                    <i className="text-success" data-feather="user-plus"></i>
                                                </div>
                                                <div className="col-10">
                                                    <div className="text-dark">New connection</div>
                                                    <div className="text-muted small mt-1">Christina accepted your request.</div>
                                                    <div className="text-muted small mt-1">14h ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-menu-footer">
                                        <a href="#" className="text-muted">Show all notifications</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                    <i className="align-middle" data-feather="settings"></i>
                                </a>
                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                    <img src="~/image/LeftNavBar/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i>Thông tin cá nhân</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Phân tích</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Cài đặt và bảo mật</a>
                                    <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Trung tâm trợ giúp</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href='/'>Đăng xuất</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content">
                    <div className="container">
                        <h2 className="text-center">Quản lí tài khoản</h2>

                        {/* <div className="filters">
                            <label>Chọn theo chức vụ:</label>
                            <select value={roleFilter} onChange={handleRoleFilterChange}>
                                <option value="Tất cả">Tất cả</option>
                                <option value="Admin">Quản trị viên</option>
                                <option value="Member">Người dùng</option>
                                <option value="Manager">Quản lí</option>
                                <option value="Staff">Nhân viên</option>
                                <option value="Delivery">Vận chuyển</option>
                            </select>
                            <label>Chọn theo trạng thái:</label>
                            <select value={statusFilter} onChange={handleStatusFilterChange}>
                                <option value="Tất cả">Tất cả</option>
                                <option value="Hoạt động">Hoạt động</option>
                                <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                            </select>
                        </div> */}
                        {/* Button to open add account overlay */}
                        <button onClick={handleOpenAddButtonClick} className="btn-add-account ">Thêm tài khoản</button>

                        {/* Overlay for adding new account */}
                        {showAddOverlay && (
                            <div className=" add-account-overlay">
                                <div className="add-account">
                                    <h3>Thêm tài khoản mới</h3>
                                    <div>
                                        <label>Họ và tên:</label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            value={newAccount.fullname}
                                            onChange={handleAddInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Tên tài khoản:</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={newAccount.username}
                                            onChange={handleAddInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Mật khẩu:</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={newAccount.password}
                                            onChange={handleAddInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={newAccount.email}
                                            onChange={handleAddInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Trạng thái:</label>
                                        <select
                                            name="isActive"
                                            value={newAccount.isActive}
                                            onChange={handleAddInputChange}
                                        >
                                            <option value={true}>Hoạt động</option>
                                            <option value={false}>Ngừng hoạt động</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Chức vụ:</label>
                                        <select
                                            name="roleId"
                                            value={newAccount.roleId}
                                            onChange={handleAddInputChange}
                                        >
                                            <option value={0}>Admin</option>
                                            <option value={1}>Member</option>
                                            <option value={2}>Manager</option>
                                            <option value={3}>Staff</option>
                                            <option value={4}>Delivery</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Địa chỉ:</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={newAccount.address}
                                            onChange={handleAddInputChange}
                                        />
                                    </div>
                                    <button onClick={handleAddAccount}>Thêm tài khoản</button>
                                    <button onClick={handleCloseAddButtonClick}>Đóng</button>
                                </div>
                            </div>
                        )}


                        <table className="">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Họ và tên</th>
                                    <th>Tên tài khoản</th>
                                    <th>Email</th>
                                    <th>Chức vụ</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAccounts.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.roleName}</td>
                                        <td>{user.isActive ? 'Hoạt động' : 'Ngừng hoạt động'}</td>
                                        <td>
                                            <button className="btn-add-account ">Chỉnh sửa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Taikhoan;

