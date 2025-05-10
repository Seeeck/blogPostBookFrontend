



import clientAxios from "./clientAxios"
import { useMutation } from "@tanstack/react-query"



const postSavePost = async (params: { mensaje: string, imagen: File }) => {


    const formdata = new FormData()
    formdata.append("mensaje", params.mensaje)
    formdata.append("imagen", params.imagen)

    const data = await clientAxios.post("/registrarPost", formdata, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
   
    return data;
}

const useSavePost = () => {
    const mutation = useMutation({
        mutationFn: postSavePost
    })
    return mutation;
}

export default useSavePost