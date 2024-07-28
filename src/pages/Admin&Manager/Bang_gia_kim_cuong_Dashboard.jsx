import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import 'react-quill/dist/quill.snow.css';
import { Button, message, Popconfirm } from 'antd';

export default function Bang_gia_kim_cuong() {
    const [diamondData, setDiamondData] = useState([]);
    const { user: currentUser, logout: userLogout } = useUser();
    const [loading, setLoading] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editProductDiamond, setEditProductDiamond] = useState({
        carat: 0,
        color: 'D',
        clarity: 'IF',
        cut: 'EX',
        price: 0
    });

    useEffect(() => {
        fetch('https://localhost:7101/api/DiamondPrices/Pricesdiamonds')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched Data:', data);
                setDiamondData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching diamond data:', error);
                setLoading(false);
            });
    }, []);

    const renderTable = (diameter, diamonds) => {
        const colors = ['D', 'E', 'F'];
        const clarities = ['IF', 'VVS1', 'VVS2', 'VS1', 'VS2'];

        const getPriceForClarityAndColor = (clarity, color) => {
            const diamond = diamonds.find(d => d.clarity === clarity && d.color === color);
            return diamond ? `${diamond.price.toLocaleString('vi-VN')} (${diamond.carat.toFixed(2)} cara)` : '-';
        };

        return (
            <div className="diamond-price-list" key={diameter}>
                <h1 className='highlight-color'>Giá Kim Cương <span className="highlight">{diameter.toFixed(1).replace('.', 'ly')}</span>. Kiểm định GIA. Giác cắt Excellent</h1>
                <table className="admin-page-table">
                    <thead>
                        <tr className='admin-page-column-table'>
                            <th>Color / Clarity</th>
                            {clarities.map(clarity => <th key={clarity}>{clarity}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {colors.map(color => (
                            <tr key={color}>
                                <td>{color}</td>
                                {clarities.map(clarity => (
                                    <td key={clarity}>
                                        {getPriceForClarityAndColor(clarity, color)}
                                        <button onClick={() => openEditModal(diamonds.find(d => d.clarity === clarity && d.color === color))}>Edit</button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                userLogout();
                return;
            }

            try {
                const decodedToken = jwtDecode(token);
                setUserRole(decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);
                const headers = { 'Authorization': `Bearer ${token}` };
                const response = await axios.get(`https://localhost:7101/api/User/GetUserProfile?id=${decodedToken.sid}`, { headers });
                setDisplayName(response.data.fullName || '');
            } catch (error) {
                console.error('Error decoding token or fetching user data:', error);
                userLogout();
            }
        };

        fetchUserData();
    }, [userLogout]);

    const handleEditDiamondChange = (event) => {
        const { name, value } = event.target;
        setEditProductDiamond(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    const editDiamondPrice = async (event) => {
        event.preventDefault();
        try {
            const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}`, 'Content-Type': 'application/json' };
            await axios.put(`https://localhost:7101/api/DiamondPrices/update-price-by-properties`, editProductDiamond, { headers });

            // Gọi thêm API cập nhật giá kim cương
            await axios.post(`https://localhost:7101/api/DiamondPrices/update-diamond-prices`, {}, { headers });

            setIsEditModalOpen(false);
            message.success("Chỉnh sửa giá kim cương thành công.");
            // Fetch the updated data
            const updatedResponse = await fetch('https://localhost:7101/api/DiamondPrices/Pricesdiamonds');
            const updatedData = await updatedResponse.json();
            setDiamondData(updatedData);
        } catch (error) {
            console.error('Error updating diamond price:', error);
            message.error("Chỉnh sửa giá kim cương thất bại.");
        }
    };

    const openEditModal = (diamond) => {
        setEditProductDiamond(diamond);
        setIsEditModalOpen(true);
    };

    return (
        <div className="wrapper">
            <nav id="sidebar" className="sidebar js-sidebar">
                <div className="sidebar-content js-simplebar">
                    <a className="sidebar-brand" href='/'>
                        <div className="logo-dashboard">
                            <Link to="/">
                                <img src="assets/img/logo/Logo.png" alt="brand logo" />
                            </Link>
                        </div>
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
                                <li className="sidebar-item active" >
                                    <a className="sidebar-link" >
                                        <i className="align-middle" data-feather="sliders"></i>
                                        <span className="align-middle"><Link to="/GiaKimCuong">Bảng giá kim cương</Link></span>
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
                                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                    <i className="align-middle" data-feather="settings"></i>
                                </a>
                                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                    <span className="text-dark">Xin chào, {`${displayName}`}</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <a className="dropdown-item" href='/' onClick={userLogout}>Đăng xuất</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="content">
                    <div className="admin-page-container">
                        <h2 className="text-center admin-page-title">Bảng giá kim cương</h2>
                        {loading ? <p>Loading data...</p> : diamondData.length > 0 ? diamondData.map(group => renderTable(group.diameterMM, group.diamonds)) : <p>No data available</p>}
                        {isEditModalOpen && (
                            <div className="admin-page-edit-overlay">
                                <div className="admin-page-edit-modal">
                                    <button className="admin-page-edit-close-button" onClick={closeEditModal}>&times;</button>
                                    <div className="admin-page-edit-modal-content">
                                        <div className="admin-page-edit-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Chỉnh sửa giá kim cương</h2>
                                            <form onSubmit={editDiamondPrice}>
                                                <div className="admin-page-edit-product-form-group-row">
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="carat">Carat</label>
                                                        <input
                                                            type="number"
                                                            id="carat"
                                                            name="carat"
                                                            placeholder="Carat"
                                                            value={editProductDiamond.carat}
                                                            onChange={handleEditDiamondChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="color">Màu sắc</label>
                                                        <select
                                                            id="color"
                                                            name="color"
                                                            value={editProductDiamond.color}
                                                            onChange={handleEditDiamondChange}
                                                            readOnly
                                                        >
                                                            <option value="D">D</option>
                                                            <option value="E">E</option>
                                                            <option value="F">F</option>
                                                        </select>
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="clarity">Độ tinh khiết</label>
                                                        <select
                                                            id="clarity"
                                                            name="clarity"
                                                            value={editProductDiamond.clarity}
                                                            onChange={handleEditDiamondChange}
                                                            readOnly
                                                        >
                                                            <option value="IF">IF</option>
                                                            <option value="VVS1">VVS1</option>
                                                            <option value="VVS2">VVS2</option>
                                                            <option value="VS1">VS1</option>
                                                            <option value="VS2">VS2</option>
                                                        </select>
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="cut">Cắt</label>
                                                        <select
                                                            id="cut"
                                                            name="cut"
                                                            value={editProductDiamond.cut}
                                                            onChange={handleEditDiamondChange}
                                                            readOnly
                                                        >
                                                            <option value="EX">EX</option>
                                                            <option value="VG">VG</option>
                                                            <option value="G">G</option>
                                                        </select>
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="price">Giá</label>
                                                        <input
                                                            type="number"
                                                            id="price"
                                                            name="price"
                                                            placeholder="Giá"
                                                            value={editProductDiamond.price}
                                                            onChange={handleEditDiamondChange}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="admin-page-edit-product-form-group">
                                                    <button type="submit" className="admin-page-edit-button">Cập nhật</button>
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
}
