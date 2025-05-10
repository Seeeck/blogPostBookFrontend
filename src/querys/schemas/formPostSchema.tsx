import * as yup from 'yup';

const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];
const formPostSchema = yup.object({
    mensaje: yup.string().required("El mensaje es requerido")
        .min(5, "Debe ingresar mínimo 5 caracteres").max(255, "Ingrese máximo 255 caracteres"),
    imagen: yup.mixed().nullable().notRequired().test(
        'fileFormat',
        'Formato de imagen no soportado',
        (value) => {
            if (!value) return true; 
            return SUPPORTED_FORMATS.includes(value.type);
        }
    ),
})

export default formPostSchema;