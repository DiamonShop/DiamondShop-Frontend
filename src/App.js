import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './MainLayout';
import DashboardLayout from './DashboardLayout';
import PaymentLayout from './PaymentLayout';
import Home from './pages/customer/Home';
import Nhan from './pages/customer/Products/Nhan';
import Day_chuyen from './pages/customer/Products/Day_chuyen';
import Vong_tay from './pages/customer/Products/Vong_tay';
import Mat_day_chuyen from './pages/customer/Products/Mat_day_chuyen';
import Kim_cuong from './pages/customer/Products/Kim_cuong';
import Kim_cuong_3_6 from './pages/customer/Products/Kim_cuong_3.6';
import About_us from './pages/customer/About_us';
import Chinh_sach from './pages/customer/Chinh_sach';
import Dang_nhap from './Login/Dang_nhap';
import Dang_ki from './Login/Dang_ki';
import Thong_tin_tk from './Login/Thong_tin_tk';
import Chi_tiet_san_pham from './pages/customer/Products/Chi_tiet_san_pham';
import Lien_he from './pages/customer/Lien_he';
import Gio_hang from './pages/cart/Gio_hang';
import Bang_gia_kim_cuong from './pages/customer/Bang_gia_kim_cuong';
import Chi_tiet_san_pham_kc from './pages/customer/Products/Chi_tiet_san_pham_kc';
import Dashboard from './pages/Admin&Manager/Dashboard';
import Chinh_sach_bao_mat from './pages/customer/Chinh_sach_bao_mat';
import Thanh_toan from './pages/cart/Thanh_toan';
import FirebaseImageUpload from './FirebaseImage/FirebaseImageUpload';
import San_Pham from './pages/Admin&Manager/San_Pham';
import Tai_Khoan from './pages/Admin&Manager/Tai_Khoan';
import Don_Hang from './pages/Admin&Manager/Don_Hang';
import { UserProvider } from './UserContext';
import Huong_dan_do_ni from './pages/customer/Products/Huong_dan_do_ni';
import Chinh_sach_giao_hang from './pages/customer/Chinh_sach_giao_hang';
import ScrollToTop from './components/ScrollToTop';
import Ket_qua_tim_kiem from './pages/customer/Products/Ket_qua_tim_kiem';
import Kim_cuong_4_1 from './pages/customer/Products/Kim_cuong_4.1';
import Kim_cuong_4_5 from './pages/customer/Products/Kim_cuong_4.5';
import Kim_cuong_5_4 from './pages/customer/Products/Kim_cuong_5.4';
import Chi_tiet_don_hang from './pages/cart/Chi_tiet_don_hang';
import Dat_hang_thanh_cong from './pages/cart/Dat_hang_thanh_cong';
import ShipperLayout from './ShipperLayout';
import Shipper from './pages/ShipperPage/Shipper';
import KimCuong from './pages/Admin&Manager/Kim_Cuong';
import Bang_gia_kim_cuong_Dashboard from './pages/Admin&Manager/Bang_gia_kim_cuong_Dashboard';
function App({ tokenIsValid }) {

  //Lưu product để khi reload sẽ không bị lỗi
  const handleProductClick = (product) => {
    localStorage.setItem('product', JSON.stringify(product));
  }

  return (
    <div>
      <UserProvider>      
        <Router>
        <ScrollToTop/>
            <Routes>
              <Route path="/" element={<MainLayout tokenIsValid={tokenIsValid}><Home /></MainLayout>} />
              <Route path="/Nhẫn" element={<MainLayout tokenIsValid={tokenIsValid}><Nhan onProductClick={handleProductClick} /></MainLayout>} />
              <Route path='/Dây chuyền' element={<MainLayout tokenIsValid={tokenIsValid}><Day_chuyen onProductClick={handleProductClick} /></MainLayout>} />
              <Route path='/Mặt dây chuyền' element={<MainLayout tokenIsValid={tokenIsValid}><Mat_day_chuyen onProductClick={handleProductClick} /></MainLayout>} />
              <Route path='/Vòng tay' element={<MainLayout tokenIsValid={tokenIsValid}><Vong_tay onProductClick={handleProductClick}/></MainLayout>} />
              <Route path='/Kimcuong' element={<MainLayout tokenIsValid={tokenIsValid}><Kim_cuong onProductClick={handleProductClick} /></MainLayout>} />
              <Route path='/Kimcuong3.6' element={<MainLayout tokenIsValid={tokenIsValid}><Kim_cuong_3_6 onProductClick={handleProductClick}/></MainLayout>} />
              <Route path='/Kimcuong4.1' element={<MainLayout tokenIsValid={tokenIsValid}><Kim_cuong_4_1 onProductClick={handleProductClick}/></MainLayout>} />
              <Route path='/Kimcuong4.5' element={<MainLayout tokenIsValid={tokenIsValid}><Kim_cuong_4_5 onProductClick={handleProductClick}/></MainLayout>} />
              <Route path='/Kimcuong5.4' element={<MainLayout tokenIsValid={tokenIsValid}><Kim_cuong_5_4 onProductClick={handleProductClick}/></MainLayout>} />
              <Route path='/Vechungtoi' element={<MainLayout tokenIsValid={tokenIsValid}><About_us /></MainLayout>} />
              <Route path='/Chinhsach' element={<MainLayout tokenIsValid={tokenIsValid}><Chinh_sach /></MainLayout>} />
              <Route path='/Dangnhap' element={<MainLayout tokenIsValid={tokenIsValid}><Dang_nhap /></MainLayout>} />
              <Route path='/Dangki' element={<MainLayout tokenIsValid={tokenIsValid}><Dang_ki /></MainLayout>} />
              <Route path='/Thongtintk' element={<MainLayout tokenIsValid={tokenIsValid}><Thong_tin_tk /></MainLayout>} />
              <Route path='/Chitietsanpham' element={<MainLayout tokenIsValid={tokenIsValid}><Chi_tiet_san_pham /></MainLayout>} /> 
              <Route path='/Chitietsanphamkimcuong' element={<MainLayout tokenIsValid={tokenIsValid}><Chi_tiet_san_pham_kc /></MainLayout>} />
              <Route path='/Lienhe' element={<MainLayout tokenIsValid={tokenIsValid}><Lien_he /></MainLayout>} />
              <Route path='/Giohang' element={<MainLayout tokenIsValid={tokenIsValid}><Gio_hang /></MainLayout>} />
              <Route path='/Chitietdonhang' element={<MainLayout tokenIsValid={tokenIsValid}><Chi_tiet_don_hang/></MainLayout>} />
              <Route path='/Banggiakimcuong' element={<MainLayout tokenIsValid={tokenIsValid}><Bang_gia_kim_cuong /></MainLayout>} />
              <Route path='/Dashboard' element={<DashboardLayout tokenIsValid={tokenIsValid}><Dashboard /></DashboardLayout>} />
              <Route path='/Thanhtoan' element={<MainLayout tokenIsValid={tokenIsValid}><Thanh_toan /></MainLayout>} />
              <Route path='/Dashboard' element={<DashboardLayout tokenIsValid={tokenIsValid}><Dashboard /></DashboardLayout>} />
              <Route path='/TrangSuc' element={<DashboardLayout tokenIsValid={tokenIsValid}><San_Pham /></DashboardLayout>} />
              <Route path='/GiaKimCuong' element={<DashboardLayout tokenIsValid={tokenIsValid}><Bang_gia_kim_cuong_Dashboard /></DashboardLayout>} />
              <Route path='/KimCuongDashboard' element={<DashboardLayout tokenIsValid={tokenIsValid}><KimCuong /></DashboardLayout>} />
              <Route path='/TaiKhoan' element={<DashboardLayout tokenIsValid={tokenIsValid}><Tai_Khoan /></DashboardLayout>} />
              <Route path='/Uploadimg' element={<DashboardLayout tokenIsValid={tokenIsValid}><FirebaseImageUpload /></DashboardLayout>} />
              <Route path='/DonHang' element={<DashboardLayout tokenIsValid={tokenIsValid}><Don_Hang /></DashboardLayout>} />
              <Route path='/Chinhsachbaomat' element={<MainLayout tokenIsValid={tokenIsValid}><Chinh_sach_bao_mat /></MainLayout>} />
              <Route path='/Huongdandoni' element={<MainLayout tokenIsValid={tokenIsValid}><Huong_dan_do_ni /></MainLayout>} />
              <Route path='/Chinhsachgiaohang' element={<MainLayout tokenIsValid={tokenIsValid}><Chinh_sach_giao_hang /></MainLayout>} />
              <Route path='/Ketquatimkiem' element={<MainLayout tokenIsValid={tokenIsValid}><Ket_qua_tim_kiem onProductClick={handleProductClick}/></MainLayout>} />
              <Route path='/Thanhtoanthanhcong' element={<PaymentLayout tokenIsValid={tokenIsValid}><Dat_hang_thanh_cong/></PaymentLayout>} />
              <Route path='/Shipper' element={<ShipperLayout tokenIsValid={tokenIsValid}><Shipper/></ShipperLayout>}/>
            </Routes>
            
        </Router>
        
      </UserProvider>

    </div>
  );
}

export default App;
