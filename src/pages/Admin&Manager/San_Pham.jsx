// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '../../UserContext';
// import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode'; // Ensure jwt-decode is imported correctly
// import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
// import { getJewelryImageUrls } from '../../FirebaseImage/firebaseHelper';
// import { imageDb } from '../../FirebaseImage/Config';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import ReactPaginate from 'react-paginate';

// const formatCurrency = (value) => {
//     return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '');
// };
// const SanPham = () => {
//     const { user: currentUser, logout: userLogout } = useUser();

//     const [errorMessage, setErrorMessage] = useState('');
//     const [products, setProducts] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [jewelrySettings, setJewelrySettings] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [categoryFilter, setCategoryFilter] = useState('Tất cả');
//     const [statusFilter, setStatusFilter] = useState('Tất cả');
//     const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

//     const [filteredProductCount, setFilteredProductCount] = useState(0);
//     const [totalPages, setTotalPages] = useState(0);

//     const [currentPage, setCurrentPage] = useState(0);
//     const productsPerPage = 6; // Số lượng sản phẩm trên mỗi trang
//     const toggleCategoryDropdown = () => {
//         setShowCategoryDropdown(!showCategoryDropdown);
//     };

// const [activeCategory, setActiveCategory] = useState('');

// const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     setCategoryFilter(category);
// };

//     const navigate = useNavigate();

//     const [newProduct, setNewProduct] = useState({
//         productId: '',
//         categoryId: 1, // Giá trị mặc định, bạn có thể thay đổi tùy thuộc vào yêu cầu
//         jewelrySettingID: 1, // Giá trị mặc định, bạn có thể thay đổi tùy thuộc vào yêu cầu
//         productName: '',
//         description: '',
//         stock: 0,
//         basePrice: 0,
//         markupRate: 0,
//         isActive: true,
//         imageUrls: [], // New field for multiple image URLs
//         imageFiles: [] // New field for multiple image files
//     });
//     const fetchProductData = async (categoryId = '', page = 1) => {
//         if (!currentUser) {
//             console.log("User not logged in. Redirecting to login.");
//             return;
//         }

//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const decodedToken = jwtDecode(token);
//             const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

//             if (userRole !== 'Admin') {
//                 console.log("User is not an admin. Redirecting to home.");
//                 navigate('/');
//                 return;
//             }

//             setLoading(true);
//             const headers = sendToken(); // Get headers with Authorization token

//             const productResponse = await axios.get('https://lcalhost:7101/api/products/GetAllProduct', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Products:", productResponse.data);
//             // // Fetching images for each product
//             // const formattedProducts = await Promise.all(productResponse.data.map(async (product) => {
//             //     const { image1Url } = await getJewelryImageUrls(product.productId, product.categoryId);

//             //     return {
//             //         ...product,
//             //         imageUrl: image1Url || "default_image_url.png" // Use default image if not found
//             //     };
//             // }));
//             // setProducts(formattedProducts);
//             // Fetching images for each product
//             const formattedProducts = await Promise.all(productResponse.data.map(async (product) => {
//                 const { image1Url } = await getJewelryImageUrls(product.productId, product.categoryId);

//                 return {
//                     productId: product.productId,
//                     productName: product.productName,
//                     description: product.description,
//                     stock: product.stock,
//                     markupPrice: product.markupPrice,
//                     markupRate: product.markupRate,
//                     productType: product.productType,
//                     isActive: product.isActive,
//                     imageUrl: image1Url || "default_image_url.png" // Use default image if not found
//                 };
//             }));

//             setProducts(formattedProducts);
//             // const filteredProducts = categoryId
//             //     ? formattedProducts.filter(product => product.categoryId.toString() === categoryId)
//             //     : formattedProducts;


//             setFilteredProductCount(filteredProducts.length);
//             const totalPagesCount = Math.ceil(filteredProductCount / productsPerPage);
//             setTotalPages(totalPagesCount);

//             // Map data of categories
//             const categoriesResponse = await axios.get('https://localhost:7101/api/Category/GetAllCategories', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Categories:", categoriesResponse.data);
//             setCategories(categoriesResponse.data);
//             // Map data of jewelrySettings
//             const jewelrySettingsResponse = await axios.get('https://localhost:7101/api/JewelrySetting/All', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Categories:", jewelrySettingsResponse.data);
//             setJewelrySettings(jewelrySettingsResponse.data);

//         } catch (error) {
//             console.error('Error fetching user data:', error);
//             if (error.response && error.response.status === 401) {
//                 console.log('Token expired or invalid. Redirecting to login.');
//                 userLogout();
//             } else {
//                 setErrorMessage('Error fetching user data.');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };


//     useEffect(() => {
//         fetchProductData(categoryFilter, 1);

//     }, [currentUser, userLogout, navigate, categoryFilter]);

//     const handlePageClick = (event) => {
//         fetchProductData(categoryFilter, event.selected + 1);
//     }

//     const handleAddProductInputChange = (event) => {
//         const { name, value } = event.target;
//         setNewProduct(prevProduct => ({
//             ...prevProduct,
//             [name]: name === 'categoryId' || name === 'jewelrySettingID' ? parseInt(value, 10) : value
//         }));
//     };
//     const handleAddProduct = async (categoryFilter) => {
//         try {

//             const headers = sendToken(); // Get headers with Authorization token

// const imageUrls = await Promise.all(newProduct.imageFiles.map(async (file, index) => {
//     const imgRef = ref(imageDb, `files/${categoryFilter}/${newProduct.productId}/${file.name}-${index}`);
//     await uploadBytes(imgRef, file);
//     return await getDownloadURL(imgRef);
// }));
//             const response = await axios.post('https://localhost:7101/api/products/CreateProduct', {
//                 productId: newProduct.productId,
//                 categoryId: categoryFilter,
//                 jewelrySettingID: newProduct.jewelrySettingID,
//                 productName: newProduct.productName,
//                 description: newProduct.description,
//                 stock: newProduct.stock,
//                 basePrice: newProduct.basePrice,
//                 markupRate: newProduct.markupRate,
//                 isActive: newProduct.isActive,
//                 imageUrls
//             }, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             console.log('New Product added:', response.data);
//             // Refresh product list
//             fetchProductData(categoryFilter); // Implement fetchProductData similar to fetchUserData
//             // Clear input fields
//             setNewProduct({
//                 productId: '',
//                 categoryId: '',
//                 jewelrySettingID: '',
//                 productName: '',
//                 description: '',
//                 stock: 0,
//                 basePrice: 0,
//                 markupRate: 0,
//                 isActive: true,
//                 imageUrls: [],
//                 imageFiles: []
//             });
//             setShowAddProductOverlay(false);
//         } catch (error) {
//             console.error('Error adding new product:', error);
//             if (error.response) {
//                 setErrorMessage(error.response.data.message || 'Unknown error occurred');
//             } else {
//                 setErrorMessage('Error adding new product.');
//             }
//         }
//     };
// const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setNewProduct(prevProduct => ({
//         ...prevProduct,
//         imageFiles: files
//     }));
// };
//     const handleDeleteProduct = async (productId) => {
//         if (!currentUser) {
//             console.log("User not logged in. Redirecting to login.");
//             return;
//         }

//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const decodedToken = jwtDecode(token);
//             const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

//             if (userRole !== 'Admin') {
//                 console.log("User is not an admin. Redirecting to home.");
//                 navigate('/');
//                 return;
//             }

//             const headers = sendToken(); // Get headers with Authorization token

//             await axios.delete(`https://localhost:7101/api/products/DeleteProduct?id=${productId}`, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             console.log('Product deleted successfully');
//             // Refresh product list
//             fetchProductData(categoryFilter, currentPage + 1); // Fetch updated product list
//         } catch (error) {
//             console.error('Error deleting product:', error);
//             if (error.response) {
//                 setErrorMessage(error.response.data.message || 'Unknown error occurred');
//             } else {
//                 setErrorMessage('Error deleting product.');
//             }
//         }
//     };

//     const [showAddProductOverlay, setShowAddProductOverlay] = useState(false);

//     const handleOpenAddProductButtonClick = () => {
//         setShowAddProductOverlay(true);
//     };

//     const handleCloseAddProductButtonClick = () => {
//         setShowAddProductOverlay(false);
//     };

//     const handleStatusFilterChange = (e) => {
//         setStatusFilter(e.target.value);
//     };

//     let filteredProducts = [...products]; // Copy products state for filtering

//     if (statusFilter !== 'Tất cả') {
//         filteredProducts = filteredProducts.filter(product => (product.isActive ? 'Còn hàng' : 'Hết hàng') === statusFilter);
//     }
//     const getCategoryName = (categoryId) => {
//         const category = categories.find(cat => cat.categoryId === categoryId);
//         return category ? category.categoryName : 'Không xác định';
//     };
//     const getJewelrySettingName = (jewelrySettingID) => {
//         const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
//         return setting ? setting.name : 'Không xác định';

//     };
//     const getJewelrySettingMaterial = (jewelrySettingID) => {
//         const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
//         return setting ? setting.material : 'Không xác định';
//     };
//     const getJewelrySettingBasePrice = (jewelrySettingID) => {
//         const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
//         return setting ? setting.basePrice : 'Không xác định';
//     };
//     const getJewelrySettingDescription = (jewelrySettingID) => {
//         const setting = jewelrySettings.find(set => set.jewelrySettingID === jewelrySettingID);
//         return setting ? setting.description : 'Không xác định';
//     };
//     const [currentProduct, setCurrentProduct] = useState({ id: '', name: '', price: '', quantity: '', status: '' });
//     const [showDetailsModal, setShowDetailsModal] = useState(false);

//     const handleDetailsClick = (product) => {
//         setCurrentProduct(product);
//         setShowDetailsModal(true);
//     };

//     return (
//         <div className="wrapper">
//             <nav id="sidebar" className="sidebar js-sidebar">
//                 <div className="sidebar-content js-simplebar">
//                     <a className="sidebar-brand" href='/'>
//                         <img src="assets/img/logo/logo.png" alt="Logo" />
//                     </a>
//                     <ul className="sidebar-nav">
//                         <li className="sidebar-header">Trang chủ</li>
//                         <li className="sidebar-item">
//                             <a className="sidebar-link nav-link" href="/Dashboard">
//                                 <i className="align-middle" data-feather="sliders"></i>
//                                 <span className="align-middle">Dashboard</span>
//                             </a>
//                         </li>
//                         <li className="sidebar-header">Quản lý</li>
//                         {/* <li className="sidebar-item active">
//                             <a className="sidebar-link">
//                                 <i className="align-middle" data-feather="sliders"></i>
//                                 <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
//                             </a>
//                         </li> */}
//                         <li className={`sidebar-item ${showCategoryDropdown ? 'active' : ''}`}>
//                             <a className="sidebar-link " onClick={toggleCategoryDropdown} >
//                                 <i className="align-middle" data-feather="sliders"></i>
//                                 <span className="align-middle">Sản phẩm</span>
//                             </a>
//                             { {showCategoryDropdown && (
//  <ul className="sidebar-nav dropdown-menu">
//     <li className={`sidebar-item ${activeCategory === '1' ? 'active' : ''}`} onClick={() => handleCategoryClick('1')}>
//         <a className="sidebar-link">
//             <i className="align-middle" data-feather="square"></i>
//             <span className="align-middle">Nhẫn</span>
//         </a>
//     </li>
//     <li className={`sidebar-item ${activeCategory === '2' ? 'active' : ''}`} onClick={() => handleCategoryClick('2')}>
//         <a className="sidebar-link">
//             <i className="align-middle" data-feather="square"></i>
//             <span className="align-middle">Dây chuyền</span>
//         </a>
//     </li>
//     <li className={`sidebar-item ${activeCategory === '3' ? 'active' : ''}`} onClick={() => handleCategoryClick('3')}>
//         <a className="sidebar-link">
//             <i className="align-middle" data-feather="square"></i>
//             <span className="align-middle">Mặt dây chuyền</span>
//         </a>
//     </li>
//     <li className={`sidebar-item ${activeCategory === '4' ? 'active' : ''}`} onClick={() => handleCategoryClick('4')}>
//         <a className="sidebar-link">
//             <i className="align-middle" data-feather="square"></i>
//             <span className="align-middle">Vòng tay</span>
//         </a>
//     </li>
//     <li className={`sidebar-item ${activeCategory === '5' ? 'active' : ''}`} onClick={() => handleCategoryClick('5')}>
//         <a className="sidebar-link">
//             <i className="align-middle" data-feather="square"></i>
//             <span className="align-middle">Kim cương</span>
//         </a>
//     </li>


