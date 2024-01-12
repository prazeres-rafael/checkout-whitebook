import { Card, Chip, Typography } from "@/components";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const PlansSelect = () => {
  return (
    <div>
      <div>
        <Typography variant="h4">Confira o seu plano:</Typography>
        <Chip
          label="fulano@cicrano.com.br"
          variant="outlined"
          color="default"
        />
      </div>
      <div>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <Card variant="outlined">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Box>
                    <Typography
                      variant="body2"
                      color="#191847"
                      fontWeight="bold"
                    >
                      Anual | À Vista
                    </Typography>
                    <Typography variant="body1" color="#191847">
                      De R$ 514,80 | Por R$ 436,90
                    </Typography>
                    <Typography variant="body1" color="#F5850B">
                      10x de R$ 43,69/mês
                    </Typography>
                  </Box>
                  <Chip variant="filled" color="warning" label="-15%" />
                </Box>
                <FormControlLabel
                  value="anual-a-vista"
                  control={<Radio />}
                  label=""
                />
              </Box>
            </Card>
            <Card variant="outlined">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Box>
                    <Typography
                      variant="body2"
                      color="#191847"
                      fontWeight="bold"
                    >
                      Anual | Parcelado
                    </Typography>
                    <Typography variant="body1" color="#191847">
                      De R$ 514,80 | Por R$ 479,90
                    </Typography>
                    <Typography variant="body1" color="#F5850B">
                      10x de R$ 47,99/mês
                    </Typography>
                  </Box>
                  <Chip variant="filled" color="warning" label="-15%" />
                </Box>
                <FormControlLabel
                  value="anual-parcelado"
                  control={<Radio />}
                  label=""
                />
              </Box>
            </Card>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

export default PlansSelect;
