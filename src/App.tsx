import { ReactElement } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteNames from "@/routes/routes-names";
import Home from "@/views/Home/Home";
import SignIn from "@/views/Sign-in/SignIn";

function App(): ReactElement {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={RouteNames.HOME} element={<Home />} />
          <Route path={RouteNames.SIGN_IN} element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