// </ul> 
//                             )} */}
//                         </li>
//                         <li className="sidebar-item ">
//                             <a className="sidebar-link" href="/TaiKhoan">
//                                 <i className="align-middle" data-feather="square"></i>
//                                 <span className="align-middle">Tài khoản</span>
//                             </a>
//                         </li>
//                         <li className="sidebar-item">
//                             <a className="sidebar-link" href='/DonHang'>
//                                 <i className="align-middle" data-feather="square"></i>
//                                 <span className="align-middle">Đơn hàng</span>
//                             </a>
//                             <a className="sidebar-link">
//                                 <i className="align-middle"
//                                     data-feather="check-square">
//                                 </i>
//                                 <span className="align-middle">Chứng nhận sản phẩm</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//             <div className="main">
// {/* <nav className="navbar navbar-expand navbar-light navbar-bg">
//     <a className="sidebar-toggle js-sidebar-toggle">
//         <i className="hamburger align-self-center"></i>
//     </a>
//     <div className="navbar-collapse collapse">
//         <ul className="navbar-nav navbar-align">
//             <li className="nav-item dropdown">
//                 <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
//                     <div className="position-relative">
//                         <i className="align-middle pe-7s-bell" data-feather="bell"></i>
//                         <span className="indicator">4</span>
//                     </div>
//                 </a>
//                 <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
//                     <div className="dropdown-menu-header">
//                         4 New Notifications
//                     </div>
//                     <div className="list-group">
//                         <a href="#" className="list-group-item">
//                             <div className="row g-0 align-items-center">
//                                 <div className="col-2">
//                                     <i className="text-danger" data-feather="alert-circle"></i>
//                                 </div>
//                                 <div className="col-10">
//                                     <div className="text-dark">Update completed</div>
//                                     <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
//                                     <div className="text-muted small mt-1">30m ago</div>
//                                 </div>
//                             </div>
//                         </a>
//                         <a href="#" className="list-group-item">
//                             <div className="row g-0 align-items-center">
//                                 <div className="col-2">
//                                     <i className="text-warning" data-feather="bell"></i>
//                                 </div>
//                                 <div className="col-10">
//                                     <div className="text-dark">Lorem ipsum</div>
//                                     <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
//                                     <div className="text-muted small mt-1">2h ago</div>
//                                 </div>
//                             </div>
//                         </a>
//                         <a href="#" className="list-group-item">
//                             <div className="row g-0 align-items-center">
//                                 <div className="col-2">
//                                     <i className="text-primary" data-feather="home"></i>
//                                 </div>
//                                 <div className="col-10">
//                                     <div className="text-dark">Login from 192.186.1.8</div>
//                                     <div className="text-muted small mt-1">5h ago</div>
//                                 </div>
//                             </div>
//                         </a>
//                         <a href="#" className="list-group-item">
//                             <div className="row g-0 align-items-center">
//                                 <div className="col-2">
//                                     <i className="text-success" data-feather="user-plus"></i>
//                                 </div>
//                                 <div className="col-10">
//                                     <div className="text-dark">New connection</div>
//                                     <div className="text-muted small mt-1">Christina accepted your request.</div>
//                                     <div className="text-muted small mt-1">14h ago</div>
//                                 </div>
//                             </div>
//                         </a>
//                     </div>
//                     <div className="dropdown-menu-footer">
//                         <a href="#" className="text-muted">Show all notifications</a>
//                     </div>
//                 </div>
//             </li>
//             <li className="nav-item dropdown">
//                 <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
//                     <i className="align-middle" data-feather="settings"></i>
//                 </a>
//                 <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
//                     <img src="~/image/LeftNavBar/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
//                 </a>
//                 <div className="dropdown-menu dropdown-menu-end">
//                     <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1" data-feather="user"></i>Thông tin cá nhân</a>
//                     <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="pie-chart"></i> Phân tích</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="index.html"><i className="align-middle me-1" data-feather="settings"></i> Cài đặt và bảo mật</a>
//                     <a className="dropdown-item" href="#"><i className="align-middle me-1" data-feather="help-circle"></i> Trung tâm trợ giúp</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href='/'>Đăng xuất</a>
//                 </div>
//             </li>
//         </ul>
//     </div>
// </nav> */}
//                 <div className="content">
//                     <div className="container">
//                         {/* <input type="text" className="form-control" placeholder="Tìm kiếm..." aria-label="Search" value={searchTerm} onChange={handleSearchInputChange} />
//                         <button className="btn" type="button" style={{ marginLeft: '15px', marginRight: '10px' }}>
//                             <i className="align-middle" data-feather="search">Search</i>
//                         </button> */}
//                         <h2 className="text-center">Quản lí sản phẩm</h2>

//                         <button onClick={handleOpenAddProductButtonClick} className="btn-add-account">Thêm sản phẩm</button>

// {showAddProductOverlay && (
//     <div className="add-account-overlay">
//         <div className="add-account">
//             <h3>Thêm sản phẩm mới</h3>
//             <div>
//                 <label>ID Sản phẩm:</label>
//                 <input
//                     type="text"
//                     name="productId"
//                     value={newProduct.productId}
//                     onChange={handleAddProductInputChange}

//                 />
//             </div>
// <div>
//     <label>Hình ảnh:</label>
//     <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
// </div>
//             <div>
//                 <label>Thiết lập trang sức:</label>
//                 <select
//                     name="jewelrySettingID"
//                     value={newProduct.jewelrySettingID}
//                     onChange={handleAddProductInputChange}
//                 >
//                     <option value={1}>Classic, Gold</option>
//                     <option value={2}>Modern, Silver</option>
//                     <option value={3}>Luxury, Platinum</option>
//                     <option value={4}>Vintage, Bronze</option>
//                     <option value={5}>Elegant, White Gold</option>
//                 </select>
//             </div>
//             <div>
//                 <label>Tên sản phẩm:</label>
//                 <input
//                     type="text"
//                     name="productName"
//                     value={newProduct.productName}
//                     onChange={handleAddProductInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Mô tả sản phẩm:</label>
//                 <textarea
//                     name="description"
//                     value={newProduct.description}
//                     onChange={handleAddProductInputChange}
//                 ></textarea>
//             </div>
//             <div>
//                 <label>Số lượng:</label>
//                 <input
//                     type="number"
//                     name="stock"
//                     value={newProduct.stock}
//                     onChange={handleAddProductInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Giá gốc:</label>
//                 <input
//                     type="number"
//                     name="basePrice"
//                     value={newProduct.basePrice}
//                     onChange={handleAddProductInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Tỉ lệ áp giá:</label>
//                 <input
//                     type="number"
//                     name="markupRate"
//                     value={newProduct.markupRate}
//                     onChange={handleAddProductInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Trạng thái:</label>
//                 <select
//                     name="isActive"
//                     value={newProduct.isActive}
//                     onChange={handleAddProductInputChange}
//                 >
//                     <option value={true}>Active</option>
//                     <option value={false}>Inactive</option>
//                 </select>
//             </div>
//             <button onClick={() => handleAddProduct(categoryFilter)}>Thêm sản phẩm</button>
//             <button onClick={handleCloseAddProductButtonClick}>Đóng</button>
//         </div>
//     </div>
// )}
// <table className="">
//     <thead>
//         <tr>
//             <th>ID</th>
//             <th>Hình ảnh</th>
//             <th>Tên</th>
//             <th>Số lượng</th>
//             <th>Giá gốc</th>
//             {/* <th>Tỉ lệ áp giá</th> */}
//             <th>Trạng thái</th>
//             <th>Hành động</th>
//         </tr>
//     </thead>
//     <tbody>
//         {filteredProducts.map(product => (
//             <tr key={product.productId}>
//                 <td>{product.productId}</td>
//                 <td>
//                     <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px' }} />
//                 </td>
//                 {/* <td>
//                     {product.imageUrls.map((url, index) => (
//                         <img key={index} src={url} alt={`${product.productName} ${index + 1}`} style={{ width: '100px', height: '100px' }} />
//                     ))}
//                 </td> */}
//                 <td>{product.productName}</td>
//                 <td>{product.stock}</td>
//                 <td>{formatCurrency(product.basePrice)}đ</td> {/* Định dạng tiền tệ */}
//                 {/* <td>{product.markupRate}</td> */}
//                 <td>{product.isActive ? 'Còn hàng' : 'Hết hàng'}</td>
//                 <td>
//                     <button>Chỉnh sửa</button>
//                     <button onClick={() => handleDetailsClick(product)}>Chi tiết</button>
//                     <button onClick={() => handleDeleteProduct(product.productId)}>Xóa</button> {/* Delete button */}

//                 </td>
//                 {/* <td>{filteredProductCount}</td>
//                 <td>{totalPages}</td> */}
//             </tr>
//         ))}
//     </tbody>
// </table>

//                     </div>
// {
//     showDetailsModal && (
//         <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="detailsProductModalLabel" aria-hidden="true" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="detailsProductModalLabel">Chi tiết sản phẩm</h5>
//                         <button type="button" className="close" onClick={() => setShowDetailsModal(false)} aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         {currentProduct && (
//                             <div className="details-grid">
//                                 <div className="column">
//                                     <p><strong>ID:</strong> {currentProduct.productId}</p>
//                                     <p><strong>Hình ảnh:</strong> <img src={currentProduct.imageUrl} alt={currentProduct.productName} style={{ width: '50px', height: '50px' }} /></p>
//                                     <p><strong>Tên sản phẩm:</strong> {currentProduct.productName}</p>
//                                     <p><strong>Loại:</strong> {getCategoryName(currentProduct.categoryId)}</p>
//                                     <p><strong>Giá gốc sản phẩm:</strong> {formatCurrency(currentProduct.basePrice)}đ</p>
//                                     <p><strong>Tỉ lệ áp giá:</strong> {currentProduct.markupRate}</p>

//                                 </div>
//                                 <div className="column">
//                                     {/* Các chi tiết khác nếu có */}
//                                     <p><strong>Số lượng:</strong> {currentProduct.stock}</p>
//                                     <p><strong>Mô tả sản phẩm:</strong> {currentProduct.description}</p>
//                                     <p><strong>Tên thiết lập trang sức:</strong> {getJewelrySettingName(currentProduct.jewelrySettingID)}</p>
//                                     <p><strong>Vật liệu:</strong> {getJewelrySettingMaterial(currentProduct.jewelrySettingID)}</p>
//                                     <p><strong>Giá (vật liệu):</strong> {getJewelrySettingBasePrice(currentProduct.jewelrySettingID)}đ</p>
//                                     <p><strong>Mô tả thiết lập trang sức:</strong> {getJewelrySettingDescription(currentProduct.jewelrySettingID)}</p>

//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

//                     <style jsx>{`
//     .sidebar-nav {
//         position: relative;
//         background-color: transparent;

//     }

//     .sidebar-item {
//         position: relative;
//     }

//     .dropdown-menu {
//             left: 30px;
//         max-width: 200px;
//         margin: 0px 0px;
//         padding: 0px 0px;
//     }

