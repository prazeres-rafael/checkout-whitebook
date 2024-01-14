import Card, { CardProps } from "@mui/material/Card";

import { colors } from "@/utils/tokens";

const BaseCard = ({ ...props }: CardProps) => {
  return (
    <Card
      {...props}
      sx={{
        width: "330px",
        padding: "20px",
        borderRadius: "15px",
        border: `1px solid ${colors.primary}`,
      }}
    />
  );
};

export default BaseCard;
