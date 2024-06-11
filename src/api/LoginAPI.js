import React, { useState, useEffect } from 'react';

export const handleLoginUser = (user) => {
    // Perform POST request to create a new user
    fetch("https://localhost:7101/api/Login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user.Username,
            password: user.Password
        })
    })
};

function LoginDefaultAPI() {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleCreateUser = () => {
        // Perform POST request to create a new user
        fetch("https://localhost:7101/api/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: newUsername,
                password: newPassword
            })
        })
    };

    // Call apiGet when the component mounts
    useEffect(() => {
        handleCreateUser();
    }, []);

    return (
        <div>
            <h2>Create New User</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <button onClick={handleCreateUser}>Create</button>
        </div>
    );
}

export default LoginDefaultAPI;
