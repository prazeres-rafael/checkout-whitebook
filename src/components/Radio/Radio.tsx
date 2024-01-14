import Radio, { RadioProps } from "@mui/material/Radio";

import { colors } from "@/utils/tokens";

const BaseRadio = ({ ...props }: RadioProps) => {
  return (
    <Radio
      {...props}
      sx={{
        "&, &.Mui-checked": {
          color: colors.primary,
          padding: 0,
        },
      }}
    />
  );
};

export default BaseRadio;
