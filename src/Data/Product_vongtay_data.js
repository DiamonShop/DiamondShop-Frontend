import { HandleGetAll } from "../api/JewelryAPI";
import { getJewelryImageUrls } from "../FirebaseImage/firebaseHelper"; // Import hàm getImageUrls từ file helper

const listProduct = await HandleGetAll();

const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 4 && product.isActive === true)
    .map(async product => {
        const { basePrice, productID, productName, stock, categoryId, description, isActive,material,mainDiamondName,sideDiamondName } = product;

        const { image1Url, image2Url, image3Url, image4Url } = await getJewelryImageUrls(productID, categoryId);

        return {
            id: productID,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", // URL thay thế nếu ảnh không tồn tại
            image2: image2Url ? image2Url : "default_image_url_2.png", // URL thay thế nếu ảnh không tồn tại
            image3: image3Url ? image3Url : "default_image_url_3.png", // URL thay thế nếu ảnh không tồn tại
            image4: image4Url ? image4Url : "default_image_url_4.png", // URL thay thế nếu ảnh không tồn tại
            label: "Mới",
            newPrice: basePrice,
            categoryName: "Vòng tay",
            categoryId: categoryId,
            description: description,
            stock: stock,
            material:material,
            mainDiamondName:mainDiamondName,
            sideDiamondName:sideDiamondName,
            isActive: isActive,
        };
    })
);

// Export dữ liệu productData
export const Product_Vongtay_Data = productData;
