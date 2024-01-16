"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import CheckoutFeedback from "@/features/CheckoutFeedback";

const customThemeFont = createTheme({
  typography: {
    fontFamily: `'__DM_Sans_6ff133', '__DM_Sans_Fallback_6ff133';`,
  },
});

const CheckoutFeedbackPage = () => {
  return (
    <ThemeProvider theme={customThemeFont}>
      <CheckoutFeedback />
    </ThemeProvider>
  );
};

export default CheckoutFeedbackPage;
