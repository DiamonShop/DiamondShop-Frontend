import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Bang_gia_kim_cuong() {
    const [diamondData, setDiamondData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://localhost:7101/api/DiamondPrices/Pricesdiamonds')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched Data:', data); // Debugging log
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
                <table>
                    <thead>
                        <tr>
                            <th>Color / Clarity</th>
                            {clarities.map(clarity => <th key={clarity}>{clarity}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {colors.map(color => (
                            <tr key={color}>
                                <td>{color}</td>
                                {clarities.map(clarity => <td key={clarity}>{getPriceForClarityAndColor(clarity, color)}</td>)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Bảng giá kim cương</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="diamond-price-list-header-notes">
                <p>* Đơn vị tính: VND</p>
                <p>* Áp dụng từ ngày 01/06</p>
                <p>* Giá có thể thay đổi mà không cần báo trước. Vui lòng cập nhật giá mới nhất tại cửa hàng hoặc website</p>
            </div>

            {loading ? <p>Loading data...</p> : diamondData.length > 0 ? diamondData.map(group => renderTable(group.diameterMM, group.diamonds)) : <p>No data available</p>}
        </div>
    );
}
