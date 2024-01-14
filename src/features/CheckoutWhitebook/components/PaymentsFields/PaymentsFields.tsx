import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Image from "next/image";
import { colors, spacing } from "@/utils/tokens";
import { Button, Typography } from "@/components";
import { TextField, Grid } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type FormData = {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  cardHolderName: string;
  cpf: string;
  coupon: string;
  installment: number;
};

const PaymentsFields = () => {
  const { register, handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Perform form submission logic here
  };

  return (
    <Box width="330px">
      <Box mb={5}>
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
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            label="Número do cartão"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="0000 0000 0000 0000"
            sx={{ marging: 0 }}
            {...register("cardNumber")}
          />
          <Box display="flex" gap="50px">
            <TextField
              label="Validade"
              variant="standard"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="MM/AA"
              {...register("expirationDate")}
            />
            <TextField
              label="CVV"
              variant="standard"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="000"
              {...register("cvv")}
            />
          </Box>
          <TextField
            label="Nome impresso no cartão"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Seu nome"
            {...register("cardHolderName")}
          />
          <TextField
            label="CPF"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          <TextField
            label="Cupom"
            variant="standard"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="Insira aqui"
            {...register("coupon")}
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-standard-label">Número de parcelas</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              defaultValue={0}
              label="Número de parcelas"
              {...register("installment")}
            >
              <MenuItem value={0}>Selecionar</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mt={spacing[4]}>
          <Button variant="contained" fullWidth type="submit">
            Finalizar pagamento
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PaymentsFields;
