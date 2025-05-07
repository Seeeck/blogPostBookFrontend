import axiox from "axios"
import { toast } from "react-toastify";


const clientAxios = axiox.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
    headers: { "Accept": "application/json" }
});

//Se agrega el token cada vez que se carga una ruta del la api
clientAxios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

//Si hay un error 401 de  authenticacion se borra el token
clientAxios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token")
            toast("Error de autenticación")

        }
        return Promise.reject(error);
    }
);
export default clientAxios;