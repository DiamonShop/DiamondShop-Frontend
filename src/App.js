

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Category from './api/CategoryAPI';

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Nhan from './components/Nhan';
// import Day_chuyen from './components/Day_chuyen';
// import Vong_tay from './components/Vong_tay';
// import Kim_cuong from './components/Kim_cuong';
// import About_us from './components/About_us';
// import Chinh_sach from './components/Chinh_sach';
// import Wishlist from './components/Wishlist';
// import Dang_nhap from './Login/Dang_nhap';
// import Dang_ki from './Login/Dang_ki';
// import Thong_tin_tk from './Login/Thong_tin_tk';
// import Chi_tiet_san_pham from './components/Chi_tiet_san_pham';
// import Lien_he from './components/Lien_he';
// import Gio_hang from './components/cart/Gio_hang';
// import getAllCategory from './api/CategoryAPI';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './MainLayout';
import DashboardLayout from './DashboardLayout';
import Home from './pages/customer/Home';
import Nhan from './pages/customer/Products/Nhan';
import Day_chuyen from './pages/customer/Products/Day_chuyen';
import Vong_tay from './pages/customer/Products/Vong_tay';
import Kim_cuong from './pages/customer/Products/Kim_cuong';
import About_us from './pages/customer/About_us';
import Chinh_sach from './pages/customer/Chinh_sach';
import Wishlist from './pages/customer/Wishlist';
import Dang_nhap from './Login/Dang_nhap';
import Thong_tin_tk from './Login/Thong_tin_tk';
import Chi_tiet_san_pham from './pages/customer/Products/Chi_tiet_san_pham';
import Lien_he from './pages/customer/Lien_he';
import Gio_hang from './pages/cart/Gio_hang';
import Bang_gia_kim_cuong from './pages/customer/Bang_gia_kim_cuong';
import Chi_tiet_san_pham_kc from './pages/customer/Products/Chi_tiet_san_pham_kc';
import Dashboard from './pages/Admin&Manager/Dashboard';
import Bang_Dieu_Khien from './pages/Admin&Manager/Bang_Dieu_Khien';
import San_Pham from './pages/Admin&Manager/San_Pham';
import Tai_Khoan from './pages/Admin&Manager/Tai_Khoan';
import Don_Hang from './pages/Admin&Manager/Don_Hang';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/Nhan" element={<MainLayout><Nhan /></MainLayout>} />
          <Route path='/Daychuyen' element={<MainLayout><Day_chuyen /></MainLayout>} />
          <Route path='/Vongtay' element={<MainLayout><Vong_tay /></MainLayout>} />
          <Route path='/Kimcuong' element={<MainLayout><Kim_cuong /></MainLayout>} />
          <Route path='/Vechungtoi' element={<MainLayout><About_us /></MainLayout>} />
          <Route path='/Chinhsach' element={<MainLayout><Chinh_sach /></MainLayout>} />
          <Route path='/Yeuthich' element={<MainLayout><Wishlist /></MainLayout>} />
          <Route path='/Dangnhap' element={<MainLayout><Dang_nhap /></MainLayout>} />
          <Route path='/Thongtintk' element={<MainLayout><Thong_tin_tk /></MainLayout>} />
          <Route path='/Chitietsanpham' element={<MainLayout><Chi_tiet_san_pham /></MainLayout>} />
          <Route path='/Chitietsanpham-kim-cuong' element={<MainLayout><Chi_tiet_san_pham_kc /></MainLayout>} />
          <Route path='/Lienhe' element={<MainLayout><Lien_he /></MainLayout>} />
          <Route path='/Giohang' element={<MainLayout><Gio_hang /></MainLayout>} />
          <Route path='/Banggiakimcuong' element={<MainLayout><Bang_gia_kim_cuong /></MainLayout>} />
          <Route path='/Dashboard' element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path='/BangDieuKhien' element={<DashboardLayout><Bang_Dieu_Khien /></DashboardLayout>} />
          <Route path='/SanPham' element={<DashboardLayout><San_Pham /></DashboardLayout>} />
          <Route path='/TaiKhoan' element={<DashboardLayout><Tai_Khoan /></DashboardLayout>} />
          <Route path='/DonHang' element={<DashboardLayout><Don_Hang /></DashboardLayout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
