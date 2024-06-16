import { isTokenExpired } from './TokenAPI';

const useStatus = () => {
  const token = localStorage.getItem("token");
  var validToken = isTokenExpired(token);
  console.log(validToken);
  if (validToken) {
    return true;
  } else {
    return false;
  }
};

export default useStatus;
