import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./styles/index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import queryClient from "./store/queryClient";
import store from "@/store/store";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
