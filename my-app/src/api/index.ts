import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
    headers: {'Content-Type': 'application/json'}
})

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token") || "";

    if (token && config.headers){
        config.headers.authorization = `Bearer ${token}`;
    }

    return config
})

export default instance