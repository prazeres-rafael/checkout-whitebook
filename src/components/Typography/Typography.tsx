import Typography, { TypographyProps } from "@mui/material/Typography";

const BaseTypography = ({ ...props }: TypographyProps) => {
  const { variant, children } = props;

  const customStyles = (() => {
    switch (variant) {
      case "h4":
        return {
          fontSize: "20px",
        };
      case "body1":
        return {
          fontSize: "12px",
        };
      default:
        return {};
    }
  })();

  return (
    <Typography
      {...props}
      sx={{
        ...customStyles,
      }}
    />
  );
};

export default BaseTypography;
