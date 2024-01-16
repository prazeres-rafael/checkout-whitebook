import Card, { CardProps } from "@mui/material/Card";

import { colors } from "@/utils/tokens";

type BaseCardProps = {
  isFeedbackCard?: boolean;
} & CardProps;

const BaseCard = ({ isFeedbackCard = false, ...props }: BaseCardProps) => {
  const feedbackCardStyles = {
    width: "343px",
    padding: "16px",
    boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
  };

  const defaultStyles = {
    width: "330px",
    padding: "20px",
    border: `1px solid ${colors.primary}`,
  };

  const customStyles = {
    ...(isFeedbackCard ? feedbackCardStyles : defaultStyles),
  };

  return <Card {...props} sx={{ borderRadius: "15px", ...customStyles }} />;
};

export default BaseCard;
