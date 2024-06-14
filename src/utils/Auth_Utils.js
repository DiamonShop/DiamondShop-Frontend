
// Lưu token vào localStorage
export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('accessToken', token);
};

// Đọc token từ localStorage
export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('accessToken');
};

// Xóa token từ localStorage
export const removeTokenFromLocalStorage = () => {
    localStorage.removeItem('accessToken');
};
