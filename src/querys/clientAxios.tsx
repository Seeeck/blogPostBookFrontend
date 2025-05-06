import axiox from "axios"

const clientAxios = axiox.create({
    baseURL: import.meta.env.VITE_BACKEND_API,
    headers: { "Accept":"application/json" }
});

export default clientAxios;