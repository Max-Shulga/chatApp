/// <reference types="vite-plugin-svgr/client" />
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/store/queryClient";
import store from "@/store/store";
import { Provider } from "react-redux";
import { ThemeContextProvider } from "@/theme/ThemeContextProvider";
import App from "@/App";

function renderApp(): void {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeContextProvider>
            <App />
          </ThemeContextProvider>
        </Provider>
      </QueryClientProvider>
    </StrictMode>,
  );
}

renderApp();
