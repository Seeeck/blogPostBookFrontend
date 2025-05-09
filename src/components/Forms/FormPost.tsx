import { Button, Grid, Typography, } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef, useState } from "react";
import InputTextField from "../InputsControllers/InputTextField";
import { useForm } from "react-hook-form";
import InputImageFileField from "../InputsControllers/InputImageFileField";
import { yupResolver } from "@hookform/resolvers/yup";
import formPostSchema from "../../querys/schemas/formPostSchema";

const FormPost = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formPostSchema)
    })
    const inputRef = useRef(null);
    const [imageURL, setImageURL] = useState("")

    const handleClick = () => {
        inputRef.current.click();
    };

    const onSubmit = () => {

    }


    return (

        <Grid container sx={styles.gridContainerStyle} >

            <Grid size={{ xs: 10, sm: 9, md: 7, lg: 4 }} >
                <InputTextField
                    name="mensaje"
                    placeholder="Ingrese un mensaje en su publicación"
                    type="text"
                    multiline
                    rows={4}
                    control={control}
                />

                <Grid>
                    {imageURL && <img src={imageURL} alt="Vista previa" style={styles.imageURLStyle} />}

                </Grid>
                <Grid container sx={styles.gridButtonsStyle}>

                    <Grid sx={styles.buttonImageUploadStyle}>

                        <InputImageFileField
                            control={control}
                            inputRef={inputRef}
                            setImageURL={setImageURL}
                            name="imagen"
                        />

                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            onClick={handleClick}
                            tabIndex={-1}
                            sx={styles.buttonImageStyle}
                            startIcon={<CloudUploadIcon />}
                        >
                            Subir imagen

                        </Button>
                        <Typography style={styles.imageMessageStyle}>{errors.imagen?.message}</Typography>
                    </Grid>
                    <Grid sx={styles.buttonPostStyle}>
                        <Button onClick={handleSubmit(onSubmit)} variant="contained">Publicar</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    )
}

const styles: { [key: string]: React.CSSProperties } = {
    gridContainerStyle: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10
    },
    inputTextFieldStyle: {
        width: "100%"
    },
    gridButtonsStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        margin: 2
    },
    buttonImageUploadStyle: {
        margin: 1
    },
    buttonPostStyle: {
        marginBottom: 1,
        marginTop: 1,

    },
    imageURLStyle: {
        width: "100%",
        marginTop: 2
    },
    imageMessageStyle: {
        fontSize: 15,
        color:"#d32f2f"
    }

};
export default FormPost