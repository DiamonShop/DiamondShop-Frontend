export const handleCheckout = async (orderModel) => {
    try {
        const response = await fetch("https://localhost:7101/api/orders/Checkout", {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderModel)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        return data; // Assuming the API returns an object with 'url' and 'billId' properties
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};