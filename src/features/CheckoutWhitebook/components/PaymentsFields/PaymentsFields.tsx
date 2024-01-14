import Box from "@mui/material/Box";
import Image from "next/image";
import { colors, spacing } from "@/utils/tokens";
import { Typography } from "@/components";
import { TextField, Button, Grid } from "@mui/material";

const PaymentsFields = () => {
  return (
    <Box width="330px">
      <Box mb={spacing[5]}>
        <Typography variant="h4" mb={spacing[2]}>
          Estamos quase lá!
        </Typography>
        <Typography variant="body2" mb={spacing[2]} fontSize={16}>
          Insira seus dados de pagamento abaixo:
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mb={spacing[2]}>
        <Image
          alt="Bandeiras de cartões de crédito"
          src="/svg/bandeiras-cartoes.svg"
          height={23}
          width={215}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="body1"
          fontSize={10}
          mr={spacing[1]}
          color={colors.grey[2]}
        >
          Pagamentos por
        </Typography>
        <Image
          alt="Bandeiras de cartões de crédito"
          src="/svg/iugu-payment.svg"
          height={11}
          width={29}
        />
      </Box>
      <Box mt={spacing[4]}>
        <form>
          <TextField
            label="Número do cartão"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="0000 0000 0000 0000"
          />
          <Grid container spacing={"50px"}>
            <Grid item xs={6}>
              <TextField
                label="Validade"
                variant="standard"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="MM/AA"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                variant="standard"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="000"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" fullWidth>
            Pagar
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default PaymentsFields;
