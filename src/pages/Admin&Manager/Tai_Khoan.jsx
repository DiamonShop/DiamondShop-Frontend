import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// State và hàm xử lý tài khoản
const accountDatas = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Quản trị viên', status: 'Hoạt động' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Người dùng', status: 'Ngừng hoạt động' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Người dùng', status: 'Hoạt động' }
];

// State và hàm xử lý modal chỉnh sửa tài khoản


// Hàm render danh sách tài khoản
const AccountManagement = () => {
    const [accounts, setAccounts] = useState(accountDatas);
    const [currentAccount, setCurrentAccount] = useState({ id: '', name: '', email: '', role: '', status: '' });

    // State for controlling modal visibility
    const [showModal, setShowModal] = useState(false);
    // Hàm xử lý khi người dùng click chỉnh sửa tài khoản

    const editAccount = (id) => {
        const account = accounts.find(a => a.id === id);
        setCurrentAccount(account);
        setShowModal(true);
    };

    // Hàm xử lý khi người dùng submit form chỉnh sửa tài khoản
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { id, name, email, role, status } = currentAccount;
        const updatedAccounts = accounts.map((account) =>
            account.id === id ? currentAccount : account
        );
        setAccounts(updatedAccounts);
        setShowModal(false);
    };

    // Hàm xử lý thay đổi giá trị các input trong form chỉnh sửa
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value
        }));
    };
    return (
        <div className="content">
            <div className="container">
                <h2 className="text-center">Quản lý sản phẩm</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên tài khoản</th>
                            <th>Email</th>
                            <th>Chức vụ</th>
                            <th>Tình trạng</th>

                        </tr>
                    </thead>
                    <tbody id="account-list">
                        {accounts.map(account => (
                            <tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.name}</td>
                                <td>{account.email}</td>
                                <td>{account.role}</td>
                                <td className={account.status === 'Hoạt động' ? 'status-active' : 'status-inactive'}>{account.status}</td>
                                <td>
                                    <button className="btn btn-sm btn-primary" onClick={() => editAccount(account.id)}>Chỉnh sửa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <div className="modal fade show" id="editAccountModal" tabIndex="-1" role="dialog" aria-labelledby="editAccountModalLabel" aria-hidden="true" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editAccountModalLabel">Chỉnh sửa tài khoản</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form id="edit-account-form" onSubmit={handleFormSubmit}>
                                    <input type="hidden" id="edit-account-id" value={currentAccount.id} />
                                    <div className="form-group">
                                        <label htmlFor="edit-account-name">Tên tài khoản</label>
                                        <input type="text" className="form-control" id="edit-account-name" name="name" value={currentAccount.name} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="edit-account-email">Email</label>
                                        <input type="email" className="form-control" id="edit-account-email" name="email" value={currentAccount.email} onChange={handleInputChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="edit-account-role">Vai trò</label>
                                        <select className="form-control" id="edit-account-role" name="role" value={currentAccount.role} onChange={handleInputChange} required>
                                            <option value="Quản trị viên">Quản trị viên</option>
                                            <option value="Người dùng">Người dùng</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="edit-account-status">Tình trạng</label>
                                        <select className="form-control" id="edit-account-status" name="status" value={currentAccount.status} onChange={handleInputChange} required>
                                            <option value="Hoạt động">Hoạt động</option>
                                            <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>


    );
};

const Tai_Khoan = () => {
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
                                <span className="align-middle"><Link to="/BangDieuKhien">Bảng điều khiển</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-header">Quản lý</li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/TaiKhoan">Tài khoản</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
                            </a>
                            <a class="sidebar-link">
                                <i class="align-middle"
                                    data-feather="check-square">
                                </i>
                                <span class="align-middle">Chứng nhận sản phẩm</span>
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
                <AccountManagement />
            </div>
        </div>
    );
}

export default Tai_Khoan;