//     .sidebar-item.active .dropdown-menu {
//         display: block;
//     }
//     .sidebar-nav:hover{
//         background-color: transparent;
//     }

//     .dropdown-item {
//         padding: 12px 16px;
//         cursor: pointer;
//     }
// `}</style>

// <ReactPaginate
//     previousLabel={"Trước"}
//     nextLabel={"Sau"}
//     breakLabel={"..."}
//     pageCount={totalPages}
//     pageRangeDisplayed={5}
//     onPageChange={handlePageClick}
//     containerClassName={"pagination"}
//     subContainerClassName={"pages pagination"}
//     activeClassName={"active"}

//     pageClassName="page-item"
//     pageLinkClassName="page-link"
//     previousClassName="page-item"
//     previousLinkClassName="page-link"
//     nextClassName="page-item"
//     nextLinkClassName="page-link"
//     breakClassName="page-item"
//     breakLinkClassName="page-link"
// />



//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SanPham;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '../../UserContext';
// import { useNavigate, Link } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
// import { getDiamondImageUrls, getJewelryImageUrls } from '../../FirebaseImage/firebaseHelper';
// import ReactPaginate from 'react-paginate';
// import { imageDb } from '../../FirebaseImage/Config';
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// const formatCurrency = (value) => {
//     return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '');
// };
// const getCategoryName = (categoryId) => {
//     switch (categoryId) {
//         case 1:
//             return 'Nhẫn';
//         case 2:
//             return 'Dây chuyền';
//         case 3:
//             return 'Mặt dây chuyền';
//         case 4:
//             return 'Vòng tay';
//         default:
//             return 'Unknown';
//     }
// };

// const SanPham = () => {
//     const { user: currentUser, logout: userLogout } = useUser();
//     const [errorMessage, setErrorMessage] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const [products, setProducts] = useState([]);
//     const [productJewelries, setProductJewelries] = useState([]);
//     const [productJewelrySettings, setProductJewelrySettings] = useState([]);
//     const [productCategories, setProductCategories] = useState([]);
//     const [productDiamonds, setProductDiamonds] = useState([]);

//     const [activeCategory, setActiveCategory] = useState('');
//     const [categoryFilter, setCategoryFilter] = useState('Tất cả');

//     const [currentPage, setCurrentPage] = useState(0);
//     const productsPerPage = 6;

//     const [searchTerm, setSearchTerm] = useState(''); // State for search term

//     // State for managing the display of add product form
//     const [showAddProductForm, setShowAddProductForm] = useState(false);
//     const [newProductType, setNewProductType] = useState(''); // 'Jewelry' or 'Diamond'

//     const [newProductJewelry, setNewProductJewelry] = useState({
//         productId: '',
//         productName: '',
//         productType: 'Jewelry',
//         description: '',
//         stock: 0,
//         jewelrySettingID: 1,
//         categoryId: 1,
//         basePrice: 0,
//         size: 0,
//         imageUrls: [],
//         imageFiles: []
//     });

//     const [newProductDiamond, setNewProductDiamond] = useState({
//         productId: '',
//         productName: '',
//         productType: '',
//         description: '',
//         stock: 0,
//         diamondCategoryId: 5,
//         diameterMM: 0,
//         carat: 0,
//         color: '',
//         clarity: '',
//         cut: '',
//         basePrice: 0,
//         imageUrls: [],
//         imageFiles: []
//     });
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//     const [editProductJewelry, setEditProductJewelry] = useState({
//         productId: '',
//         productName: '',
//         productType: 'Jewelry',
//         description: '',
//         stock: 0,
//         jewelrySettingID: 1,
//         categoryId: 1,
//         basePrice: 0,
//         size: 0,
//         imageUrls: [],
//         imageFiles: []
//     });
//     const [editProductDiamond, setEditProductDiamond] = useState({
//         productId: '',
//         productName: '',
//         productType: '',
//         description: '',
//         stock: 0,
//         diamondCategoryId: 5,
//         diameterMM: 0,
//         carat: 0,
//         color: '',
//         clarity: '',
//         cut: '',
//         basePrice: 0,
//         imageUrls: [],
//         imageFiles: []
//     });
//     const fetchProductData = async (categoryId = '', page = 1) => {
//         if (!currentUser) {
//             console.log("User not logged in. Redirecting to login.");
//             return;
//         }

//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const decodedToken = jwtDecode(token);
//             const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

//             if (userRole !== 'Admin') {
//                 console.log("User is not an admin. Redirecting to home.");
//                 navigate('/');
//                 return;
//             }

//             setLoading(true);
//             const headers = sendToken(); // Get headers with Authorization token
//             // get all Jewelry Product
//             const productJewelriesResponse = await axios.get('https://localhost:7101/api/Jewelry/GetAllJewelry', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Product Jewelries:", productJewelriesResponse.data);
//             // get all diamond
//             const productDiamondsResponse = await axios.get('https://localhost:7101/api/Diamonds/GetAllDiamond', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Product Diamonds:", productDiamondsResponse.data);
//             // get all product
//             const productResponse = await axios.get('https://localhost:7101/api/products/GetAllProduct', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Products:", productResponse.data)
//             // Create a map of productId to categoryId
//             const productJewelryMap = productJewelriesResponse.data.reduce((map, jewelry) => {
//                 map[jewelry.productID] = jewelry.categoryId;
//                 return map;
//             }, {});
//             const productDiamondMap = productDiamondsResponse.data.reduce((map, diamond) => {
//                 map[diamond.productID] = diamond.diameterMM;
//                 return map;
//             }, {});

//             const formattedProducts = await Promise.all(productResponse.data.map(async (product) => {
//                 const categoryId = productJewelryMap[product.productId] || null;
//                 const diameterMM = productDiamondMap[product.productId] || null;
//                 let image1Url = "default_image_url.png";

//                 if (product.productType === 'Jewelry') {
//                     const jewelryImageUrls = await getJewelryImageUrls(product.productId, categoryId);
//                     image1Url = jewelryImageUrls.image1Url;
//                 } else if (product.productType === 'Diamond') {
//                     const diamondImageUrls = await getDiamondImageUrls(product.productId, 5, diameterMM);
//                     image1Url = diamondImageUrls.image1Url;

//                 }

//                 return {
//                     productId: product.productId,
//                     productName: product.productName,
//                     description: product.description,
//                     stock: product.stock,
//                     markupPrice: product.markupPrice,
//                     markupRate: product.markupRate,
//                     productType: product.productType,
//                     isActive: product.isActive,
//                     categoryId: categoryId,
//                     diamondCategoryId: 5,
//                     imageUrl: image1Url || "default_image_url.png" // Use default image if not found
//                 };
//             }));
//             // get all category
//             const productCategoriesResponse = await axios.get('https://localhost:7101/api/Category/GetAllCategory', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Product Categories:", productCategoriesResponse.data);
//             // get all jewelry setting
//             const productJewelrySettingsResponse = await axios.get('https://localhost:7101/api/JewelrySetting/All', {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             console.log("All Product Jewelry Settings:", productJewelrySettingsResponse.data);
//             const filteredProducts = categoryId
//                 ? categoryId === '5'
//                     ? formattedProducts.filter(product => product.productType === 'Diamond')
//                     : formattedProducts.filter(product => product.categoryId && product.categoryId.toString() === categoryId)
//                 : formattedProducts;

//             setProducts(filteredProducts);
//             setProductJewelries(productJewelriesResponse.data);
//             setProductCategories(productCategoriesResponse.data);
//             setProductJewelrySettings(productJewelrySettingsResponse.data);
//             setProductDiamonds(productDiamondsResponse.data)
//         } catch (error) {
//             console.error('Error fetching user data:', error);
//             if (error.response && error.response.status === 401) {
//                 console.log('Token expired or invalid. Redirecting to login.');
//                 userLogout();
//             } else {
//                 setErrorMessage('Error fetching user data.');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchProductData(categoryFilter, currentPage + 1);
//     }, [currentUser, userLogout, navigate, categoryFilter, currentPage]);

//     const handleCategoryClick = (category) => {
//         setActiveCategory(category);
//         setCategoryFilter(category);
//         setCurrentPage(0); // Reset to the first page when category changes
//     };
//     const handlePageClick = (event) => {
//         setCurrentPage(event.selected);
//     };
//     const handleAddProductClick = (productType) => {
//         setNewProductType(productType);
//         setIsAddModalOpen(true); // Open the add product modal
//     };

//     const handleNewJewelryChange = (e) => {
//         const { name, value } = e.target;
//         setNewProductJewelry({ ...newProductJewelry, [name]: value });
//     };

//     const handleNewDiamondChange = (e) => {
//         const { name, value } = e.target;
//         setNewProductDiamond({ ...newProductDiamond, [name]: value });
//     };
//     const handleEditJewelryChange = (e) => {
//         const { name, value } = e.target;
//         setEditProductJewelry({ ...editProductJewelry, [name]: value });
//     };
//     const handleEditDiamondChange = (e) => {
//         const { name, value } = e.target;
//         setEditProductDiamond({ ...editProductDiamond, [name]: value });
//     };
//     const handleSearchInputChange = (e) => {
//         setSearchTerm(e.target.value);
//     };
//     const addNewJewelryProduct = async () => {

//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const headers = sendToken();
//             await axios.post('https://localhost:7101/api/Jewelry/AddJewelry', newProductJewelry, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });
//             setShowAddProductForm(false);
//             setIsAddModalOpen(false); // Close the add product modal
//             fetchProductData(categoryFilter, currentPage + 1);
//         } catch (error) {
//             console.error('Error adding new jewelry product:', error);
//             setErrorMessage('Error adding new jewelry product.');
//         }
//     };

//     const addNewDiamondProduct = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const headers = sendToken();
//             const imageUrls = await Promise.all(newProductDiamond.imageFiles.map(async (file, index) => {
//                 const imgRef = ref(imageDb, `files/5/KC-${newProductDiamond.diameterMM}/new/${file.name}`);
//                 await uploadBytes(imgRef, file);
//                 return await getDownloadURL(imgRef);
//             }));

//             const diamondPayload = {
//                 productID: newProductDiamond.productId, // Assuming productId is not auto-generated
//                 productName: newProductDiamond.productName,
//                 stock: newProductDiamond.stock,
//                 carat: newProductDiamond.carat,
//                 clarity: newProductDiamond.clarity,
//                 cut: newProductDiamond.cut,
//                 diameterMM: newProductDiamond.diameterMM,
//                 color: newProductDiamond.color,
//                 description: newProductDiamond.description,
//                 basePrice: newProductDiamond.basePrice,
//                 isActive: true // Make sure this is the correct value
//             };

//             // Create Diamond
//             const diamondResponse = await axios.post('https://localhost:7101/api/Diamonds/CreateDiamond', diamondPayload, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const newDiamond = diamondResponse.data; // Assuming the API returns the created diamond with its new ID

//             const productPayload = {
//                 productId: newDiamond.productID, // Use the ID from the created diamond
//                 productName: newDiamond.productName,
//                 description: newDiamond.description,
//                 stock: newDiamond.stock,
//                 markupPrice: newDiamond.basePrice * newProductDiamond.markupRate, // Ensure this calculation is correct
//                 markupRate: newProductDiamond.markupRate,
//                 productType: 'Diamond',
//                 isActive: true,
//                 imageUrls: imageUrls // Add image URLs
//             };

