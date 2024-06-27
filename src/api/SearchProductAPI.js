import axios from "axios";

export const HandleGetProductByName = async (searchValue) => {
    // Perform POST request to create a new user
    const response = await axios.get(`https://localhost:7101/api/products/GetProductsByName?productName=${searchValue}`, {
        method: 'GET',
        mode: 'cors',
    });
    const data = await response.json();
    if (data.data == null) {
        return null;
    } else {
        return data.data;
    }
};