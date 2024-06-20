import axios from 'axios';

const googleLogin = async () => {
    try {
        const response = await axios.get('https://localhost:7101/api/Register/GoogleLogin');
        // Handle the response data here
        console.log(response.data);
    } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
    }
};

export default googleLogin;