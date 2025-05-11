import { TextField } from "@mui/material";
import { Control, useController } from "react-hook-form";

type PropsInputTextField = {
    control: Control<any>
    name: string
    placeholder: string
    type: string
    multiline?: boolean,
    rows?: number
   
}
function InputTextField({
    control,
    name,
    placeholder,
    type,
    multiline = false,
    rows = 1,
    }: PropsInputTextField) {
    const {
        field,
        fieldState: { error }
    } = useController({
        name,
        control,
        rules: { required: true },
    });


    return (
        <TextField
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            inputRef={field.ref}
            variant="outlined"
            placeholder={placeholder}
            sx={styles.textFieldStyle}
            error={!!error}
            helperText={error?.message}
            type={type}
            multiline={multiline}
            rows={rows}
        />
    );
}
const styles: { [key: string]: React.CSSProperties } = {
    textFieldStyle: {
        width: "100%",
        marginTop:1
    }
}
export default InputTextField;