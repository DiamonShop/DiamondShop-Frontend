// addAddress.js

import axios from 'axios';

const addAddress = async (token, userId, addressData) => {
    try {
        const response = await axios.post(`https://localhost:7101/api/User/addshipaddress?UserId=${userId}`, addressData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data; // Assuming the response data contains updated user profile or addresses
    } catch (error) {
        throw error;
    }
};

export default addAddress;
