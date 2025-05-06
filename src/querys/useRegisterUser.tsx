import clientAxios from "./clientAxios"
import { useMutation } from "@tanstack/react-query"

type Params = {
    name: string
    email: string
    password: string
    password_confirmation: string
}


const postRegisterUser = async (params:Params) => {

    const data = await clientAxios.post("/registrarUsuario",params);
    return data;
}

const useRegisterUser = () => {
    const mutation = useMutation({
        mutationFn: postRegisterUser
    })
    return mutation;
}

export default useRegisterUser