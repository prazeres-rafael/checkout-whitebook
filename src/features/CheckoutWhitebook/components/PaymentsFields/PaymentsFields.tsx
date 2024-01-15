import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Image from "next/image";

import { colors, spacing } from "@/utils/tokens";
import { Button, Select, TextField, Typography } from "@/components";
import { FormPaymentsData } from "./PaymentsFields.types";

const PaymentsFields = () => {
  const { register, handleSubmit, control } = useForm<FormPaymentsData>();

  const onSubmit = (data: FormPaymentsData) => {
    console.log(data);
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
            margin="normal"
            placeholder="0000 0000 0000 0000"
            register={register("cardNumber")}
          />
          <Box display="flex" gap="50px">
            <TextField
              label="Validade"
              variant="standard"
              margin="normal"
              placeholder="MM/AA"
              register={register("expirationDate")}
            />
            <TextField
              label="CVV"
              variant="standard"
              margin="normal"
              placeholder="000"
              register={register("cvv")}
            />
          </Box>
          <TextField
            label="Nome impresso no cartão"
            variant="standard"
            margin="normal"
            placeholder="Seu nome"
            register={register("cardHolderName")}
          />
          <TextField
            label="CPF"
            variant="standard"
            margin="normal"
            placeholder="000.000.000-00"
            register={register("cpf")}
          />
          <TextField
            label="Cupom"
            variant="standard"
            margin="normal"
            placeholder="Insira aqui"
            register={register("coupon")}
          />
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            defaultValue={0}
            label="Número de parcelas"
            register={register("installment")}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          />
        </Box>
        <Box mt="40px">
          <Button variant="contained" type="submit" fullWidth>
            Finalizar pagamento
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PaymentsFields;
