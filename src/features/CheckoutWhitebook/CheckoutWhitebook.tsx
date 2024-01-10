import { Grid } from "@mui/material";

import Box from "@mui/material/Box";

import Header from "@/components/Header";
import { PaymentsFields, PlansSelect } from "./components";

const CheckoutWhitebook = () => {
  return (
    <Box>
      <Header />
      <Grid container>
        <Grid item xs={12} md={6}>
          <PaymentsFields />
        </Grid>
        <Grid item xs={12} md={6}>
          <PlansSelect />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutWhitebook;
