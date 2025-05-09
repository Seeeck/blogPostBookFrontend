import * as yup from 'yup';
const formPostSchema = yup.object({
    mensaje: yup.string().required("El mensaje es requerido"),
    imagen: yup.string().required("La imagen es requerida")
})

export default formPostSchema;