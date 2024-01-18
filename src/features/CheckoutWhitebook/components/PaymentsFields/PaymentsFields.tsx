import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Image from "next/image";

import { colors, spacing } from "@/utils/tokens";
import { Button, Select, TextField, Typography } from "@/components";
import { FormPaymentsData } from "./PaymentsFields.types";

/* Todo:
  - [ ] Add mask to inputs fields
*/

const PaymentsFields = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormPaymentsData>();

  const onSubmit = async (data: FormPaymentsData) => {
    const requestBody = {
      couponCode: data.coupon || null,
      creditCardCPF: data.cpf,
      creditCardCVV: data.cvv,
      creditCardExpirationDate: data.expirationDate,
      creditCardHolder: data.cardHolderName,
      creditCardNumber: data.cardNumber,
      gateway: "iugu",
      installments: parseInt(data.installment),
      offerId: 18,
      userId: 1,
    };

    try {
      const response = await fetch(
        "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        console.log("Payment submitted successfully");
      } else {
        console.log("Failed to submit payment");
      }
    } catch (error) {
      console.log("An error occurred while submitting payment:", error);
    }
  };

  return (
    <Box width="330px" data-testid="payments-fields">
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
            register={register("cardNumber", {
              required: "Campo obrigatório",
              pattern: {
                value:
                  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                message: "Número de cartão inválido",
              },
            })}
            error={!!errors.cardNumber}
            helperText={errors.cardNumber?.message}
          />
          <Box display="flex" gap="50px">
            <TextField
              label="Validade"
              variant="standard"
              margin="normal"
              placeholder="MM/AA"
              register={register("expirationDate", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                  message: "Data de validade inválida",
                },
              })}
              error={!!errors.expirationDate}
              helperText={errors.expirationDate?.message}
            />
            <TextField
              label="CVV"
              variant="standard"
              margin="normal"
              placeholder="000"
              register={register("cvv", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: "CVV inválido",
                },
              })}
              error={!!errors.cvv}
              helperText={errors.cvv?.message}
            />
          </Box>
          <TextField
            label="Nome impresso no cartão"
            variant="standard"
            margin="normal"
            placeholder="Seu nome"
            register={register("cardHolderName", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Nome inválido",
              },
            })}
            error={!!errors.cardHolderName}
            helperText={errors.cardHolderName?.message}
          />
          <TextField
            label="CPF"
            variant="standard"
            margin="normal"
            placeholder="000.000.000-00"
            register={register("cpf", {
              required: "Campo obrigatório",
              pattern: {
                value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                message: "CPF inválido",
              },
            })}
            error={!!errors.cpf}
            helperText={errors.cpf?.message}
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
            register={register("installment", {
              required: "Campo obrigatório",
              validate: (value) =>
                value !== "0" || "Selecione o número de parcelas",
            })}
            error={!!errors.installment}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          />
        </Box>
        <Box mt="40px">
          <Button
            variant="contained"
            type="submit"
            fullWidth
            data-testid="button-submit"
          >
            Finalizar pagamento
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PaymentsFields;
