export const handleUserProfile = async (userId) => {
    try {
        var token = localStorage.getItem('token');

        const response = await fetch(`https://localhost:7101/api/User/GetUserProfile?id=${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            console.error("Failed to fetch user profile:", response.statusText);
            return null; // Return null on failure
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during get order:", error);
        return null; // Return null on error
    }
}