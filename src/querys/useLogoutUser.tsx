import clientAxios from "./clientAxios"
import { useMutation } from "@tanstack/react-query"

type Params = {
    email: string
    username:string
    token: string

}


const postLogout = async (params: Params) => {

    const data = await clientAxios.post("/logout", params);
    return data;
}

const useLogoutUser = () => {
    const mutation = useMutation({
        mutationFn: postLogout
    })
    return mutation;
}

export default useLogoutUser