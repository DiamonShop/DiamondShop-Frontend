import axios from 'axios';

export const handleGetFeedbackByProductId = async (productId) => {
    try {
        const response = await axios.get(`https://localhost:7101/api/Feedback/GetFeedbackByProductId`, {
            params: {
                productId: productId
            },
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("There was an error fetching the feedback!", error);
        return null;
    }
};
