import { Grid } from "@mui/material";
import Box from "@mui/material/Box";

import { Header } from "@/components";
import { PaymentsFields, PlansSelect } from "./components";
import { isMobile } from "@/utils/isMobile";

const CheckoutWhitebook = () => {
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          {isMobile() ? <PlansSelect /> : <PaymentsFields />}
        </Grid>
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          {isMobile() ? <PaymentsFields /> : <PlansSelect />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutWhitebook;
