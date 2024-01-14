import Image from "next/image";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { Card, Chip, Radio, Typography } from "@/components";
import { colors, spacing } from "@/utils/tokens";

const PlansSelect = () => {
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
      <Box mb={spacing[5]}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="anual-a-vista"
            name="radio-buttons-group"
          >
            <Box component="span" mb={spacing[2]}>
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
                        Anual | À Vista
                      </Typography>
                      <Typography variant="body1" color={colors.primary}>
                        De R$ 514,80 | Por R$ 436,90
                      </Typography>
                      <Typography variant="body1" color={colors.secondary}>
                        10x de R$ 43,69/mês
                      </Typography>
                    </Box>
                    <Chip variant="filled" color="warning" label="-15%" />
                  </Box>
                  <FormControlLabel
                    value="anual-a-vista"
                    control={<Radio />}
                    label=""
                    sx={{ marginRight: 0 }}
                  />
                </Box>
              </Card>
            </Box>
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
                      Anual | Parcelado
                    </Typography>
                    <Typography variant="body1" color={colors.primary}>
                      De R$ 514,80 | Por R$ 479,90
                    </Typography>
                    <Typography variant="body1" color={colors.secondary}>
                      10x de R$ 47,99/mês
                    </Typography>
                  </Box>
                  <Chip variant="filled" color="warning" label="-15%" />
                </Box>
                <FormControlLabel
                  value="anual-parcelado"
                  control={<Radio />}
                  label=""
                  sx={{ marginRight: 0 }}
                />
              </Box>
            </Card>
          </RadioGroup>
        </FormControl>
      </Box>
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
