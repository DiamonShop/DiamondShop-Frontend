
import './App.css';
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
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/customer/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nhan from './pages/customer/Products/Nhan';
import Day_chuyen from './pages/customer/Products/Day_chuyen';
import Vong_tay from './pages/customer/Products/Vong_tay';
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
function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nhan" element={<Nhan />} />
          <Route path='/Daychuyen'element={<Day_chuyen />} />
          <Route path='/Vongtay'element={<Vong_tay />} />
          <Route path='/Kimcuong'element={<Kim_cuong />} />
          <Route path='/Vechungtoi'element={<About_us />} />
          <Route path='/Chinhsach'element={<Chinh_sach />} />
          <Route path='/Yeuthich'element={<Wishlist />} />
          <Route path='/Dangnhap'element={<Dang_nhap />} />
          <Route path='/Dangki'element={<Dang_ki />} />
          <Route path='/Dashboard'element={<Dashboard />} />
          <Route path='/Thongtintk'element={<Thong_tin_tk />} />
          <Route path='/Chitietsanpham'element={<Chi_tiet_san_pham />} />
          <Route path='/Chitietsanpham-kim-cuong'element={<Chi_tiet_san_pham_kc />} />
          <Route path='/Lienhe'element={<Lien_he />} />
          <Route path='/Giohang'element={<Gio_hang />} />
          <Route path='/Banggiakimcuong'element={<Bang_gia_kim_cuong />} />
        </Routes>

        <Footer />
      </Router>
      
    </div>

  );
}

export default App;
