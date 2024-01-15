import Box from "@mui/material/Box";
import { ImageDisplay } from "./Header.styles";

const Header = () => {
  return (
    <Box
      sx={{ height: 90, margin: "0 68px" }}
      display="flex"
      alignItems="center"
    >
      <ImageDisplay
        alt="Return Click"
        src="/svg/left-arrow.svg"
        height={13}
        width={8}
      />
      <ImageDisplay alt="Logo" src="/svg/logo.svg" height={29} width={41} />
    </Box>
  );
};

export default Header;
