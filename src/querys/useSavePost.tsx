



import clientAxios from "./clientAxios"
import { useMutation } from "@tanstack/react-query"

type Params = {
    mensaje:string
    imagen:string
}


const postSavePost = async (params:Params) => {

    const data = await clientAxios.post("/registrarUsuario",params);
    return data;
}

const useSavePost = () => {
    const mutation = useMutation({
        mutationFn: postSavePost
    })
    return mutation;
}

export default useSavePost