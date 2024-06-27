import axios from 'axios';

const getAllShipAddresses = async (token, userId) => {
    try {
        const response = await axios.get(`https://localhost:7101/api/User/GetAllShipAddresses?userId=${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default getAllShipAddresses;
