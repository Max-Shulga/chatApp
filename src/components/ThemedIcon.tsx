import { cloneElement, ReactElement } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";

type ThemedIconProps = {
  icon: ReactElement;
  stroke?: boolean;
  className?: string;
  lightFill?: string;
  darkFill?: string;
};

function ThemedIcon({
  icon,
  className = "",
  lightFill = "#252733",
  darkFill = "#EBECF0",
  stroke = false,
}: ThemedIconProps): ReactElement {
  const { mode } = useThemeContext();
  return cloneElement(icon, {
    className,
    style: stroke
      ? { stroke: mode === "light" ? lightFill : darkFill }
      : { fill: mode === "light" ? lightFill : darkFill },
    role: "img",
    "aria-label": icon.props["aria-label"] || "Themed icon",
  });
}

export default ThemedIcon;
