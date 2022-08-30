import React from "react";
import "@react95/icons/icons.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "@/components/Routes";
import { ThemeProvider } from "@react95/core";
import "@/globalStyles.css";

/**
 * Application root. All context providers should be listed here.
 */
const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
