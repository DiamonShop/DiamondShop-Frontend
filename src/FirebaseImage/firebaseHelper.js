import { getDownloadURL, listAll, ref } from "firebase/storage";
import { imageDb } from './Config'; // Đảm bảo import cấu hình Firebase

export const getImageUrls = async (productId) => {
    const productRef = ref(imageDb, `files/Nhan/${productId}/`);

    try {
        const list = await listAll(productRef);
        const imageRefs = list.items.slice(0, 3); // Lấy hai tệp đầu tiên

        const imageUrls = await Promise.all(
            imageRefs.map(async (imageRef) => {
                try {
                    return await getDownloadURL(imageRef);
                } catch (error) {
                    if (error.code === 'storage/object-not-found') {
                        console.error(`File not found: ${imageRef.fullPath}`);
                        return null; // hoặc cung cấp một URL thay thế
                    }
                    throw error;
                }
            })
        );

        return { image1Url: imageUrls[0], image2Url: imageUrls[1] };
    } catch (error) {
        console.error("Error listing files:", error);
        return { image1Url: null, image2Url: null };
    }
};