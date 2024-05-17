import axios from "axios";

const baseURL = "https://hamburgueria-kenzie-json-serve.herokuapp.com/";

const api = axios.create({
    baseURL: baseURL,
    timeout: 8 * 1000,
});

export default api;
