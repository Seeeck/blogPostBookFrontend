import { Box, Typography } from "@mui/material";



const ResourceNotFound = () => {


    return (
        <Box sx={styles.boxNotFound}>
            <Typography color="gray" variant="h3">Recurso no encontrado | error 404</Typography>
        </Box>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    boxNotFound: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 300
    }
}
export default ResourceNotFound;