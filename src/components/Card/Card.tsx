import Card, { CardProps } from "@mui/material/Card";

import { colors } from "@/utils/tokens";
import { isMobile } from "@/utils/isMobile";

type BaseCardProps = {
  isFeedbackCard?: boolean;
} & CardProps;

const BaseCard = ({ isFeedbackCard = false, ...props }: BaseCardProps) => {
  const feedbackCardStyles = {
    width: isMobile() ? "100%" : "343px",
    padding: "16px",
    boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
  };

  const defaultStyles = {
    width: isMobile() ? "100%" : "330px",
    padding: "20px",
    border: `1px solid ${colors.primary}`,
  };

  const customStyles = {
    ...(isFeedbackCard ? feedbackCardStyles : defaultStyles),
  };

  return <Card {...props} sx={{ borderRadius: "15px", ...customStyles }} />;
};

export default BaseCard;
