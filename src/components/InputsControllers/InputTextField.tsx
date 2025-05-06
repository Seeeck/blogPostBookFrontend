import { TextField } from "@mui/material";
import { Control, useController } from "react-hook-form";

type PropsInputTextField = {
    control: Control<any>
    name: string
    placeholder: string
    type: string
}
function InputTextField({ control, name, placeholder, type }: PropsInputTextField) {
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
            variant="standard"
            placeholder={placeholder}
            sx={styles.textFieldStyle}
            error={!!error}
            helperText={error?.message}
            type={type}
        />
    );
}
const styles: { [key: string]: React.CSSProperties } = {
    textFieldStyle: {
        margin: 2,
        width: 200
    }
}
export default InputTextField;