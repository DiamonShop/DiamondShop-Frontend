export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]$/;
    return emailRegex.test(email); //test if email is correct with regex
}

export const handleSignUpUser = (user) => {
    // Perform POST request to create a new user
    return fetch("https://localhost:7101/api/Register/SignUp", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        if (data.success) {
            console.log("User signed up successfully:", data.data);
            return data.data; // Return the user data if needed
        } else {
            console.error("Sign up failed:", data.message);
            return null;
        }
    })
    .catch(error => {
        console.error("Error during sign up:", error);
        return null;
    });
};