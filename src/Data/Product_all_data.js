import { handleGetProductByName } from "../api/SearchProductAPI";
import { getDiamondImageUrls, getJewelryImageUrls } from "../FirebaseImage/firebaseHelper";
import { handleGetJewelryByProductId } from '../api/JewelryAPI';
import { handleGetDiamondByProductId } from '../api/DiamondAPI';

// Hàm lấy sản phẩm theo tên
async function GetProductByName(searchValue) {
    try {
        const allProducts = await handleGetProductByName(searchValue);

        if (!allProducts || !Array.isArray(allProducts)) {
            return []; // Return an empty array if allProducts is not valid
        }

        const activeProducts = allProducts.filter(product => product.isActive);

        const productData = await Promise.all(activeProducts.map(async product => {
            let productDetails = {};
            try {
                if (product.productType === 'Jewelry') {
                    const jewelryData = await handleGetJewelryByProductId(product.productId);
                    const { markupPrice, productID, productName, categoryId, stock, description, isActive, categoryName, material, mainDiamondName, sideDiamondName, mainDiamondQuantity, sideDiamondQuantity, jewelrySizes } = jewelryData;
                    const { image1Url, image2Url, image3Url, image4Url } = await getJewelryImageUrls(productID, categoryId);
                    
                    productDetails = {
                        id: productID,
                        productId: productID,
                        productName: productName,
                        image1: image1Url || "default_image_url_1.png",
                        image2: image2Url || "default_image_url_2.png",
                        image3: image3Url || "default_image_url_3.png",
                        image4: image4Url || "default_image_url_4.png",
                        label: "Mới",
                        newPrice: markupPrice,
                        description: description,
                        categoryId: categoryId,
                        categoryName: categoryName,
                        stock: stock,
                        productType: product.productType,
                        isActive: isActive,
                        material: material,
                        mainDiamondName: mainDiamondName,
                        sideDiamondName: sideDiamondName,
                        mainDiamondQuantity: mainDiamondQuantity,
                        sideDiamondQuantity: sideDiamondQuantity,
                        jewelrySizes: jewelrySizes
                    };
                } else if (product.productType === 'Diamond') {
                    const diamondData = await handleGetDiamondByProductId(product.productId);
                    const { markupPrice, productID, productName, stock, description, isActive, diameterMM, basePrice, carat, clarity, color, cut, quantity } = diamondData;
                    const { image1Url, image2Url, image3Url, image4Url } = await getDiamondImageUrls(productID, 5, diameterMM);

                    productDetails = {
                        id: productID,
                        productId: productID,
                        productName: productName,
                        image1: image1Url || "default_image_url_1.png",
                        image2: image2Url || "default_image_url_2.png",
                        image3: image3Url || "default_image_url_3.png",
                        image4: image4Url || "default_image_url_4.png",
                        label: "Mới",
                        newPrice: markupPrice,
                        description: description,
                        stock: stock,
                        productType: product.productType,
                        isActive: isActive,
                        basePrice: basePrice,
                        carat: carat,
                        clarity: clarity,
                        color: color,
                        cut: cut,
                        quantity: quantity,
                    };
                }
            } catch (productError) {
                console.error(`Error processing product ID ${product.productId}:`, productError);
            }
            return productDetails;
        }));

        return productData;
    } catch (error) {
        console.error("Error fetching or processing products:", error);
        throw error;
    }
}

// Export dữ liệu productData
export default GetProductByName;
