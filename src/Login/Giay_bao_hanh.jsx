import React, { useEffect, useState } from "react";
import { handleGetWarrantyByUserId } from "../api/WarrantyAPI";
import GenerateWarrantyPDF from './GenerateWarrantyPDF';
import { decodeToken } from "../api/TokenAPI";
import { handleUserProfile } from "../api/UserProfile";

const Giay_bao_hanh = () => {
    const [warranties, setWarranties] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found");
                return;
            }

            const decode = decodeToken(token);
            const userProfile = await handleUserProfile(decode.sid);
            setUser(userProfile);

            const warrantyData = await handleGetWarrantyByUserId(decode.sid);
            if (warrantyData) {
                setWarranties(warrantyData);
            }
        };

        fetchData();
    }, []);

    if (!user) {
        return <div>Loading...</div>; // Hiển thị loading khi dữ liệu người dùng chưa được tải xong
    }

    return (
        <div>
            <div className="myaccount-content" style={{ width: '100%' }}>
                <h5>Giấy bảo hành</h5>
                <div className="myaccount-table table-responsive text-center">
                    <table>
                        <thead className="thead-light">
                            <tr>
                                <th>Mã bảo hành</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Tên sản phẩm</th>
                                <th>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {warranties.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center" style={{ fontSize: '20px', fontStyle: 'italic', color: 'red' }}>
                                        Không có giấy bảo hành
                                    </td>
                                </tr>
                            ) : (
                                warranties.map((warranty) => (
                                    <tr key={warranty.warrantyId}>
                                        <td>{warranty.warrantyId}</td>
                                        <td>{warranty.startDate}</td>
                                        <td>{warranty.endDate}</td>
                                        <td>{warranty.productName}</td>
                                        <td>
                                            <GenerateWarrantyPDF
                                                customerName={warranty.username}
                                                productName={warranty.productName}
                                                warrantyFrom={warranty.startDate}
                                                warrantyTo={warranty.endDate}
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Giay_bao_hanh;
