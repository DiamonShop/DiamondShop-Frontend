import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is imported correctly
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { getImageUrls } from '../../FirebaseImage/firebaseHelper';

const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '');
};
const SanPham = () => {
    const { user: currentUser, logout: userLogout } = useUser();

    const [errorMessage, setErrorMessage] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [jewelrySettings, setJewelrySettings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState('Tất cả');
    const [statusFilter, setStatusFilter] = useState('Tất cả');
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const toggleCategoryDropdown = () => {
        setShowCategoryDropdown(!showCategoryDropdown);
    };
    const [activeCategory, setActiveCategory] = useState('');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setCategoryFilter(category); // Update the category filter
    };
    const [isActiveMatDayChuyen, setIsActiveMatDayChuyen] = useState(false);

    const toggleActiveMatDayChuyen = () => {
        setIsActiveMatDayChuyen(!isActiveMatDayChuyen);
    };
    const [isActiveVongTay, setIsActiveVongTay] = useState(false);

    const toggleActiveVongTay = () => {
        setIsActiveVongTay(!isActiveVongTay);
    };
    const [isActiveKimCuong, setIsActiveKimCuong] = useState(false);

    const toggleActiveKimCuong = () => {
        setIsActiveKimCuong(!isActiveKimCuong);
    };
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({
        productId: '',
        categoryId: '',
        jewelrySettingID: '',
        productName: '',
        description: '',
        stock: 0,
        basePrice: 0,
        markupRate: 0,
        isActive: true,
    });
    const fetchProductData = async (categoryId = '') => {
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

            const productResponse = await axios.get('https://localhost:7101/api/products/GetAllProduct', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            // Fetching images for each product
            const formattedProducts = await Promise.all(productResponse.data.map(async (product) => {
                // Assuming you have a function to fetch images based on productId and categoryId
                const { image1Url, image2Url } = await getImageUrls(product.productId, product.categoryId);

                return {
                    ...product,
                    imageUrl: image1Url || "default_image_url.png", // Use default image if not found
                    image2Url: image2Url || "default_image_url.png" // Use default image if not found
                };
            }));
            console.log("All Products:", productResponse.data);

            if (categoryId) {
                setProducts(formattedProducts.filter(product => product.categoryId.toString() === categoryId));
            } else {
                setProducts(formattedProducts);
            }

            // Map data of categories
            const categoriesResponse = await axios.get('https://localhost:7101/api/Category/GetAllCategories', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Categories:", categoriesResponse.data);
            setCategories(categoriesResponse.data);
            // Map data of jewelrySettings
            const jewelrySettingsResponse = await axios.get('https://localhost:7101/api/JewelrySetting/All', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Categories:", jewelrySettingsResponse.data);
            setJewelrySettings(jewelrySettingsResponse.data);

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
        fetchProductData(categoryFilter);
    }, [currentUser, userLogout, navigate, categoryFilter]);


    const handleAddProductInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleAddProduct = async () => {
        try {
            const headers = sendToken(); // Get headers with Authorization token
            const response = await axios.post('https://localhost:7101/api/products/CreateProduct', {
                productId: newProduct.productId,
                categoryId: newProduct.categoryId,
                jewelrySettingID: newProduct.jewelrySettingID,
                productName: newProduct.productName,
                description: newProduct.description,
                stock: newProduct.stock,
                basePrice: newProduct.basePrice,
                markupRate: newProduct.markupRate,
                isActive: newProduct.isActive,
            }, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            console.log('New Product added:', response.data);
            // Refresh product list
            fetchProductData(categoryFilter); // Implement fetchProductData similar to fetchUserData
            // Clear input fields
            setNewProduct({
                productId: '',
                categoryId: '',
                jewelrySettingID: '',
                productName: '',
                description: '',
                stock: 0,
                basePrice: 0,
                markupRate: 0,
                isActive: true,
            });
            setShowAddProductOverlay(false);
        } catch (error) {
            console.error('Error adding new product:', error);
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Unknown error occurred');
            } else {
                setErrorMessage('Error adding new product.');
            }
        }
    };
    const [showAddProductOverlay, setShowAddProductOverlay] = useState(false);

    const handleOpenAddProductButtonClick = () => {
        setShowAddProductOverlay(true);
    };

    const handleCloseAddProductButtonClick = () => {
        setShowAddProductOverlay(false);
    };

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };

    let filteredProducts = [...products]; // Copy products state for filtering

    if (statusFilter !== 'Tất cả') {
        filteredProducts = filteredProducts.filter(product => (product.isActive ? 'Còn hàng' : 'Hết hàng') === statusFilter);
    }
    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.categoryId === categoryId);
        return category ? category.categoryName : 'Không xác định';
    };
    const getJewelrySettingName = (jewelrySettingID) => {
        const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
        return setting ? setting.name : 'Không xác định';

    };
    const getJewelrySettingMaterial = (jewelrySettingID) => {
        const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
        return setting ? setting.material : 'Không xác định';
    };
    const getJewelrySettingBasePrice = (jewelrySettingID) => {
        const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
        return setting ? setting.basePrice : 'Không xác định';
    };
    const getJewelrySettingDescription = (jewelrySettingID) => {
        const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
        return setting ? setting.description : 'Không xác định';
    };
    const [currentProduct, setCurrentProduct] = useState({ id: '', name: '', price: '', quantity: '', status: '' });
    const [showDetailsModal, setShowDetailsModal] = useState(false);

    const handleDetailsClick = (product) => {
        setCurrentProduct(product);
        setShowDetailsModal(true);
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
                            <a className="sidebar-link nav-link" href="/Dashboard">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle">Dashboard</span>
                            </a>
                        </li>
                        <li className="sidebar-header">Quản lý</li>
                        {/* <li className="sidebar-item active">
                            <a className="sidebar-link">
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
                            </a>
                        </li> */}
                        <li className={`sidebar-item ${showCategoryDropdown ? 'active' : ''}`}>
                            <a className="sidebar-link " onClick={toggleCategoryDropdown} >
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle">Sản phẩm</span>
                            </a>
                            {showCategoryDropdown && (
                                <ul className="sidebar-nav dropdown-menu">
                                    <li className={`sidebar-item ${activeCategory === '1' ? 'active' : ''}`} onClick={() => handleCategoryClick('1')}>
                                        <a className="sidebar-link">
                                            <i className="align-middle" data-feather="square"></i>
                                            <span className="align-middle">Nhẫn</span>
                                        </a>
                                    </li>
                                    <li className={`sidebar-item ${activeCategory === '2' ? 'active' : ''}`} onClick={() => handleCategoryClick('2')}>
                                        <a className="sidebar-link">
                                            <i className="align-middle" data-feather="square"></i>
                                            <span className="align-middle">Dây chuyền</span>
                                        </a>
                                    </li>
                                    <li className={`sidebar-item ${activeCategory === '3' ? 'active' : ''}`} onClick={() => handleCategoryClick('3')}>
                                        <a className="sidebar-link">
                                            <i className="align-middle" data-feather="square"></i>
                                            <span className="align-middle">Mặt dây chuyền</span>
                                        </a>
                                    </li>
                                    <li className={`sidebar-item ${activeCategory === '4' ? 'active' : ''}`} onClick={() => handleCategoryClick('4')}>
                                        <a className="sidebar-link">
                                            <i className="align-middle" data-feather="square"></i>
                                            <span className="align-middle">Vòng tay</span>
                                        </a>
                                    </li>
                                    <li className={`sidebar-item ${activeCategory === '5' ? 'active' : ''}`} onClick={() => handleCategoryClick('5')}>
                                        <a className="sidebar-link">
                                            <i className="align-middle" data-feather="square"></i>
                                            <span className="align-middle">Kim cương</span>
                                        </a>
                                    </li>


                                </ul>
                            )}
                        </li>
                        <li className="sidebar-item ">
                            <a className="sidebar-link" href="/TaiKhoan">
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle">Tài khoản</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href='/DonHang'>
                                <i className="align-middle" data-feather="square"></i>
                                <span className="align-middle">Đơn hàng</span>
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
                        <h2 className="text-center">Quản lí sản phẩm</h2>

                        {/* <div className="filters">
                            <label>Chọn theo trạng thái:</label>
                            <select value={statusFilter} onChange={handleStatusFilterChange}>
                                <option value="Tất cả">Tất cả</option>
                                <option value="Còn hàng">Còn hàng</option>
                                <option value="Hết hàng">Hết hàng</option>

                            </select>
                        </div> */}
                        <button onClick={handleOpenAddProductButtonClick} className="btn-add-account">Thêm sản phẩm</button>

                        {showAddProductOverlay && (
                            <div className="add-account-overlay">
                                <div className="add-account">
                                    <h3>Thêm sản phẩm mới</h3>
                                    <div>
                                        <label>ID Sản phẩm:</label>
                                        <input
                                            type="text"
                                            name="productId"
                                            value={newProduct.productId}
                                            onChange={handleAddProductInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Loại:</label>
                                        <select
                                            name="categoryId"
                                            value={newProduct.categoryId}
                                            onChange={handleAddProductInputChange}
                                        >
                                            <option value={1}>Nhẫn</option>
                                            <option value={2}>Dây chuyền</option>
                                            <option value={3}>Mặt dây chuyền</option>
                                            <option value={4}>Vòng tay</option>
                                            <option value={5}>Kim cương</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Thiết lập trang sức:</label>
                                        <select
                                            name="jewelrySettingID"
                                            value={newProduct.jewelrySettingID}
                                            onChange={handleAddProductInputChange}
                                        >
                                            <option value={1}>Classic, Gold</option>
                                            <option value={2}>Modern, Silver</option>
                                            <option value={3}>Luxury, Platinum</option>
                                            <option value={4}>Vintage, Bronze</option>
                                            <option value={5}>Elegant, White Gold</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Tên sản phẩm:</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            value={newProduct.productName}
                                            onChange={handleAddProductInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Mô tả sản phẩm:</label>
                                        <textarea
                                            name="description"
                                            value={newProduct.description}
                                            onChange={handleAddProductInputChange}
                                        ></textarea>
                                    </div>
                                    <div>
                                        <label>Số lượng:</label>
                                        <input
                                            type="number"
                                            name="stock"
                                            value={newProduct.stock}
                                            onChange={handleAddProductInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Giá gốc:</label>
                                        <input
                                            type="number"
                                            name="basePrice"
                                            value={newProduct.basePrice}
                                            onChange={handleAddProductInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Tỉ lệ áp giá:</label>
                                        <input
                                            type="number"
                                            name="markupRate"
                                            value={newProduct.markupRate}
                                            onChange={handleAddProductInputChange}
                                        />
                                    </div>
                                    <div>
                                        <label>Trạng thái:</label>
                                        <select
                                            name="isActive"
                                            value={newProduct.isActive}
                                            onChange={handleAddProductInputChange}
                                        >
                                            <option value={true}>Active</option>
                                            <option value={false}>Inactive</option>
                                        </select>
                                    </div>
                                    <button onClick={handleAddProduct}>Thêm sản phẩm</button>
                                    <button onClick={handleCloseAddProductButtonClick}>Đóng</button>
                                </div>
                            </div>
                        )}
                        <table className="">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Loại</th>
                                    <th>Số lượng</th>
                                    <th>Giá gốc</th>
                                    {/* <th>Tỉ lệ áp giá</th> */}
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map(product => (
                                    <tr key={product.productId}>
                                        <td>{product.productId}</td>
                                        <td>
                                            <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px' }} />
                                        </td>
                                        <td>{product.productName}</td>
                                        <td>{getCategoryName(product.categoryId)}</td>
                                        <td>{product.stock}</td>
                                        <td>{formatCurrency(product.basePrice)}đ</td> {/* Định dạng tiền tệ */}
                                        {/* <td>{product.markupRate}</td> */}
                                        <td>{product.isActive ? 'Còn hàng' : 'Hết hàng'}</td>
                                        <td>
                                            <button>Chỉnh sửa</button>
                                            <button onClick={() => handleDetailsClick(product)}>Chi tiết</button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    {showDetailsModal && (
                        <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="detailsProductModalLabel" aria-hidden="true" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="detailsProductModalLabel">Chi tiết sản phẩm</h5>
                                        <button type="button" className="close" onClick={() => setShowDetailsModal(false)} aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {currentProduct && (
                                            <div className="details-grid">
                                                <div className="column">
                                                    <p><strong>ID:</strong> {currentProduct.productId}</p>
                                                    <p><strong>Hình ảnh:</strong> <img src={currentProduct.imageUrl} alt={currentProduct.productName} style={{ width: '50px', height: '50px' }} /></p>
                                                    <p><strong>Tên sản phẩm:</strong> {currentProduct.productName}</p>
                                                    <p><strong>Loại:</strong> {getCategoryName(currentProduct.categoryId)}</p>
                                                    <p><strong>Giá gốc sản phẩm:</strong> {formatCurrency(currentProduct.basePrice)}đ</p>
                                                    <p><strong>Tỉ lệ áp giá:</strong> {currentProduct.markupRate}</p>

                                                </div>
                                                <div className="column">
                                                    {/* Các chi tiết khác nếu có */}
                                                    <p><strong>Số lượng:</strong> {currentProduct.stock}</p>
                                                    <p><strong>Mô tả sản phẩm:</strong> {currentProduct.description}</p>
                                                    <p><strong>Tên thiết lập trang sức:</strong> {getJewelrySettingName(currentProduct.jewelrySettingID)}</p>
                                                    <p><strong>Vật liệu:</strong> {getJewelrySettingMaterial(currentProduct.jewelrySettingID)}</p>
                                                    <p><strong>Giá (vật liệu):</strong> {getJewelrySettingBasePrice(currentProduct.jewelrySettingID)}đ</p>
                                                    <p><strong>Mô tả thiết lập trang sức:</strong> {getJewelrySettingDescription(currentProduct.jewelrySettingID)}</p>

                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <style jsx>{`
    .sidebar-nav {
        position: relative;
        background-color: transparent;
        
    }

    .sidebar-item {
        position: relative;
    }

    .dropdown-menu {
        left: 30px;
        max-width: 200px;
        margin: 0px 0px;
        padding: 0px 0px;
    }

    .sidebar-item.active .dropdown-menu {
        display: block;
    }
    .sidebar-nav:hover{
        background-color: transparent;
    }

    .dropdown-item {
        padding: 12px 16px;
        cursor: pointer;
    }
`}</style>

                </div>
            </div >
        </div >
    );
};

export default SanPham;



