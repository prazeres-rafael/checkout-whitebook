import Box from "@mui/material/Box";
import Image from "next/image";

import { Card, Typography } from "@/components";
import { colors, spacing } from "@/utils/tokens";

const PlanResume = () => {
  return (
    <Card isFeedbackCard>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: colors.grey[5],
          borderRadius: "15px",
          padding: "16px 20px",
        }}
      >
        <Image
          alt="Sucesso na compra"
          src="/svg/star-icon.svg"
          height={40}
          width={40}
        />
        <Box>
          <Typography
            variant="body2"
            color={colors.primary}
            fontSize="16px"
            textAlign="right"
          >
            Anual | Parcelado
          </Typography>
          <Typography variant="body2" color={colors.primary} textAlign="right">
            R$ 479,90 | 10x R$ 47,99
          </Typography>
        </Box>
      </Box>
      <Box p="0 20px">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" mt={spacing[2]} color={colors.grey[3]}>
            E-mail
          </Typography>
          <Typography variant="body2" mt={spacing[2]}>
            fulano@cicrano.com.br
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" mt={spacing[2]} color={colors.grey[3]}>
            CPF
          </Typography>
          <Typography variant="body2" mt={spacing[2]}>
            000.000.000-00
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default PlanResume;