//             // Create Product
//             await axios.post('https://localhost:7101/api/products/CreateProduct', productPayload, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             setIsAddModalOpen(false); // Close the add product modal
//             fetchProductData(categoryFilter, currentPage + 1);
//             setNewProductDiamond({
//                 productId: '',
//                 productName: '',
//                 productType: 'Diamond',
//                 description: '',
//                 stock: 0,
//                 diamondCategoryId: 5,
//                 diameterMM: 0,
//                 carat: 0,
//                 color: '',
//                 clarity: '',
//                 cut: '',
//                 basePrice: 0,
//                 imageUrls: [],
//                 imageFiles: []
//             });
//         } catch (error) {
//             console.error('Error adding new diamond product:', error);
//             setErrorMessage('Error adding new diamond product.');
//         }
//     };
//     // Function to handle editing product
//     const handleEditProductClick = (product) => {
//         if (product.categoryId === 5) {
//             setEditProductDiamond({
//                 productId: product.productId,
//                 productName: product.productName,
//                 productType: 'Diamond',
//                 description: product.description,
//                 stock: product.stock,
//                 diamondCategoryId: 5,
//                 diameterMM: getDiameterMMDiamond(product.productId),
//                 carat: getCaratDiamond(product.productId),
//                 color: getColorDiamond(product.productId),
//                 clarity: getClarityDiamond(product.productId),
//                 cut: getCutDiamond(product.productId),
//                 basePrice: getBasePriceDiamond(product.productId),
//                 imageUrls: product.imageUrls
//             });
//         } else {
//             setEditProductJewelry({
//                 productId: product.productId,
//                 productName: product.productName,
//                 productType: 'Jewelry',
//                 description: product.description,
//                 stock: product.stock,
//                 jewelrySettingID: 1,
//                 categoryId: product.categoryId,
//                 basePrice: getBasePriceJewelry(product.productId),
//                 size: 0,
//                 imageUrls: product.imageUrls
//             });
//         }
//         setIsEditModalOpen(true);
//     };

//     // Function to update diamond product
//     const updateDiamondProduct = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const headers = sendToken();
//             const diamondPayload = {
//                 productID: editProductDiamond.productId,
//                 productName: editProductDiamond.productName,
//                 stock: editProductDiamond.stock,
//                 carat: editProductDiamond.carat,
//                 clarity: editProductDiamond.clarity,
//                 cut: editProductDiamond.cut,
//                 diameterMM: editProductDiamond.diameterMM,
//                 color: editProductDiamond.color,
//                 description: editProductDiamond.description,
//                 basePrice: editProductDiamond.basePrice,
//                 isActive: true
//             };

//             // Update Diamond
//             await axios.put('https://localhost:7101/api/Diamonds/UpdateDiamond', diamondPayload, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const productPayload = {
//                 productId: editProductDiamond.productId,
//                 productName: editProductDiamond.productName,
//                 description: editProductDiamond.description,
//                 stock: editProductDiamond.stock,
//                 markupPrice: editProductDiamond.basePrice * editProductDiamond.markupRate,
//                 markupRate: editProductDiamond.markupRate,
//                 productType: 'Diamond',
//                 isActive: true,
//                 imageUrls: editProductDiamond.imageUrls
//             };

//             // Update Product
//             await axios.put('https://localhost:7101/api/products/UpdateProduct', productPayload, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             setIsEditModalOpen(false); // Close the edit product modal
//             fetchProductData(categoryFilter, currentPage + 1);
//         } catch (error) {
//             console.error('Error updating diamond product:', error);
//             setErrorMessage('Error updating diamond product.');
//         }
//     };

//     // Function to update jewelry product
//     const updateJewelryProduct = async (e) => {
//         e.preventDefault();
//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const headers = sendToken();
//             const jewelryPayload = {
//                 productID: editProductJewelry.productId,
//                 productName: editProductJewelry.productName,
//                 stock: editProductJewelry.stock,
//                 description: editProductJewelry.description,
//                 basePrice: editProductJewelry.basePrice,
//                 jewelrySettingID: editProductJewelry.jewelrySettingID,
//                 categoryId: editProductJewelry.categoryId,
//                 size: editProductJewelry.size,
//                 isActive: true
//             };

//             // Update Jewelry
//             await axios.put('https://localhost:7101/api/Jewelry/UpdateJewelry', jewelryPayload, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             const productPayload = {
//                 productId: editProductJewelry.productId,
//                 productName: editProductJewelry.productName,
//                 description: editProductJewelry.description,
//                 stock: editProductJewelry.stock,
//                 markupPrice: editProductJewelry.basePrice * editProductJewelry.markupRate,
//                 markupRate: editProductJewelry.markupRate,
//                 productType: 'Jewelry',
//                 isActive: true,
//                 imageUrls: editProductJewelry.imageUrls
//             };

//             // Update Product
//             await axios.put('https://localhost:7101/api/products/UpdateProduct', productPayload, {
//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             setIsEditModalOpen(false); // Close the edit product modal
//             fetchProductData(categoryFilter, currentPage + 1);
//         } catch (error) {
//             console.error('Error updating jewelry product:', error);
//             setErrorMessage('Error updating jewelry product.');
//         }
//     };

//     // Delete product
//     const deleteProduct = async (productId) => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             console.log("Token not found or expired. Logging out.");
//             userLogout();
//             return;
//         }

//         try {
//             const headers = sendToken();
//             await axios.delete(`https://localhost:7101/api/products/DeleteProduct?id=${productId}`, {

//                 headers: {
//                     ...headers,
//                     'Content-Type': 'application/json'
//                 }
//             });

//             // Refresh the product list after deletion
//             fetchProductData(categoryFilter, currentPage + 1);
//         } catch (error) {
//             console.error('Error deleting product:', error);
//             setErrorMessage('Error deleting product.');
//         }
//     };

//     const getBasePriceJewelry = (productId) => {
//         const product = productJewelries.find(product => product.productID === productId);
//         return product ? product.basePrice : 'N/A';
//     };
//     const getMaterialJewelry = (productId) => {
//         const product = productJewelries.find(product => product.productID === productId);
//         if (product) {
//             switch (product.jewelrySettingID) {
//                 case 1:
//                     return 'Vàng';
//                 case 2:
//                     return 'Bạc';
//                 case 3:
//                     return 'Vàng trắng';
//                 default:
//                     return 'N/A';
//             }
//         }
//         return 'N/A';
//     };
//     const getDiameterMMDiamond = (productId) => {
//         const product = productDiamonds.find(product => product.productID === productId);
//         return product ? product.diameterMM : 'N/A';
//     };
//     const getCaratDiamond = (productId) => {
//         const product = productDiamonds.find(product => product.productID === productId);
//         return product ? product.carat : 'N/A';
//     };
//     const getClarityDiamond = (productId) => {
//         const product = productDiamonds.find(product => product.productID === productId);
//         return product ? product.clarity : 'N/A';
//     };
//     const getColorDiamond = (productId) => {
//         const product = productDiamonds.find(product => product.productID === productId);
//         return product ? product.color : 'N/A';
//     };
//     const getCutDiamond = (productId) => {
//         const product = productDiamonds.find(product => product.productID === productId);
//         return product ? product.cut : 'N/A';
//     };
//     const getBasePriceDiamond = (productId) => {
//         const product = productDiamonds.find(product => product.productID === productId);
//         return product ? product.basePrice : 'N/A';
//     };
//     // const displayProducts = products.slice(
//     //     currentPage * productsPerPage,
//     //     (currentPage + 1) * productsPerPage
//     // );
//     const displayProducts = products.filter(product => product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
//         .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
//     const openModal = (product) => {
//         setSelectedProduct(product);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setSelectedProduct(null);
//         setIsModalOpen(false);
//     };

//     const closeAddModal = () => {
//         setShowAddProductForm(false);
//         setIsAddModalOpen(false);
//     };
//     const closeEditModal = () => {
//         setIsEditModalOpen(false);
//     };
//     return (
//         <div className="wrapper">
//             <nav id="sidebar" className="sidebar js-sidebar">
//                 <div className="sidebar-content js-simplebar">
//                     <a className="sidebar-brand" href='/'>
//                         <div className="logo-dashboard">
//                             <Link to="/">
//                                 <img src="assets/img/logo/logo.png" alt="brand logo" />
//                             </Link>
//                         </div>
//                     </a>
//                     <ul className="sidebar-nav">
//                         <li className="sidebar-header">Trang chủ</li>
//                         <li className="sidebar-item">
//                             <a className="sidebar-link nav-link" >
//                                 <i className="align-middle" data-feather="sliders"></i>
//                                 <span className="align-middle"><Link to="/Dashboard">Dashboard</Link></span>
//                             </a>
//                         </li>
//                         <li className="sidebar-header">Quản lý</li>
//                         <li className="sidebar-item active">
//                             <a className="sidebar-link" >
//                                 <i className="align-middle" data-feather="sliders"></i>
//                                 <span className="align-middle"><Link to="/SanPham">Sản phẩm</Link></span>
//                             </a>

//                             <ul className="sidebar-nav dropdown-menu">
//                                 <li className={`sidebar-item ${activeCategory === '1' ? 'active' : ''}`} onClick={() => handleCategoryClick('1')}>
//                                     <a className="sidebar-link">
//                                         <i className="align-middle" data-feather="square"></i>
//                                         <span className="align-middle">Nhẫn</span>
//                                     </a>
//                                 </li>
//                                 <li className={`sidebar-item ${activeCategory === '2' ? 'active' : ''}`} onClick={() => handleCategoryClick('2')}>
//                                     <a className="sidebar-link">
//                                         <i className="align-middle" data-feather="square"></i>
//                                         <span className="align-middle">Dây chuyền</span>
//                                     </a>
//                                 </li>
//                                 <li className={`sidebar-item ${activeCategory === '3' ? 'active' : ''}`} onClick={() => handleCategoryClick('3')}>
//                                     <a className="sidebar-link">
//                                         <i className="align-middle" data-feather="square"></i>
//                                         <span className="align-middle">Mặt dây chuyền</span>
//                                     </a>
//                                 </li>
//                                 <li className={`sidebar-item ${activeCategory === '4' ? 'active' : ''}`} onClick={() => handleCategoryClick('4')}>
//                                     <a className="sidebar-link">
//                                         <i className="align-middle" data-feather="square"></i>
//                                         <span className="align-middle">Vòng tay</span>
//                                     </a>
//                                 </li>
//                                 <li className={`sidebar-item ${activeCategory === '5' ? 'active' : ''}`} onClick={() => handleCategoryClick('5')}>
//                                     <a className="sidebar-link">
//                                         <i className="align-middle" data-feather="square"></i>
//                                         <span className="align-middle">Kim cương</span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="sidebar-item ">
//                             <a className="sidebar-link" >
//                                 <i className="align-middle" data-feather="square"></i>
//                                 <span className="align-middle"><Link to="/TaiKhoan">Tài khoản</Link></span>
//                             </a>
//                         </li>
//                         <li className="sidebar-item">
//                             <a className="sidebar-link" >
//                                 <i className="align-middle" data-feather="square"></i>
//                                 <span className="align-middle"><Link to="/DonHang">Đơn hàng</Link></span>
//                             </a>
//                         </li>
//                         <li className="sidebar-item">
//                             <a className="sidebar-link">
//                                 <i className="align-middle"
//                                     data-feather="check-square">
//                                 </i>
//                                 <span className="align-middle">Chứng nhận sản phẩm</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//             <div className="main">

//                 <div className="content">
//                     <div className="container">
//                         <h2 className="text-center admin-page-title">Quản lí sản phẩm</h2>
//                         <button className='admin-page-add-button' onClick={() => handleAddProductClick(activeCategory === '5' ? 'Diamond' : 'Jewelry')}>Thêm sản phẩm</button>

//                         <button className="btn" type="button" style={{ marginLeft: '15px', marginRight: '10px' }}>
//                             <input type="text" className="form-control admin-page-search-button" placeholder="Tìm kiếm..." aria-label="Search" value={searchTerm} onChange={handleSearchInputChange} />
//                         </button>

