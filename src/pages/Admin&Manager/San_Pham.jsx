import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../UserContext';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { sendToken } from '../../api/TokenAPI'; // Adjust path as needed
import { getJewelryImageUrls } from '../../FirebaseImage/firebaseHelper';
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

function getCategoryNameForDetails(categoryId) {
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
}


const SanPham = () => {
    const { user: currentUser, logout: userLogout } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');

    const [products, setProducts] = useState([]);
    const [productJewelries, setProductJewelries] = useState([]);
    const [productCategories, setProductCategories] = useState([]);
    const [productJewelrySettings, setProductJewelrySettings] = useState({});
    const [diamondData, setDiamondData] = useState({ main: [], side: [] });
    const [materialData, setMaterialData] = useState([]);
    const [jewelrySize, setJewelrySize] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('Tất cả');

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 6;

    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const [statusFilter, setStatusFilter] = useState('Tất cả');

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        if (selectedProduct) {
            if (selectedProduct.categoryId !== 1) {
                const product = jewelrySize.find(item => item.jewelryID === selectedProduct.jewelryID);
                setQuantity(product ? product.quantity : 0);
            } else if (selectedSize) {
                const selectedJewelry = jewelrySize.find(item => item.jewelryID === selectedProduct.jewelryID && item.size === parseInt(selectedSize));
                setQuantity(selectedJewelry ? selectedJewelry.quantity : 0);
            }
        }
    }, [selectedProduct, selectedSize, jewelrySize]);


    // State for managing the display of add product format
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    const [newProductJewelry, setNewProductJewelry] = useState({
        jewelrySettingID: '',
        productID: '',
        productName: '',
        description: '',
        markupRate: 0,
        markupPrice: 0,
        categoryId: 0,
        categoryName: '',
        mainDiamondID: '',
        mainDiamondQuantity: 0,
        sideDiamondID: '',
        sideDiamondQuantity: 0,
        size: 0,
        quantity: 0,
        basePrice: 0,
        imageUrls: [],
        imageFiles: []
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editProductJewelry, setEditProductJewelry] = useState({
        jewelryID: 0,
        jewelrySettingID: 0,
        productID: '',
        productName: '',
        categoryId: 0,
        mainDiamondID: 0,
        mainDiamondQuantity: 0,
        sideDiamondID: 0,
        sideDiamondQuantity: 0,
        basePrice: 0,
        markupRate: 0,
        markupPrice: 0,
        description: '',
        size: 0,
        quantity: 0,
        isActive: true,
        categoryName: '',
        imageUrls: [],
        imageFiles: []
    });
    // Get jewelry material, main, side diamond
    useEffect(() => {
        const fetchDiamondData = async () => {
            try {
                const mainDiamondResponse = await axios.get('https://localhost:7101/api/Diamonds/getallMaindiamond');
                const sideDiamondResponse = await axios.get('https://localhost:7101/api/Diamonds/getallsidediamonds');
                setDiamondData({
                    main: mainDiamondResponse.data,
                    side: sideDiamondResponse.data
                });
                console.log("Main", mainDiamondResponse.data);
                console.log("Side", sideDiamondResponse.data);
            } catch (error) {
                console.error('Error fetching diamond data:', error);
            }
        };

        const fetchMaterialData = async () => {
            try {
                const materialResponse = await axios.get('https://localhost:7101/api/JewelrySetting/All');
                setMaterialData(materialResponse.data);
                console.log("Settings", materialResponse.data);
            } catch (error) {
                console.error('Error fetching material data:', error);
            }
        };

        fetchDiamondData();
        fetchMaterialData();
    }, []);
    // Auto calculate MarkupPrice in Add new Jewelry
    useEffect(() => {
        const calculateBasePrice = () => {
            const mainDiamond = diamondData.main.find(d => d.mainDiamondID === parseInt(newProductJewelry.mainDiamondID));
            const sideDiamond = diamondData.side.find(d => d.sideDiamondID === parseInt(newProductJewelry.sideDiamondID));
            const material = materialData.find(m => m.jewelrySettingID === parseInt(newProductJewelry.jewelrySettingID));

            const mainDiamondPrice = mainDiamond ? mainDiamond.price : 0;
            const sideDiamondPrice = sideDiamond ? sideDiamond.price : 0;
            const materialPrice = material ? material.basePrice : 0;

            const basePrice = (
                (newProductJewelry.mainDiamondQuantity * mainDiamondPrice) +
                (newProductJewelry.sideDiamondQuantity * sideDiamondPrice) +
                materialPrice
            );

            setNewProductJewelry(prevState => ({
                ...prevState,
                basePrice: basePrice
            }));
        };

        calculateBasePrice();
    }, [
        newProductJewelry.mainDiamondID,
        newProductJewelry.mainDiamondQuantity,
        newProductJewelry.sideDiamondID,
        newProductJewelry.sideDiamondQuantity,
        newProductJewelry.jewelrySettingID,
        diamondData,
        materialData
    ]);
    useEffect(() => {
        const calculateMarkupPrice = () => {
            setNewProductJewelry(prevState => ({
                ...prevState,
                markupPrice: prevState.basePrice * prevState.markupRate
            }));
        };

        calculateMarkupPrice();
    }, [newProductJewelry.basePrice, newProductJewelry.markupRate]);
    // Auto calculate MarkupPrice in Edit Jewelry
    useEffect(() => {
        const calculateBasePrice = () => {
            const mainDiamond = diamondData.main.find(d => d.mainDiamondID === parseInt(editProductJewelry.mainDiamondID));
            const sideDiamond = diamondData.side.find(d => d.sideDiamondID === parseInt(editProductJewelry.sideDiamondID));
            const material = materialData.find(m => m.jewelrySettingID === parseInt(editProductJewelry.jewelrySettingID));

            const mainDiamondPrice = mainDiamond ? mainDiamond.price : 0;
            const sideDiamondPrice = sideDiamond ? sideDiamond.price : 0;
            const materialPrice = material ? material.basePrice : 0;

            const basePrice = (
                (editProductJewelry.mainDiamondQuantity * mainDiamondPrice) +
                (editProductJewelry.sideDiamondQuantity * sideDiamondPrice) +
                materialPrice
            );

            setEditProductJewelry(prevState => ({
                ...prevState,
                basePrice: basePrice
            }));
        };

        calculateBasePrice();
    }, [
        editProductJewelry.mainDiamondID,
        editProductJewelry.mainDiamondQuantity,
        editProductJewelry.sideDiamondID,
        editProductJewelry.sideDiamondQuantity,
        editProductJewelry.jewelrySettingID,
        diamondData.main,
        diamondData.side,
        materialData
    ]);

    useEffect(() => {
        const calculateMarkupPrice = () => {
            setEditProductJewelry(prevState => ({
                ...prevState,
                markupPrice: prevState.basePrice * prevState.markupRate
            }));
        };

        calculateMarkupPrice();
    }, [editProductJewelry.basePrice, editProductJewelry.markupRate]);
    // Size và quantity in edit form
    const [sizeQuantities, setSizeQuantities] = useState([]);

    useEffect(() => {
        if (editProductJewelry.categoryName !== 'Dây chuyền' && editProductJewelry.jewelryID) {
            const sizes = jewelrySize.filter(item => item.jewelryID === editProductJewelry.jewelryID);
            setSizeQuantities(sizes);
        }
    }, [editProductJewelry.jewelryID, editProductJewelry.categoryName, jewelrySize]);

    const handleEditSizeChange = (value) => {
        setSelectedSize(value);
        const selectedSizeData = sizeQuantities.find(item => item.size === value);
        if (selectedSizeData) {
            handleEditJewelryChange({ target: { name: 'quantity', value: selectedSizeData.quantity } });
        }
    };
    // get Data from api
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
            // get all Jewelry Product
            const productJewelriesResponse = await axios.get('https://localhost:7101/api/Jewelry/GetAllJewelry', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            // get all product
            const productResponse = await axios.get('https://localhost:7101/api/products/GetAllProduct', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            // get all jewelry size
            const jewelrySizeResponse = await axios.get('https://localhost:7101/api/JewelrySize/GetAllJewelrySize', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            // Create a map of productId to categoryId
            const productJewelryMap = productJewelriesResponse.data.reduce((map, jewelry) => {
                map[jewelry.productID] = jewelry.categoryId;
                return map;
            }, {});
            const jewelryIDMap = productJewelriesResponse.data.reduce((map, product) => {
                map[product.productID] = product.jewelryID;
                return map;
            }, {});
            const mainDiamondMap = productJewelriesResponse.data.reduce((map, product) => {
                map[product.productID] = product.mainDiamondQuantity;
                return map;
            }, {});
            const sideDiamondMap = productJewelriesResponse.data.reduce((map, product) => {
                map[product.productID] = product.sideDiamondQuantity;
                return map;
            }, {});
            const mainDiamondIDMap = productJewelriesResponse.data.reduce((map, product) => {
                map[product.productID] = product.mainDiamondID;
                return map;
            }, {});
            const sideDiamondIDMap = productJewelriesResponse.data.reduce((map, product) => {
                map[product.productID] = product.sideDiamondID;
                return map;
            }, {});
            const jewelrySettingMap = productJewelriesResponse.data.reduce((map, product) => {
                map[product.productID] = product.jewelrySettingID;
                return map;
            }, {});


            const formattedProducts = await Promise.all(productResponse.data.map(async (product) => {
                const categoryId = productJewelryMap[product.productId] || null;
                const jewelryID = jewelryIDMap[product.productId] || null;
                const mainDiamondQuantity = mainDiamondMap[product.productId] || null;
                const sideDiamondQuantity = sideDiamondMap[product.productId] || null;
                const mainDiamondID = mainDiamondIDMap[product.productId] || null;
                const sideDiamondID = sideDiamondIDMap[product.productId] || null;
                const jewelrySetting = jewelrySettingMap[product.productId] || null;
                let image1Url = "default_image_url.png";

                if (product.productType === 'Jewelry') {
                    const jewelryImageUrls = await getJewelryImageUrls(product.productId, categoryId);
                    image1Url = jewelryImageUrls.image1Url;
                }

                return {
                    jewelryID: jewelryID,
                    productId: product.productId,
                    productName: product.productName,
                    description: product.description,
                    markupPrice: product.markupPrice,
                    markupRate: product.markupRate,
                    jewelrySettingID: jewelrySetting,
                    mainDiamondQuantity: mainDiamondQuantity,
                    sideDiamondQuantity: sideDiamondQuantity,
                    mainDiamondID: mainDiamondID,
                    sideDiamondID: sideDiamondID,
                    productType: product.productType,
                    isActive: product.isActive,
                    categoryId: categoryId,
                    imageUrl: image1Url || "default_image_url.png" // Use default image if not found
                };
            }));
            console.log(formattedProducts);
            // get all category
            const productCategoriesResponse = await axios.get('https://localhost:7101/api/Category/GetAllCategory', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            // get all jewelry setting
            const productJewelrySettingsResponse = await axios.get('https://localhost:7101/api/JewelrySetting/All', {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            const filteredProducts = categoryId
                ? formattedProducts.filter(product => product.categoryId && product.categoryId.toString() === categoryId)
                : formattedProducts;

            setProducts(filteredProducts);
            setProductJewelries(productJewelriesResponse.data);
            setProductCategories(productCategoriesResponse.data);
            setProductJewelrySettings(productJewelrySettingsResponse.data);
            setJewelrySize(jewelrySizeResponse.data);
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

    useEffect(() => {
        const calculateMarkupPrice = () => {
            const markupPrice = editProductJewelry.basePrice * editProductJewelry.markupRate;
            setEditProductJewelry(prevState => ({
                ...prevState,
                markupPrice: markupPrice
            }));
        };
        calculateMarkupPrice();
    });
    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        setCategoryFilter(categoryId);
        setCurrentPage(0); // Reset to the first page when category changes
    };
    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };
    const handleAddProductClick = async () => {
        setIsAddModalOpen(true); // Open the add product modal
        const categoryId = activeCategory;
        const categoryName = await getCategoryName(categoryId); // Get the category name using categoryId
        try {
            const newId = await generateProductJewelryId(categoryId); // Generate the new product ID
            setNewProductJewelry({
                ...newProductJewelry,
                productID: newId, // Set the new product ID
                categoryName: categoryName,
                categoryId: categoryId // Set the category name
            });
        } catch (error) {
            console.error('Error generating product ID:', error);
            // Handle the error if any
        }
    };

    const handleNewJewelryChange = (e) => {
        const { name, value } = e.target;
        setNewProductJewelry(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleEditJewelryChange = (e) => {
        const { name, value } = e.target;
        setEditProductJewelry({ ...editProductJewelry, [name]: value });
    };
    const handleSearchInputChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const addNewJewelryProduct = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const headers = sendToken();
            let jewelryPayload;

            // Kiểm tra categoryId có phải là 2 (Dây chuyền)
            if (newProductJewelry.categoryName === 'Dây chuyền') {
                jewelryPayload = {
                    jewelryID: 0,
                    jewelrySettingID: newProductJewelry.jewelrySettingID,
                    productID: newProductJewelry.productID,
                    productName: newProductJewelry.productName,
                    description: newProductJewelry.description,
                    markupRate: newProductJewelry.markupRate,
                    markupPrice: newProductJewelry.markupPrice,
                    categoryId: newProductJewelry.categoryId,
                    mainDiamondID: 6, // Giá trị mặc định cho Dây chuyền
                    mainDiamondQuantity: 0, // Giá trị mặc định cho Dây chuyền
                    sideDiamondID: 5, // Giá trị mặc định cho Dây chuyền
                    sideDiamondQuantity: 0, // Giá trị mặc định cho Dây chuyền
                    basePrice: newProductJewelry.basePrice,
                    size: 0, // Giá trị mặc định cho Dây chuyền
                    quantity: newProductJewelry.quantity,
                    // imageUrls: imageUrls
                };
            } else {
                jewelryPayload = {
                    jewelryID: 0,
                    jewelrySettingID: newProductJewelry.jewelrySettingID,
                    productID: newProductJewelry.productID,
                    productName: newProductJewelry.productName,
                    description: newProductJewelry.description,
                    markupRate: newProductJewelry.markupRate,
                    markupPrice: newProductJewelry.markupPrice,
                    categoryId: newProductJewelry.categoryId,
                    mainDiamondID: newProductJewelry.mainDiamondID,
                    mainDiamondQuantity: newProductJewelry.mainDiamondQuantity,
                    sideDiamondID: newProductJewelry.sideDiamondID,
                    sideDiamondQuantity: newProductJewelry.sideDiamondQuantity,
                    basePrice: newProductJewelry.basePrice,
                    size: newProductJewelry.size,
                    quantity: newProductJewelry.quantity,
                    // imageUrls: imageUrls
                };
            }

            console.log('jewelryPayload:', jewelryPayload);
            await axios.post('https://localhost:7101/api/Jewelry/CreateJewelry', jewelryPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            message.success(`Thêm sản phẩm trang s thành công`);
            setIsAddModalOpen(false);
            setNewProductJewelry({
                jewelrySettingID: '',
                productID: '',
                productName: '',
                description: '',
                markupRate: 0,
                markupPrice: 0,
                categoryId: 0,
                categoryName: '',
                mainDiamondID: '',
                mainDiamondQuantity: 0,
                sideDiamondID: '',
                sideDiamondQuantity: 0,
                size: 0,
                quantity: 0,
                basePrice: 0,
                imageUrls: [],
                imageFiles: []
            });
            fetchProductData(categoryFilter, currentPage + 1);

        } catch (error) {
            console.error('Error adding new jewelry product:', error);
            setErrorMessage('Error adding new jewelry product.');
        }
    };


    const handleFileUpload = async (file) => {
        const imgRef = ref(imageDb, `files/${newProductJewelry.categoryId}/${newProductJewelry.productID}/${file.name}`);
        await uploadBytes(imgRef, file);
        return await getDownloadURL(imgRef);
    };
    const uploadProps = {
        name: 'file',
        customRequest: async ({ file, onSuccess, onError }) => {
            try {
                const downloadUrl = await handleFileUpload(file);
                setNewProductJewelry(prevState => ({
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
    }
    // Function to handle editing product
    const handleEditProductClick = (product) => {
        setEditProductJewelry({
            jewelryID: product.jewelryID,
            productID: product.productId,
            productName: product.productName,
            description: product.description,
            quantity: quantity,
            jewelrySettingID: product.jewelrySettingID,
            markupRate: product.markupRate,
            markupPrice: product.markupPrice,
            mainDiamondID: product.mainDiamondID,
            sideDiamondID: product.sideDiamondID,
            mainDiamondQuantity: product.mainDiamondQuantity,
            sideDiamondQuantity: product.sideDiamondQuantity,
            categoryId: product.categoryId, // Sử dụng categoryFilter để lấy category hiện tại
            categoryName: getCategoryName(product.categoryId),
            basePrice: getBasePriceJewelry(product.productId),
            size: getSizeJewelry(product.jewelryID),
            isActive: product.isActive,
            imageUrls: [product.imageUrl]
        });
        setSelectedProduct(product);
        setIsEditModalOpen(true);
    };
    // Function to update jewelry product
    const handleStatusFilterChange = (e) => {
        setStatusFilter(e.target.value);
    };
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
                jewelryID: editProductJewelry.jewelryID,
                jewelrySettingID: editProductJewelry.jewelrySettingID,
                productID: editProductJewelry.productID,
                productName: editProductJewelry.productName,
                categoryId: editProductJewelry.categoryId,
                mainDiamondID: editProductJewelry.mainDiamondID,
                mainDiamondQuantity: editProductJewelry.mainDiamondQuantity,
                sideDiamondID: editProductJewelry.sideDiamondID,
                sideDiamondQuantity: editProductJewelry.sideDiamondQuantity,
                basePrice: editProductJewelry.basePrice,
                markupRate: editProductJewelry.markupRate,
                markupPrice: editProductJewelry.markupPrice,
                description: editProductJewelry.description,
                size: editProductJewelry.size,
                quantity: editProductJewelry.quantity,
                isActive: editProductJewelry.isActive
            };
            console.log("Update data:", jewelryPayload);
            // Update Jewelry
            await axios.put('https://localhost:7101/api/Jewelry/UpdateJewelry', jewelryPayload, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            message.success('Chỉnh sửa sản phẩm trang sức thành công');
            setIsEditModalOpen(false); // Close the edit product modal
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error updating jewelry product:', error);
            message.error('Lỗi khi chỉnh sửa sản phẩm trang sức. Vui lòng thử lại sau.');
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
            message.success('Xóa sản phẩm thành công');
            // Refresh the product list after deletion
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            console.error('Error deleting product:', error);
            message.error('Xóa sản phẩm thất bại');
            setErrorMessage('Error deleting product.');
        }
    };
    const confirmDelete = (productId) => {
        deleteProduct(productId);
    };

    const cancelDelete = (e) => {
        message.error('Hủy bỏ xóa sản phẩm');
    };
    const getProductStatus = (product) => {
        if (!product.isActive) {
            return 'Tạm ẩn';
        } else if (getQuantityJewelry(product.jewelryID) > 0) {
            return 'Còn hàng';
        } else {
            return 'Hết hàng';
        }
    };
    const getBasePriceJewelry = (productId) => {
        const product = productJewelries.find(product => product.productID === productId);
        return product ? product.basePrice : 'N/A';
    };
    const getMaterialJewelry = (productId) => {
        const product = productJewelries.find(product => product.productID === productId);
        if (product) {
            switch (product.jewelrySettingID) {
                case 1:
                    return 'Vàng trắng 14K ';
                case 2:
                    return 'Vàng 18K';
                case 4:
                    return 'Bạc';
                case 5:
                    return 'Vàng trắng 10K';
                case 6:
                    return 'Vàng 14K';
                case 7:
                    return 'Vàng trắng 18K';
                default:
                    return 'N/A';
            }
        }
        return 'N/A';
    };
    const getQuantityJewelry = (jewelryID) => {
        const product = jewelrySize.find(product => product.jewelryID === jewelryID);
        return product ? product.quantity : 0;
    };
    const getSizeJewelry = (jewelryID) => {
        const product = jewelrySize.find(product => product.jewelryID === jewelryID);
        return product ? product.size : 0;
    };
    const getMainDiamondName = (mainDiamondID) => {
        const mainDiamond = diamondData.main.find(diamond => diamond.mainDiamondID === mainDiamondID);
        return mainDiamond ? mainDiamond.mainDiamondName : 'Không xác định';
    };

    const getSideDiamondName = (sideDiamondID) => {
        const sideDiamond = diamondData.side.find(diamond => diamond.sideDiamondID === sideDiamondID);
        return sideDiamond ? sideDiamond.sideDiamondName : 'Không xác định';
    };

    const displayProducts = products.filter(product => {
        const status = getProductStatus(product);
        return (statusFilter === 'Tất cả' || status === statusFilter) && product.productName.toLowerCase().includes(searchTerm.toLowerCase());
    }).slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);
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
    const getCategoryName = async (categoryId) => {
        try {
            const headers = sendToken();
            const response = await axios.get(`https://localhost:7101/api/Category/GetCategoryById?id=${categoryId}`, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.categoryName) {
                return response.data.categoryName;
            } else {
                console.error('Invalid response data:', response.data);
                return 'Unknown';
            }
        } catch (error) {
            console.error('Error fetching category name:', error);
            return 'Unknown';
        }
    };
    const generateProductJewelryId = async (categoryId) => {
        try {
            const parsedCategoryId = parseInt(categoryId, 10);
            const headers = sendToken();
            const response = await axios.get(`https://localhost:7101/api/Jewelry/GetJewelryCountByCategoryId?categoryId=${categoryId}`, {
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            const count = response.data;
            const nextId = count + 1;
            let prefix = '';
            switch (parsedCategoryId) {
                case 1:
                    prefix = 'N';
                    break;
                case 2:
                    prefix = 'DC';
                    break;
                case 3:
                    prefix = 'MDC';
                    break;
                case 4:
                    prefix = 'VT';
                    break;
                default:
                    prefix = 'Unknown';
                    break;
            }
            return `${prefix}-${nextId.toString().padStart(3, '0')}`;
        } catch (error) {
            console.error('Error fetching product count:', error);
            return 'Unknown';
        }
    };
    const [isSizeModalOpen, setIsSizeModalOpen] = useState(false);
    const [sizeData, setSizeData] = useState({
        jewelrySizeID: 0,
        jewelryID: 0,
        size: 0,
        quantity: 0,
    });
    const openSizeModal = (product) => {
        setSizeData(prevState => ({
            ...prevState,
            jewelryID: product.jewelryID, // Thiết lập đúng giá trị jewelryID
        }));
        setSelectedProduct(product);
        setIsSizeModalOpen(true);
    };


    const closeSizeModal = () => {
        setSelectedProduct(null);
        setIsSizeModalOpen(false);
    };

    const handleSizeChange = (value, field) => {
        setSizeData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const addJewelrySize = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            console.log("Token not found or expired. Logging out.");
            userLogout();
            return;
        }

        try {
            const headers = sendToken();
            console.log(sizeData); // Kiểm tra dữ liệu trước khi gửi yêu cầu
            const sizePayload = ({
                jewelrySizeID: 0,
                jewelryID: sizeData.jewelryID,
                size: sizeData.size,
                quantity: sizeData.quantity,
            });
            await axios.post('https://localhost:7101/api/JewelrySize/CreateJewelrySize', sizePayload);
            message.success('Thêm ni cho sản phẩm thành công');
            closeSizeModal();
            fetchProductData(categoryFilter, currentPage + 1);
        } catch (error) {
            message.error('Thêm ni thất bại');
        }
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
                                <li className="sidebar-item active">
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
                                <li className="sidebar-item active">
                                    <a className="sidebar-link" >
                                        <i className="align-middle" data-feather="sliders"></i>
                                        <span className="align-middle"><Link to="/TrangSuc">Trang sức</Link></span>
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
                                    </ul>
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

                        <h2 className="text-center admin-page-title">Quản lí trang sức</h2>

                        <div className="admin-page-controls">
                            <button className='admin-page-add-button' onClick={handleAddProductClick}>Thêm trang sức</button>

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
                                        <td>{getQuantityJewelry(product.jewelryID)}</td>
                                        <td>{formatCurrency(product.markupPrice)}VND</td> {/* Định dạng tiền tệ */}
                                        <td>{getProductStatus(product)}</td>
                                        <td>
                                            <div className="admin-page-buttons">
                                                {product.categoryId === 1 && (
                                                    <Button type='default' onClick={() => openSizeModal(product)}>Thêm ni</Button>
                                                )}
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

                        {isSizeModalOpen && selectedProduct && (
                            <div className="admin-page-add-product-overlay">
                                <div className="admin-page-add-product-modal">
                                    <button className="admin-page-add-product-close-button" onClick={closeSizeModal}>&times;</button>
                                    <div className="admin-page-add-product-modal-content">
                                        <div className="admin-page-add-product-info-column">
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Thêm ni trang sức</h2>
                                            <form onSubmit={addJewelrySize}>
                                                <div className="admin-page-add-product-form-group">
                                                    <label>Tên sản phẩm:</label>
                                                    <Input value={selectedProduct.productName}
                                                        style={{ width: '100%', height: '48.8px' }}
                                                        readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor='jewelryID'>ID trang sức:</label>
                                                    <Input
                                                        id="jewelryID"
                                                        name="jewelryID"
                                                        value={selectedProduct.jewelryID}
                                                        style={{ width: '100%', height: '48.8px' }}
                                                        onChange={(value) => handleSizeChange(value, 'jewelryID')}
                                                        readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor="size">Ni</label>
                                                    <Select
                                                        id="size"
                                                        name="size"
                                                        style={{ width: '100%', height: '48.8px' }}
                                                        value={sizeData.size}
                                                        onChange={(value) => handleSizeChange(value, 'size')}
                                                    >
                                                        {Array.from({ length: 11 }, (_, i) => i + 10).map(size => (
                                                            <Option key={size} value={size}>{size}</Option>
                                                        ))}
                                                    </Select>
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor="quantity">Số lượng</label>
                                                    <InputNumber
                                                        id="quantity"
                                                        name="quantity"
                                                        placeholder="Nhập số lượng"
                                                        style={{ width: '100%', height: '48.8px' }}
                                                        value={sizeData.quantity}
                                                        onChange={(value) => handleSizeChange(value, 'quantity')}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <Button type="primary" htmlType="submit">Thêm mới</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {isModalOpen && selectedProduct && (
                            <div className="admin-page-details-overlay">
                                <div className="admin-page-details-modal">
                                    <button className="admin-page-details-close-button" onClick={closeModal}>&times;</button>
                                    <div className="admin-page-details-modal-content">
                                        <div className="admin-page-details-image-column">
                                            <img src={selectedProduct.imageUrl} alt="Product Image" className="admin-page-details-large-image" />
                                        </div>
                                        <div className="admin-page-details-info-column">
                                            <div className="admin-page-add-product-form-group">
                                                <label><strong>Tên sản phẩm:</strong></label>
                                                <Input value={selectedProduct.productName} readOnly />
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                {selectedProduct.categoryId === 1 && (
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="size-select">Kích thước:</label>
                                                        <Select
                                                            id="size-select"
                                                            value={selectedSize}
                                                            style={{ width: '362.85px', height: '46.74px' }}
                                                            onChange={(value) => setSelectedSize(value)}
                                                        >
                                                            <Option value="">Chọn kích thước</Option>
                                                            {jewelrySize
                                                                .filter(item => item.jewelryID === selectedProduct.jewelryID)
                                                                .sort((a, b) => a.size - b.size)
                                                                .map(item => (
                                                                    <Option key={item.jewelrySizeID} value={item.size}>{item.size}</Option>
                                                                ))}
                                                        </Select>
                                                    </div>
                                                )}
                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor="quantity-input">Số lượng:</label>
                                                    <Input
                                                        id="quantity-input"
                                                        style={{ width: '362.85px', height: '46.74px' }}
                                                        value={quantity}
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                <div className="admin-page-add-product-form-group">
                                                    <label><strong>Viên chính:</strong></label>
                                                    <Input value={getMainDiamondName(selectedProduct.mainDiamondID)} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label><strong>Số lượng viên chính:</strong></label>
                                                    <Input
                                                        value={selectedProduct.mainDiamondQuantity}
                                                        style={{ width: '362.85px', height: '46.74px' }}
                                                        readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                <div className="admin-page-add-product-form-group">
                                                    <label><strong>Viên phụ:</strong></label>
                                                    <Input value={getSideDiamondName(selectedProduct.sideDiamondID)} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label><strong>Số lượng viên phụ:</strong></label>
                                                    <Input value={selectedProduct.sideDiamondQuantity}
                                                        style={{ width: '362.85px', height: '46.74px' }}
                                                        readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group-row">
                                                <div className="admin-page-add-product-form-group">
                                                    <label><strong>Chất liệu:</strong></label>
                                                    <Input value={getMaterialJewelry(selectedProduct.productId) || 'N/A'} readOnly />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <label><strong>Giá bán:</strong></label>
                                                    <Input
                                                        value={formatCurrency(selectedProduct.markupPrice) + 'VND'}
                                                        style={{ width: '362.85px', height: '46.74px' }}
                                                        readOnly />
                                                </div>
                                            </div>
                                            <div className="admin-page-add-product-form-group">
                                                <label><strong>Mô tả:</strong></label>
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
                                            <h2 style={{ color: '#8C6B2F', textAlign: 'center' }}>Thêm trang sức</h2>
                                            <form onSubmit={addNewJewelryProduct}>
                                                <div className="admin-page-add-product-form-group-row">
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="productID">ID Sản phẩm</label>
                                                        <Input
                                                            type="text"
                                                            id="productID"
                                                            name="productID"
                                                            placeholder="Nhập ID sản phẩm"
                                                            value={newProductJewelry.productID}
                                                            onChange={handleNewJewelryChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="categoryName">Loại</label>
                                                        <Input
                                                            type="text"
                                                            id="categoryName"
                                                            name="categoryName"
                                                            value={newProductJewelry.categoryName}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group" style={{ display: 'none' }}>
                                                        <label htmlFor="categoryId">Category ID</label>
                                                        <Input
                                                            type="hidden"
                                                            id="categoryId"
                                                            name="categoryId"
                                                            value={newProductJewelry.categoryId}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>

                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor="productName">Tên sản phẩm</label>
                                                    <Input
                                                        type="text"
                                                        id="productName"
                                                        name="productName"
                                                        placeholder="Nhập tên sản phẩm"
                                                        value={newProductJewelry.productName}
                                                        onChange={handleNewJewelryChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-add-product-form-group-row">
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="jewelrySettingID">Chất liệu</label>
                                                        <Select
                                                            id="jewelrySettingID"
                                                            name="jewelrySettingID"
                                                            style={{ width: '202.4px', height: '48.8px' }}
                                                            value={newProductJewelry.jewelrySettingID}
                                                            onChange={(value) => handleNewJewelryChange({ target: { name: 'jewelrySettingID', value } })}
                                                        >
                                                            <Option value="">Chọn chất liệu</Option>
                                                            {materialData.map(material => (
                                                                <Option key={material.jewelrySettingID} value={material.jewelrySettingID}>{material.material}</Option>
                                                            ))}
                                                        </Select>
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="quantity">Số lượng sản phẩm</label>
                                                        <InputNumber
                                                            id="quantity"
                                                            name="quantity"
                                                            placeholder="Nhập số lượng"
                                                            min={0}
                                                            style={{ width: '202.4px', height: '48.8px' }}
                                                            value={newProductJewelry.quantity}
                                                            onChange={(value) => handleNewJewelryChange({ target: { name: 'quantity', value } })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="markupRate">Tỉ lệ áp giá</label>
                                                        <InputNumber
                                                            id="markupRate"
                                                            name="markupRate"
                                                            style={{ width: '202.4px', height: '48.8px' }}
                                                            min={0.1}
                                                            placeholder="Nhập tỉ lệ áp giá"
                                                            value={newProductJewelry.markupRate}
                                                            onChange={(value) => handleNewJewelryChange({ target: { name: 'markupRate', value } })}
                                                            required
                                                        />
                                                    </div>
                                                </div>


                                                <div className="admin-page-add-product-form-group-row">
                                                    {newProductJewelry.categoryName !== 'Dây chuyền' && (
                                                        <>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="mainDiamondID">Viên chính</label>
                                                                <Select
                                                                    id="mainDiamondID"
                                                                    name="mainDiamondID"
                                                                    style={{ width: '202.4px', height: '48.8px' }}
                                                                    value={newProductJewelry.mainDiamondID}
                                                                    onChange={(value) => handleNewJewelryChange({ target: { name: 'mainDiamondID', value } })}
                                                                    required
                                                                >
                                                                    <Option value="">Chọn viên chính</Option>
                                                                    {diamondData.main.map(diamond => (
                                                                        <Option key={diamond.mainDiamondID} value={diamond.mainDiamondID}>{diamond.mainDiamondName}</Option>
                                                                    ))}
                                                                </Select>
                                                            </div>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="mainDiamondQuantity">Số lượng viên chính</label>
                                                                <InputNumber
                                                                    id="mainDiamondQuantity"
                                                                    name="mainDiamondQuantity"
                                                                    placeholder="Nhập số lượng kim cương chính"
                                                                    min={0}
                                                                    style={{ width: '202.4px', height: '48.8px' }}
                                                                    value={newProductJewelry.mainDiamondQuantity}
                                                                    onChange={(value) => handleNewJewelryChange({ target: { name: 'mainDiamondQuantity', value } })}
                                                                    required
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                                        <InputNumber
                                                            id="basePrice"
                                                            name="basePrice"
                                                            style={{ width: '202.4px', height: '48.8px' }}
                                                            min={0}
                                                            placeholder="Nhập giá gốc sản phẩm"
                                                            value={newProductJewelry.basePrice}
                                                            onChange={(value) => handleNewJewelryChange({ target: { name: 'basePrice', value } })}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>

                                                <div className="admin-page-add-product-form-group-row">
                                                    {newProductJewelry.categoryName !== 'Dây chuyền' && (
                                                        <>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="sideDiamondID">Viên phụ</label>
                                                                <Select
                                                                    id="sideDiamondID"
                                                                    name="sideDiamondID"
                                                                    style={{ width: '202.4px', height: '48.8px' }}
                                                                    value={newProductJewelry.sideDiamondID}
                                                                    onChange={(value) => handleNewJewelryChange({ target: { name: 'sideDiamondID', value } })}
                                                                    required
                                                                >
                                                                    <Option value="">Chọn viên phụ</Option>
                                                                    {diamondData.side.map(diamond => (
                                                                        <Option key={diamond.sideDiamondID} value={diamond.sideDiamondID}>{diamond.sideDiamondName}</Option>
                                                                    ))}
                                                                </Select>
                                                            </div>
                                                            <div className="admin-page-add-product-form-group">
                                                                <label htmlFor="sideDiamondQuantity">Số lượng viên phụ</label>
                                                                <InputNumber
                                                                    id="sideDiamondQuantity"
                                                                    name="sideDiamondQuantity"
                                                                    min={0}
                                                                    style={{ width: '202.4px', height: '48.8px' }}
                                                                    value={newProductJewelry.sideDiamondQuantity}
                                                                    onChange={(value) => handleNewJewelryChange({ target: { name: 'sideDiamondQuantity', value } })}
                                                                    required
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="markupPrice">Giá bán</label>
                                                        <InputNumber
                                                            id="markupPrice"
                                                            name="markupPrice"
                                                            style={{ width: '202.4px', height: '48.8px' }}
                                                            placeholder="Nhập giá bán"
                                                            value={newProductJewelry.markupPrice}
                                                            onChange={(value) => handleNewJewelryChange({ target: { name: 'markupPrice', value } })}
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
                                                    {newProductJewelry.categoryName === 'Nhẫn' && (
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="size">Ni</label>
                                                            <Select
                                                                id="size"
                                                                name="size"
                                                                value={newProductJewelry.size}
                                                                onChange={(value) => handleNewJewelryChange({ target: { name: 'size', value } })}
                                                            >
                                                                {Array.from({ length: 11 }, (_, i) => i + 10).map(size => (
                                                                    <Option key={size} value={size}>{size}</Option>
                                                                ))}
                                                            </Select>
                                                        </div>
                                                    )}

                                                </div>

                                                <div className="admin-page-add-product-form-group">
                                                    <label htmlFor="description">Mô tả sản phẩm</label>
                                                    <ReactQuill
                                                        id="description"
                                                        name="description"
                                                        value={newProductJewelry.description}
                                                        onChange={(value) => setNewProductJewelry({ ...newProductJewelry, description: value })}
                                                    />
                                                </div>
                                                <div className="admin-page-add-product-form-group">
                                                    <Button type="primary" htmlType="submit">Thêm mới</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {isEditModalOpen && selectedProduct && (
                            <div className="admin-page-edit-overlay">
                                <div className="admin-page-edit-modal">
                                    <button className="admin-page-edit-close-button" onClick={closeEditModal}>&times;</button>
                                    <div className="admin-page-edit-modal-content">
                                        <div className="admin-page-edit-image-column">
                                            <img src={editProductJewelry.imageUrls[0]} alt="Product Image" className="admin-page-edit-large-image" />
                                        </div>
                                        <div className="admin-page-edit-info-column">
                                            <form onSubmit={updateJewelryProduct}>
                                                <div className="admin-page-edit-product-form-group">
                                                    <Input
                                                        type="hidden"
                                                        id="jewelryID"
                                                        name="jewelryID"
                                                        value={editProductJewelry.jewelryID}
                                                        onChange={handleEditJewelryChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-edit-product-form-group">
                                                    <label htmlFor="productName">Tên sản phẩm</label>
                                                    <Input
                                                        type="text"
                                                        id="productName"
                                                        name="productName"
                                                        placeholder="Nhập tên sản phẩm"
                                                        value={editProductJewelry.productName}
                                                        onChange={handleEditJewelryChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="admin-page-edit-product-form-group-row">
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="jewelrySettingID">Chất liệu</label>
                                                        <Select
                                                            id="jewelrySettingID"
                                                            name="jewelrySettingID"
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            value={editProductJewelry.jewelrySettingID}
                                                            onChange={(value) => handleEditJewelryChange({ target: { name: 'jewelrySettingID', value } })}
                                                        >
                                                            <Option value="">Chọn chất liệu</Option>
                                                            {materialData.map(material => (
                                                                <Option key={material.jewelrySettingID} value={material.jewelrySettingID}>{material.material}</Option>
                                                            ))}
                                                        </Select>
                                                    </div>
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="markupRate">Tỉ lệ áp giá</label>
                                                        <InputNumber
                                                            id="markupRate"
                                                            name="markupRate"
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            min={0.1}
                                                            placeholder="Nhập tỉ lệ áp giá"
                                                            value={editProductJewelry.markupRate}
                                                            onChange={(value) => handleEditJewelryChange({ target: { name: 'markupRate', value } })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="admin-page-edit-product-form-group-row">
                                                    {editProductJewelry.categoryId !== 2 && (
                                                        <>
                                                            <div className="admin-page-edit-product-form-group">
                                                                <label htmlFor="mainDiamondID">Viên chính</label>
                                                                <Select
                                                                    id="mainDiamondID"
                                                                    name="mainDiamondID"
                                                                    style={{ width: '100%', height: '46.74px' }}
                                                                    value={editProductJewelry.mainDiamondID}
                                                                    onChange={(value) => handleEditJewelryChange({ target: { name: 'mainDiamondID', value } })}
                                                                >
                                                                    <Option value="">Chọn viên chính</Option>
                                                                    {diamondData.main.map(diamond => (
                                                                        <Option key={diamond.mainDiamondID} value={diamond.mainDiamondID}>{diamond.mainDiamondName}</Option>
                                                                    ))}
                                                                </Select>
                                                            </div>
                                                            <div className="admin-page-edit-product-form-group">
                                                                <label htmlFor="mainDiamondQuantity">Số lượng viên chính</label>
                                                                <InputNumber
                                                                    id="mainDiamondQuantity"
                                                                    name="mainDiamondQuantity"
                                                                    min={0}
                                                                    style={{ width: '100%', height: '46.74px' }}
                                                                    placeholder="Nhập số lượng kim cương chính"
                                                                    value={editProductJewelry.mainDiamondQuantity}
                                                                    onChange={(value) => handleEditJewelryChange({ target: { name: 'mainDiamondQuantity', value } })}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="basePrice">Giá gốc sản phẩm</label>
                                                        <InputNumber
                                                            id="basePrice"
                                                            name="basePrice"
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            min={0}
                                                            placeholder="Nhập giá gốc sản phẩm"
                                                            value={editProductJewelry.basePrice}
                                                            onChange={(value) => handleEditJewelryChange({ target: { name: 'basePrice', value } })}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="admin-page-edit-product-form-group-row">
                                                    {editProductJewelry.categoryId !== 2 && (
                                                        <>
                                                            <div className="admin-page-edit-product-form-group">
                                                                <label htmlFor="sideDiamondID">Viên phụ</label>
                                                                <Select
                                                                    id="sideDiamondID"
                                                                    name="sideDiamondID"
                                                                    style={{ width: '100%', height: '46.74px' }}
                                                                    value={editProductJewelry.sideDiamondID}
                                                                    onChange={(value) => handleEditJewelryChange({ target: { name: 'sideDiamondID', value } })}
                                                                >
                                                                    <Option value="">Chọn viên phụ</Option>
                                                                    {diamondData.side.map(diamond => (
                                                                        <Option key={diamond.sideDiamondID} value={diamond.sideDiamondID}>{diamond.sideDiamondName}</Option>
                                                                    ))}
                                                                </Select>
                                                            </div>
                                                            <div className="admin-page-edit-product-form-group">
                                                                <label htmlFor="sideDiamondQuantity">Số lượng viên phụ</label>
                                                                <InputNumber
                                                                    id="sideDiamondQuantity"
                                                                    name="sideDiamondQuantity"
                                                                    min={0}
                                                                    style={{ width: '100%', height: '46.74px' }}
                                                                    placeholder="Nhập số lượng kim cương phụ"
                                                                    value={editProductJewelry.sideDiamondQuantity}
                                                                    onChange={(value) => handleEditJewelryChange({ target: { name: 'sideDiamondQuantity', value } })}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                    <div className="admin-page-edit-product-form-group">
                                                        <label htmlFor="markupPrice">Giá bán</label>
                                                        <InputNumber
                                                            id="markupPrice"
                                                            name="markupPrice"
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            placeholder="Nhập giá bán"
                                                            value={editProductJewelry.markupPrice}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                                <div className="admin-page-add-product-form-group-row">
                                                    {selectedProduct.categoryId === 1 && (
                                                        <div className="admin-page-add-product-form-group">
                                                            <label htmlFor="size-select">Ni:</label>
                                                            <Select
                                                                id="size-select"
                                                                value={selectedSize}
                                                                style={{ width: '100%', height: '46.74px' }}
                                                                onChange={(value) => setSelectedSize(value)}
                                                            >
                                                                <Option value="">Chọn ni</Option>
                                                                {jewelrySize
                                                                    .filter(item => item.jewelryID === selectedProduct.jewelryID)
                                                                    .sort((a, b) => a.size - b.size)
                                                                    .map(item => (
                                                                        <Option key={item.jewelrySizeID} value={item.size}>{item.size}</Option>
                                                                    ))}
                                                            </Select>
                                                        </div>
                                                    )}
                                                    <div className="admin-page-add-product-form-group">
                                                        <label htmlFor="quantity-input">Số lượng:</label>
                                                        <InputNumber
                                                            id="quantity-input"
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            placeholder='Nhập số lượng'
                                                            value={quantity}
                                                            onChange={(value) => handleEditJewelryChange({ target: { name: 'quantity', value } })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="admin-page-edit-account-form-group">
                                                        <label>Trạng thái:</label>
                                                        <Select
                                                            name="isActive"
                                                            value={editProductJewelry.isActive}
                                                            style={{ width: '100%', height: '46.74px' }}
                                                            onChange={(value) => handleEditJewelryChange({ target: { name: 'isActive', value } })}
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
                                                        value={editProductJewelry.description}
                                                        onChange={(value) => handleEditJewelryChange({ target: { name: 'description', value } })}
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
export default SanPham;
