import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, TextField, Typography } from "@mui/material"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { formLoginchema } from "../../querys/schemas/formLoginSchema";
import InputTextField from "../InputsControllers/InputTextField";
import useLoginUser from "../../querys/useLoginUser";
import { toast } from "react-toastify";
import { useAuthenticationStore } from "../../stores/userAuthenticationStore";



const FormLogin = () => {
    const saveToken = useAuthenticationStore(state => state.saveToken);
    const setUser = useAuthenticationStore(state => state.setUser);
    const setIsLogged = useAuthenticationStore(state => state.setIsLogged);
    const isLogged = useAuthenticationStore(state => state.isLogged);
    let navigate = useNavigate();
    const { mutate } = useLoginUser()
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(formLoginchema)
    })


    const onSubmit = (data: { email: string, password: string }) => {

        mutate(data, {
            onSuccess: data => {
                toast(data.data.message, { type: "success" })
                localStorage.setItem('username', data.data.user.username);
                localStorage.setItem('email', data.data.user.email);
                localStorage.setItem('token', data?.data?.token);
                //almacenar token en un store
                setIsLogged(true);
                saveToken(data?.data?.token);
                setUser({ username: data.data.user.username, email: data.data.user.email })
                navigate("/")
            },
            onError: data => {

                if (data.response.data.code == 401) {
                    toast(data?.response?.data?.message, { type: "error" })
                    localStorage.removeItem('username');
                    localStorage.removeItem('email');
                    localStorage.removeItem('token');
                    saveToken("");
                    setUser({ email: "", username: "" })
                    setIsLogged(false)
                    navigate("/login")
                }
            }

        })
    }

    const handleCrearCuenta = () => {
        navigate("/crearCuenta")
    }

    return (

        <Grid sx={styles.boxLogin} container spacing={2}>
            <Grid  >
                <Typography color="#1877f2" mt={5} textAlign={"center"} variant="h4">Ingresar</Typography>
            </Grid>
            <Grid size={{lg:9}}>
                <InputTextField type="text" control={control} name="email" placeholder="Ingrese su email" />
            </Grid>
            <Grid size={{lg:9}}>
                <InputTextField type="password" control={control} name="password" placeholder="Ingrese su contraseña" />
            </Grid>
            <Grid>
                <Button onClick={handleSubmit(onSubmit)} sx={styles.loginButtonStyle} variant="contained">Ingresar</Button>
            </Grid>
            <Grid >

                <Button onClick={handleCrearCuenta} sx={styles.crearCuentaButtonStyle} variant="contained">Crear cuenta</Button>
            </Grid>
        </Grid>

    )


}

const styles: { [key: string]: React.CSSProperties } = {
    boxLogin: {
        marginTop: 10,
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


    }
    , textFieldStyle: {
        width: 250,
        margin: 2
    },
    loginButtonStyle: {
        margin: 2,
        color: "white",
        backgroundColor: "#1877f2"
    },
    crearCuentaButtonStyle: {
        margin: 2
    }


};

export default FormLogin;