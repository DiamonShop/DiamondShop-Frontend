export const handleSignUpUser = (user) => {
    // Perform POST request to create a new user
    fetch("https://localhost:7101/api/Login", {
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
            console.log(data.data);
            // Handle successful login here, e.g., redirect to a dashboard
        } else {
            console.log("Invalid login attempt");
            // Handle invalid login attempt here, e.g., show an error message
        }
    })
    .catch(error => {
        console.error("Error during login:", error);
        // Handle any errors that occurred during the fetch
    });
};