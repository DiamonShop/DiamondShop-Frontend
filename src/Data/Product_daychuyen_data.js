import { HandleGetAll } from "../api/JewelryAPI";
import { getImageUrls } from "../FirebaseImage/firebaseHelper";


const listProduct = await HandleGetAll();

const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 2 && product.isActive === true)
    .map(async product => {
        const { basePrice, productId, productName, stock, categoryId , description,isActive } = product;
        const { image1Url, image2Url,image3Url, image4Url } = await getImageUrls(productId,categoryId);
        console.log(product)
        return {
            id: productId,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", // URL thay thế nếu ảnh không tồn tại
            image2: image2Url ? image2Url : "default_image_url_2.png", // URL thay thế nếu ảnh không tồn tại
            image3: image3Url ? image3Url : "default_image_url_3.png", // URL thay thế nếu ảnh không tồn tại
            image4: image4Url ? image4Url : "default_image_url_4.png", // URL thay thế nếu ảnh không tồn tại
            label: "Mới",
            newPrice: basePrice,
            oldPrice: basePrice,
            categoryId : categoryId ,
            description: description,
            categoryName: "Dây chuyền",
            stock: stock,
            isActive: isActive,
        };
    })
);




export const Product_Daychuyen_Data = productData;
//     {
//         id: 1,
//         image1:"assets/img/product/Day-chuyen/1/sp-SD0000W060096-day-chuyen-bac-1.png",
//         image2:"assets/img/product/Day-chuyen/1/sp-SD0000W060096-day-chuyen-bac-2.png",
//         label:"Mới",
//         productName:"Dây chuyền Bạc Ý 0000W060096",
//         newPrice:"1.995.000đ",
//         oldPrice:"2.215.000đ",
//     },
//     {
//         id: 2,
//         image1:"assets/img/product/Day-chuyen/2/sp-GD0000W000871-day-chuyen-vang-trang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/2/sp-GD0000W000871-day-chuyen-vang-trang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền Vàng trắng Ý 18K 0000W000871",
//         newPrice:"16.963.000đ",
//         oldPrice:"18.156.000đ",
//     },
//     {
//         id: 3,
//         image1:"assets/img/product/Day-chuyen/3/sp-gd0000y060507-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/3/sp-gd0000y060507-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền Vàng Ý 18K 0000Y060507",
//         newPrice:"20.534.400đ",
//         oldPrice:"24.165.000đ",
//     },
//     {
//         id: 4,
//         image1:"assets/img/product/Day-chuyen/4/sp-gd0000w061242-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/4/sp-gd0000w061242-day-chuyen-vang-18k-1.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng trắng Ý 18K 0000W061242",
//         newPrice:"11.320.000đ",
//         oldPrice:"13.161.000đ",
//     },
//     {
//         id: 5,
//         image1:"assets/img/product/Day-chuyen/5/sp-gd0000w061240-day-chuyen-vang-trang-y-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/5/sp-gd0000w061240-day-chuyen-vang-trang-y-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng trắng Ý 18K 0000W061240",
//         newPrice:"33.386.800đ",
//         oldPrice:"34.968.000đ",
//     },
//     {
//         id: 6,
//         image1:"assets/img/product/Day-chuyen/6/sp-gd0000c000043-day-chuyen-vang-y-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/6/sp-gd0000c000043-day-chuyen-vang-y-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền Vàng Ý 18K PNJ 0000C000043",
//         newPrice:"18.077.000đ",
//         oldPrice:"20.999.000đ",
//     },
//     {
//         id: 7,
//         image1:"assets/img/product/Day-chuyen/7/gd0000y060509-Day-chuyen-Vang-18K-1.png",
//         image2:"assets/img/product/Day-chuyen/7/gd0000y060509-Day-chuyen-Vang-18K-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000Y060509",
//         newPrice:"42.494.800đ",
//         oldPrice:"46.190.000đ",
//     },
//     {
//         id: 8,
//         image1:"assets/img/product/Day-chuyen/8/gd0000c060176-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/8/gd0000c060176-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060176",
//         newPrice:"73.690.000đ",
//         oldPrice:"75.126.000đ",
//     },
//     {
//         id: 9,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     },
//     {
//         id: 10,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     },
//     {
//         id: 11,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     },
//     {
//         id: 12,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     },
//     {
//         id: 13,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     },
//     {
//         id: 14,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     },
//     {
//         id: 15,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     },
//     {
//         id: 16,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Dây chuyền nam Vàng Ý 18K 0000C060177",
//         newPrice:"31.868.800đ",
//         oldPrice:"34.640.000đ",
//     }
    
// ];
