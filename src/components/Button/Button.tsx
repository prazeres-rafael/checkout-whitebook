import Button, { ButtonProps } from "@mui/material/Button";

import { colors } from "@/utils/tokens";

const BaseButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: colors.primary,
        borderRadius: "25px",
        height: "50px",
        textTransform: "none",

        '&:hover': {
          backgroundColor: colors.primary,
        }
      }}
    />
  );
};

export default BaseButton;
