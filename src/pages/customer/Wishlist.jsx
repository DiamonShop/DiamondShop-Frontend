import React from 'react'
import { Link } from 'react-router-dom';
export default function Wishlist() {
    return (
        <div>
            <div class="breadcrumb-area">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-wrap">
                                <nav aria-label="breadcrumb">
                                    <ul class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="home-page.html"><i class="fa fa-home"></i></a></li>
                                        <li class="breadcrumb-item"><a href="shop.html">shop</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Yêu thích</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="wishlist-main-wrapper section-padding">
                <div class="container">

                    <div class="section-bg-color">
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="cart-table table-responsive">
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th class="pro-thumbnail">Thumbnail</th>
                                                <th class="pro-title">Sản phẩm</th>
                                                <th class="pro-price">Giá tiền</th>
                                                <th class="pro-quantity">Tình trạng hàng</th>
                                                <th class="pro-subtotal">Thêm vào giỏ hàng</th>
                                                <th class="pro-remove">Xóa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-5.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Diamond Exclusive Ornament</a></td>
                                                <td class="pro-price"><span>$295.00</span></td>
                                                <td class="pro-quantity"><span class="text-success">In Stock</span></td>
                                                <td class="pro-subtotal"><a href="cart.html" class="btn btn-sqr">Add to
                                                    Cart</a></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-6.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Perfect Diamond Jewellery</a></td>
                                                <td class="pro-price"><span>$275.00</span></td>
                                                <td class="pro-quantity"><span class="text-success">In Stock</span></td>
                                                <td class="pro-subtotal"><a href="cart.html" class="btn btn-sqr">Add to
                                                    Cart</a></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-7.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Handmade Golden Necklace</a></td>
                                                <td class="pro-price"><span>$295.00</span></td>
                                                <td class="pro-quantity"><span class="text-danger">Stock Out</span></td>
                                                <td class="pro-subtotal"><a href="cart.html" class="btn btn-sqr disabled">Add
                                                    to Cart</a></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td class="pro-thumbnail"><a href="#"><img class="img-fluid" src="assets/img/product/product-8.jpg" alt="Product" /></a></td>
                                                <td class="pro-title"><a href="#">Diamond Exclusive Ornament</a></td>
                                                <td class="pro-price"><span>$110.00</span></td>
                                                <td class="pro-quantity"><span class="text-success">In Stock</span></td>
                                                <td class="pro-subtotal"><a href="cart.html" class="btn btn-sqr">Add to
                                                    Cart</a></td>
                                                <td class="pro-remove"><a href="#"><i class="fa fa-trash-o"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div class="scroll-top not-visible">
                <i class="fa fa-angle-up"></i>
            </div>

        </div>
    )
}
