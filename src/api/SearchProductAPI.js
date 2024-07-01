export const handleGetProductByName = async (searchValue) => {
    try {
        const response = await fetch(`https://localhost:7101/api/products/GetProductsByName?productName=${searchValue}`, {
            method: 'GET',
            mode: 'cors',
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

