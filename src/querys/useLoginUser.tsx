import clientAxios from "./clientAxios"
import { useMutation } from "@tanstack/react-query"

type Params = {
    email: string
    password: string

}


const postLoginUser = async (params: Params) => {

    const data = await clientAxios.post("/login", params);
    return data;
}

const useLoginUser = () => {
    const mutation = useMutation({
        mutationFn: postLoginUser
    })
    return mutation;
}

export default useLoginUser