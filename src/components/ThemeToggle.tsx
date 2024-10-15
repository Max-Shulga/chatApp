import { ReactElement } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import { IconButton } from "@mui/material";
import SunIcon from "@/assets/icons/sun.svg?react";
import MoonIcon from "@/assets/icons/moon.svg?react";

type ThemeToggleProps = {
  className?: string;
};
function ThemeToggle({ className }: ThemeToggleProps): ReactElement {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <div className={`${className ? className : ""}`}>
      <IconButton
        onClick={toggleColorMode}
        sx={{ width: "fit-content", height: "fit-content" }}
      >
        {mode === "light" ? (
          <MoonIcon fill={"#252733"} />
        ) : (
          <SunIcon fill={"#EBECF0"} />
        )}
      </IconButton>
    </div>
  );
}
export default ThemeToggle;
