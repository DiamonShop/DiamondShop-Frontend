import React from 'react'
import Navbar_left_dash from '../../components/Navbar_left_dash'

export default function Dashboard() {
    return (
        <div>
            
            <div class="content">
                <div class="container-fluid p-0">

                    <h1 class="h3 mb-3">Bảng điều khiển <strong> phân tích</strong> </h1>

                    <div class="row">
                        <div class="col-xl-6 col-xxl-5 d-flex">
                            <div class="w-100">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Doanh số</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="truck"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">2.382</h1>
                                                <div class="mb-0">
                                                    <span class="text-danger">-3.65%</span>
                                                    <span class="text-muted">Kể từ tuần trước</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Người xem</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="users"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">14.212</h1>
                                                <div class="mb-0">
                                                    <span class="text-success">5.25%</span>
                                                    <span class="text-muted">Kể từ tuần trước</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Doanh thu</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="dollar-sign"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">$21.300</h1>
                                                <div class="mb-0">
                                                    <span class="text-success">6.65%</span>
                                                    <span class="text-muted">Kể từ tuần trước</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col mt-0">
                                                        <h5 class="card-title">Đơn hàng</h5>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="stat text-primary">
                                                            <i class="align-middle" data-feather="shopping-cart"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h1 class="mt-1 mb-3">64</h1>
                                                <div class="mb-0">
                                                    <span class="text-danger">-2.25%</span>
                                                    <span class="text-muted">Kể từ tuần trước</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-xxl-7">
                            <div class="card flex-fill w-100">
                                <div class="card-header">

                                    <h5 class="card-title mb-0">Biến động gần đây</h5>
                                </div>
                                <div class="card-body py-3">
                                    <div class="chart chart-sm">
                                        <canvas id="chartjs-dashboard-line"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12 col-lg-8 col-xxl-9 d-flex">
                            <div class="card flex-fill">
                                <div class="card-header">

                                    <h5 class="card-title mb-0">Dự án mới nhất</h5>
                                </div>
                                <table class="table table-hover my-0">
                                    <thead>
                                        <tr>
                                            <th>Tên</th>
                                            <th class="d-none d-xl-table-cell">Ngày bắt đầu</th>
                                            <th class="d-none d-xl-table-cell">Ngày kết thúc</th>
                                            <th>Status</th>
                                            <th class="d-none d-md-table-cell">Người được giao</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Project Apollo</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-success">Hoàn thành</span></td>
                                            <td class="d-none d-md-table-cell">Vanessa Tucker</td>
                                        </tr>
                                        <tr>
                                            <td>Project Fireball</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-danger">Bị hủy</span></td>
                                            <td class="d-none d-md-table-cell">William Harris</td>
                                        </tr>
                                        <tr>
                                            <td>Project Hades</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-success">Hoàn thành</span></td>
                                            <td class="d-none d-md-table-cell">Sharon Lessman</td>
                                        </tr>
                                        <tr>
                                            <td>Project Nitro</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-warning">Trong tiến trình</span></td>
                                            <td class="d-none d-md-table-cell">Vanessa Tucker</td>
                                        </tr>
                                        <tr>
                                            <td>Project Phoenix</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-success">Hoàn thành</span></td>
                                            <td class="d-none d-md-table-cell">William Harris</td>
                                        </tr>
                                        <tr>
                                            <td>Project X</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-success">Hoàn thành</span></td>
                                            <td class="d-none d-md-table-cell">Sharon Lessman</td>
                                        </tr>
                                        <tr>
                                            <td>Project Romeo</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-success">Hoàn thành</span></td>
                                            <td class="d-none d-md-table-cell">Christina Mason</td>
                                        </tr>
                                        <tr>
                                            <td>Project Wombat</td>
                                            <td class="d-none d-xl-table-cell">01/01/2023</td>
                                            <td class="d-none d-xl-table-cell">31/06/2023</td>
                                            <td><span class="badge bg-warning">Trong tiến trình</span></td>
                                            <td class="d-none d-md-table-cell">William Harris</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-12 col-lg-4 col-xxl-3 d-flex">
                            <div class="card flex-fill w-100">
                                <div class="card-header">

                                    <h5 class="card-title mb-0">Doanh số hằng tháng</h5>
                                </div>
                                <div class="card-body d-flex w-100">
                                    <div class="align-self-center chart chart-lg">
                                        <canvas id="chartjs-dashboard-bar"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                    </div>
            </div>
            )
}
