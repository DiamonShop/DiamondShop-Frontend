export const handleCreateOrder = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/CreatOrder?userId=${userId}`, {
            method: 'POST',
            mode: 'cors',
        });
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error during create order:", error);
        return null; // Return null on error
    }
};

export const handleAddProductToOrder = async (orderId, productId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/CreateOrderDetail?orderId=${orderId}&productId=${productId}`, {
            method: 'POST',
            mode: 'cors',
        });

    } catch (error) {
        console.error("Error during add product to order:", error);
        return null; // Return null on error
    }
}
