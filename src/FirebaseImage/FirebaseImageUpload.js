import React, { useEffect, useState } from 'react';
import { imageDb } from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function FirebaseImageUpload() {
    const [img, setImg] = useState(null);
    const [imgUrl, setImgUrl] = useState([]);

    const handleClick = () => {
        if (img !== null) {
            const imgRef = ref(imageDb, `files/${v4()}`);
            uploadBytes(imgRef, img).then(snapshot => {
                getDownloadURL(snapshot.ref).then(url => {
                    setImgUrl(prevUrls => {
                        if (!prevUrls.includes(url)) {
                            return [...prevUrls, url];
                        }
                        return prevUrls;
                    });
                });
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

export default FirebaseImageUpload;