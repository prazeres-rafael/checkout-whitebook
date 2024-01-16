import Button, { ButtonProps } from "@mui/material/Button";

import { colors } from "@/utils/tokens";

type BaseButtonProps = {
  kind?: "primary" | "secondary";
} & ButtonProps;

const BaseButton = ({ kind = "primary", ...props }: BaseButtonProps) => {
  const primaryStyles = {
    backgroundColor: colors.primary,

    "&:hover": {
      backgroundColor: colors.primary,
    },
  };

  const secondaryStyles = {
    backgroundColor: "transparent",
    color: colors.primary,
    fontWeight: "bold",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  };

  const customStyles = {
    ...(kind === "primary" ? primaryStyles : secondaryStyles),
  };

  return (
    <Button
      {...props}
      sx={{
        borderRadius: "25px",
        height: "50px",
        textTransform: "none",
        ...customStyles,
      }}
    />
  );
};

export default BaseButton;
