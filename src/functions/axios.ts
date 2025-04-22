import axios from 'axios';

const serverUrl = process.env.SERVER_URL;

if (!serverUrl) {
    throw new Error('SERVER_URL is not defined in the environment variables');
}

const axiosInstance = axios.create({
    baseURL: serverUrl,
    timeout: 5000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;