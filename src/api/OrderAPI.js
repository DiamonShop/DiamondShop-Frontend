import axios from "axios";

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

export const handleAddProductToOrder = async (orderId, productId, quantity) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/AddProductToOrderDetail?orderId=${orderId}&productId=${productId}&quantity=${quantity}`, {
            method: 'POST',
            mode: 'cors',
        });

        if (!response.ok) {
            throw new Error(`Failed to add product to order: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding product to order:", error);
        return null;
    }
};

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

export const handleGetHistoryOrderByUserId = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/GetHistoryOrderByUserId?userId=${userId}`, {
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
        return false;
    }
}

export const handleDeleteOrderDetail = async (orderDetailId) => {
    const response = await fetch(`https://localhost:7101/api/orders/DeleteOrderDetail?orderDetailId=${orderDetailId}`, {
        method: 'DELETE',
        mode: 'cors',
    });
    const data = await response.json();
    if (data == null) {
        return null;
    } else {
        return data;
    }
}

export const handleGetAllOrderDetail = async () => {
    // Perform POST request to create a new user
    const response = axios.get("https://localhost:7101/api/orders/GetAllOrderDetail",
        {
            'Content-Type': 'application/json'
        })
    var arr = (await response).data;
    return arr;
}

export const handleUpdateStatusToPending = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/UpdateStatusToPending?userId=${userId}`, {
            method: 'PUT',
            mode: 'cors'
        });
        const data = await response.json();
        if (data == false) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const handleUpdateStatusToShipping = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/UpdateStatusToShipping?userId=${userId}`, {
            method: 'PUT',
            mode: 'cors'
        });
        const data = await response.json();
        if (data == false) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

export const handleGetOrderByUserIdOrderId = async (userId, orderId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/GetOrderByUserIdOrderId?userId=${userId}&orderId=${orderId}`, {
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

export const handleGetLatestOrderByUserId = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/GetLatestOrderByUserId?userId=${userId}`, {
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

export const handleUpdateTotalPriceByUserId = async (userId,price) => {
    try {
        const response = await fetch(`https://localhost:7101/api/orders/UpdateTotalPriceByUserId?userId=${userId}&price=${price}`, {
            method: 'PUT',
            mode: 'cors'
        });
        const data = await response.json();
        if (data == false) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}