
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './MainLayout';
import DashboardLayout from './DashboardLayout';
import Home from './pages/customer/Home';
import Nhan from './pages/customer/Products/Nhan';
import Day_chuyen from './pages/customer/Products/Day_chuyen';
import Vong_tay from './pages/customer/Products/Vong_tay';
import Mat_day_chuyen from './pages/customer/Products/Mat_day_chuyen';
import Kim_cuong from './pages/customer/Products/Kim_cuong';
import About_us from './pages/customer/About_us';
import Chinh_sach from './pages/customer/Chinh_sach';
import Wishlist from './pages/customer/Wishlist';
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

import Bang_Dieu_Khien from './pages/Admin&Manager/Bang_Dieu_Khien';
import San_Pham from './pages/Admin&Manager/San_Pham';
import Tai_Khoan from './pages/Admin&Manager/Tai_Khoan';
import Don_Hang from './pages/Admin&Manager/Don_Hang';
import { UserProvider } from './UserContext';
import { useUser } from './UserContext';

function App({ tokenIsValid }) {
  const { user } = useUser();
  return (
    <div>
       <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout tokenIsValid={tokenIsValid}><Home /></MainLayout>} />
          <Route path="/Nhan" element={<MainLayout tokenIsValid={tokenIsValid}><Nhan /></MainLayout>} />
          <Route path='/Daychuyen' element={<MainLayout tokenIsValid={tokenIsValid}><Day_chuyen /></MainLayout>} />
          <Route path='/Matdaychuyen' element={<MainLayout tokenIsValid={tokenIsValid}><Mat_day_chuyen/></MainLayout>} />
          <Route path='/Vongtay' element={<MainLayout tokenIsValid={tokenIsValid} ><Vong_tay /></MainLayout>} />
          <Route path='/Kimcuong' element={<MainLayout tokenIsValid={tokenIsValid}><Kim_cuong /></MainLayout>} />
          <Route path='/Vechungtoi' element={<MainLayout tokenIsValid={tokenIsValid}><About_us /></MainLayout>} />
          <Route path='/Chinhsach' element={<MainLayout tokenIsValid={tokenIsValid}><Chinh_sach /></MainLayout>} />
          <Route path='/Dangnhap' element={<MainLayout tokenIsValid={tokenIsValid}><Dang_nhap /></MainLayout>} />
          <Route path='/Dangki' element={<MainLayout tokenIsValid={tokenIsValid}><Dang_ki /></MainLayout>} />
          <Route path='/Thongtintk' element={<MainLayout tokenIsValid={tokenIsValid}><Thong_tin_tk /></MainLayout>} />
          <Route path='/Chitietsanpham' element={<MainLayout tokenIsValid={tokenIsValid} ><Chi_tiet_san_pham /></MainLayout>} />
          <Route path='/Chitietsanpham-kim-cuong' element={<MainLayout tokenIsValid={tokenIsValid}><Chi_tiet_san_pham_kc /></MainLayout>} />
          <Route path='/Lienhe' element={<MainLayout tokenIsValid={tokenIsValid}><Lien_he /></MainLayout>} />
          <Route path='/Giohang' element={<MainLayout tokenIsValid={tokenIsValid}><Gio_hang /></MainLayout>} />
          <Route path='/Banggiakimcuong' element={<MainLayout tokenIsValid={tokenIsValid} ><Bang_gia_kim_cuong /></MainLayout>} />
          <Route path='/Dashboard' element={<DashboardLayout tokenIsValid={tokenIsValid} ><Dashboard /></DashboardLayout>} />
          <Route path='/Thanhtoan' element={<MainLayout tokenIsValid={tokenIsValid}><Thanh_toan/></MainLayout>} />
          <Route path='/BangDieuKhien' element={<DashboardLayout tokenIsValid={tokenIsValid} ><Bang_Dieu_Khien /></DashboardLayout>} />
          <Route path='/SanPham' element={<DashboardLayout tokenIsValid={tokenIsValid}><San_Pham /></DashboardLayout>} />
          <Route path='/TaiKhoan' element={<DashboardLayout tokenIsValid={tokenIsValid}><Tai_Khoan /></DashboardLayout>} />
          <Route path='/DonHang' element={<DashboardLayout tokenIsValid={tokenIsValid}><Don_Hang /></DashboardLayout>} />
          <Route path='/Chinhsachbaomat' element={<MainLayout tokenIsValid={tokenIsValid}><Chinh_sach_bao_mat /></MainLayout>} />
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
