export const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]$/;
    return emailRegex.test(email); //test if email is correct with regex
}

export const handleSignUpUser = (user) => {
    // Perform POST request to create a new user
    fetch("https://localhost:7101/api/Register/SignUp", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
};