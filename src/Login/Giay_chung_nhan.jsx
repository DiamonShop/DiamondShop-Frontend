import React, { useEffect, useState } from "react";
import { decodeToken } from "../api/TokenAPI";
import { handleUserProfile } from "../api/UserProfile";
import { getCertificateImageUrls } from "../FirebaseImage/firebaseHelper"; // Đảm bảo import đúng hàm
import { handleGetCetificateByUserId } from "../api/CertificateAPI";

const Giay_chung_nhan = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found");
                return;
            }

            const decode = decodeToken(token);

            const certificateData = await handleGetCetificateByUserId(decode.sid) // Gọi API để lấy dữ liệu chứng chỉ

            if (certificateData) {
                // Fetch image URLs for the certificates
                const certificatesWithImages = await Promise.all(
                    certificateData.map(async (certificate) => {
                        if (certificate.productId) {
                            const imageUrls = await getCertificateImageUrls(certificate.productId);
                            return {
                                ...certificate,
                                imageUrl: imageUrls.imageUrl
                            };
                        } else {
                            return {
                                ...certificate,
                                imageUrl: null
                            };
                        }
                    })
                );
                setCertificates(certificatesWithImages);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="myaccount-content">
                <h5>Giấy chứng nhận GIA</h5>
                <div className="myaccount-table table-responsive text-center">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Ảnh GIA</th>
                                <th>Chi tiết</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificates.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center" style={{ fontSize: '20px', fontStyle: 'italic', color: 'red' }}>
                                        Không có giấy chứng nhận
                                    </td>
                                </tr>
                            ) : (
                                certificates.map((certificate) => (
                                    <tr key={certificate.productId}>
                                        <td>{certificate.productId}</td>
                                        <td>{certificate.productName}</td>
                                        <td>
                                            {certificate.imageUrl ? (
                                                <img src={certificate.imageUrl} alt={`GIA for ${certificate.productName}`} style={{ width: '100px', height: '100px' }} />
                                            ) : (
                                                'N/A'
                                            )}
                                        </td>
                                        <td>
                                            {certificate.imageUrl ? (
                                                <a href={certificate.imageUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sqr-chitietdondang">
                                                    Xem
                                                </a>
                                            ) : (
                                                'Không có ảnh để xem'
                                            )}
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

export default Giay_chung_nhan;
