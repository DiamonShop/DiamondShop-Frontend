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

        const contentType = response.headers.get("content-type");
        let data;
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
            return data.url; // Assuming the API returns an object with a 'url' property
        } else {
            data = await response.text();
            return data; // Directly return the plain text response (URL)
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};