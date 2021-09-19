import Axios from "axios";

export const clientSnipCard = Axios.create({
    baseURL: process.env.SNIPCARD_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Basic${Buffer.from(process.env.SNIPCART_SECRETE_API_KEY as string, 'base64')}`
    }
});
