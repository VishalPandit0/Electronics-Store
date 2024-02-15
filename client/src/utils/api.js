import axios from 'axios';

const params = {
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_STRIPE_KEY 
    }
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(import.meta.env.VITE_BASE_URL + url, params);
        return data;
    } catch (error) {
        console.log(error);
        throw error; // Re-throw the error to handle it in the caller function
    }
};

export const makePaymentReq = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_STRIPE_KEY,
    }
});
