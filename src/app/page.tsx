"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import CheckoutWhitebook from "@/features/CheckoutWhitebook";

const customThemeFont = createTheme({
  typography: {
    fontFamily: `'__DM_Sans_6ff133', '__DM_Sans_Fallback_6ff133';`,
  },
});

const CheckoutWhitebookPage = () => {
  return (
    <ThemeProvider theme={customThemeFont}>
      <CheckoutWhitebook />
    </ThemeProvider>
  );
};

export default CheckoutWhitebookPage;
