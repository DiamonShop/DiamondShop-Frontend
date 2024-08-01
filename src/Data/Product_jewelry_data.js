import { HandleGetAll } from "../api/JewelryAPI";
import {getJewelryImageUrls } from "../FirebaseImage/firebaseHelper";


const listProduct = await HandleGetAll();

const productData = await Promise.all(listProduct
    .filter(product => product && product.isActive === true)
    .map(async product => {
        const { markupPrice, productID, productName, categoryId, stock,categoryName, description, isActive, material, mainDiamondName, sideDiamondName, jewelrySizes, mainDiamondQuantity, sideDiamondQuantity } = product;
        const { image1Url, image2Url,image3Url, image4Url } = await getJewelryImageUrls(productID,categoryId);
        return {
            id: productID,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", // URL thay thế nếu ảnh không tồn tại
            image2: image2Url ? image2Url : "default_image_url_2.png", // URL thay thế nếu ảnh không tồn tại
            image3: image3Url ? image3Url : "default_image_url_3.png", // URL thay thế nếu ảnh không tồn tại
            image4: image4Url ? image4Url : "default_image_url_4.png", // URL thay thế nếu ảnh không tồn tại
            label: "Mới",
            newPrice: markupPrice,
            categoryName: categoryName,
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

export const Product_Jewelry_Data = productData;