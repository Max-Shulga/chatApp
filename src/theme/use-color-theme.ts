import { useMemo, useState } from "react";
import { createTheme, PaletteMode } from "@mui/material";
import getDesignTokens from "@/theme/theme";
import ThemeContextType from "@/common/themeContext";

const useColorTheme = (): ThemeContextType => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColorMode = (): void => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode],
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};

export default useColorTheme;
