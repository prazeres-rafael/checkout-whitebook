import TextField, { TextFieldProps } from "@mui/material/TextField";
import { UseFormRegisterReturn } from "react-hook-form";

import { colors, spacing } from "@/utils/tokens";

type BaseTextFieldProps = {
  register: any;
} & TextFieldProps;

const BaseTextField = ({ register, ...props }: BaseTextFieldProps) => {
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      fullWidth
      sx={{
        marginTop: 0,
        marginBottom: spacing[5],

        "& .MuiFormLabel-root": {
          color: colors.grey[4],
          fontSize: "12px",
          WebkitTransform: "none",
          transform: "none",
        },

        " & .MuiInputBase-root::before": {
          borderBottom: `1px solid ${colors.grey[5]}`,
        },

        "& .MuiInputBase-root::after": {
          borderBottom: `1px solid ${colors.grey[5]}`,
        },

        "& .MuiInputBase-input": {
          color: colors.grey[3],
        },
      }}
      {...register}
      {...props}
    />
  );
};

export default BaseTextField;
