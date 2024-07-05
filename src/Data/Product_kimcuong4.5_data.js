
import { HandleGetAllDiamond } from "../api/DiamondAPI";
import { getDiamondImageUrls } from "../FirebaseImage/firebaseHelper"; // Import hàm getImageUrls từ file helper

const listProduct = await HandleGetAllDiamond();

const productData = await Promise.all(listProduct
    .filter(product => product.diameterMM === 4.5 && product.isActive === true)
    .map(async product => {
        const { basePrice, productID, productName, categoryId, stock, description, isActive, diameterMM} = product;
        const { image1Url, image2Url, image3Url } = await getDiamondImageUrls(productID, 5, diameterMM);
        
        return {
            id: productID,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", // URL thay thế nếu ảnh không tồn tại
            image2: image2Url ? image2Url : "default_image_url_2.png", // URL thay thế nếu ảnh không tồn tại
            image3: image3Url ? image3Url : "default_image_url_3.png", // URL thay thế nếu ảnh không tồn tại
            label: "Mới",
            newPrice: basePrice,
            oldPrice: basePrice,
            categoryName: "Kim cương 3.6 ",
            description: description,
            stock: stock,
            isActive: isActive,
            categoryId: categoryId,
        };
    })
);

export const Product_kimcuong4_5_data = productData;
