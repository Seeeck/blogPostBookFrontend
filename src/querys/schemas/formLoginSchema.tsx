import * as yup from 'yup';

export const formLoginchema = yup.object().shape({

    email: yup.string().required('Correo obligatorio').matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Correo electrónico no válido'
    ),
    password: yup.string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Contraseña obligatoria')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial(!@#$%^&*(),.?":{}|<>)')
        .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula'),


});