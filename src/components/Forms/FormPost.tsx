import { Box, Button, Grid, Typography, } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef, useState } from "react";
import InputTextField from "../InputsControllers/InputTextField";
import { useForm } from "react-hook-form";
import InputImageFileField from "../InputsControllers/InputImageFileField";
import { yupResolver } from "@hookform/resolvers/yup";
import formPostSchema from "../../querys/schemas/formPostSchema";
import ClearIcon from '@mui/icons-material/Clear';
import useSavePost from "../../querys/useSavePost";
import { toast } from "react-toastify";
const FormPost = ({ refetch }: { refetch: () => void }) => {
    const { mutate } = useSavePost()
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: { mensaje: "", imagen: null },
        resolver: yupResolver(formPostSchema)
    })
    const inputRef = useRef(null);
    const [imageURL, setImageURL] = useState("")


    const handleClick = () => {
        inputRef.current.click();
    };
    const handleDeleteImage = () => {
        setImageURL("")
        inputRef.current.value = ""

    }
    const onSubmit = (data: any) => {
        console.log("IMAGEN::", data)
        mutate(data, {
            onSuccess: (data) => {
                reset()
                refetch()
                setImageURL("")
                inputRef.current.value = ""
                toast(data.data.message, { type: "success" })
            },
            onError: () => {
                toast(data.data.message, { type: "error" })
            }
        });
    }


    return (

        <Box>
            <InputTextField
                name="mensaje"
                placeholder="Ingrese un mensaje en su publicación"
                type="text"
                multiline
                rows={4}
                control={control}
            />

            <Grid>
                {imageURL && <Box sx={styles.imageContainer}>

                    <img src={imageURL} alt="Vista previa" style={styles.imageURLStyle} />
                    <Button onClick={handleDeleteImage} sx={styles.clearImageIcon}><ClearIcon /></Button>
                </Box>}

                <Typography style={styles.imageMessageStyle}>{errors.imagen?.message}</Typography>
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

                        sx={styles.buttonImageStyle}
                        startIcon={<CloudUploadIcon />}
                    >
                        Subir imagen

                    </Button>

                </Grid>
                <Grid sx={styles.buttonPostStyle}>
                    <Button onClick={handleSubmit(onSubmit)} variant="contained">Publicar</Button>
                </Grid>
            </Grid>
        </Box>

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
    imageContainer: {
        position: "relative"
    },
    clearImageIcon: {
        position: "absolute",
        color: "white",
        zIndex: 10,
        top: 10,
        right: 10,
        backgroundColor: "gray",
        borderRadius: 30
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
        color: "#d32f2f",
        textAlign: "center"
    }

};
export default FormPost