import axios from "axios";

export const HandleGetAll = async () => {
    // Perform POST request to create a new user
    const response = axios.get("https://localhost:7101/api/products/GetAllProduct",
        {
            'Content-Type': 'application/json'
        })
    var arr = (await response).data;
    return arr;
};