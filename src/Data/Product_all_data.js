import { handleGetProductByName } from "../api/SearchProductAPI";
import { getImageUrls } from "../FirebaseImage/firebaseHelper"; // Import hàm getImageUrls từ file helper

//Dùng axios nên data sẽ trả về Promise
async function GetProductByName(searchValue) {
    try {
        const allProducts = await handleGetProductByName(searchValue);

        const activeProducts = allProducts.filter(product => product.isActive === true);

        const productData = await Promise.all(activeProducts.map(async product => {
            const { basePrice, productId, productName, categoryId, stock, description, isActive } = product;
            const { image1Url, image2Url, image3Url, image4Url } = await getImageUrls(productId, categoryId);

            const getProductCategoryName = (categoryId) => {
                switch (categoryId) {
                    case 1:
                        return 'Nhẫn';
                    case 2:
                        return 'Dây chuyền';
                    case 3:
                        return 'Mặt dây chuyền';
                    // Add more cases as needed
                    case 4:
                        return 'Vòng tay';
                    case 5:
                        return 'Kim cương';
                }
            };

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
                description: description,
                categoryName: getProductCategoryName(categoryId),
                stock: stock,
                isActive: isActive,
            };
        })
        );

        return productData;
    } catch (error) {
        console.error("Error fetching or processing products:", error);
        throw error;
    }
}

// Export dữ liệu productData
export default GetProductByName;
