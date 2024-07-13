import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7101/api', // Adjust this if needed
});

export const handleGetFeedbacksByProductId = async (productId) => {
  try {
    const response = await instance.get(`/Feedback/GetFeedbackByProductId?productId=${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return [];
  }
};
