import axios from "axios";

export const HandleGetAllDiamond = async () => {
    // Perform POST request to create a new user
    const response = axios.get("https://localhost:7101/api/Diamonds/GetAllDiamond",
        {
            'Content-Type': 'application/json'
        })
    var arr = (await response).data;
    return arr;
};

export const handleGetDiamondByProductId = async (productId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/Diamonds/GetDiamondByProductId?productId=${productId}`, {
            method: 'GET',
            mode: 'cors',
        });
        const data = await response.json();
        if (data == null) {
            return null;
        } else {
            return data;
        }
    } catch (error) {
        console.error("Error during get order:", error);
        return null; // Return null on error
    }
}

export const handleUpdateDiamondQuantity = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/Diamonds/UpdateDiamondQuantity?userId=${userId}`, {
            method: 'PUT',
            mode: 'cors'
        });
        const data = await response.json();
        if (data == false) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}
export const fetchDiamondBasePrice = async (carat, clarity, color, cut, token) => {
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        const response = await axios.get(`https://localhost:7101/api/DiamondPrices/GetPrice?carat=${carat}&clarity=${clarity}&color=${color}&cut=${cut}`, { headers });
        return response.data.price; // Giả sử API trả về giá trong `response.data.price`
    } catch (error) {
        console.error('Error fetching diamond base price:', error);
        return 0;
    }
};