//                         <table className="admin-page-table">
//                             <thead>
//                                 <tr className='admin-page-column-table'>
//                                     <th>ID</th>
//                                     <th>Hình ảnh</th>
//                                     <th>Tên</th>
//                                     <th>Mô tả</th>
//                                     <th>Số lượng</th>
//                                     <th>Giá</th>
//                                     <th>Hành động</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {displayProducts.map(product => (
//                                     <tr key={product.productId}>
//                                         <td>{product.productId}</td>
//                                         <td>
//                                             <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px', backgroundColor: 'transparent' }} />
//                                         </td>
//                                         <td>{product.productName}</td>
//                                         <td>{product.description}</td>
//                                         <td>{product.stock}</td>
//                                         <td>{formatCurrency(product.markupPrice)}đ</td> {/* Định dạng tiền tệ */}
//                                         <td>
//                                             <button className='admin-page-view-button' onClick={() => openModal(product)}>Xem</button>
//                                             <button className='admin-page-edit-button' onClick={() => handleEditProductClick(product)}>Sửa</button>
//                                             <button className='admin-page-delete-button' onClick={() => deleteProduct(product.productId)}>Xóa</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <ReactPaginate
//                             previousLabel={"Trước"}
//                             nextLabel={"Sau"}
//                             breakLabel={"..."}
//                             pageCount={Math.ceil(products.length / productsPerPage)}
//                             pageRangeDisplayed={5}
//                             onPageChange={handlePageClick}
//                             containerClassName={"pagination"}
//                             subContainerClassName={"pages pagination"}
//                             activeClassName={"active"}
//                             pageClassName="page-item"
//                             pageLinkClassName="page-link"
//                             previousClassName="page-item"
//                             previousLinkClassName="page-link"
//                             nextClassName="page-item"
//                             nextLinkClassName="page-link"
//                             breakClassName="page-item"
//                             breakLinkClassName="page-link"
//                         />
//                         {isModalOpen && selectedProduct && (
//                             <div className="admin-page-details-overlay">
//                                 <div className="admin-page-details-modal">
//                                     <button className="admin-page-details-close-button" onClick={closeModal}>&times;</button>
//                                     <div className="admin-page-details-modal-content">
//                                         <div className="admin-page-details-image-column">
//                                             <img src={selectedProduct.imageUrl} alt="Product Image" className="admin-page-details-large-image" />
//                                         </div>
//                                         {categoryFilter === '5' ? (
//                                             <div className="admin-page-details-info-column">
//                                                 <p><strong>ID:</strong> {selectedProduct.productId}</p>
//                                                 <p><strong>Tên sản phẩm:</strong> {selectedProduct.productName}</p>
//                                                 <p><strong>Loại:</strong> {selectedProduct.productType + ` - Kim cương ` + getDiameterMMDiamond(selectedProduct.productId) + ` ly`}</p>
//                                                 <p><strong>Số lượng:</strong> {selectedProduct.stock}</p>
//                                                 <p><strong>Carat:</strong> {getCaratDiamond(selectedProduct.productId)}</p>
//                                                 <p><strong>Cắt:</strong> {getCutDiamond(selectedProduct.productId)}</p>
//                                                 <p><strong>Độ tinh khiết:</strong> {getClarityDiamond(selectedProduct.productId)}</p>
//                                                 <p><strong>Màu sắc:</strong> {getColorDiamond(selectedProduct.productId)}</p>
//                                                 <p><strong>Giá gốc sản phẩm:</strong> {formatCurrency(getBasePriceDiamond(selectedProduct.productId))}đ</p>
//                                                 <p><strong>Tỉ lệ áp giá:</strong> {selectedProduct.markupRate}</p>
//                                                 <p><strong>Giá bán:</strong> {formatCurrency(selectedProduct.markupPrice)}đ</p>
//                                             </div>
//                                         ) : (
//                                             <div className="admin-page-details-info-column">
//                                                 <p><strong>ID:</strong> {selectedProduct.productId}</p>
//                                                 <p><strong>Tên sản phẩm:</strong> {selectedProduct.productName}</p>
//                                                 <p><strong>Loại:</strong> {selectedProduct.productType + ` - ` + getCategoryName(selectedProduct.categoryId)}</p>
//                                                 <p><strong>Giá gốc sản phẩm:</strong> {formatCurrency(getBasePriceJewelry(selectedProduct.productId))}đ</p>
//                                                 <p><strong>Tỉ lệ áp giá:</strong> {selectedProduct.markupRate}</p>
//                                                 <p><strong>Số lượng:</strong> {selectedProduct.stock}</p>
//                                                 <p><strong>Chất liệu:</strong> {getMaterialJewelry(selectedProduct.productId) || 'N/A'}</p>
//                                                 <p><strong>Mô tả sản phẩm:</strong> {selectedProduct.description}</p>
//                                                 <p><strong>Giá bán:</strong> {formatCurrency(selectedProduct.markupPrice)}đ</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {isAddModalOpen && (
//                             <div className="admin-page-add-product-overlay">
//                                 <div className="admin-page-add-product-modal">
//                                     <button className="admin-page-add-product-close-button" onClick={closeAddModal}>&times;</button>
//                                     <div className="admin-page-add-product-modal-content">
//                                         <div className="admin-page-add-product-image-column">
//                                             <img src="https://via.placeholder.com/600x400" alt="Product Image" className="admin-page-add-product-large-image" />
//                                         </div>
//                                         <div className="admin-page-add-product-info-column">
//                                             {newProductType === 'Jewelry' ? (
//                                                 <div>
//                                                     <h2>Thêm sản phẩm Jewelry</h2>
//                                                     <form onSubmit={addNewJewelryProduct}>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="productName">Tên sản phẩm</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="productName"
//                                                                 name="productName"
//                                                                 placeholder="Nhập tên sản phẩm"
//                                                                 value={newProductJewelry.productName}
//                                                                 onChange={handleNewJewelryChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="categoryId">Loại</label>
//                                                             <select id="categoryId" name="categoryId" value={newProductJewelry.categoryId} onChange={handleNewJewelryChange}>
//                                                                 <option value="1">Trang sức</option>
//                                                                 <option value="2">Đồng hồ</option>
//                                                                 <option value="3">Phụ kiện</option>
//                                                             </select>
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="basePrice">Giá gốc sản phẩm</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="basePrice"
//                                                                 name="basePrice"
//                                                                 placeholder="Nhập giá gốc sản phẩm"
//                                                                 value={newProductJewelry.basePrice}
//                                                                 onChange={handleNewJewelryChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="markupRate">Tỉ lệ áp giá</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="markupRate"
//                                                                 name="markupRate"
//                                                                 placeholder="Nhập tỉ lệ áp giá"
//                                                                 value={newProductJewelry.markupRate}
//                                                                 onChange={handleNewJewelryChange}
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="stock">Số lượng</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="stock"
//                                                                 name="stock"
//                                                                 placeholder="Nhập số lượng sản phẩm"
//                                                                 value={newProductJewelry.stock}
//                                                                 onChange={handleNewJewelryChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="size">Kích thước</label>
//                                                             <div className="admin-page-add-product-calendar-dropdown">
//                                                                 <select id="size" name="size" value={newProductJewelry.size} onChange={handleNewJewelryChange} readOnly>
//                                                                     <option value="">Chọn kích thước</option>
//                                                                 </select>
//                                                                 <div className="admin-page-add-product-calendar-dropdown-content">
//                                                                     {[...Array(21).keys()].slice(10).map(i => (
//                                                                         <div key={i} data-value={i}>{i}</div>
//                                                                     ))}
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="description">Mô tả sản phẩm</label>
//                                                             <textarea
//                                                                 id="description"
//                                                                 name="description"
//                                                                 rows="4"
//                                                                 placeholder="Nhập mô tả sản phẩm"
//                                                                 value={newProductJewelry.description}
//                                                                 onChange={handleNewJewelryChange}
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <input type="submit" value="Thêm Mới" />
//                                                         </div>
//                                                     </form>
//                                                 </div>
//                                             ) : (
//                                                 <div>
//                                                     <h2>Thêm sản phẩm Diamond</h2>
//                                                     <form onSubmit={addNewDiamondProduct}>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="productId">ID</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="productId"
//                                                                 name="productId"
//                                                                 placeholder="Nhập ID sản phẩm"
//                                                                 value={newProductDiamond.productId}
//                                                                 onChange={handleNewDiamondChange}

