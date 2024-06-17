import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerHome from '../../components/BannerHome';
import Service_policy from '../../components/Service_policy';
import Sanphamnoibat from '../../components/Sanphamnoibat';
import Main_banner from '../../components/Main_banner';
import Main_product from '../../components/Main_product';
import Main_bestseller_product from '../../components/Main_bestseller_product';
import Logo_brand from '../../components/Logo_brand';


export default function Home() {
   
    return (
        <div>

        <BannerHome/>
        <Service_policy/>
        <Sanphamnoibat/>
        
            
        <Main_banner/>
        <Main_product/>
        <Main_bestseller_product/>
        <Logo_brand/>

           

        </div>
    )
}
