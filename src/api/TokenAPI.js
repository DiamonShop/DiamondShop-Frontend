import { jwtDecode } from "jwt-decode";

export const sendToken = (apiUrl) => {
    const token = localStorage.getItem('token');

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
    return headers;
}

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

export const convertUnixTimestampToDateTime = (tokenLifeTime) => {
    const date = new Date(tokenLifeTime * 1000); // chuyển đổi sang milliseconds
    return date;
}