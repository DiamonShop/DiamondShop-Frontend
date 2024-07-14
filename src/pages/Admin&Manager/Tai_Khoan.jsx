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


    const [searchTerm, setSearchTerm] = useState(''); // State for search term

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
                address: user.address,
                numberPhone: user.numberPhone,
                loyaltyPoints: user.loyaltyPoints
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
        password: '',
        email: '',
        numberPhone: '',
        isActive: true,
        roleId: 0,
        address: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleAddInputChange = (e) => {
        const { name, value } = e.target;
        setNewAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
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
                numberPhone: newAccount.numberPhone,
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
                numberPhone: '',
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
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editAccount, setEditAccount] = useState({
        id: '',
        fullname: '',
        username: '',
        password: '',
        email: '',
        numberPhone: '',
        loyaltyPoints: 0,
        isActive: true,
        roleId: 0,
        address: '',
    });

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditAccount = async (e) => {
        e.preventDefault();
        try {
            const headers = sendToken(); // Get headers with Authorization token
            const response = await axios.put(`https://localhost:7101/api/User/UpdateUserProfile?id=${editAccount.id}`, {
                fullName: editAccount.fullname,
                username: editAccount.username,
                password: editAccount.password,
                email: editAccount.email,
                numberPhone: editAccount.numberPhone,
                isActive: editAccount.isActive,
                roleId: editAccount.roleId,
                address: editAccount.address,
                loyaltyPoints: editAccount.loyaltyPoints
            }, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Account updated:', response.data);
            // Refresh user list
            fetchUserData();
            // Clear input fields
            setEditAccount({
                id: '',
                fullname: '',
                username: '',
                password: '',
                email: '',
                phone: '',
                isActive: true,
                roleId: 0,
                address: '',
                loyaltyPoints: 0
            });
            setIsEditModalOpen(false);
        } catch (error) {
            console.error('Error updating account:', error);
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Unknown error occurred');
            } else {
                setErrorMessage('Error updating account.');
            }
        }
    };
    const handleDeleteAccount = async (id) => {
        try {
            const headers = sendToken(); // Get headers with Authorization token
            await axios.delete(`https://localhost:7101/api/User/DeleteUser?id=${id}`, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Account deleted:', id);
            // Refresh user list
            fetchUserData();
        } catch (error) {
            console.error('Error deleting account:', error);
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Unknown error occurred');
            } else {
                setErrorMessage('Error deleting account.');
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
    if (searchTerm !== '') {
        filteredAccounts = filteredAccounts.filter(account =>
            account.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            account.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            account.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    const handleOpenAddButtonClick = () => {
        setShowAddOverlay(true);
    };

    const handleCloseAddButtonClick = () => {
        setShowAddOverlay(false);
    };

    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);

    const openDetailModal = (account) => {
        setSelectedAccount(account);
        setIsDetailModalOpen(true);
    };

    const closeDetailModal = () => {
        setSelectedAccount(null);
        setIsDetailModalOpen(false);
    };
    const openEditModal = (account) => {
        setEditAccount(account);
        setIsEditModalOpen(true);
    };
    const closeEditModal = () => {
        setIsEditModalOpen(false);
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
                        {/* <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle"
                                    data-feather="check-square">
                                </i>
                                <span className="align-middle">Chứng nhận sản phẩm</span>
                            </a>
                        </li> */}
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

                        {/* Button to open add account overlay */}
                        <div className="admin-page-controls">
                            <button onClick={handleOpenAddButtonClick} className="admin-page-add-button">Thêm tài khoản</button>

                            <div className="admin-page-search-button-container">
                                <input
                                    type="text"
                                    className="form-control admin-page-search-button"
                                    placeholder="Tìm kiếm..."
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="admin-page-status-filter">
                                <select className="form-control admin-page-filter-dropdown" value={statusFilter} onChange={handleStatusFilterChange}>
                                    <option value="Tất cả">Trạng thái</option>
                                    <option value="Hoạt động">Hoạt động</option>
                                    <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                                </select>
                            </div>
                        </div>

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
                                                <button className='admin-page-view-button' onClick={() => openDetailModal(user)}>Xem</button>
                                                <button className='admin-page-edit-button' onClick={() => openEditModal(user)}>Sửa</button>
                                                <button
                                                    className='admin-page-delete-button'
                                                    onClick={() => {
                                                        if (window.confirm(`Bạn có chắc chắn muốn xóa tài khoản của ${user.fullname}?`)) {
                                                            handleDeleteAccount(user.id);
                                                        }
                                                    }}
                                                >
                                                    Xóa
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Overlay for adding new account */}
                        {showAddOverlay && (
                            <div className="admin-page-add-account-overlay">
                                <div className="admin-page-add-account-modal">
                                    <button className="admin-page-add-account-close-button" onClick={handleCloseAddButtonClick}>&times;</button>
                                    <div className="admin-page-add-account-modal-content">
                                        <div className="admin-page-add-account-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Thêm tài khoản mới</h2>
                                            <form onSubmit={handleAddAccount}>
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Họ và tên:</label>
                                                    <input
                                                        type="text"
                                                        name="fullname"
                                                        value={newAccount.fullname}
                                                        onChange={handleAddInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-add-account-form-group-row">
                                                    <div className="admin-page-add-account-form-group">
                                                        <label>Tên tài khoản:</label>
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            value={newAccount.username}
                                                            onChange={handleAddInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-account-form-group">
                                                        <label>Mật khẩu:</label>
                                                        <div className="password-input-container">
                                                            <input
                                                                type={showPassword ? "text" : "password"}
                                                                name="password"
                                                                value={newAccount.password}
                                                                onChange={handleAddInputChange}
                                                                required
                                                            />
                                                            <span className="password-toggle-icon" onClick={toggleShowPassword}>
                                                                {showPassword ? 'Ẩn' : 'Hiển thị'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Email:</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={newAccount.email}
                                                        onChange={handleAddInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-add-account-form-group-row">
                                                    <div className="admin-page-add-account-form-group">
                                                        <label>Số điện thoại:</label>
                                                        <input
                                                            type="tel"
                                                            name="numberPhone"
                                                            value={newAccount.numberPhone}
                                                            onChange={handleAddInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-account-form-group">
                                                        <label>Chức vụ:</label>
                                                        <select
                                                            name="roleId"
                                                            value={newAccount.roleId}
                                                            onChange={handleAddInputChange}
                                                            required
                                                        >
                                                            <option >Chọn chức vụ</option>
                                                            <option value={1}>Quản trị viên</option>
                                                            <option value={2}>Quản lí</option>
                                                            <option value={3}>Thành viên</option>
                                                            <option value={4}>Vận chuyển</option>
                                                            <option value={5}>Nhân viên</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="admin-page-add-account-form-group">
                                                    <label>Địa chỉ:</label>
                                                    <textarea
                                                        name="address"
                                                        value={newAccount.address}
                                                        onChange={handleAddInputChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="admin-page-add-account-form-group">
                                                    <input type="submit" value="Thêm tài khoản" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {isDetailModalOpen && selectedAccount && (
                            <div className="admin-page-add-account-overlay">
                                <div className="admin-page-add-account-modal">
                                    <button className="admin-page-add-account-close-button" onClick={closeDetailModal}>&times;</button>
                                    <div className="admin-page-add-account-modal-content">
                                        <div className="admin-page-add-account-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Chi tiết tài khoản</h2>
                                            <div className="admin-page-add-account-form-group-row">
                                                <div className="admin-page-add-account-form-group">
                                                    <label>ID:</label>
                                                    <input type="text" value={selectedAccount.id} readOnly />
                                                </div>
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Trạng thái:</label>
                                                    <input type="text" value={selectedAccount.isActive ? 'Hoạt động' : 'Ngừng hoạt động'} readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-account-form-group">
                                                <label>Họ và tên:</label>
                                                <input type="text" value={selectedAccount.fullname} readOnly />
                                            </div>
                                            <div className="admin-page-add-account-form-group-row">
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Tên tài khoản:</label>
                                                    <input type="text" value={selectedAccount.username} readOnly />
                                                </div>
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Chức vụ:</label>
                                                    <input type="text" value={selectedAccount.roleName} readOnly />
                                                </div>
                                            </div>

                                            <div className="admin-page-add-account-form-group">
                                                <label>Email:</label>
                                                <input type="email" value={selectedAccount.email} readOnly />
                                            </div>
                                            <div className="admin-page-add-account-form-group-row">
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Số điện thoại:</label>
                                                    <input type="tel" value={selectedAccount.numberPhone} readOnly />
                                                </div>
                                                {selectedAccount.roleName === 'Member' && (
                                                    <div className="admin-page-add-account-form-group">
                                                        <label>Điểm tích lũy:</label>
                                                        <input type="text" value={selectedAccount.loyaltyPoints} readOnly />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="admin-page-add-account-form-group">
                                                <label>Địa chỉ:</label>
                                                <textarea value={selectedAccount.address} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {isEditModalOpen && (
                            <div className="admin-page-edit-account-overlay">
                                <div className="admin-page-edit-account-modal">
                                    <button className="admin-page-edit-account-close-button" onClick={closeEditModal}>&times;</button>
                                    <div className="admin-page-edit-account-modal-content">
                                        <div className="admin-page-edit-account-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Chỉnh sửa tài khoản</h2>
                                            <form onSubmit={handleEditAccount}>
                                                <div className="admin-page-edit-account-form-group">
                                                    <label>Họ và tên:</label>
                                                    <input
                                                        type="text"
                                                        name="fullname"
                                                        value={editAccount.fullname}
                                                        onChange={handleEditInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-edit-account-form-group-row">
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Tên tài khoản:</label>
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            value={editAccount.username}
                                                            onChange={handleEditInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Mật khẩu:</label>
                                                        <div className="password-input-container">
                                                            <input
                                                                type={showPassword ? "text" : "password"}
                                                                name="password"
                                                                value={editAccount.password}
                                                                onChange={handleEditInputChange}
                                                                required
                                                            />
                                                            <span className="password-toggle-icon" onClick={toggleShowPassword}>
                                                                {showPassword ? 'Ẩn' : 'Hiển thị'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="admin-page-edit-account-form-group">
                                                    <label>Email:</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={editAccount.email}
                                                        onChange={handleEditInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-edit-account-form-group-row">
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Số điện thoại:</label>
                                                        <input
                                                            type="tel"
                                                            name="numberPhone"
                                                            value={editAccount.numberPhone}
                                                            onChange={handleEditInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Chức vụ:</label>
                                                        <select
                                                            name="roleId"
                                                            value={editAccount.roleId}
                                                            onChange={handleEditInputChange}
                                                            required
                                                        >
                                                            <option value="">Chọn chức vụ</option>
                                                            <option value={1}>Quản trị viên</option>
                                                            <option value={2}>Quản lí</option>
                                                            <option value={3}>Thành viên</option>
                                                            <option value={4}>Vận chuyển</option>
                                                            <option value={5}>Nhân viên</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="admin-page-edit-account-form-group-row">
                                                    {editAccount.roleName === 'Member' && (
                                                        <div className="admin-page-edit-account-form-group">
                                                            <label>Điểm tích lũy:</label>
                                                            <input
                                                                type="number"
                                                                name="loyaltyPoints"
                                                                value={editAccount.loyaltyPoints}
                                                                onChange={handleEditInputChange}
                                                                required
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Trạng thái:</label>
                                                        <select
                                                            name="isActive"
                                                            value={editAccount.isActive}
                                                            onChange={handleEditInputChange}
                                                            required
                                                        >
                                                            <option value={true}>Hoạt động</option>
                                                            <option value={false}>Ngừng hoạt động</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="admin-page-edit-account-form-group">
                                                    <label>Địa chỉ:</label>
                                                    <textarea
                                                        name="address"
                                                        value={editAccount.address}
                                                        onChange={handleEditInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-edit-account-form-group">
                                                    <input type="submit" value="Cập nhật tài khoản" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Taikhoan;

