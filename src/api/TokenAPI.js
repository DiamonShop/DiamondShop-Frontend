import {jwtDecode} from 'jwt-decode';

export const sendToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        return headers;
    } else {
        return {}; // Hoặc xử lý khác tùy theo yêu cầu
    }
};

export const isTokenExpired = (token) => {
    if (!token) {
        return true; // Trả về true nếu không có token
    }

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decodedToken.exp < currentTime;
    } catch (error) {
        return true; // Trả về true nếu token không hợp lệ
    }
};

export const decodeToken = (token) => {
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};