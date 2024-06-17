export const handleCheckout = (orderModel) => {
    fetch("https://localhost:7101/api/orders/Checkout", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderModel)
    })
    const data = handleCheckout.json();
    try {
        if (data.success) {
            // Handle successful checkout
            console.log('Order created successfully:', data.data);
            // Redirect to confirmation page or do other handling

        } else {
            console.error('Error creating order:', data.message);
            // Handle checkout errors (display error message to user)
        }
    } catch (error) {
        console.error('Error during checkout:', error);
        // Handle network or other errors
    }
};