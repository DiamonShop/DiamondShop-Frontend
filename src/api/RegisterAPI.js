import { apiUrl } from "./ConnectionAPI";
import axios from 'axios';

const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]$/;
    return emailRegex.test(email); //test if email is correct with regex
}

export const registerDefault = async (categoryName) => {
    try {
        const response = await axios.post(`${apiUrl}/categories/CreateACategory`, {
            CategoryName: categoryName
        });
        return response.data; // Return response data if needed
    } catch (error) {
        console.log(error);
        // Optionally, you could return or throw an error here
        throw error; // Re-throwing the error might be useful for further error handling
    }
}

export const getCate = async () => {
    try {
        const response = await axios.get(`${apiUrl}/categories/GetAllCategories`)
        return response.data
    } catch (error) {
        console.log(error);
        // Optionally, you could return or throw an error here
        throw error; // Re-throwing the error might be useful for further error handling
    }
}