//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="productName">Tên sản phẩm</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="productName"
//                                                                 name="productName"
//                                                                 placeholder="Nhập tên sản phẩm"
//                                                                 value={newProductDiamond.productName}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="description">Mô tả sản phẩm</label>
//                                                             <textarea
//                                                                 id="description"
//                                                                 name="description"
//                                                                 rows="4"
//                                                                 placeholder="Nhập mô tả sản phẩm"
//                                                                 value={newProductDiamond.description}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="stock">Số lượng</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="stock"
//                                                                 name="stock"
//                                                                 placeholder="Nhập số lượng sản phẩm"
//                                                                 value={newProductDiamond.stock}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="diameterMM">Đường kính (mm)</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="diameterMM"
//                                                                 name="diameterMM"
//                                                                 placeholder="Đường kính (mm)"
//                                                                 value={newProductDiamond.diameterMM}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="carat">Carat</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="carat"
//                                                                 name="carat"
//                                                                 placeholder="Carat"
//                                                                 value={newProductDiamond.carat}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="color">Màu sắc</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="color"
//                                                                 name="color"
//                                                                 placeholder="Màu sắc"
//                                                                 value={newProductDiamond.color}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="clarity">Độ tinh khiết</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="clarity"
//                                                                 name="clarity"
//                                                                 placeholder="Độ tinh khiết"
//                                                                 value={newProductDiamond.clarity}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="cut">Cắt</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="cut"
//                                                                 name="cut"
//                                                                 placeholder="Cắt"
//                                                                 value={newProductDiamond.cut}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="basePrice">Giá gốc sản phẩm</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="basePrice"
//                                                                 name="basePrice"
//                                                                 placeholder="Nhập giá gốc sản phẩm"
//                                                                 value={newProductDiamond.basePrice}
//                                                                 onChange={handleNewDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <label htmlFor="imageFiles">Hình ảnh sản phẩm</label>
//                                                             <input
//                                                                 type="file"
//                                                                 id="imageFiles"
//                                                                 name="imageFiles"
//                                                                 multiple
//                                                                 onChange={(e) => setNewProductDiamond({
//                                                                     ...newProductDiamond,
//                                                                     imageFiles: Array.from(e.target.files)
//                                                                 })}
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-add-product-form-group">
//                                                             <input type="submit" value="Thêm Mới" />
//                                                         </div>
//                                                     </form>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                         {isEditModalOpen && (
//                             <div className="admin-page-edit-product-overlay">
//                                 <div className="admin-page-edit-product-modal">
//                                     <button className="admin-page-edit-product-close-button" onClick={closeEditModal}>&times;</button>
//                                     <div className="admin-page-edit-product-modal-content">
//                                         <div className="admin-page-edit-product-image-column">
//                                             <img src={editProductDiamond.imageUrls[0]} alt="Product Image" className="admin-page-edit-product-large-image" />
//                                         </div>
//                                         <div className="admin-page-edit-product-info-column">
//                                             {editProductDiamond.productType === 'Diamond' ? (
//                                                 <div>
//                                                     <h2>Sửa sản phẩm Diamond</h2>
//                                                     <form onSubmit={updateDiamondProduct}>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="productId">ID</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="productId"
//                                                                 name="productId"
//                                                                 placeholder="Nhập ID sản phẩm"
//                                                                 value={editProductDiamond.productId}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 readOnly
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="productName">Tên sản phẩm</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="productName"
//                                                                 name="productName"
//                                                                 placeholder="Nhập tên sản phẩm"
//                                                                 value={editProductDiamond.productName}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="description">Mô tả sản phẩm</label>
//                                                             <textarea
//                                                                 id="description"
//                                                                 name="description"
//                                                                 rows="4"
//                                                                 placeholder="Nhập mô tả sản phẩm"
//                                                                 value={editProductDiamond.description}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="stock">Số lượng</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="stock"
//                                                                 name="stock"
//                                                                 placeholder="Nhập số lượng sản phẩm"
//                                                                 value={editProductDiamond.stock}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="diameterMM">Đường kính (mm)</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="diameterMM"
//                                                                 name="diameterMM"
//                                                                 placeholder="Đường kính (mm)"
//                                                                 value={editProductDiamond.diameterMM}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="carat">Carat</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="carat"
//                                                                 name="carat"
//                                                                 placeholder="Carat"
//                                                                 value={editProductDiamond.carat}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="color">Màu sắc</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="color"
//                                                                 name="color"
//                                                                 placeholder="Màu sắc"
//                                                                 value={editProductDiamond.color}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="clarity">Độ tinh khiết</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="clarity"
//                                                                 name="clarity"
//                                                                 placeholder="Độ tinh khiết"
//                                                                 value={editProductDiamond.clarity}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="cut">Cắt</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="cut"
//                                                                 name="cut"
//                                                                 placeholder="Cắt"
//                                                                 value={editProductDiamond.cut}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="basePrice">Giá gốc sản phẩm</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="basePrice"
//                                                                 name="basePrice"
//                                                                 placeholder="Nhập giá gốc sản phẩm"
//                                                                 value={editProductDiamond.basePrice}
//                                                                 onChange={handleEditDiamondChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <input type="submit" value="Cập nhật" />
//                                                         </div>
//                                                     </form>
//                                                 </div>
//                                             ) : (
//                                                 <div>
//                                                     <h2>Sửa sản phẩm Jewelry</h2>
//                                                     <form onSubmit={updateJewelryProduct}>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="productId">ID</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="productId"
//                                                                 name="productId"
//                                                                 placeholder="Nhập ID sản phẩm"
//                                                                 value={editProductJewelry.productId}
//                                                                 onChange={handleEditJewelryChange}
//                                                                 readOnly
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="productName">Tên sản phẩm</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="productName"
//                                                                 name="productName"
//                                                                 placeholder="Nhập tên sản phẩm"
//                                                                 value={editProductJewelry.productName}
//                                                                 onChange={handleEditJewelryChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="categoryId">Loại</label>
//                                                             <select id="categoryId" name="categoryId" value={editProductJewelry.categoryId} onChange={handleEditJewelryChange}>
//                                                                 <option value="1">Nhẫn</option>
//                                                                 <option value="2">Dây chuyền</option>
//                                                                 <option value="3">Mặt dây chuyền</option>
//                                                                 <option value="4">Vòng tay</option>
//                                                             </select>
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="basePrice">Giá gốc sản phẩm</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="basePrice"
//                                                                 name="basePrice"
//                                                                 placeholder="Nhập giá gốc sản phẩm"
//                                                                 value={editProductJewelry.basePrice}
//                                                                 onChange={handleEditJewelryChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="markupRate">Tỉ lệ áp giá</label>
//                                                             <input
//                                                                 type="text"
//                                                                 id="markupRate"
//                                                                 name="markupRate"
//                                                                 placeholder="Nhập tỉ lệ áp giá"
//                                                                 value={editProductJewelry.markupRate}
//                                                                 onChange={handleEditJewelryChange}
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="stock">Số lượng</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="stock"
//                                                                 name="stock"
//                                                                 placeholder="Nhập số lượng sản phẩm"
//                                                                 value={editProductJewelry.stock}
//                                                                 onChange={handleEditJewelryChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="size">Kích thước</label>
//                                                             <input
//                                                                 type="number"
//                                                                 id="size"
//                                                                 name="size"
//                                                                 placeholder="Nhập kích thước sản phẩm"
//                                                                 value={editProductJewelry.size}
//                                                                 onChange={handleEditJewelryChange}
//                                                                 required
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <label htmlFor="description">Mô tả sản phẩm</label>
//                                                             <textarea
//                                                                 id="description"
//                                                                 name="description"
//                                                                 rows="4"
//                                                                 placeholder="Nhập mô tả sản phẩm"
//                                                                 value={editProductJewelry.description}
//                                                                 onChange={handleEditJewelryChange}
//                                                             />
//                                                         </div>
//                                                         <div className="admin-page-edit-product-form-group">
//                                                             <input type="submit" value="Cập nhật" />
//                                                         </div>
//                                                     </form>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default SanPham;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { getDiamondImageUrls, getJewelryImageUrls } from '../../FirebaseImage/firebaseHelper';
import ReactPaginate from 'react-paginate';
import { imageDb } from '../../FirebaseImage/Config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '');
};
const getCategoryName = (categoryId) => {
    switch (categoryId) {
        case 1:
            return 'Nhẫn';
        case 2:
            return 'Dây chuyền';
        case 3:
            return 'Mặt dây chuyền';
        case 4:
            return 'Vòng tay';
        default:
            return 'Unknown';
    }
};

