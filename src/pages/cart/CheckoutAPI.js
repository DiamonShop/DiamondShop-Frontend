export const handleCheckout = async (orderModel) => {
    try {
        const response = await fetch("https://localhost:7101/api/orders/Checkout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderModel)
        });

        const data = await response.json();

        if (response.ok) {
            return data.paymentUrl; // Assuming paymentUrl is returned from backend
        } else {
            throw new Error(data.message); // Handle backend errors
        }
    } catch (error) {
        console.error('Error during checkout:', error);
        throw error; // Rethrow to handle in calling function
    }
};