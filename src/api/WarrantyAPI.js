export const handleGetAllWarranty = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://localhost:7101/api/Warranty/GetAllWarranties`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data == null) {
            return null;
        } else {
            return data;
        }
    } catch (error) {
        console.error("Error during get order:", error);
        return null; // Return null on error
    }
}

export const handleGetWarrantyByUserId = async (userId) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`https://localhost:7101/api/Warranty/GetWarrantyByUserId?userId=${userId}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data == null) {
            return null;
        } else {
            return data;
        }
    } catch (error) {
        console.error("Error during get order:", error);
        return null; // Return null on error
    }
}