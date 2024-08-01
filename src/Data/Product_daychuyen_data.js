import { HandleGetAll } from "../api/JewelryAPI";
import {getJewelryImageUrls } from "../FirebaseImage/firebaseHelper";


const listProduct = await HandleGetAll();

const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 2 && product.isActive === true)
    .map(async product => {
        const { markupPrice, productID, productName, categoryId, stock, description, isActive, material, mainDiamondName, sideDiamondName, jewelrySizes} = product;
        const { image1Url, image2Url,image3Url, image4Url } = await getJewelryImageUrls(productID,categoryId);
        return {
            id: productID,
            productName: productName,
            image1: image1Url ? image1Url : "default_image_url_1.png", 
            image2: image2Url ? image2Url : "default_image_url_2.png", 
            image3: image3Url ? image3Url : "default_image_url_3.png",
            image4: image4Url ? image4Url : "default_image_url_4.png",            
            label: "Mới",
            newPrice: markupPrice,
            categoryName: "Dây chuyền",
            material:material,
            description: description,
            stock: stock,
            isActive: isActive,
            categoryId: categoryId,
            material:material,
            mainDiamondName: mainDiamondName,
            sideDiamondName: sideDiamondName,
            jewelrySizes: jewelrySizes
        };
    })
);

export const Product_Daychuyen_Data = productData;