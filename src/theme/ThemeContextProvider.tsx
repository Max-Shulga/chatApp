import { createTheme } from "@mui/material";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import useColorTheme from "@/theme/use-color-theme";
import ThemeContextType from "@/common/themeContext";

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useThemeContext = (): ThemeContextType => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeContextProvider, useThemeContext };
