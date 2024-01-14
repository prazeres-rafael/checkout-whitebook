import Chip, { ChipProps } from "@mui/material/Chip";

import { colors } from "@/utils/tokens";

const BaseChip = ({ color = "default", ...props }: ChipProps) => {
  const customStyles = (() => {
    switch (color) {
      case "warning":
        return {
          backgroundColor: colors.secondary,
          borderRadius: "9px",
          color: "#fff",
          fontSize: "10px",

          "& > span": { padding: "4px 12px" },
        };
      default:
        return {
          border: "1px solid #F4F3F6",
          borderRadius: "12px",

          "& > span": { padding: "4px 12px" },
        };
    }
  })();

  return <Chip {...props} sx={{ height: "100%", ...customStyles }} />;
};

export default BaseChip;
