import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is imported correctly
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { Link } from 'react-router-dom';
import { logout } from '../../api/LogoutAPI';
import ReactPaginate from 'react-paginate';
import {
    EyeOutlined,
    EyeInvisibleOutlined
} from '@ant-design/icons';
import { Space } from 'antd';
import { Button, message, Popconfirm, Input, InputNumber, Select } from 'antd';
const { Option } = Select;

const getRoleIdByRoleName = (roleName) => {
    switch (roleName) {
        case 'Admin':
            return 1;
        case 'Manager':
            return 2;
        case 'Member':
            return 3;
        case 'Delivery':
            return 4;
        case 'Staff':
            return 5;
        default:
            return 'N/A'
    }
}
const convertRoleName = (roleName) => {
    switch (roleName) {
        case 'Admin':
            return 'Quản trị viên';
        case 'Manager':
            return 'Quản lí';
        case 'Member':
            return 'Thành viên';
        case 'Delivery':
            return 'Vận chuyển';
        case 'Staff':
            return 'Nhân viên';
        default:
            return 'N/A'
    }
}

const Taikhoan = () => {
    const [showAddOverlay, setShowAddOverlay] = useState(false);
    const { user: currentUser, logout: userLogout } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0);
    const usersPerPage = 6;

    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const [roleFilter, setRoleFilter] = useState('Tất cả');
    const [statusFilter, setStatusFilter] = useState('Tất cả');

    const fetchUserData = async (page = 1) => {
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
            const formattedUsers = response.data.map((user) => ({
                id: user.userId,
                fullname: user.fullName,
                username: user.username,
                password: user.password,
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
        fetchUserData(currentPage + 1);
    }, [currentUser, userLogout, navigate, currentPage]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
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


    const handleAddAccount = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }
        try {
            const headers = sendToken(); // Get headers with Authorization token
            const userPayload = {
                fullname: newAccount.fullname,
                username: newAccount.username,
                password: newAccount.password,
                email: newAccount.email,
                isActive: newAccount.isActive,
                roleId: newAccount.roleId,
                numberPhone: newAccount.numberPhone,
                address: newAccount.address,
            }
            await axios.post('https://localhost:7101/api/User/CreateUser', userPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            setShowAddOverlay(false);
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

            message.success("Thêm mới tài khoản thành công");
        } catch (error) {
            console.error('Error adding new account:', error);
            message.error("Thêm mới tài khoản thất bại");
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Unknown error occurred');
            } else {
                setErrorMessage('Error adding new account.');
            }
        }
    };
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editAccount, setEditAccount] = useState({
        id: 0,
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

    const handleEditUserClick = (user) => {
        setEditAccount({
            id: user.id,
            fullname: user.fullname,
            username: user.username,
            password: user.password, // Mật khẩu nên được để trống để người dùng nhập lại khi cần
            email: user.email,
            numberPhone: user.numberPhone,
            isActive: user.isActive,
            roleId: getRoleIdByRoleName(user.roleName),
            address: user.address,
            loyaltyPoints: user.loyaltyPoints
        });
        setSelectedAccount(user);
        setIsEditModalOpen(true); // Mở modal chỉnh sửa người dùng
    };

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setEditAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditInputNumberChange = (value, name) => {
        setEditAccount(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleEditAccount = async (e) => {
        e.preventDefault();
        try {
            const headers = sendToken(); // Get headers with Authorization token
            const userPayload = {
                userId: editAccount.id,
                roleId: editAccount.roleId,
                username: editAccount.username,
                password: editAccount.password,
                fullName: editAccount.fullname,
                email: editAccount.email,
                numberPhone: editAccount.numberPhone,
                address: editAccount.address,
                loyaltyPoints: editAccount.loyaltyPoints,
                isActive: editAccount.isActive
            }
            await axios.put('https://localhost:7101/api/User/UpdateUserProfile', userPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Account updated:', userPayload);
            message.success('Chỉnh sửa người dùng thành công');
            // Refresh user list
            fetchUserData();
            setIsEditModalOpen(false);
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

        } catch (error) {
            console.error('Error updating account:', error);
            message.error('Chỉnh sửa người dùng thất bại');
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
            message.success('Xóa tài khoản thành công');
            // Refresh user list
            fetchUserData();
        } catch (error) {
            console.error('Error deleting account:', error);
            message.error('Xóa tài khoản thất bại.');
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Unknown error occurred');
            } else {
                setErrorMessage('Error deleting account.');
            }
        }
    };
    const confirmDelete = (id) => {
        handleDeleteAccount(id);
    };

    const cancelDelete = (e) => {
        message.error('Hủy bỏ xóa sản phẩm');
    };

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

    const pageCount = Math.ceil(filteredAccounts.length / usersPerPage);
    const offset = currentPage * usersPerPage;
    const currentPageUsers = filteredAccounts.slice(offset, offset + usersPerPage);
    
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

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

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
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href='/'>
                        <img src="assets/img/logo/Logo.png" alt="Logo" />
                    </a>

                    <ul className="sidebar-nav">
                        {userRole === 'Admin' && (
                            <>
                                <li className="sidebar-header">Trang chủ</li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link" >
                                        <i className="align-middle" data-feather="sliders"></i>
                                        <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                                    </a>
                                </li>
                                <li className="sidebar-header">Quản lý</li>
                                <li className="sidebar-item active">
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
                                <li className="sidebar-item">
                                    <a className="sidebar-link" >
                                        <i className="align-middle" data-feather="square"></i>
                                        <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                                    </a>
                                </li>
                            </>
                        )}


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
                                    <a className="dropdown-item" href='/' onClick={logout}>Đăng xuất</a>
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
                                <select className="form-control admin-page-filter-dropdown" value={roleFilter} onChange={handleRoleFilterChange}>
                                    <option value="Tất cả">Tất cả</option>
                                    <option value='Admin'>Quản trị viên</option>
                                    <option value='Manager'>Quản lí</option>
                                    <option value='Member'>Thành viên</option>
                                    <option value='Delivery'>Vận chuyển</option>
                                    <option value='Staff'>Nhân viên</option>
                                </select>
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
                            <thead>
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
                                {currentPageUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{convertRoleName(user.roleName)}</td>
                                        <td>{user.isActive ? 'Hoạt động' : 'Ngừng hoạt động'}</td>
                                        <td>
                                            <div className="admin-page-buttons">
                                                <Button type='default' onClick={() => openDetailModal(user)}>Xem</Button>
                                                <Button type='default' onClick={() => handleEditUserClick(user)}>Sửa</Button>
                                                {user.roleName !== 'Admin' && (
                                                    <Popconfirm
                                                        title="Xóa tài khoản"
                                                        description={`Bạn có chắc chắn muốn xóa tài khoản của ${user.fullname}?`}
                                                        onConfirm={() => confirmDelete(user.id)}
                                                        onCancel={cancelDelete}
                                                        okText="Có"
                                                        cancelText="Không"
                                                    >
                                                        <Button danger>Xóa</Button>
                                                    </Popconfirm>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <ReactPaginate
                            previousLabel={"Trước"}
                            nextLabel={"Sau"}
                            breakLabel={"..."}
                            pageCount={pageCount}
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
                                                    <Input
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
                                                        <Input
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
                                                            <Input
                                                                type={showPassword ? "text" : "password"}
                                                                name="password"
                                                                value={newAccount.password}
                                                                onChange={handleAddInputChange}
                                                                required
                                                            />
                                                            <span className="password-toggle-icon" onClick={toggleShowPassword}>
                                                                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Email:</label>
                                                    <Input
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
                                                        <Input
                                                            type="tel"
                                                            name="numberPhone"
                                                            value={newAccount.numberPhone}
                                                            onChange={handleAddInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-account-form-group">
                                                        <label>Chức vụ:</label>
                                                        <Select
                                                            name="roleId"
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            onChange={(value) => handleAddInputChange({ target: { name: 'roleId', value } })}
                                                            placeholder='Chọn chức vụ'
                                                        >
                                                            <Option value={1}>Quản trị viên</Option>
                                                            <Option value={2}>Quản lí</Option>
                                                            <Option value={3}>Thành viên</Option>
                                                            <Option value={4}>Vận chuyển</Option>
                                                            <Option value={5}>Nhân viên</Option>
                                                        </Select>
                                                    </div>
                                                </div>

                                                <div className="admin-page-add-account-form-group">
                                                    <label>Địa chỉ:</label>
                                                    <Input
                                                        name="address"
                                                        value={newAccount.address}
                                                        onChange={handleAddInputChange}
                                                        required
                                                    />
                                                </div>

                                                <div className="admin-page-add-account-form-group">
                                                    <Button type="primary" htmlType="submit">Thêm tài khoản</Button>
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
                                            <div className="admin-page-add-account-form-group">
                                                <label>Họ và tên:</label>
                                                <Input value={selectedAccount.fullname} readOnly />
                                            </div>
                                            <div className="admin-page-add-account-form-group-row">
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Tên tài khoản:</label>
                                                    <Input value={selectedAccount.username} readOnly />
                                                </div>
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Chức vụ:</label>
                                                    <Input value={convertRoleName(selectedAccount.roleName)} readOnly />
                                                </div>
                                            </div>

                                            <div className="admin-page-add-account-form-group">
                                                <label>Email:</label>
                                                <Input type="email" value={selectedAccount.email} readOnly />
                                            </div>
                                            <div className="admin-page-add-account-form-group-row">
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Số điện thoại:</label>
                                                    <Input type="tel" value={selectedAccount.numberPhone} readOnly />
                                                </div>
                                                <div className="admin-page-add-account-form-group">
                                                    <label>Điểm tích lũy:</label>
                                                    <Input value={selectedAccount.loyaltyPoints} readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-account-form-group">
                                                <label>Địa chỉ:</label>
                                                <Input value={selectedAccount.address} readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {isEditModalOpen && selectedAccount && (
                            <div className="admin-page-edit-account-overlay">
                                <div className="admin-page-edit-account-modal">
                                    <button className="admin-page-edit-account-close-button" onClick={closeEditModal}>&times;</button>
                                    <div className="admin-page-edit-account-modal-content">
                                        <div className="admin-page-edit-account-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Chỉnh sửa tài khoản</h2>
                                            <form onSubmit={handleEditAccount}>
                                                <div className="admin-page-edit-account-form-group">
                                                    <Input
                                                        type='hidden'
                                                        name="id"
                                                        value={selectedAccount.id}
                                                        onChange={handleEditInputChange}
                                                        readOnly
                                                    />
                                                </div>
                                                <div className="admin-page-edit-account-form-group">
                                                    <label>Họ và tên:</label>
                                                    <Input
                                                        name="fullname"
                                                        value={editAccount.fullname}
                                                        onChange={handleEditInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-edit-account-form-group-row">
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Tên tài khoản:</label>
                                                        <Input
                                                            name="username"
                                                            value={editAccount.username}
                                                            onChange={handleEditInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Mật khẩu:</label>
                                                        <div className="password-input-container">
                                                            <Input
                                                                type={showPassword ? "text" : "password"}
                                                                name="password"
                                                                value={editAccount.password}
                                                                onChange={handleEditInputChange}
                                                                required
                                                            />
                                                            <span className="password-toggle-icon" onClick={toggleShowPassword}>
                                                                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="admin-page-edit-account-form-group">
                                                    <label>Email:</label>
                                                    <Input
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
                                                        <Input
                                                            name="numberPhone"
                                                            value={editAccount.numberPhone}
                                                            onChange={handleEditInputChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Chức vụ:</label>
                                                        <Select
                                                            name="roleId"
                                                            value={editAccount.roleId}
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            onChange={(value) => handleEditInputChange({ target: { name: 'roleId', value } })}
                                                        >
                                                            <Option value="">Chọn chức vụ</Option>
                                                            <Option value={1}>Quản trị viên</Option>
                                                            <Option value={2}>Quản lí</Option>
                                                            <Option value={3}>Thành viên</Option>
                                                            <Option value={4}>Vận chuyển</Option>
                                                            <Option value={5}>Nhân viên</Option>
                                                        </Select>
                                                    </div>
                                                </div>

                                                <div className="admin-page-edit-account-form-group-row">
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Điểm tích lũy:</label>
                                                        <Input
                                                            type="number"
                                                            name="loyaltyPoints"
                                                            min={1}
                                                            max={99999999}
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            value={editAccount.loyaltyPoints}
                                                            onChange={(value) => handleEditInputNumberChange(value, 'loyaltyPoints')}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Trạng thái:</label>
                                                        <Select
                                                            name="isActive"
                                                            value={editAccount.isActive}
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            onChange={(value) => handleEditInputChange({ target: { name: 'isActive', value } })}
                                                        >
                                                            <Option value={true}>Hoạt động</Option>
                                                            <Option value={false}>Ngừng hoạt động</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div className="admin-page-edit-account-form-group">
                                                    <label>Địa chỉ:</label>
                                                    <Input
                                                        name="address"
                                                        value={editAccount.address}
                                                        onChange={handleEditInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-edit-account-form-group">
                                                    <Button type="primary" htmlType="submit">Cập nhật tài khoản</Button>
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

