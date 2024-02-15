import { useState, useEffect } from "react";
import { fetchDataFromApi } from '../utils/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null); // Initialize state with null

    useEffect(() => {
        const callApi = async () => {
            try {
                const res = await fetchDataFromApi(endpoint);
                setData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData(null); // Reset data to null in case of error
            }
        };

        callApi(); // Call the API function
    }, [endpoint]);
    
    return { data };
};

export default useFetch;
