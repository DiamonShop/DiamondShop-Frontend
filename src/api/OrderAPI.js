export const handleCreateOrder = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/CreatOrder?userId=${userId}`, {
            method: 'POST',
            mode: 'cors',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during create order:", error);
        return null; // Return null on error
    }
};

export const handleAddProductToOrder = (orderId, productId, quantity) => {
    try {
        fetch(`https://localhost:7101/api/orders/AddProductToOrderDetail?orderId=${orderId}&productId=${productId}&quantity=${quantity}`, {
            method: 'POST',
            mode: 'cors',
        });

    } catch (error) {
        console.error("Error during add product to order:", error);
        return null; // Return null on error
    }
}

export const handleGetOrderByUserId = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/GetOrderByUserId?userId=${userId}`, {
            method: 'GET',
            mode: 'cors',
        });
        const data = await response.json();
        if (data.data == null) {
            return null;
        } else {
            return data.data;
        }
    } catch (error) {
        console.error("Error during get order:", error);
        return null; // Return null on error
    }
}

export const handleUpdateTotalPrice = async (orderId, totalPrice) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/UpdateTotalPrice?orderId=${orderId}&totalPrice=${totalPrice}`, {
            method: 'PUT',
            mode: 'cors',
        });
        const data = await response.json();
        if (data == false) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error("Error during get order:", error);
        return false;
    }
}