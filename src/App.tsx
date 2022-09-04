import React from "react";
// import "@react95/icons/icons.css";
import { Normalize } from "styled-normalize";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@react95/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "@/pages/Main";
import "@/globalStyles.css";
import config from "@/config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60,
    },
  },
});

/**
 * Application root. All context providers should be listed here.
 */
const App = () => (
  <BrowserRouter basename={config.ROUTER_BASENAME}>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Normalize />
        <Main />
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
