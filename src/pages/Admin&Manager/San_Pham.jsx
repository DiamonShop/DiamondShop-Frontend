import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { getDiamondImageUrls, getJewelryImageUrls } from '../../FirebaseImage/firebaseHelper';
import ReactPaginate from 'react-paginate';

const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '');
};

const SanPham = () => {
    const { user: currentUser, logout: userLogout } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [productJewelries, setProductJewelries] = useState([]);
    const [productJewelrySettings, setProductJewelrySettings] = useState([]);
    const [productCategories, setProductCategories] = useState([]);
    const [productDiamonds, setProductDiamonds] = useState([]);

    const [activeCategory, setActiveCategory] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('Tất cả');
    
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;

    const fetchProductData = async (categoryId = '', page = 1) => {
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
            // get all Jewelry Product
            const productJewelriesResponse = await axios.get('https://localhost:7101/api/Jewelry/GetAllJewelry', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Product Jewelries:", productJewelriesResponse.data);
            // get all diamond
            const productDiamondsResponse = await axios.get('https://localhost:7101/api/Diamonds/GetAllDiamond', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Product Diamonds:", productDiamondsResponse.data);
            // get all product
            const productResponse = await axios.get('https://localhost:7101/api/products/GetAllProduct', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Products:", productResponse.data)
            // Create a map of productId to categoryId
            const productJewelryMap = productJewelriesResponse.data.reduce((map, jewelry) => {
                map[jewelry.productID] = jewelry.categoryId;
                return map;
            }, {});
            const productDiamondMap = productDiamondsResponse.data.reduce((map, diamond) => {
                map[diamond.productID] = diamond.diameterMM;
                return map;
            }, {});

            const formattedProducts = await Promise.all(productResponse.data.map(async (product) => {
                const categoryId = productJewelryMap[product.productId] || null;
                const diameterMM = productDiamondMap[product.productId] || null;
                let image1Url = "default_image_url.png";

                if (product.productType === 'Jewelry') {
                    const jewelryImageUrls = await getJewelryImageUrls(product.productId, categoryId);
                    image1Url = jewelryImageUrls.image1Url;
                } else if (product.productType === 'Diamond') {
                    const diamondImageUrls = await getDiamondImageUrls(product.productId, 5, diameterMM);
                    image1Url = diamondImageUrls.image1Url;

                }

                return {
                    productId: product.productId,
                    productName: product.productName,
                    description: product.description,
                    stock: product.stock,
                    markupPrice: product.markupPrice,
                    markupRate: product.markupRate,
                    productType: product.productType,
                    isActive: product.isActive,
                    categoryId: categoryId,
                    diamondCategoryId: 5,
                    imageUrl: image1Url || "default_image_url.png" // Use default image if not found
                };
            }));
            // get all category
            const productCategoriesResponse = await axios.get('https://localhost:7101/api/Category/GetAllCategory', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Product Categories:", productCategoriesResponse.data);
            // get all jewelry setting
            const productJewelrySettingsResponse = await axios.get('https://localhost:7101/api/JewelrySetting/All', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Product Jewelry Settings:", productJewelrySettingsResponse.data);
            const filteredProducts = categoryId
                ? categoryId === '5'
                    ? formattedProducts.filter(product => product.productType === 'Diamond')
                    : formattedProducts.filter(product => product.categoryId && product.categoryId.toString() === categoryId)
                : formattedProducts;

            setProducts(filteredProducts);
            setProductJewelries(productJewelriesResponse.data);
            setProductCategories(productCategoriesResponse.data);
            setProductJewelrySettings(productJewelrySettingsResponse.data);
            setProductDiamonds(productDiamondsResponse.data)
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
        fetchProductData(categoryFilter, currentPage + 1);
    }, [currentUser, userLogout, navigate, categoryFilter, currentPage]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setCategoryFilter(category);
        setCurrentPage(0); // Reset to the first page when category changes
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const displayProducts = products.slice(
        currentPage * productsPerPage,
        (currentPage + 1) * productsPerPage
    );

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
                            <a className="sidebar-link nav-link" >
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
                            </a>
                        </li>
                        <li className="sidebar-header">Quản lý</li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link" >
                                <i className="align-middle" data-feather="sliders"></i>
                                <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
                            </a>

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
                        </li>
                        <li className="sidebar-item ">
                            <a className="sidebar-link" >
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
                        <table className="">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Mô tả</th>
                                    <th>Số lượng</th>
                                    <th>Giá gốc</th>
                                    <th>Tỉ lệ áp giá</th>
                                    <th>Loại sản phẩm</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayProducts.map(product => (
                                    <tr key={product.productId}>
                                        <td>{product.productId}</td>
                                        <td>
                                            <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px' }} />
                                        </td>
                                        <td>{product.productName}</td>
                                        <td>{product.description}</td>
                                        <td>{product.stock}</td>
                                        <td>{formatCurrency(product.markupPrice)}đ</td> {/* Định dạng tiền tệ */}
                                        <td>{product.markupRate}</td>
                                        <td>{product.productType}</td>
                                        <td>{product.isActive ? 'Còn hàng' : 'Hết hàng'}</td>
                                        <td>
                                            <button>Chỉnh sửa</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ReactPaginate
                            previousLabel={"Trước"}
                            nextLabel={"Sau"}
                            breakLabel={"..."}
                            pageCount={Math.ceil(products.length / productsPerPage)}
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
            </div>
        </div>
    );
};
export default SanPham;
