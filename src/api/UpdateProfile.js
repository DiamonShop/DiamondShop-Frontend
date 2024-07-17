import axios from 'axios';
import {jwtDecode} from 'jwt-decode'; // Correct import

const updateProfile = async (token, userDataToUpdate) => {
    try {
        const decodedToken = jwtDecode(token);
        const sid = decodedToken.sid;

        const response = await axios.put(
            `https://localhost:7101/api/User/UpdateUserProfile?id=${sid}`, // Sử dụng 'sid' từ dữ liệu người dùng
            userDataToUpdate,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        
        
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Server responded with an error:', error.response.data);
            throw new Error(error.response.data.title || 'Unknown server error');
        } else if (error.request) {
            console.error('No response received from server:', error.request);
            throw new Error('No response received from server');
        } else {
            console.error('Error setting up request:', error.message);
            throw new Error('Error setting up request');
        }
    }
};

export default updateProfile;
