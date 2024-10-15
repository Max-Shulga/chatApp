import { Theme } from "@mui/material";

type ModeTypes = "light" | "dark";

type ThemeContextType = {
  mode: ModeTypes;
  toggleColorMode: () => void;
  theme: Theme;
};
export type { ModeTypes };
export default ThemeContextType;
