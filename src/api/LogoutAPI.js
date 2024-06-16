import jwtDecode, { JwtPayload } from 'jwt-decode';

export const checkToken = () => {
    var token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token); // Use jwt_decode here
    console.log(decodedToken);
}
