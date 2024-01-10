import Box from "@mui/material/Box";
import { ImageDisplay } from "./Header.styles";

const Header = () => {
  return (
    <Box sx={{ height: 90 }} display="flex" alignItems="center">
      <ImageDisplay
        alt="Return Click"
        src="/svg/left-arrow.svg"
        height={13}
        width={8}
        style={{ marginRight: "auto" }}
      />
      <ImageDisplay
        alt="Logo"
        src="/svg/logo.svg"
        height={29}
        width={41}
        style={{ marginRight: "auto" }}
      />
    </Box>
  );
};

export default Header;
