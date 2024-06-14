import React from 'react'
import { Link } from 'react-router-dom';
export default function Bang_gia_kim_cuong() {
  return (
    <div> 
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="fa fa-home"></i></Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Bảng giá kim cương</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="diamond-price-list-header-notes">
                <p>* Đơn vị tính: VND</p>
                <p>* Áp dụng từ ngày 01/06</p>
                <p>* Giá có thể thay đổi mà không cần báo trước. Vui lòng cập nhật giá mới nhất tại cửa hàng hoặc website</p>
            </div>

            <div class="diamond-price-list">
                <h1 className='hightlight-color'>Giá Kim Cương <span class="highlight">4ly5</span>. Kiểm định GIA. Giác cắt Excellent</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Color / Clarity</th>
                            <th>IF</th>
                            <th>VVS1</th>   
                            <th>VVS2</th>
                            <th>VS1</th>
                            <th>VS2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>D</td>
                            <td>37,880,000</td>
                            <td>32,730,000</td>
                            <td>29,515,000</td>
                            <td>25,978,000</td>
                            <td>24,617,000</td>
                        </tr>
                        <tr>
                            <td>E</td>
                            <td>33,680,000</td>
                            <td>30,030,000</td>
                            <td>28,950,000</td>
                            <td>24,170,000</td>
                            <td>22,878,000</td>
                        </tr>
                        <tr>
                            <td>F</td>
                            <td>29,690,000</td>
                            <td>28,890,000</td>
                            <td>27,889,000</td>
                            <td>22,438,000</td>
                            <td>21,582,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="diamond-price-list">
                <h1 className='hightlight-color'>Giá Kim Cương <span class="highlight">4ly5</span>. Kiểm định GIA. Giác cắt Excellent</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Color / Clarity</th>
                            <th>IF</th>
                            <th>VVS1</th>   
                            <th>VVS2</th>
                            <th>VS1</th>
                            <th>VS2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>D</td>
                            <td>37,880,000</td>
                            <td>32,730,000</td>
                            <td>29,515,000</td>
                            <td>25,978,000</td>
                            <td>24,617,000</td>
                        </tr>
                        <tr>
                            <td>E</td>
                            <td>33,680,000</td>
                            <td>30,030,000</td>
                            <td>28,950,000</td>
                            <td>24,170,000</td>
                            <td>22,878,000</td>
                        </tr>
                        <tr>
                            <td>F</td>
                            <td>29,690,000</td>
                            <td>28,890,000</td>
                            <td>27,889,000</td>
                            <td>22,438,000</td>
                            <td>21,582,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}
