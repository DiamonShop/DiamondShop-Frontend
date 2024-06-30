import React, { useState } from 'react';
import axios from 'axios';

export const updateUserProfile = async (userId, updatedData) => {
    try {
        const response = await axios.put(`https://localhost:7101/api/User/UpdateUserProfile/${userId}`, updatedData, {
            headers: {
                'Content-Type': 'application/json'
                // Add any necessary headers like Authorization if needed
            }
        });
        return response.data; // Assuming you return data from the API
    } catch (error) {
        throw error; // Throw error for handling in Thong_tin_tk.jsx
    }
};

const UserProfile = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.put(
                `https://localhost:7101/api/User/UpdateUserProfile?id=1`, // Adjust endpoint as needed
                {
                    username,
                    password,
                    fullName,
                    email   
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer your_access_token_here' // Replace with actual token
                    }
                }
            );

            console.log('Update response:', response.data);
            // Update successful, handle accordingly
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Server responded with error:', error.response.data);
                setErrorMessage(error.response.data.message || 'Unknown error occurred');
            } else if (error.request) {
                // The request was made but no response was received
                console.log('No response received:', error.request);
                setErrorMessage('No response received from server');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error setting up request:', error.message);
                setErrorMessage('Error setting up request');
            }
        }
    };

    return (
        <div>
            <h2>User Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
       G             <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default UserProfile;
