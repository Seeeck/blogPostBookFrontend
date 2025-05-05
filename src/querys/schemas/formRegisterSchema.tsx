import * as yup from 'yup';

export const formRegisterSchema = yup.object().shape({
    name: yup.string().required("El nombre ed usuario es requerido").min(5, "Mínimo 5 caracteres").max(60, "Máximo 60 caracteres"),
    email: yup.string().email('Correo inválido').required('Correo obligatorio'),
    password: yup.string().min(6, 'Mínimo 6 caracteres').required('Contraseña obligatoria'),
    password_confirmation: yup.string()
        .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
        .required('Confirma tu contraseña'),

});