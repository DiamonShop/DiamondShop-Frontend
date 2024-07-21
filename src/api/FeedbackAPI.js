import axios from 'axios';

export const handleGetFeedbacksByProductId = async (productId) => {
    try {
        const response = await axios.get(`https://localhost:7101/api/Feedback/GetFeedbackByProductId`, {
            params: { productId }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        throw error;
    }
};

export const handleCreateFeedback = async (feedbackData) => {
    try {
        const response = await axios.post(`https://localhost:7101/api/Feedback/CreateFeedback`, feedbackData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating feedback:", error);
        throw error;
    }
};
export const handleCreatefeedback = async (feedbackData) => {
    try {
        const response = await axios.post('https://localhost:7101/api/Feedback/create', feedbackData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating feedback:", error);
        throw error;
    }
};
