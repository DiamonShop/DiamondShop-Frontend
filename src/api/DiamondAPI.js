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
