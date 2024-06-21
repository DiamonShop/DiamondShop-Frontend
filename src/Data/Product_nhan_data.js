import { HandleGetAll } from "../api/JewelryAPI";
import { getImageUrls } from "../FirebaseImage/firebaseHelper"; // Import hàm getImageUrls từ file helper

const listProduct = await HandleGetAll();

// const productData = [];

// listProduct
//     .filter(product => product.categoryId === 1)
//     .forEach(product => {
//         const { basePrice, productId, productName, stock, categoryId, description } = product;

//         const productInfo = {
//             id: productId,
//             productName: productName,
//             image1: "assets/img/product/Nhan/1/nhan-kim-cuong-vang-14k-ddddc001259-1.png",
//             image2: "assets/img/product/Nhan/1/nhan-kim-cuong-vang-14k-ddddc001259-2.png",
//             label: "Mới",
//             newPrice: basePrice + "đ",
//             oldPrice: basePrice + "đ",
//             categoryId: categoryId,
//             description: description,
//             stock: stock,
//         };

//         productData.push(productInfo);
//     });
const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 1 && product.isActive === true)
    .map(async product => {
        const { basePrice, productId, productName, stock, categoryId, description,isActive } = product;
       
        const { image1Url, image2Url } = await getImageUrls(productId,categoryId);
        
        return {
            id: productId,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", // URL thay thế nếu ảnh không tồn tại
            image2: image2Url ? image2Url : "default_image_url_2.png", // URL thay thế nếu ảnh không tồn tại
            label: "Mới",
            newPrice: basePrice,
            oldPrice: basePrice,
            categoryId: categoryId,
            description: description,
            stock: stock,
            isActive: isActive,
        };
    })
);

// Export dữ liệu productData
export const Product_Nhan_Data = productData;
