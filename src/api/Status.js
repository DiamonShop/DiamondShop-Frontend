import { isTokenExpired } from './TokenAPI';

const useStatus = () => {
    const token = localStorage.getItem("token");
    const validToken = !isTokenExpired(token);
    console.log('Token is valid:', validToken);
    return validToken;
};

export default useStatus;
