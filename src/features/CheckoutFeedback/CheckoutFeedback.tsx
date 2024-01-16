import Image from "next/image";
import Box from "@mui/material/Box";

import { Card, Header, Typography } from "@/components";
import { colors, spacing } from "@/utils/tokens";

const CheckoutWhitebook = () => {
  return (
    <Box>
      <Header />
      <Box display="flex" alignItems="center" flexDirection="column">
        <Image
          alt="Sucesso na compra"
          src="/svg/icon-success.svg"
          height={60}
          width={60}
        />
        <Typography variant="h4" mt={spacing[3]} color={colors.primary}>
          Parabéns!
        </Typography>
        <Typography
          variant="body2"
          mt={spacing[2]}
          color={colors.grey[3]}
          fontSize="16px"
          textAlign="center"
        >
          Sua assinatura foi realizada com sucesso.
        </Typography>
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
              <Typography
                variant="body2"
                color={colors.primary}
                textAlign="right"
              >
                R$ 479,90 | 10x R$ 47,99
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" mt={spacing[2]} color={colors.grey[3]}>
              E-mail
            </Typography>
            <Typography variant="body2" mt={spacing[2]} width={220}>
              fulano@cicrano.com.br
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2" mt={spacing[2]} color={colors.grey[3]}>
              CPF
            </Typography>
            <Typography variant="body2" mt={spacing[2]} width={220}>
              000.000.000-00
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default CheckoutWhitebook;
