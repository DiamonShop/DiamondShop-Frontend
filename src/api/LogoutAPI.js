// logoutAPI.js
import {jwtDecode} from 'jwt-decode';

export const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
    } else {
        console.log("No token found.");
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    console.log("Logged out and token removed.");
};
