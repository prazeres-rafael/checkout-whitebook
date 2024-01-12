import Card, { CardProps } from "@mui/material/Card";

const BaseCard = ({ ...props }: CardProps) => {
  return (
    <Card
      {...props}
      sx={{
        width: "330px",
        padding: "20px",
        borderRadius: "15px",
        border: "1px solid #191847",
      }}
    />
  );
};

export default BaseCard;
