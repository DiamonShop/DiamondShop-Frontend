import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleGetOrderByUserIdOrderId } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';
import { formatCurrency } from '../../utils/NumberFormat';
import { HandleGetAll } from '../../api/JewelryAPI';

function Chi_tiet_don_hang() {
    const [orderDetailLists, setOrderDetailLists] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const userId = decodeToken(token).sid;
                const selectedOrderId = localStorage.getItem('selectedOrderId');
                const data = await handleGetOrderByUserIdOrderId(parseInt(userId, 10), parseInt(selectedOrderId, 10));
                if (data) {
                    const allProducts = await HandleGetAll(); // Fetch all products
                    setProducts(allProducts);
                    const updatedData = data.map(order => ({
                        ...order,
                        orderDetails: order.orderDetails.map(detail => ({
                            ...detail,
                            ...allProducts.find(product => product.productID === detail.productID)
                        }))
                    }));
                    setOrderDetailLists(updatedData[0].orderDetails);
                }
            } else {
                setOrderDetailLists([]);
                setTotalPrice(0);
            }
        };

        fetchOrderDetails();
    }, []);

    useEffect(() => {
        if (orderDetailLists.length > 0) {
            const total = calculateTotalPrice(orderDetailLists);
            setTotalPrice(total);
        }
    }, [orderDetailLists]);

    const calculateTotalPrice = (orderDetails) => {
        let total = 0;
        for (const item of orderDetails) {
            total += item.unitPrice * item.quantity;
        }
        return total;
    };

    return (
        <div>
            <ToastContainer />
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Chi tiết đơn hàng</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-main-wrapper section-padding">
                <div className="container-giohang">
                    <div className="section-bg-color">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <div className="cart-table table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="pro-thumbnail">Hình ảnh</th>
                                                <th className="pro-title">Sản phẩm</th>
                                                <th className="pro-price">Đơn giá</th>
                                                <th className="pro-quantity">Số lượng</th>
                                                <th className="pro-subtotal">Giá</th>
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orderDetailLists.map((orderDetail, index) => (
                                                    <tr key={index}>
                                                        <td className="pro-thumbnail"><img className="img-fluid" src={orderDetail.image1} alt="Product" /></td>
                                                        <td className="pro-title">{orderDetail.productName}</td>
                                                        <td className="pro-price">{formatCurrency(orderDetail.unitPrice)} VND</td>
                                                        <td className="pro-quantity">{orderDetail.quantity}</td>
                                                        <td className="pro-subtotal">{formatCurrency(orderDetail.unitPrice * orderDetail.quantity)} VND</td>
                                                        
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chi_tiet_don_hang;
