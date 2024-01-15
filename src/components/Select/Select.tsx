import Select, { SelectProps } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { colors } from "@/utils/tokens";
import { UseFormRegisterReturn } from "react-hook-form";

type BaseSelectProps = {
  register: UseFormRegisterReturn<string>;
  label: string;
  options: string[];
} & SelectProps;

const BaseSelect = ({
  register,
  label,
  options,
  ...props
}: BaseSelectProps) => {
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel
        sx={{
          color: colors.grey[4],
          fontSize: "12px",
          "-webkit-transform": "none",
          transform: "none",
        }}
      >
        {label}
      </InputLabel>
      <Select
        labelId="select-standard-label"
        id="select-standard"
        placeholder="Selecionar"
        {...register}
        {...props}
        sx={{
          "& .MuiSelect-select": {
            // color: colors.grey[5],

            "&:focus": {
              backgroundColor: "transparent",
            },
          },

          "&::before": {
            borderBottom: `1px solid ${colors.grey[5]}`,
          },

          "&::after": {
            borderBottom: `1px solid ${colors.grey[5]}`,
          },
        }}
      >
        <MenuItem value={0}>Selecionar</MenuItem>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BaseSelect;
