import React, {useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BannerHome from '../../components/BannerHome';
import Service_policy from '../../components/Service_policy';
import Sanphamnoibat from '../../components/Sanphamnoibat';
import Main_banner from '../../components/Main_banner';
import Main_product from '../../components/Main_product';
import Main_bestseller_product from '../../components/Main_bestseller_product';
import { handleUpdateStatusToPending } from '../../api/OrderAPI';
import { decodeToken } from '../../api/TokenAPI';

export default function Home() {
    const location = useLocation();
    const handleProductClick = (product) => {
        localStorage.setItem('product', JSON.stringify(product));
    }

    const getUserId = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            const userId = decodeToken(token).sid;
            const status = await handleUpdateStatusToPending(userId);
        }
    }

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const message = params.get('message');
        if (message) {
            toast.info(message);
            if (message === "Payment Successful") {
                getUserId();
            } else {

            }
        }
    }, [location]);

    return (
        <div>
            <ToastContainer />
            <BannerHome />
            <Service_policy />
            <Sanphamnoibat onProductClick={handleProductClick} />
            <Main_banner />
            <Main_product onProductClick={handleProductClick}/>
            

        </div>
    );
}
