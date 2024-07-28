import React, { useEffect, useState } from 'react';
import { getStorage, getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { imageDb } from './Config'; // Đảm bảo import đúng

const storage = getStorage();

export const uploadGiaToFirebase = async (file, productId) => {
    const parts = productId.split('-');
    const productPrefix = `${parts[0]}-${parts[1]}`; 

    const folderRef = ref(storage, `certificates/${productPrefix}/${productId}`);

    const listResult = await listAll(folderRef);

    if (listResult.items.length > 0) {
        // Nếu đã có ảnh, trả về URL của ảnh đầu tiên
        const existingImgRef = listResult.items[0];
        const url = await getDownloadURL(existingImgRef);
        return url;
    }

    // Nếu chưa có ảnh, tải tệp mới lên
    const fileName = `${v4()}`;
    const imgRef = ref(storage, `certificates/${productPrefix}/${productId}/${fileName}`);

    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);

    return url;
};

export default function FirebaseImageUpload() {
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);

    const handleClick = async () => {
        if (img !== null) {
            const productId = "your-product-id"; // Thay thế bằng ID sản phẩm thực tế
            const url = await uploadImageToFirebase(img, productId);
            setImgUrl(prevUrls => {
                if (!prevUrls.includes(url)) {
                    return [...prevUrls, url];
                }
                return prevUrls;
            });
        }
    };

    useEffect(() => {
        listAll(ref(imageDb, "files/Nhan/1")).then(imgs => {
            const promises = imgs.items.map(val => getDownloadURL(val));
            Promise.all(promises).then(urls => {
                setImgUrl(urls);
            });
        });
    }, []);

    return (
        <div>
            <label>Ảnh sản phẩm </label>
            <input type='file' onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
            <br />
            {imgUrl.map((dataVal, index) => (
                <div key={index}>
                    <img src={dataVal} alt="Uploaded" height="200px" width="200px" />
                    <br />
                </div>
            ))}
        </div>
    );
}
