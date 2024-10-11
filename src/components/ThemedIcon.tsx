import { cloneElement, ReactElement } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";

type ThemedIconProps = {
  icon: ReactElement;
  className?: string;
};

function ThemedIcon({ icon, className = "" }: ThemedIconProps): ReactElement {
  const { mode } = useThemeContext();
  const lightFill = "#252733";
  const darkFill = "#EBECF0";

  return cloneElement(icon, {
    className,
    style: { fill: mode === "light" ? lightFill : darkFill },
    role: "img",
    "aria-label": icon.props["aria-label"] || "Themed icon",
  });
}

export default ThemedIcon;
