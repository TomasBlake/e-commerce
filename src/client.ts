import Axios from "axios";

export const clientSnipCard = Axios.create({
    baseURL: process.env.SNIPCARD_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authentication': `Basic${Buffer.from(process.env.SNIPCART_SECRETE_API_KEY || "", 'base64')}`
    }
});

export const clientStrapi = Axios.create({
    baseURL: "http://localhost:1337", // process.env.STRAPI_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
