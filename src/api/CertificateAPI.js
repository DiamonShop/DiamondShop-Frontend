export const handleGetCetificateByUserId = async (userId) => {
    try {
        const response = await fetch(`https://localhost:7101/api/Certificate/GetCertificateByUserId?userId=${userId}`, {
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