
import { HandleGetAll } from "../api/JewelryAPI";
import { getImageUrls } from "../FirebaseImage/firebaseHelper"; // Import hàm getImageUrls từ file helper

const listProduct = await HandleGetAll();

const productData = await Promise.all(listProduct
    .filter(product => product.categoryId === 5 && product.isActive === true)
    .map(async product => {

        const { basePrice, productId, productName, categoryId, stock, description, isActive } = product;
        const { image1Url, image2Url, image3Url } = await getImageUrls(productId, categoryId);

        return {
            id: productId,
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
export const Product_kimcuong3_6_data=productData;
