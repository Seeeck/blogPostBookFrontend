import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import InputTextField from "../InputsControllers/InputTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { formRegisterSchema } from "../../querys/schemas/formRegisterSchema";



const FormRegister = () => {

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(formRegisterSchema)
    })
    const onSubmit = () => {

    }
    return (
        <Grid sx={styles.gridCrearCuenta} container>
            <Grid size={12} >
                <Typography color="#1877f2" mt={5} textAlign={"center"} variant="h4">Crea una cuenta</Typography>
            </Grid>
            <Grid>
                <InputTextField control={control} name="name" placeholder="Ingrese un nombre de usuario" />
            </Grid>
            <Grid>
                <InputTextField control={control} name="email" placeholder="Ingrese un email" />

            </Grid>
            <Grid>
                <InputTextField control={control} name="password" placeholder="Ingrese una contraseña" />

            </Grid>
            <Grid>
                <InputTextField control={control} name="password_confirmation" placeholder="Confirmar contraseña" />

            </Grid>
            <Grid>
                <Button onClick={handleSubmit(onSubmit)} sx={styles.crearCuentaButtonStyle} variant="contained">Crear cuenta</Button>
            </Grid>
        </Grid>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    gridCrearCuenta: {
        marginTop: 5,
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: 0.5,
        borderRadius: 10,
        borderColor: "#1877f2",
        width: 350,
        justifySelf: "center",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',


    }, textFieldStyle: {
        width: 250,
        margin: 2
    },
    crearCuentaButtonStyle: {
        margin: 2,
        color: "white",
        backgroundColor: "#1877f2"
    }
}
export default FormRegister;