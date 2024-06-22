import { HandleGetAll } from "../api/JewelryAPI";
import { getImageUrls } from "../FirebaseImage/firebaseHelper"; 


const listProduct = await HandleGetAll();
const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 3 && product.isActive === true)
    .map(async product => {
        const { basePrice, productId, productName, stock, categoryId, description,isActive } = product;
       
        const { image1Url, image2Url,image3Url, image4Url } = await getImageUrls(productId,categoryId);
        
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
            categoryId: categoryId,
            description: description,
            categoryName: "Mặt dây chuyền",
            stock: stock,
            isActive: isActive,
        };
    })
);

export const Product_Matdaychuyen_Data = productData;
//     {
//         id: 1,
//         image1:"assets/img/product/Mat-day-chuyen/1/sp-gmrbddy000051-mat-day-chuyen-vang-14k-dinh-ngoc-trai-akoya-disney-pnj-snow-white-the-seven-dwarfs-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/1/sp-gmrbddy000051-mat-day-chuyen-vang-14k-dinh-ngoc-trai-akoya-disney-pnj-snow-white-the-seven-dwarfs-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá Ruby Disney",
//         newPrice:"6.283.000đ",
//         oldPrice:"7.981.000đ",
//     },
//     {
//         id: 2,
//         image1:"assets/img/product/Mat-day-chuyen/2/sp-GMXMXMY063367-mat-day-chuyen-vang-18k-dinh-da-cz-pnj-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/2/sp-GMXMXMY063367-mat-day-chuyen-vang-18k-dinh-da-cz-pnj-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 18K đính đá CZ",
//         newPrice:"17.590.000đ",
//         oldPrice:"20.041.000đ",
//     },
//     {
//         id: 3,
//         image1:"assets/img/product/Mat-day-chuyen/3/sp-gmsp00x000002-mat-day-chuyen-vang-14k-dinh-da-sapphire-disney-pnj-peter-pan-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/3/sp-gmsp00x000002-mat-day-chuyen-vang-14k-dinh-da-sapphire-disney-pnj-peter-pan-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá",
//         newPrice:"7.190.000đ",
//         oldPrice:"9.135.000đ",
//     },
//     {
//         id: 4,
//         image1:"assets/img/product/Mat-day-chuyen/4/gmztxmy060840-mat-day-chuyen-vang-14k-dinh-da-synthetic-pnj-hello-kitty-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/4/gmztxmy060840-mat-day-chuyen-vang-14k-dinh-da-synthetic-pnj-hello-kitty-1.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá Synthetic HELLO KITTY",
//         newPrice:"3.180.000đ",
//         oldPrice:"5.889.000đ",
//     },
//     {
//         id: 5,
//         image1:"assets/img/product/Mat-day-chuyen/5/gmztmxy060003-mat-day-chuyen-vang-14k-dinh-ngoc-trai-akoya-pnj-hello-kitty-01.png",
//         image2:"assets/img/product/Mat-day-chuyen/5/gmztmxy060003-mat-day-chuyen-vang-14k-dinh-ngoc-trai-akoya-pnj-hello-kitty-02.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá Synthetic ❤️ HELLO KITTY",
//         newPrice:"4.105.500đ",
//         oldPrice:"6.150.000đ",
//     },
//     {
//         id: 6,
//         image1:"assets/img/product/Mat-day-chuyen/6/gmztmxy060002-mat-day-chuyen-vang-14k-dinh-ngoc-trai-akoya-pnj-hello-kitty-01.png",
//         image2:"assets/img/product/Mat-day-chuyen/6/gmztmxy060002-mat-day-chuyen-vang-14k-dinh-ngoc-trai-akoya-pnj-hello-kitty-02.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá Synthetic ❤️ HELLO KITTY",
//         newPrice:"3.170.500đ",
//         oldPrice:"4.999.000đ",
//     },
//     {
//         id: 7,
//         image1:"assets/img/product/Mat-day-chuyen/7/SP-gmpaxmw000101-mat-day-chuyen-vang-trang-14k-pnj-01.png",
//         image2:"assets/img/product/Mat-day-chuyen/7/SP-gmpaxmw000101-mat-day-chuyen-vang-trang-14k-pnj-02.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng Trắng 14K đính ngọc trai Akoya PAXMW000101",
//         newPrice:"11.567.000đ",
//         oldPrice:"15.125.000đ",
//     },
//     {
//         id: 8,
//         image1:"assets/img/product/Mat-day-chuyen/8/sp-gmtpxmw000417-mat-day-chuyen-vang-trang-14k-dinh-da-topaz-pnj-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/8/sp-gmtpxmw000417-mat-day-chuyen-vang-trang-14k-dinh-da-topaz-pnj-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng trắng 14K đính đá Topaz PNJ TPXMW000417",
//         newPrice:"6.346.000đ",
//         oldPrice:"10.191.000đ",
//     },
//     {
//         id: 9,
//         image1:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-1.png",
//         image2:"assets/img/product/Day-chuyen/9/gd0000c060177-day-chuyen-vang-18k-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 10K đính đá synthetic Alice In Wonderland",
//         newPrice:"1.513.000đ",
//         oldPrice:"3.101.000đ",
//     },
//     {
//         id: 10,
//         image1:"assets/img/product/Mat-day-chuyen/10/sp-gmxm00y060398-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/10/sp-gmxm00y060398-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá CZ Mickey",
//         newPrice:"3.950.000đ",
//         oldPrice:"5.971.000đ",
//     },
//     {
//         id: 11,
//         image1:"assets/img/product/Mat-day-chuyen/11/sp-gmxm00c060000-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/11/sp-gmxm00c060000-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá CZ Minnie",
//         newPrice:"4.149.000đ",
//         oldPrice:"4.610.000đ",
//     },
//     {
//         id: 12,
//         image1:"assets/img/product/Mat-day-chuyen/12/gmxmxmy003500-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/12/gmxmxmy003500-mat-day-chuyen-vang-14k-dinh-da-cz-pnj-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 14K đính đá CZ",
//         newPrice:"5.709.000đ",
//         oldPrice:"6.915.000đ",
//     },
//     {
//         id: 13,
//         image1:"assets/img/product/Mat-day-chuyen/13/sp-gmrbxmw000104-mat-day-chuyen-vang-trang-14k-dinh-da-ruby-disney-pnj-snow-white-&-the-seven-dwarfs-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/13/sp-gmrbxmw000104-mat-day-chuyen-vang-trang-14k-dinh-da-ruby-disney-pnj-snow-white-&-the-seven-dwarfs-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng trắng 14K đính đá Ruby Snow White & the Seven Dwarfs RBXMW000104",
//         newPrice:"4.724.000đ",
//         oldPrice:"5.815.000đ",
//     },
//     {
//         id: 14,
//         image1:"assets/img/product/Mat-day-chuyen/14/sp-gmjdxmy000225-mat-day-chuyen-vang-18k-dinh-da-cam-thach-pnj-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/14/sp-gmjdxmy000225-mat-day-chuyen-vang-18k-dinh-da-cam-thach-pnj-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 18K đính đá Cẩm Thạch",
//         newPrice:"10.298.000đ",
//         oldPrice:"11.958.000đ",
//     },
//     {
//         id: 15,
//         image1:"assets/img/product/Mat-day-chuyen/15/gmxmxmh000217-mat-day-chuyen-vang-10k-dinh-da-ecz-pnj-hoa-cua-me-1.png",
//         image2:"assets/img/product/Mat-day-chuyen/15/gmxmxmh000217-mat-day-chuyen-vang-10k-dinh-da-ecz-pnj-hoa-cua-me-2.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Vàng 10K đính đá ECZ   Hoa của mẹ",
//         newPrice:"4.598.100đ",
//         oldPrice:"5.109.000đ",
//     },
//     {
//         id: 16,
//         image1:"assets/img/product/Mat-day-chuyen/16/gmdd00h000010-mat-day-chuyen-kim-cuong-vang-14k-pnj-first-diamond-01.png",
//         image2:"assets/img/product/Mat-day-chuyen/16/gmdd00h000010-mat-day-chuyen-kim-cuong-vang-14k-pnj-first-diamond-02.png",
//         label:"Mới",
//         productName:"Mặt dây chuyền Kim cương Vàng 14K First Diamond",
//         newPrice:"5.403.000đ",
//         oldPrice:"6.746.000đ",
//     }
    
// ];