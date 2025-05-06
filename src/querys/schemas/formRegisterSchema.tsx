import * as yup from 'yup';

export const formRegisterSchema = yup.object().shape({
    name: yup.string().required("El nombre ed usuario es requerido").min(5, "Mínimo 5 caracteres").max(60, "Máximo 60 caracteres"),
    email: yup.string().required('Correo obligatorio').matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Correo electrónico no válido'
    ),
    password: yup.string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Contraseña obligatoria')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial(!@#$%^&*(),.?":{}|<>)')
        .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula'),
    password_confirmation: yup.string()
        .oneOf([yup.ref('password')], 'Las contraseñas deben coincidir')
        .required('Confirma tu contraseña')
    ,

});