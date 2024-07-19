import { HandleGetAll } from "../api/JewelryAPI";
import { getJewelryImageUrls } from "../FirebaseImage/firebaseHelper"; // Import hàm getImageUrls từ file helper

const listProduct = await HandleGetAll();

const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 1 && product.isActive === true)
    .map(async product => {


        const { basePrice, productID, productName, categoryId, stock, description, isActive, material, mainDiamondName, sideDiamondName, jewelrySizes, mainDiamondQuantity, sideDiamondQuantity} = product;
        const { image1Url, image2Url, image3Url, image4Url  } = await getJewelryImageUrls(productID, categoryId);
        console.log(product);

        return {
            id: productID,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", // URL thay thế nếu ảnh không tồn tại
            image2: image2Url ? image2Url : "default_image_url_2.png", // URL thay thế nếu ảnh không tồn tại
            image3: image3Url ? image3Url : "default_image_url_3.png", // URL thay thế nếu ảnh không tồn tại         
            image4: image4Url ? image4Url : "public/assets/img/background white.png",
            label: "Mới",
            newPrice: basePrice,
            categoryName: "Nhẫn",
            description: description,
            stock: stock,
            isActive: isActive,
            categoryId: categoryId,
            material: material,
            mainDiamondName: mainDiamondName,
            sideDiamondName: sideDiamondName,
            jewelrySizes: jewelrySizes,
            mainDiamondQuantity: mainDiamondQuantity,
            sideDiamondQuantity: sideDiamondQuantity,
        };
    })
);

// Export dữ liệu productData
export const Product_Nhan_Data = productData;
