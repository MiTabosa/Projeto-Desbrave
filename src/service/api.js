import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_URL_BACK,
    timeout: 5000, 
    headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Access-Control-Allow-Origin'] = '*';   
    } 
    return config;
})

api.interceptors.response.use((response) => {
    return response
})