import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const apiUsers = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/users"
});

export const apiAuth = axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/auth"
});
export default api;