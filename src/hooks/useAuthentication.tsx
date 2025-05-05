import { useState } from "react"




export const useAuthentication = () => {
    const [token, setToken] = useState("");

    const login = (email: string, clave: string) => {
        //ejecutar usequery y almacenar token en localstorage
    }

    const logout = () => {
        //borrar token del localstorage
    }



    return { login, logout, token }
}