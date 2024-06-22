// import { getDownloadURL, listAll, ref } from "firebase/storage";
// import { imageDb } from './Config'; // Đảm bảo import cấu hình Firebase

// export const getImageUrls = async (productId,categoryId) => {
    
//     const productRef = ref(imageDb, `files/${categoryId}/${productId}/`);

//     try {
//         const list = await listAll(productRef);
//         const imageRefs = list.items.slice(0, 3); // Lấy hai tệp đầu tiên

//         const imageUrls = await Promise.all(
//             imageRefs.map(async (imageRef) => {
//                 try {
//                     return await getDownloadURL(imageRef);
//                 } catch (error) {   
//                     if (error.code === 'storage/object-not-found') {
//                         console.error(`File not found: ${imageRef.fullPath}`);
//                         return null; // hoặc cung cấp một URL thay thế
//                     }
//                     throw error;
//                 }
//             })
//         );

//         return { image1Url: imageUrls[0], image2Url: imageUrls[1] };
//     } catch (error) {
//         console.error("Error listing files:", error);
//         return { image1Url: null, image2Url: null };
//     }
// };
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { imageDb } from './Config'; // Ensure Firebase configuration is imported

export const getImageUrls = async (productId, categoryId) => {
    
    const productRef = ref(imageDb, `files/${categoryId}/${productId}/`);

    try {
        const list = await listAll(productRef);
        const imageRefs = list.items.slice(0, 4); // Get the first four files

        const imageUrls = await Promise.all(
            imageRefs.map(async (imageRef) => {
                try {
                    return await getDownloadURL(imageRef);
                } catch (error) {   
                    if (error.code === 'storage/object-not-found') {
                        console.error(`File not found: ${imageRef.fullPath}`);
                        return null; // or provide a fallback URL
                    }
                    throw error;
                }
            })
        );

        return { image1Url: imageUrls[0], image2Url: imageUrls[1], image3Url: imageUrls[2], image4Url: imageUrls[3] };
    } catch (error) {
        console.error("Error listing files:", error);
        return { image1Url: null, image2Url: null, image3Url: null, image4Url: null };
    }
};
