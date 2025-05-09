import { Box, Typography } from "@mui/material"
import { RefObject } from "react"
import { Control, useController } from "react-hook-form"

type Props = {
    name: string
    control: Control<any>
    inputRef: RefObject<null>
    setImageURL: (file: string) => void
}
const InputImageFileField = ({ name, control, inputRef, setImageURL }: Props) => {

    const { field: { onChange, value },fieldState:{error} } = useController({ name, control })

    return (
        <Box>


            <input
                type="file"
                accept="image/*"

                ref={inputRef}
                onChange={e => {
                    onChange(e.target.files[0])
                    const url = URL.createObjectURL(e.target.files[0]);
                    setImageURL(url);
                }}
                style={{ display: 'none' }}
            />
          
        </Box>
    )
}

export default InputImageFileField;