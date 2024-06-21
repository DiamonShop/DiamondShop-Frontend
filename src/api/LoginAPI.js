export const handleLoginUser = async (user) => {
    try {
        const response = await fetch("https://localhost:7101/api/Register/Login", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        
        const data = await response.json();
        
        if (data.success) {
            console.log(data.data);
            let user = {
                fullName: data.data.fullName,
                roleName: data.data.roleName,
                token: data.data.token // Include the token
            };
            
            // Save the token in local storage
            localStorage.setItem('token', data.data.token);
            return user; // Return the user object
        } else {
            console.log("Invalid login attempt");
            return null; // Return null on invalid login attempt
        }
    } catch (error) {
        console.error("Error during login:", error);
        return null; // Return null on error
    }
};