const SanPham = () => {
    const { user: currentUser, logout: userLogout } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');

    const [products, setProducts] = useState([]);
    const [productJewelries, setProductJewelries] = useState([]);
    const [productJewelrySettings, setProductJewelrySettings] = useState([]);
    const [productCategories, setProductCategories] = useState([]);
    const [productDiamonds, setProductDiamonds] = useState([]);

    const [activeCategory, setActiveCategory] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('Tất cả');

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;

    const [searchTerm, setSearchTerm] = useState(''); // State for search term

    // State for managing the display of add product form
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [newProductType, setNewProductType] = useState(''); // 'Jewelry' or 'Diamond'

    const [newProductJewelry, setNewProductJewelry] = useState({
        productId: '',
        productName: '',
        productType: 'Jewelry',
        description: '',
        stock: 0,
        jewelrySettingID: 1,
        categoryId: 1,
        basePrice: 0,
        size: 0,
        imageUrls: [],
        imageFiles: []
    });

    const [newProductDiamond, setNewProductDiamond] = useState({
        productId: '',
        productName: '',
        productType: '',
        description: '',
        stock: 0,
        diamondCategoryId: 5,
        diameterMM: 0,
        carat: 0,
        color: '',
        clarity: '',
        cut: '',
        basePrice: 0,
        imageUrls: [],
        imageFiles: []
    });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editProductJewelry, setEditProductJewelry] = useState({
        productId: '',
        productName: '',
        productType: 'Jewelry',
        description: '',
        stock: 0,
        jewelrySettingID: 1,
        categoryId: 1,
        basePrice: 0,
        size: 0,
        imageUrls: [],
        imageFiles: []
    });
    const [editProductDiamond, setEditProductDiamond] = useState({
        productId: '',
        productName: '',
        productType: '',
        description: '',
        stock: 0,
        diamondCategoryId: 5,
        diameterMM: 0,
        carat: 0,
        color: '',
        clarity: '',
        cut: '',
        basePrice: 0,
        imageUrls: [],
        imageFiles: []
    });

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
            const Userresponse = await axios.get(`https://localhost:7101/api/User/GetUserProfile?id=${decodedToken.sid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setDisplayName(Userresponse.data.fullName || '');
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
            const productJewelryMapStock = productJewelriesResponse.data.reduce((map, diamond) => {
                map[diamond.productID] = diamond.diameterMM;
                return map;
            }, {});
            const productDiamondMapStock = productDiamondsResponse.data.reduce((map, diamond) => {
                map[diamond.productID] = diamond.quantity;
                return map;
            }, {});

            const formattedProducts = await Promise.all(productResponse.data.map(async (product) => {
                const categoryId = productJewelryMap[product.productId] || null;
                const diameterMM = productDiamondMap[product.productId] || null;
                let quantity = 0;
                let image1Url = "default_image_url.png";

                if (product.productType === 'Jewelry') {
                    const jewelryImageUrls = await getJewelryImageUrls(product.productId, categoryId);
                    image1Url = jewelryImageUrls.image1Url;
                } else if (product.productType === 'Diamond') {
                    const diamondImageUrls = await getDiamondImageUrls(product.productId, 5, diameterMM);
                    image1Url = diamondImageUrls.image1Url;
                    quantity = productDiamondMapStock[product.productId] || null;

                }

                return {
                    productId: product.productId,
                    productName: product.productName,
                    description: product.description,
                    stock: quantity,
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
    const handleAddProductClick = (productType) => {
        setNewProductType(productType);
        setIsAddModalOpen(true); // Open the add product modal
    };

    const handleNewJewelryChange = (e) => {
        const { name, value } = e.target;
        setNewProductJewelry({ ...newProductJewelry, [name]: value });
    };

    const handleNewDiamondChange = (e) => {
        const { name, value } = e.target;
        setNewProductDiamond({ ...newProductDiamond, [name]: value });
    };
    const handleEditJewelryChange = (e) => {
        const { name, value } = e.target;
        setEditProductJewelry({ ...editProductJewelry, [name]: value });
    };
    const handleEditDiamondChange = (e) => {
        const { name, value } = e.target;
        setEditProductDiamond({ ...editProductDiamond, [name]: value });
    };
    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const addNewJewelryProduct = async () => {

        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const headers = sendToken();
            await axios.post('https://localhost:7101/api/Jewelry/AddJewelry', newProductJewelry, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            setShowAddProductForm(false);
            setIsAddModalOpen(false); // Close the add product modal
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error adding new jewelry product:', error);
            setErrorMessage('Error adding new jewelry product.');
        }
    };

    const addNewDiamondProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const headers = sendToken();
            const imageUrls = await Promise.all(newProductDiamond.imageFiles.map(async (file, index) => {
                const imgRef = ref(imageDb, `files/5/KC-${newProductDiamond.diameterMM}/new/${file.name}`);
                await uploadBytes(imgRef, file);
                return await getDownloadURL(imgRef);
            }));

            const diamondPayload = {
                productID: newProductDiamond.productId, // Assuming productId is not auto-generated
                productName: newProductDiamond.productName,
                stock: newProductDiamond.stock,
                carat: newProductDiamond.carat,
                clarity: newProductDiamond.clarity,
                cut: newProductDiamond.cut,
                diameterMM: newProductDiamond.diameterMM,
                color: newProductDiamond.color,
                description: newProductDiamond.description,
                basePrice: newProductDiamond.basePrice,
                isActive: true // Make sure this is the correct value
            };

            // Create Diamond
            const diamondResponse = await axios.post('https://localhost:7101/api/Diamonds/CreateDiamond', diamondPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            const newDiamond = diamondResponse.data; // Assuming the API returns the created diamond with its new ID

            const productPayload = {
                productId: newDiamond.productID, // Use the ID from the created diamond
                productName: newDiamond.productName,
                description: newDiamond.description,
                stock: newDiamond.stock,
                markupPrice: newDiamond.basePrice * newProductDiamond.markupRate, // Ensure this calculation is correct
                markupRate: newProductDiamond.markupRate,
                productType: 'Diamond',
                isActive: true,
                imageUrls: imageUrls // Add image URLs
            };

            // Create Product
            await axios.post('https://localhost:7101/api/products/CreateProduct', productPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            setIsAddModalOpen(false); // Close the add product modal
            fetchProductData(categoryFilter, currentPage + 1);
            setNewProductDiamond({
                productId: '',
                productName: '',
                productType: 'Diamond',
                description: '',
                stock: 0,
                diamondCategoryId: 5,
                diameterMM: 0,
                carat: 0,
                color: '',
                clarity: '',
                cut: '',
                basePrice: 0,
                imageUrls: [],
                imageFiles: []
            });
        } catch (error) {
            console.error('Error adding new diamond product:', error);
            setErrorMessage('Error adding new diamond product.');
        }
    };

    // Function to handle editing product
    const handleEditProductClick = (product) => {
        if (product.productType === 'Diamond') {
            setEditProductDiamond({
                productId: product.productId,
                productName: product.productName,
                productType: 'Diamond',
                description: product.description,
                stock: product.stock,
                diamondCategoryId: 5,
                diameterMM: getDiameterMMDiamond(product.productId),
                carat: getCaratDiamond(product.productId),
                color: getColorDiamond(product.productId),
                clarity: getClarityDiamond(product.productId),
                cut: getCutDiamond(product.productId),
                basePrice: getBasePriceDiamond(product.productId),
                imageUrls: [product.imageUrl]
            });
        } else {
            setEditProductJewelry({
                productId: product.productId,
                productName: product.productName,
                productType: 'Jewelry',
                description: product.description,
                stock: product.stock,
                jewelrySettingID: 1,
                categoryId: product.categoryId, // Sử dụng categoryFilter để lấy category hiện tại
                basePrice: getBasePriceJewelry(product.productId),
                size: 0,
                imageUrls: [product.imageUrl]
            });
        }
        setIsEditModalOpen(true);
    };


    // Function to update diamond product
    const updateDiamondProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const headers = sendToken();
            const diamondPayload = {
                productID: editProductDiamond.productId,
                productName: editProductDiamond.productName,
                stock: editProductDiamond.stock,
                carat: editProductDiamond.carat,
                clarity: editProductDiamond.clarity,
                cut: editProductDiamond.cut,
                diameterMM: editProductDiamond.diameterMM,
                color: editProductDiamond.color,
                description: editProductDiamond.description,
                basePrice: editProductDiamond.basePrice,
                isActive: true
            };

            // Update Diamond
            await axios.put('https://localhost:7101/api/Diamonds/UpdateDiamond', diamondPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            const productPayload = {
                productId: editProductDiamond.productId,
                productName: editProductDiamond.productName,
                description: editProductDiamond.description,
                stock: editProductDiamond.stock,
                markupPrice: editProductDiamond.basePrice * editProductDiamond.markupRate,
                markupRate: editProductDiamond.markupRate,
                productType: 'Diamond',
                isActive: true,
                imageUrls: editProductDiamond.imageUrls
            };

            // Update Product
            await axios.put(`https://localhost:7101/api/products/UpdateProduct?id=${editProductDiamond.productId}`, productPayload, {

                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            setIsEditModalOpen(false); // Close the edit product modal
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error updating diamond product:', error);
            setErrorMessage('Error updating diamond product.');
        }
    };

    // Function to update jewelry product

    const updateJewelryProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const headers = sendToken();
            const jewelryPayload = {
                productID: editProductJewelry.productId,
                productName: editProductJewelry.productName,
                stock: editProductJewelry.stock,
                description: editProductJewelry.description,
                basePrice: editProductJewelry.basePrice,
                jewelrySettingID: editProductJewelry.jewelrySettingID,
                categoryId: editProductJewelry.categoryId,
                size: editProductJewelry.size,
                isActive: true
            };

            // Update Jewelry
            await axios.put('https://localhost:7101/api/Jewelry/UpdateJewelry', jewelryPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            const productPayload = {
                productId: editProductJewelry.productId,
                productName: editProductJewelry.productName,
                description: editProductJewelry.description,
                stock: editProductJewelry.stock,
                markupPrice: editProductJewelry.basePrice * editProductJewelry.markupRate,
                markupRate: editProductJewelry.markupRate,
                productType: 'Jewelry',
                isActive: true,
                imageUrls: editProductJewelry.imageUrls
            };

            // Update Product
            await axios.put(`https://localhost:7101/api/products/UpdateProduct?id=${editProductJewelry.productId}`, productPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            setIsEditModalOpen(false); // Close the edit product modal
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error updating jewelry product:', error);
            setErrorMessage('Error updating jewelry product.');
        }
    };

    // Delete product
    const deleteProduct = async (productId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const headers = sendToken();
            await axios.delete(`https://localhost:7101/api/products/DeleteProduct?id=${productId}`, {

                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            // Refresh the product list after deletion
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error deleting product:', error);
            setErrorMessage('Error deleting product.');
        }
    };
    const abc = productJewelries
    const getBasePriceJewelry = (productId) => {
        const product = productJewelries.find(product => product.productID === productId);
        return product ? product.basePrice : 'N/A';
    };
    const getMaterialJewelry = (productId) => {
        const product = productJewelries.find(product => product.productID === productId);
        if (product) {
            switch (product.jewelrySettingID) {
                case 1:
                    return 'Vàng';
                case 2:
                    return 'Bạc';
                case 3:
                    return 'Vàng trắng';
                default:
                    return 'N/A';
            }
        }
        return 'N/A';
    };
    const getDiameterMMDiamond = (productId) => {
        const product = productDiamonds.find(product => product.productID === productId);
        return product ? product.diameterMM : 'N/A';
    };
    const getCaratDiamond = (productId) => {
        const product = productDiamonds.find(product => product.productID === productId);
        return product ? product.carat : 'N/A';
    };
    const getClarityDiamond = (productId) => {
        const product = productDiamonds.find(product => product.productID === productId);
        return product ? product.clarity : 'N/A';
    };
    const getColorDiamond = (productId) => {
        const product = productDiamonds.find(product => product.productID === productId);
        return product ? product.color : 'N/A';
    };
    const getCutDiamond = (productId) => {
        const product = productDiamonds.find(product => product.productID === productId);
        return product ? product.cut : 'N/A';
    };
    const getBasePriceDiamond = (productId) => {
        const product = productDiamonds.find(product => product.productID === productId);
        return product ? product.basePrice : 'N/A';
    };
    // const displayProducts = products.slice(
    //     currentPage * productsPerPage,
    //     (currentPage + 1) * productsPerPage
    // );
    const displayProducts = products.filter(product => product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    const closeAddModal = () => {
        setShowAddProductForm(false);
        setIsAddModalOpen(false);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
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

                        <h2 className="text-center admin-page-title">Quản lí sản phẩm</h2>

                        <div className="admin-page-controls">
                            <button className='admin-page-add-button' onClick={() => handleAddProductClick(activeCategory === '5' ? 'Diamond' : 'Jewelry')}>Thêm sản phẩm</button>

                            <div className="admin-page-search-button-container">
                                <input
                                    type="text"
                                    className="form-control admin-page-search-button"
                                    placeholder="Tìm kiếm..."
                                    aria-label="Search"
                                    value={searchTerm}
                                    onChange={handleSearchInputChange}
                                />
                            </div>
                        </div>

                        <table className="admin-page-table">
                            <thead>
                                <tr className='admin-page-column-table'>
                                    <th>ID</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Mô tả</th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayProducts.map(product => (
                                    <tr key={product.productId}>
                                        <td>{product.productId}</td>
                                        <td>
                                            <img src={product.imageUrl} alt={product.productName} style={{ width: '50px', height: '50px', backgroundColor: 'transparent' }} />
                                        </td>
                                        <td>{product.productName}</td>
                                        <td>{product.description}</td>
                                        <td>{product.stock}</td>
                                        <td>{formatCurrency(product.markupPrice)}đ</td> {/* Định dạng tiền tệ */}
                                        <td>
                                            <div className="admin-page-buttons">
                                                <button className='admin-page-view-button' onClick={() => openModal(product)}>Xem</button>
                                                <button className='admin-page-edit-button' onClick={() => handleEditProductClick(product)}>Sửa</button>
                                                <button className='admin-page-delete-button' onClick={() => deleteProduct(product.productId)}>Xóa</button>
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
                        {isModalOpen && selectedProduct && (
                            <div className="admin-page-details-overlay">
                                <div className="admin-page-details-modal">
                                    <button className="admin-page-details-close-button" onClick={closeModal}>&times;</button>
                                    <div className="admin-page-details-modal-content">
                                        <div className="admin-page-details-image-column">
                                            <img src={selectedProduct.imageUrl} alt="Product Image" className="admin-page-details-large-image" />
                                        </div>
                                        {categoryFilter === '5' ? (
                                            <div className="admin-page-details-info-column">
                                                <p><strong>ID:</strong> {selectedProduct.productId}</p>
                                                <p><strong>Tên sản phẩm:</strong> {selectedProduct.productName}</p>
                                                <p><strong>Loại:</strong> {selectedProduct.productType + ` - Kim cương ` + getDiameterMMDiamond(selectedProduct.productId) + ` ly`}</p>
                                                <p><strong>Số lượng:</strong> {selectedProduct.stock}</p>
                                                <p><strong>Carat:</strong> {getCaratDiamond(selectedProduct.productId)}</p>
                                                <p><strong>Cắt:</strong> {getCutDiamond(selectedProduct.productId)}</p>
                                                <p><strong>Độ tinh khiết:</strong> {getClarityDiamond(selectedProduct.productId)}</p>
                                                <p><strong>Màu sắc:</strong> {getColorDiamond(selectedProduct.productId)}</p>
                                                <p><strong>Giá gốc sản phẩm:</strong> {formatCurrency(getBasePriceDiamond(selectedProduct.productId))}đ</p>
                                                <p><strong>Tỉ lệ áp giá:</strong> {selectedProduct.markupRate}</p>
                                                <p><strong>Giá bán:</strong> {formatCurrency(selectedProduct.markupPrice)}đ</p>
                                            </div>
                                        ) : (
                                            <div className="admin-page-details-info-column">
                                                <p><strong>ID:</strong> {selectedProduct.productId}</p>
                                                <p><strong>Tên sản phẩm:</strong> {selectedProduct.productName}</p>
                                                <p><strong>Loại:</strong> {selectedProduct.productType + ` - ` + getCategoryName(selectedProduct.categoryId)}</p>
                                                <p><strong>Giá gốc sản phẩm:</strong> {formatCurrency(getBasePriceJewelry(selectedProduct.productId))}đ</p>
                                                <p><strong>Tỉ lệ áp giá:</strong> {selectedProduct.markupRate}</p>
                                                <p><strong>Số lượng:</strong> {selectedProduct.stock}</p>
                                                <p><strong>Chất liệu:</strong> {getMaterialJewelry(selectedProduct.productId) || 'N/A'}</p>
                                                <p><strong>Mô tả sản phẩm:</strong> {selectedProduct.description}</p>
                                                <p><strong>Giá bán:</strong> {formatCurrency(selectedProduct.markupPrice)}đ</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {isAddModalOpen && (
                            <div className="admin-page-add-product-overlay">
                                <div className="admin-page-add-product-modal">
                                    <button className="admin-page-add-product-close-button" onClick={closeAddModal}>&times;</button>
                                    <div className="admin-page-add-product-modal-content">
                                        <div className="admin-page-add-product-info-column">
                                            {newProductType === 'Jewelry' ? (
                                                <div>
                                                    <form onSubmit={addNewJewelryProduct}>
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="productName">Tên sản phẩm</label>
                                                            <input
                                                                type="text"
                                                                id="productName"
                                                                name="productName"
                                                                placeholder="Nhập tên sản phẩm"
                                                                value={newProductJewelry.productName}
                                                                onChange={handleNewJewelryChange}
                                                                required
                                                            />
                                                        </div>
                                                        {/* <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="categoryId">Loại</label>
                                                            <select id="categoryId" name="categoryId" value={newProductJewelry.categoryId} onChange={handleNewJewelryChange}>
                                                                <option value="1">Nhẫn</option>
                                                                <option value="2">Dây chuyền</option>
                                                                <option value="3">Mặt dây chuyền</option>
                                                                <option value="4">Vòng tay</option>
                                                            </select>
                                                        </div> */}
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                                            <input
                                                                type="number"
                                                                id="basePrice"
                                                                name="basePrice"
                                                                placeholder="Nhập giá gốc sản phẩm"
                                                                value={newProductJewelry.basePrice}
                                                                onChange={handleNewJewelryChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="markupRate">Tỉ lệ áp giá</label>
                                                            <input
                                                                type="text"
                                                                id="markupRate"
                                                                name="markupRate"
                                                                placeholder="Nhập tỉ lệ áp giá"
                                                                value={newProductJewelry.markupRate}
                                                                onChange={handleNewJewelryChange}
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="stock">Số lượng</label>
                                                            <input
                                                                type="number"
                                                                id="stock"
                                                                name="stock"
                                                                placeholder="Nhập số lượng sản phẩm"
                                                                value={newProductJewelry.stock}
                                                                onChange={handleNewJewelryChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="size">Kích thước</label>
                                                            <input
                                                                type="number"
                                                                id="size"
                                                                name="size"
                                                                placeholder="Nhập kích thước sản phẩm"
                                                                value={newProductJewelry.size}
                                                                onChange={handleNewJewelryChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="description">Mô tả sản phẩm</label>
                                                            <textarea
                                                                id="description"
                                                                name="description"
                                                                rows="4"
                                                                placeholder="Nhập mô tả sản phẩm"
                                                                value={newProductJewelry.description}
                                                                onChange={handleNewJewelryChange}
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group">
                                                            <input type="submit" value="Thêm Mới" />
                                                        </div>
                                                    </form>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Thêm sản phẩm Diamond</h2>
                                                    <form onSubmit={addNewDiamondProduct}>
                                                        <div className="admin-page-add-product-form-group-row">
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="productId">ID</label>
                                                                <input
                                                                    type="text"
                                                                    id="productId"
                                                                    name="productId"
                                                                    placeholder="Nhập ID sản phẩm"
                                                                    value={newProductDiamond.productId}
                                                                    onChange={handleNewDiamondChange}
                                                                />
                                                            </div>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="diameterMM">Đường kính (mm)</label>
                                                                <input
                                                                    type="number"
                                                                    id="diameterMM"
                                                                    name="diameterMM"
                                                                    placeholder="Đường kính (mm)"
                                                                    value={newProductDiamond.diameterMM}
                                                                    onChange={handleNewDiamondChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="productName">Tên sản phẩm</label>
                                                            <input
                                                                type="text"
                                                                id="productName"
                                                                name="productName"
                                                                placeholder="Nhập tên sản phẩm"
                                                                value={newProductDiamond.productName}
                                                                onChange={handleNewDiamondChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group-row">
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="stock">Số lượng</label>
                                                                <input
                                                                    type="number"
                                                                    id="stock"
                                                                    name="stock"
                                                                    placeholder="Nhập số lượng sản phẩm"
                                                                    value={newProductDiamond.stock}
                                                                    onChange={handleNewDiamondChange}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                                                <input
                                                                    type="number"
                                                                    id="basePrice"
                                                                    name="basePrice"
                                                                    placeholder="Nhập giá gốc sản phẩm"
                                                                    value={newProductDiamond.basePrice}
                                                                    onChange={handleNewDiamondChange}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="admin-page-add-product-form-group-row">
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="carat">Carat</label>
                                                                <input
                                                                    type="number"
                                                                    id="carat"
                                                                    name="carat"
                                                                    placeholder="Carat"
                                                                    value={newProductDiamond.carat}
                                                                    onChange={handleNewDiamondChange}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="color">Màu sắc</label>
                                                                <select
                                                                    id="color"
                                                                    name="color"
                                                                    value={newProductDiamond.color}
                                                                    onChange={handleNewDiamondChange}
                                                                    required
                                                                >
                                                                    <option value="D">D</option>
                                                                    <option value="E">E</option>
                                                                    <option value="F">F</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="admin-page-add-product-form-group-row">
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="clarity">Độ tinh khiết</label>
                                                                <select
                                                                    id="clarity"
                                                                    name="clarity"
                                                                    value={newProductDiamond.clarity}
                                                                    onChange={handleNewDiamondChange}
                                                                    required
                                                                >
                                                                    <option value="IF">IF</option>
                                                                    <option value="VVS1">VVS1</option>
                                                                    <option value="VVS2">VVS2</option>
                                                                    <option value="VS1">VS1</option>
                                                                    <option value="VS2">VS2</option>
                                                                </select>
                                                            </div>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="cut">Cắt</label>
                                                                <select
                                                                    id="cut"
                                                                    name="cut"
                                                                    value={newProductDiamond.cut}
                                                                    onChange={handleNewDiamondChange}
                                                                    required
                                                                >
                                                                    <option value="EX">EX</option>
                                                                    <option value="VG">VG</option>
                                                                    <option value="G">G</option>
                                                                </select>
                                                            </div>
                                                        </div>


                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="imageFiles">Hình ảnh sản phẩm</label>
                                                            <input
                                                                type="file"
                                                                id="imageFiles"
                                                                name="imageFiles"
                                                                multiple
                                                                onChange={(e) => setNewProductDiamond({
                                                                    ...newProductDiamond,
                                                                    imageFiles: Array.from(e.target.files)
                                                                })}
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="description">Mô tả sản phẩm</label>
                                                            <textarea
                                                                id="description"
                                                                name="description"
                                                                rows="4"
                                                                placeholder="Nhập mô tả sản phẩm"
                                                                value={newProductDiamond.description}
                                                                onChange={handleNewDiamondChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="admin-page-add-product-form-group">
                                                            <input type="submit" value="Thêm Mới" />
                                                        </div>
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                        {isEditModalOpen && (
                            <div className="admin-page-edit-overlay">
                                <div className="admin-page-edit-modal">
                                    <button className="admin-page-edit-close-button" onClick={closeEditModal}>&times;</button>
                                    <div className="admin-page-edit-modal-content">
                                        <div className="admin-page-edit-image-column">
                                            <img src={editProductDiamond.productType === 'Diamond' ? editProductDiamond.imageUrls[0] : editProductJewelry.imageUrls[0]} alt="Product Image" className="admin-page-edit-large-image" />
                                        </div>
                                        <div className="admin-page-edit-info-column">
                                            {editProductDiamond.productType === 'Diamond' ? (
                                                <form onSubmit={updateDiamondProduct}>
                                                    <div className="admin-page-edit-product-form-group-row">
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="productId">ID</label>
                                                            <input
                                                                type="text"
                                                                id="productId"
                                                                name="productId"
                                                                placeholder="Nhập ID sản phẩm"
                                                                value={editProductDiamond.productId}
                                                                onChange={handleEditDiamondChange}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label>Đường kính (mm)</label>
                                                            <input
                                                                type="number"
                                                                value={editProductDiamond.diameterMM}
                                                                readonly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="productName">Tên sản phẩm</label>
                                                        <input
                                                            type="text"
                                                            id="productName"
                                                            name="productName"
                                                            placeholder="Nhập tên sản phẩm"
                                                            value={editProductDiamond.productName}
                                                            onChange={handleEditDiamondChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group-row">
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="stock">Số lượng</label>
                                                            <input
                                                                type="number"
                                                                id="stock"
                                                                name="stock"
                                                                placeholder="Nhập số lượng sản phẩm"
                                                                value={editProductDiamond.stock}
                                                                onChange={handleEditDiamondChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                                            <input
                                                                type="number"
                                                                id="basePrice"
                                                                name="basePrice"
                                                                placeholder="Nhập giá gốc sản phẩm"
                                                                value={editProductDiamond.basePrice}
                                                                onChange={handleEditDiamondChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
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
                                                                required
                                                            />
                                                        </div>
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="color">Màu sắc</label>
                                                            <select
                                                                id="color"
                                                                name="color"
                                                                value={editProductDiamond.color}
                                                                onChange={handleEditDiamondChange}
                                                                required
                                                            >
                                                                <option value="D">D</option>
                                                                <option value="E">E</option>
                                                                <option value="F">F</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="admin-page-edit-product-form-group-row">
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="clarity">Độ tinh khiết</label>
                                                            <select
                                                                id="clarity"
                                                                name="clarity"
                                                                value={editProductDiamond.clarity}
                                                                onChange={handleEditDiamondChange}
                                                                required
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
                                                                required
                                                            >
                                                                <option value="EX">EX</option>
                                                                <option value="VG">VG</option>
                                                                <option value="G">G</option>
                                                            </select>
                                                        </div>

                                                    </div>

                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="description">Mô tả sản phẩm</label>
                                                        <textarea
                                                            id="description"
                                                            name="description"
                                                            rows="4"
                                                            placeholder="Nhập mô tả sản phẩm"
                                                            value={editProductDiamond.description}
                                                            onChange={handleEditDiamondChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <input type="submit" value="Cập nhật" />
                                                    </div>
                                                </form>
                                            ) : (
                                                <form onSubmit={updateJewelryProduct}>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="productId">ID </label>
                                                        <input
                                                            type="text"
                                                            id="productId"
                                                            name="productId"
                                                            placeholder="Nhập ID sản phẩm"
                                                            value={editProductJewelry.productId}
                                                            onChange={handleEditJewelryChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="productName">Tên sản phẩm</label>
                                                        <input
                                                            type="text"
                                                            id="productName"
                                                            name="productName"
                                                            placeholder="Nhập tên sản phẩm"
                                                            value={editProductJewelry.productName}
                                                            onChange={handleEditJewelryChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label>Loại</label>
                                                        <input
                                                            type="text"
                                                            value={`Jewelry - ${getCategoryName(editProductJewelry.categoryId)}`}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group-row">
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                                            <legend>
                                                                <input
                                                                    type="number"
                                                                    id="basePrice"
                                                                    name="basePrice"
                                                                    placeholder="Nhập giá gốc sản phẩm"
                                                                    value={editProductJewelry.basePrice}
                                                                    onChange={handleEditJewelryChange}
                                                                    required
                                                                />
                                                            </legend>
                                                        </div>
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="markupRate">Tỉ lệ áp giá</label>
                                                            <legend>
                                                                <input
                                                                    type="text"
                                                                    id="markupRate"
                                                                    name="markupRate"
                                                                    placeholder="Nhập tỉ lệ áp giá"
                                                                    value={editProductJewelry.markupRate}
                                                                    onChange={handleEditJewelryChange}
                                                                />
                                                            </legend>
                                                        </div>
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group-row">
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="stock">Số lượng</label>
                                                            <legend>
                                                                <input
                                                                    type="number"
                                                                    id="stock"
                                                                    name="stock"
                                                                    placeholder="Nhập số lượng sản phẩm"
                                                                    value={editProductJewelry.stock}
                                                                    onChange={handleEditJewelryChange}
                                                                    required
                                                                />
                                                            </legend>
                                                        </div>
                                                        <div className="admin-page-edit-product-form-group">
                                                            <label htmlFor="size">Kích thước</label>
                                                            <legend>
                                                                <input
                                                                    type="number"
                                                                    id="size"
                                                                    name="size"
                                                                    placeholder="Nhập kích thước sản phẩm"
                                                                    value={editProductJewelry.size}
                                                                    onChange={handleEditJewelryChange}
                                                                    required
                                                                />
                                                            </legend>
                                                        </div>
                                                    </div>

                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="description">Mô tả sản phẩm</label>
                                                        <textarea
                                                            id="description"
                                                            name="description"
                                                            rows="4"
                                                            placeholder="Nhập mô tả sản phẩm"
                                                            value={editProductJewelry.description}
                                                            onChange={handleEditJewelryChange}
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group-submit-button">
                                                        <div className="admin-page-edit-product-form-group">
                                                            <input type="submit" value="Cập nhật" />
                                                        </div>
                                                    </div>

                                                </form>
                                            )}
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
export default SanPham;
