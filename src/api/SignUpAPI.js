export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email); //test if email is correct with regex
}

export const handleSignUpUser = (user) => {
    return fetch("https://localhost:7101/api/Register/SignUp", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json(); // Parse the JSON response
        } else {
            return response.text().then(text => {
                if (text.includes('Sign Up User Successfully')) {
                    return { success: true, message: text };
                } else {
                    console.error('Received non-JSON response from server:', text);
                    throw new Error('Received non-JSON response from server');
                }
            });
        }
    })
    .then(data => {
        if (data.success) {
            console.log("User signed up successfully:", data.message);
            return data; // Return the user data if needed
        } else {
            console.error("Sign up failed:", data.message);
            return null;
        }
    })
    .catch(error => {
        console.error("Error during sign up:", error);
        return null;
    });
}


