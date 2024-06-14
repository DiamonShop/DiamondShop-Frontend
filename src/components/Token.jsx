// MyComponent.jsx

import React from 'react';
import { saveTokenToLocalStorage, getTokenFromLocalStorage, removeTokenFromLocalStorage } from '../utils/Auth_Utils';

const MyComponent = () => {
    // Lưu token vào localStorage
    const saveToken = (token) => {
        saveTokenToLocalStorage(token);
    };

    // Đọc token từ localStorage
    const getToken = () => {
        const token = getTokenFromLocalStorage();
        console.log(token);
    };

    // Xóa token từ localStorage
    const removeToken = () => {
        removeTokenFromLocalStorage();
    };

    return (
        <div>
            {/* Gọi các hàm khi cần */}
            <button onClick={() => saveToken('myToken')}>Save Token</button>
            <button onClick={getToken}>Get Token</button>
            <button onClick={removeToken}>Remove Token</button>
        </div>
    );
};

export default MyComponent;
