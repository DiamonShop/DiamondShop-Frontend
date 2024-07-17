import { HandleGetAll } from "../api/JewelryAPI";
import {getJewelryImageUrls } from "../FirebaseImage/firebaseHelper";


const listProduct = await HandleGetAll();

const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 2 && product.isActive === true)
    .map(async product => {
        const { basePrice, productID, productName, categoryId, stock, description, isActive,material,mainDiamondName,sideDiamondName,jewelrySizes } = product;
        const { image1Url, image2Url, image3Url, } = await getJewelryImageUrls(productID, categoryId);
        return {
            id: productID,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", // URL thay thế nếu ảnh không tồn tại
            image2: image2Url ? image2Url : "default_image_url_2.png", // URL thay thế nếu ảnh không tồn tại
            image3: image3Url ? image3Url : "default_image_url_3.png", // URL thay thế nếu ảnh không tồn tại           
            label: "Mới",
            newPrice: basePrice,
            categoryName: "Dây chuyền",
            description: description,
            stock: stock,
            isActive: isActive,
            categoryId: categoryId,
            material:material,
            mainDiamondName:mainDiamondName,
            sideDiamondName:sideDiamondName,
            jewelrySizes:jewelrySizes
        };
    })
);

export const Product_Daychuyen_Data = productData;