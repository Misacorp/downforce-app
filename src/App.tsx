import React from "react";
// import "@react95/icons/icons.css";
import { Normalize } from "styled-normalize";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@react95/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "@/pages/Main";
import "@/globalStyles.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Application root. All context providers should be listed here.
 */
const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Normalize />
        <Main />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
