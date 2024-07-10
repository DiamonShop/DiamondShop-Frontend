import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is imported correctly
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { Link } from 'react-router-dom';

const Taikhoan = () => {
    const [showAddOverlay, setShowAddOverlay] = useState(false);
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
                        <img src="assets/img/logo/Logo.png" alt="Logo" />
                    </a>
                    <ul className="sidebar-nav">
                        <li className="sidebar-header">Trang chủ</li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" >
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-header">Quản lý</li>
                        <li className="sidebar-item " >
                            <a className="sidebar-link" href="/SanPham">
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
                            <a className="sidebar-link" >
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item">
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
                <div className="content">
                    <div className="admin-page-container">
                        <h2 className="text-center admin-page-title">Quản lí tài khoản</h2>

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
                        <div className="admin-page-controls">
                            <button onClick={handleOpenAddButtonClick} className="admin-page-add-button">Thêm tài khoản</button>
                        </div>


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


                        <table className="admin-page-table">
                            <thead >
                                <tr className='admin-page-column-table'>
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
                                        <div className="admin-page-buttons">
                                            <button className='admin-page-view-button'>Xem</button>
                                            <button className='admin-page-edit-button'>Sửa</button>
                                            <button className='admin-page-delete-button'>Xóa</button>
                                        </div>
                                            
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

