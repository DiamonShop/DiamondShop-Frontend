import React, { useEffect } from 'react'
import Sanphambanchay from './Sanphambanchay';

function Main_bestseller_product() {
    
    return (
        <div>
            <section className="group-product-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="group-product-banner">
                                <figure className="banner-statistics">
                                        <img src="assets/img/banner/z5567897593865_9e3161a46de6a674988b6133feee7fb3.jpg" alt="product banner" />             
                                </figure>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="categories-group-wrapper">                    
                                <Sanphambanchay/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main_bestseller_product
