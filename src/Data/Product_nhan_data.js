import { HandleGetAll } from "../api/JewelryAPI";

const listProduct = await HandleGetAll();

const productData = [];

listProduct
    .filter(product => product.categoryId === 1)
    .forEach(product => {
        const { basePrice, productId, productName, stock, categoryId, description } = product;

        const productInfo = {
            id: productId,
            productName: productName,
            image1: "assets/img/product/Nhan/1/nhan-kim-cuong-vang-14k-ddddc001259-1.png",
            image2: "assets/img/product/Nhan/1/nhan-kim-cuong-vang-14k-ddddc001259-2.png",
            label: "Mới",
            newPrice: basePrice + "đ",
            oldPrice: basePrice + "đ",
            categoryId: categoryId,
            description: description,
            stock: stock,
        };

        productData.push(productInfo);
    });

// Export dữ liệu productData
export const Product_Nhan_Data = productData;
