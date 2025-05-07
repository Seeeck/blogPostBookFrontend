import clientAxios from "./clientAxios"
import { useMutation } from "@tanstack/react-query"

type Params = {
    username: string
    email: string
    token: string
}


const postVerifyToken = async (params: Params) => {

    const data = await clientAxios.post("/verifyToken", params);
    return data;
}

const useVerifyToken = () => {
    const mutation = useMutation({
        mutationFn: postVerifyToken
    })
    return mutation;
}

export default useVerifyToken