import { Box, Button, Grid, TextField, Typography } from "@mui/material";



const FormRegister = () => {
    return (
        <Grid sx={styles.gridCrearCuenta} container>
            <Grid size={12} >
                <Typography color="#1877f2" mt={5} textAlign={"center"} variant="h4">Crea una cuenta</Typography>
            </Grid>
            <Grid>
                <TextField sx={styles.textFieldStyle} placeholder="nombre de usuario" id="outlined-basic" label="Ingrese nombre de usuario" variant="standard" />
            </Grid>
            <Grid>
                <TextField sx={styles.textFieldStyle} placeholder="email" id="outlined-basic" label="Ingresar su email" variant="standard" />
            </Grid>
            <Grid>
                <TextField sx={styles.textFieldStyle} placeholder="contraseña" id="outlined-basic" label="Ingrese una contraseña" variant="standard" />
            </Grid>
            <Grid>
                <TextField sx={styles.textFieldStyle} placeholder="confirmar contraseña" id="outlined-basic" label="Ingrese nuevamente la contraseña" variant="standard" />
            </Grid>
            <Grid>
                <Button sx={styles.crearCuentaButtonStyle} variant="contained">Crear cuenta</Button>
            </Grid>
        </Grid>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    gridCrearCuenta: {
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


    }, textFieldStyle: {
        width: 250,
        margin: 2
    },
    crearCuentaButtonStyle:{
        margin: 2,
        color: "white",
        backgroundColor: "#1877f2"
    }
}
export default FormRegister;