import { useEffect, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";

import { Card, Chip, Radio, Typography } from "@/components";
import { colors, spacing } from "@/utils/tokens";
import { Plans } from "./PlansSelect.types";

const PlansSelect = () => {
  const [plans, setPlans] = useState<Plans>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer")
      .then((response) => response.json())
      .then((data) => {
        setPlans(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box width="330px">
      <Box mb={spacing[5]}>
        <Typography variant="h4" mb={spacing[1]}>
          Confira o seu plano:
        </Typography>
        <Chip
          label="fulano@cicrano.com.br"
          variant="outlined"
          color="default"
        />
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" mb={spacing[5]}>
          <CircularProgress />
        </Box>
      ) : (
        <Box mb={spacing[5]}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="anual_parcelado_iugu"
              name="radio-buttons-group"
            >
              {plans.map((plan) => {
                const {
                  description,
                  discountAmmount,
                  discountPercentage,
                  fullPrice,
                  id,
                  installments,
                  storeId,
                  title,
                } = plan;

                return (
                  <Box component="span" mb={spacing[2]} key={id}>
                    <Card variant="outlined">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Box display="flex" alignItems="center">
                          <Box mr={spacing[1]}>
                            <Typography
                              variant="body2"
                              color={colors.primary}
                              fontWeight="bold"
                            >
                              {title} | {description}
                            </Typography>
                            <Typography variant="body1" color={colors.primary}>
                              De R$ {fullPrice} | Por R${" "}
                              {fullPrice - discountAmmount}
                            </Typography>
                            <Typography
                              variant="body1"
                              color={colors.secondary}
                            >
                              {installments}x de R${" "}
                              {(fullPrice - discountAmmount) / installments}
                              {installments !== 1 ? "/mês" : null}
                            </Typography>
                          </Box>
                          <Chip
                            variant="filled"
                            color="warning"
                            label={`-${discountPercentage * 100}%`}
                          />
                        </Box>
                        <FormControlLabel
                          value={storeId}
                          control={<Radio />}
                          label=""
                          sx={{ marginRight: 0 }}
                        />
                      </Box>
                    </Card>
                  </Box>
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
      )}
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="body1" color={colors.grey[1]} mr={spacing[2]}>
          Sobre a cobrança
        </Typography>
        <Image alt="Help Button" src="/svg/help.svg" height={16} width={16} />
      </Box>
    </Box>
  );
};

export default PlansSelect;
