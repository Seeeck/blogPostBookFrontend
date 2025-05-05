import { Button, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router";



const FormLogin = () => {
    let navigate = useNavigate();

    const handleCrearCuenta = () => {
        navigate("/crearCuenta")
    }


    return (

        <Grid sx={styles.boxLogin} container spacing={2}>
            <Grid size={12} >
                <Typography color="#1877f2" mt={5} textAlign={"center"} variant="h4">Ingresar</Typography>
            </Grid>
            <Grid>
                <TextField sx={styles.textFieldStyle} placeholder="email" id="outlined-basic" label="Ingresar email" variant="standard" />
            </Grid>
            <Grid>
                <TextField sx={styles.textFieldStyle} placeholder="contraseña" id="outlined-basic" label="Ingresar contraseña" variant="standard" />
            </Grid>
            <Grid>
                <Button sx={styles.loginButtonStyle} variant="contained">Ingresar</Button>
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