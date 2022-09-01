import React from "react";
import "@react95/icons/icons.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@react95/core";
import "@/globalStyles.css";
import Main from "@/pages/Main";

/**
 * Application root. All context providers should be listed here.
 */
const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
