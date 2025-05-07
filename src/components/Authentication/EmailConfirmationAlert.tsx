import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";


const EmailConfirmationAlert = () => {
    const navigate = useNavigate()
    const handleVolver = () => {
        navigate("/", { replace: true })
    }
    return (
        <Box sx={styles.boxAlertEmailStyle}>
            <Typography textAlign={"center"}>Se envió un mensaje a su bandeja de correo para verificar su cuenta</Typography>
            <Button sx={styles.volverButtonStyle} onClick={handleVolver} variant="contained">Volver</Button>
        </Box>
    )

}
const styles: { [key: string]: React.CSSProperties } = {
    boxAlertEmailStyle: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        height: 300
    },
    volverButtonStyle: {
        marginTop: 2
    }
}
export default EmailConfirmationAlert;