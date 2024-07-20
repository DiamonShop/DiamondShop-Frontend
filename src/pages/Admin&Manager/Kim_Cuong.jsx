import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { getDiamondImageUrls } from '../../FirebaseImage/firebaseHelper';
import ReactPaginate from 'react-paginate';
import { imageDb } from '../../FirebaseImage/Config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { logout } from '../../api/LogoutAPI';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Input, InputNumber, Select, Popconfirm } from 'antd';
import { UploadProps, InputNumberProps } from 'antd';
const { Option } = Select;
const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', '');
};

const KimCuong = () => {
    const { user: currentUser, logout: userLogout } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');

    const [products, setProducts] = useState([]);
    const [productDiamonds, setProductDiamonds] = useState([]);

    const [activeCategory, setActiveCategory] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('Tất cả');

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;

    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const [statusFilter, setStatusFilter] = useState('Tất cả');


    // State for managing the display of add product form
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [newProductDiamond, setNewProductDiamond] = useState({
        productId: '',
        productName: '',
        productType: '',
        description: '',
        markupRate: 0,
        markupPrice: 0,
        quantity: 0, // Đảm bảo quantity được khởi tạo đúng
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

    const [editProductDiamond, setEditProductDiamond] = useState({
        diamondID: 0,
        productId: '',
        productName: '',
        productType: '',
        description: '',
        markupRate: 0,
        markupPrice: 0,
        quantity: 0,
        diamondCategoryId: 5,
        diameterMM: 0,
        carat: 0,
        color: '',
        clarity: '',
        cut: '',
        basePrice: 0,
        isActive: true,
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
            setLoading(true);
            const headers = sendToken(); // Get headers with Authorization token
            const Userresponse = await axios.get(`https://localhost:7101/api/User/GetUserProfile?id=${decodedToken.sid}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setDisplayName(Userresponse.data.fullName || '');

            // get all diamond
            const productDiamondsResponse = await axios.get('https://localhost:7101/api/Diamonds/GetAllDiamond', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            console.log("All Product Diamonds:", productDiamondsResponse.data);

            const productDiamondMap = productDiamondsResponse.data.reduce((map, diamond) => {
                map[diamond.productID] = diamond.diameterMM;
                return map;
            }, {});
            const productDiamondMapQuantity = productDiamondsResponse.data.reduce((map, diamond) => {
                map[diamond.productID] = diamond.quantity;
                return map;
            }, {});

            const formattedProducts = await Promise.all(productDiamondsResponse.data.map(async (product) => {
                const diameterMM = productDiamondMap[product.productID] || null;
                const quantity = productDiamondMapQuantity[product.productID] || null;
                const diamondImageUrls = await getDiamondImageUrls(product.productID, 5, diameterMM);
                const image2Url = diamondImageUrls.image2Url;

                return {
                    productId: product.productID,
                    productName: product.productName,
                    description: product.description,
                    quantity: product.quantity,
                    markupPrice: product.markupPrice,
                    markupRate: product.markupRate,
                    productType: product.productType,
                    isActive: product.isActive,
                    diameterMM: diameterMM,
                    diamondCategoryId: 5,
                    imageUrl: image2Url // Sử dụng URL hình ảnh đã được cập nhật
                };
            }));

            const filteredProducts = categoryId
                ? formattedProducts.filter(product => product.diameterMM && product.diameterMM.toString() === categoryId)
                : formattedProducts;

            setProducts(filteredProducts);
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

    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setCategoryFilter(category);
        setCurrentPage(0); // Reset to the first page when category changes
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const handleAddProductClick = () => {
        setShowAddProductForm(true);
        setIsAddModalOpen(true); // Open the add product modal
        const diameterMM = parseFloat(categoryFilter); // Chuyển đổi categoryFilter thành số
        generateProductId(diameterMM).then(newId => {
            setNewProductDiamond({
                ...newProductDiamond,
                productId: newId,
                diameterMM: diameterMM // Gán giá trị diameterMM vào newProductDiamond
            });
        });
    };

    const handleNewDiamondChange = (e) => {
        const { name, value } = e.target;
        setNewProductDiamond({ ...newProductDiamond, [name]: value });
    };

    const handleEditDiamondChange = (e) => {
        const { name, value } = e.target;
        setEditProductDiamond(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const generateProductId = async (diameterMM) => {
        try {
            const headers = sendToken();
            const response = await axios.get(`https://localhost:7101/api/Diamonds/GetDiamondCountByDiameter?diameterMM=${diameterMM}`, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            const count = response.data;
            const nextId = count + 1;
            return `KC-${diameterMM}-${nextId.toString().padStart(3, '0')}`;
        } catch (error) {
            console.error('Error generating product ID:', error);
            return null;
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
            const diamondPayload = {
                diamondID: 0,
                productID: newProductDiamond.productId,
                quantity: newProductDiamond.quantity,
                carat: newProductDiamond.carat,
                clarity: newProductDiamond.clarity,
                cut: newProductDiamond.cut,
                diameterMM: newProductDiamond.diameterMM,
                color: newProductDiamond.color,
                basePrice: newProductDiamond.basePrice,
                productName: newProductDiamond.productName,
                description: newProductDiamond.description,
                markupPrice: newProductDiamond.markupPrice,
                markupRate: newProductDiamond.markupRate,
                productType: 'Diamond',
                isActive: true,
                // imageUrls: imageUrls
            };

            console.log('Diamond Payload:', diamondPayload);
            // Create Diamond
            await axios.post('https://localhost:7101/api/Diamonds/CreateDiamond', diamondPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            message.success('Thêm sản phẩm kim cương thành công');
            setIsAddModalOpen(false);
            fetchProductData(categoryFilter, currentPage + 1);
            setNewProductDiamond({
                productId: '',
                productName: '',
                productType: '',
                description: '',
                markupRate: 0,
                markupPrice: 0,
                quantity: 0, // Đảm bảo quantity được khởi tạo đúng
                diamondCategoryId: 5,
                diameterMM: 0,
                carat: 0,
                color: '',
                clarity: '',
                cut: '',
                basePrice: 0,
                // imageUrls: [],
                // imageFiles: []
            })

        } catch (error) {
            console.error('Error adding new diamond product:', error);
            message.error('Lỗi thêm sản phẩm kim cương mới.');
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                if (error.response.data.errors) {
                    console.error('Validation errors:', error.response.data.errors);
                }
            }
            setErrorMessage('Error adding new diamond product.');
        }
    };
    const handleFileUpload = async (file) => {
        const imgRef = ref(imageDb, `files/5/KC-${newProductDiamond.diameterMM}/${newProductDiamond.productId}/${file.name}`);
        await uploadBytes(imgRef, file);
        return await getDownloadURL(imgRef);
    };

    const uploadProps = {
        name: 'file',
        customRequest: async ({ file, onSuccess, onError }) => {
            try {
                const downloadUrl = await handleFileUpload(file);
                setNewProductDiamond(prevState => ({
                    ...prevState,
                    imageUrls: [...prevState.imageUrls, downloadUrl]
                }));
                onSuccess("Ok");
                message.success(`Tải tệp ${file.name} thành công`);
            } catch (error) {
                onError(error);
                message.error(`Tải tệp ${file.name} thất bại.`);
            }
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
        }
    };

    const confirmDelete = (productId) => {
        deleteProduct(productId);
    };

    const cancelDelete = (e) => {
        message.error('Hủy bỏ xóa sản phẩm');
    };
    // Function to handle editing product
    const handleEditProductClick = (product) => {
        setEditProductDiamond({
            diamondID: getDiamondID(product.productId),
            productId: product.productId,
            productName: product.productName,
            productType: 'Diamond',
            description: product.description,
            quantity: product.quantity,
            markupRate: product.markupRate,
            markupPrice: product.markupPrice,
            diamondCategoryId: 5,
            diameterMM: getDiameterMMDiamond(product.productId),
            carat: getCaratDiamond(product.productId),
            color: getColorDiamond(product.productId),
            clarity: getClarityDiamond(product.productId),
            cut: getCutDiamond(product.productId),
            basePrice: getBasePriceDiamond(product.productId),
            isActive: product.isActive,
            imageUrls: [product.imageUrl]
        });

        setIsEditModalOpen(true);
    };
    useEffect(() => {
        const calculateMarkupPrice = () => {
            setEditProductDiamond(prevState => ({
                ...prevState,
                markupPrice: prevState.basePrice * prevState.markupRate
            }));
        };
        calculateMarkupPrice();
    }, [editProductDiamond.basePrice, editProductDiamond.markupRate]);
    useEffect(() => {
        const calculateMarkupPrice = () => {
            setNewProductDiamond(prevState => ({
                ...prevState,
                markupPrice: prevState.basePrice * prevState.markupRate
            }));
        };
        calculateMarkupPrice();
    }, [newProductDiamond.basePrice, newProductDiamond.markupRate]);
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
                diamondID: editProductDiamond.diamondID,
                productID: editProductDiamond.productId,
                productName: editProductDiamond.productName,
                description: editProductDiamond.description,
                markupRate: editProductDiamond.markupRate,
                markupPrice: editProductDiamond.markupPrice,
                quantity: editProductDiamond.quantity,
                carat: editProductDiamond.carat,
                clarity: editProductDiamond.clarity,
                cut: editProductDiamond.cut,
                diameterMM: editProductDiamond.diameterMM,
                color: editProductDiamond.color,
                basePrice: editProductDiamond.basePrice,
                isActive: editProductDiamond.isActive
            };

            // Update Diamond
            await axios.put('https://localhost:7101/api/Diamonds/UpdateDiamond', diamondPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            message.success('Chỉnh sửa sản phẩm kim cương thành công');
            setIsEditModalOpen(false); // Close the edit product modal
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error updating diamond product:', error);
            message.error('Lỗi khi chỉnh sửa sản phẩm kim cương. Vui lòng thử lại sau.');
            setErrorMessage('Error updating diamond product.');
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
            message.success('Xóa sản phẩm kim cương thành công');
            // Refresh the product list after deletion
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error deleting product:', error);
            message.error('Xóa sản phẩm kim cương thất bại.');
            setErrorMessage('Error deleting product.');
        }
    };

    const getDiamondID = (productId) => {
        const product = productDiamonds.find(product => product.productID === productId);
        return product ? product.diamondID : 'N/A';
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
    const getProductStatus = (product) => {
        if (!product.isActive) {
            return 'Tạm ẩn';
        } else if (product.quantity > 0) {
            return 'Còn hàng';
        } else {
            return 'Hết hàng';
        }
    };
    const displayProducts = products.filter(product => {
        const status = getProductStatus(product);
        return (statusFilter === 'Tất cả' || status === statusFilter) && product.productName.toLowerCase().includes(searchTerm.toLowerCase());
    }).slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);

    // const displayProducts = products.filter(product => product.productName && product.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    //     .slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);

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
                                <li className="sidebar-item active">
                                    <a className="sidebar-link" >
                                        <i className="align-middle" data-feather="sliders"></i>
                                        <span className="align-middle"><Link to="/KimCuongDashboard">Kim cương</Link></span>
                                    </a>

                                    <ul className="sidebar-nav dropdown-menu">
                                        <li className={`sidebar-item ${activeCategory === '3.6' ? 'active' : ''}`} onClick={() => handleCategoryClick('3.6')}>
                                            <a className="sidebar-link">
                                                <i className="align-middle" data-feather="square"></i>
                                                <span className="align-middle">Kim cương 3.6 ly</span>
                                            </a>
                                        </li>
                                        <li className={`sidebar-item ${activeCategory === '4.1' ? 'active' : ''}`} onClick={() => handleCategoryClick('4.1')}>
                                            <a className="sidebar-link">
                                                <i className="align-middle" data-feather="square"></i>
                                                <span className="align-middle">Kim cương 4.1 ly</span>
                                            </a>
                                        </li>
                                        <li className={`sidebar-item ${activeCategory === '4.5' ? 'active' : ''}`} onClick={() => handleCategoryClick('4.5')}>
                                            <a className="sidebar-link">
                                                <i className="align-middle" data-feather="square"></i>
                                                <span className="align-middle">Kim cương 4.5 ly</span>
                                            </a>
                                        </li>
                                        <li className={`sidebar-item ${activeCategory === '5.4' ? 'active' : ''}`} onClick={() => handleCategoryClick('5.4')}>
                                            <a className="sidebar-link">
                                                <i className="align-middle" data-feather="square"></i>
                                                <span className="align-middle">Kim cương 5.4 ly</span>
                                            </a>
                                        </li>
                                    </ul>
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

                        <h2 className="text-center admin-page-title">Quản lí Kim cương</h2>

                        <div className="admin-page-controls">
                            <button className='admin-page-add-button' onClick={handleAddProductClick}>Thêm kim cương</button>

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

                            <div className="admin-page-status-filter">
                                <select className="form-control admin-page-filter-dropdown" value={statusFilter} onChange={handleStatusFilterChange}>
                                    <option value="Tất cả">Tất cả</option>
                                    <option value="Còn hàng">Còn hàng</option>
                                    <option value="Hết hàng">Hết hàng</option>
                                    <option value="Tạm ẩn">Tạm ẩn</option>
                                </select>
                            </div>
                        </div>

                        <table className="admin-page-table">
                            <thead>
                                <tr className='admin-page-column-table'>
                                    <th>ID</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Số lượng</th>
                                    <th>Giá</th>
                                    <th>Trạng thái</th>
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
                                        <td>{product.quantity}</td>
                                        <td>{formatCurrency(product.markupPrice)}VNĐ</td> {/* Định dạng tiền tệ */}
                                        <td>{getProductStatus(product)}</td>
                                        <td>
                                            <div className="admin-page-buttons">
                                                <Button type='default' onClick={() => openModal(product)}>Xem</Button>
                                                <Button type='default' onClick={() => handleEditProductClick(product)}>Sửa</Button>
                                                <Popconfirm
                                                    title="Xóa sản phẩm"
                                                    description={`Bạn có chắc chắn muốn xóa sản phẩm ${product.productName}?`}
                                                    onConfirm={() => confirmDelete(product.productId)}
                                                    onCancel={cancelDelete}
                                                    okText="Có"
                                                    cancelText="Không"
                                                >
                                                    <Button danger>Xóa</Button>
                                                </Popconfirm>

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
                                        <div className="admin-page-details-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Chi tiết sản phẩm kim cương</h2>
                                            <div className="admin-page-add-product-form-group">
                                                <label>Tên sản phẩm:</label>
                                                <Input type="text" value={selectedProduct.productName} readOnly />
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Loại:</label>
                                                    <Input type="text" value={`Kim cương ` + getDiameterMMDiamond(selectedProduct.productId) + ` ly`} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label><strong>Carat:</strong></label>
                                                    <Input type="number" value={getCaratDiamond(selectedProduct.productId)} readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Màu sắc:</label>
                                                    <Input type="text" value={getColorDiamond(selectedProduct.productId)} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Độ tinh khiết:</label>
                                                    <Input type="text" value={getClarityDiamond(selectedProduct.productId)} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Cắt:</label>
                                                    <Input type="text" value={getCutDiamond(selectedProduct.productId)} readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Số lượng:</label>
                                                    <Input type="text" value={selectedProduct.quantity} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Giá gốc sản phẩm:</label>
                                                    <Input type="text" value={formatCurrency(getBasePriceDiamond(selectedProduct.productId)) + 'VNĐ'} readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Tỉ lệ áp giá:</label>
                                                    <Input type="text" value={selectedProduct.markupRate} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Giá bán:</label>
                                                    <Input type="text" value={formatCurrency(selectedProduct.markupPrice) + 'VNĐ'} readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group">
                                                <label>Mô tả:</label>
                                                <div>{parse(selectedProduct.description)}</div>
                                            </div>
                                        </div>

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
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Thêm kim cương</h2>
                                            <form onSubmit={addNewDiamondProduct}>
                                                <div className="admin-page-add-product-form-group-row">
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="productId">ID</label>
                                                        <Input
                                                            id="productId"
                                                            name="productId"
                                                            value={newProductDiamond.productId}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="diameterMM">Đường kính (mm)</label>
                                                        <Input
                                                            id="diameterMM"
                                                            name="diameterMM"
                                                            value={newProductDiamond.diameterMM}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>

                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor="productName">Tên sản phẩm</label>
                                                    <Input
                                                        id="productName"
                                                        name="productName"
                                                        placeholder="Nhập tên sản phẩm"
                                                        value={newProductDiamond.productName}
                                                        onChange={e => setNewProductDiamond({ ...newProductDiamond, productName: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-add-product-form-group-row">
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="quantity">Số lượng</label>
                                                        <InputNumber
                                                            id="quantity"
                                                            name="quantity"
                                                            min={1}
                                                            max={100000}
                                                            style={{ height: '46.7px', width: '140px' }}
                                                            value={newProductDiamond.quantity}
                                                            onChange={value => setNewProductDiamond({ ...newProductDiamond, quantity: value })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="carat">Carat</label>
                                                        <InputNumber
                                                            id="carat"
                                                            name="carat"
                                                            placeholder="Carat"
                                                            value={newProductDiamond.carat}
                                                            style={{ height: '46.7px', width: '140px' }}
                                                            onChange={value => setNewProductDiamond({ ...newProductDiamond, carat: value })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="markupRate">Tỉ lệ áp giá</label>
                                                        <InputNumber
                                                            id="markupRate"
                                                            name="markupRate"
                                                            placeholder="Tỉ lệ áp giá"
                                                            value={newProductDiamond.markupRate}
                                                            style={{ height: '46.7px', width: '140px' }}
                                                            onChange={value => setNewProductDiamond({ ...newProductDiamond, markupRate: value })}
                                                            required
                                                        />
                                                    </div>
                                                </div>

                                                <div className="admin-page-add-product-form-group-row">
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="color">Màu sắc</label>
                                                        <Select
                                                            id="color"
                                                            name="color"
                                                            value={newProductDiamond.color}
                                                            style={{ height: '46.7px' }}
                                                            onChange={value => setNewProductDiamond({ ...newProductDiamond, color: value })}
                                                            options={[
                                                                { value: 'D', label: 'D' },
                                                                { value: 'E', label: 'E' },
                                                                { value: 'F', label: 'F' }
                                                            ]}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="clarity">Độ tinh khiết</label>
                                                        <Select
                                                            id="clarity"
                                                            name="clarity"
                                                            value={newProductDiamond.clarity}
                                                            style={{ height: '46.7px' }}
                                                            onChange={value => setNewProductDiamond({ ...newProductDiamond, clarity: value })}
                                                            options={[
                                                                { value: 'IF', label: 'IF' },
                                                                { value: 'VVS1', label: 'VVS1' },
                                                                { value: 'VVS2', label: 'VVS2' },
                                                                { value: 'VS1', label: 'VS1' },
                                                                { value: 'VS2', label: 'VS2' }
                                                            ]}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="cut">Cắt</label>
                                                        <Select
                                                            id="cut"
                                                            name="cut"
                                                            value={newProductDiamond.cut}
                                                            style={{ height: '46.7px' }}
                                                            onChange={value => setNewProductDiamond({ ...newProductDiamond, cut: value })}
                                                            options={[
                                                                { value: 'EX', label: 'EX' },
                                                                { value: 'VG', label: 'VG' },
                                                                { value: 'G', label: 'G' }
                                                            ]}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="admin-page-add-product-form-group-row">
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                                        <InputNumber
                                                            id="basePrice"
                                                            name="basePrice"
                                                            placeholder="Nhập giá gốc sản phẩm"
                                                            style={{ height: '46.7px', width: '220px' }}
                                                            value={newProductDiamond.basePrice}
                                                            onChange={value => setNewProductDiamond({ ...newProductDiamond, basePrice: value })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="markupPrice">Giá bán</label>
                                                        <InputNumber
                                                            id="markupPrice"
                                                            name="markupPrice"
                                                            placeholder="Giá bán"
                                                            style={{ height: '46.7px', width: '220px' }}
                                                            value={newProductDiamond.markupPrice}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="admin-page-add-product-form-group-row">
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="imageFiles">Hình ảnh sản phẩm</label>
                                                        <Upload {...uploadProps}>
                                                            <Button icon={<UploadOutlined />}>Chọn hình ảnh</Button>
                                                        </Upload>
                                                    </div>
                                                </div>

                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor="description">Mô tả sản phẩm</label>
                                                    <ReactQuill
                                                        id="description"
                                                        name="description"
                                                        value={newProductDiamond.description}
                                                        onChange={value => setNewProductDiamond({ ...newProductDiamond, description: value })}
                                                    />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <Button type="primary" htmlType="submit">Thêm Mới</Button>
                                                </div>
                                            </form>
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
                                            <img src={editProductDiamond.imageUrls[0]} alt="Product Image" className="admin-page-edit-large-image" />
                                        </div>
                                        <div className="admin-page-edit-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Chỉnh sửa sản phẩm kim cương</h2>
                                            <form onSubmit={updateDiamondProduct}>
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
                                                        <label htmlFor="quantity">Số lượng</label>
                                                        <input
                                                            type="number"
                                                            id="quantity"
                                                            name="quantity"
                                                            placeholder="Nhập số lượng sản phẩm"
                                                            value={editProductDiamond.quantity}
                                                            onChange={handleEditDiamondChange}
                                                            required
                                                        />
                                                    </div>
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
                                                </div>

                                                <div className="admin-page-edit-product-form-group-row">
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
                                                <div className="admin-page-edit-product-form-group-row">
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="markupRate">Tỉ lệ áp giá</label>
                                                        <input
                                                            type="number"
                                                            id="markupRate"
                                                            name="markupRate"
                                                            placeholder="Nhập tỉ lệ áp giá"
                                                            value={editProductDiamond.markupRate}
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
                                                        <label htmlFor="markupPrice">Giá bán</label>
                                                        <input
                                                            type="number"
                                                            id="markupPrice"
                                                            name="markupPrice"
                                                            placeholder="Nhập giá bán"
                                                            value={editProductDiamond.markupPrice}
                                                            onChange={handleEditDiamondChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Trạng thái:</label>
                                                        <Select
                                                            name="isActive"
                                                            value={editProductDiamond.isActive}
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            onChange={(value) => handleEditDiamondChange({ target: { name: 'isActive', value } })}
                                                        >
                                                            <Option value={true}>Còn hàng</Option>
                                                            <Option value={false}>Tạm ẩn</Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                                <div className="admin-page-edit-product-form-group">
                                                    <label htmlFor="description">Mô tả sản phẩm</label>
                                                    <ReactQuill
                                                        id="description"
                                                        name="description"
                                                        value={editProductDiamond.description}
                                                        onChange={(value) => setEditProductDiamond({ ...editProductDiamond, description: value })}
                                                    />
                                                </div>
                                                <div className="admin-page-edit-product-form-group">
                                                    <Button type="primary" htmlType="submit">Cập nhật</Button>
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

export default KimCuong;
