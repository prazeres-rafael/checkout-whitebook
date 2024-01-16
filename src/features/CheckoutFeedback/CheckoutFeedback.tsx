import Image from "next/image";
import Box from "@mui/material/Box";

import { Button, Header, Typography } from "@/components";
import { colors, spacing } from "@/utils/tokens";
import { PlanResume } from "./components";

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
          mb={spacing[10]}
          color={colors.grey[3]}
          fontSize="16px"
          textAlign="center"
          width={220}
        >
          Sua assinatura foi realizada com sucesso.
        </Typography>
        <PlanResume />
        <Box mt="80px">
          <Button kind="secondary" variant="contained" type="submit" fullWidth>
            Gerenciar assinatura
          </Button>
          <Button variant="contained" type="submit" fullWidth>
            IR PARA A HOME
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutWhitebook;
