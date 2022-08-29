import React from "react";
import { ThemeProvider } from "styled-components/macro";
import Routes from "@/components/Routes";
import theme from "./theme";

/**
 * Application root. All context providers should be listed here.
 */
const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default App;
