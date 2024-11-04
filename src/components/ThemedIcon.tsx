import React, { cloneElement, ReactElement } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";

type ThemedIconProps = {
  icon: ReactElement;
  stroke?: boolean;
  className?: string;
  lightFill?: string;
  hoverLightFill?: string;
  darkFill?: string;
  hoverDarkFill?: string;
};

function ThemedIcon({
  icon,
  className = "",
  lightFill = "#252733",
  darkFill = "#EBECF0",
  hoverLightFill = lightFill,
  hoverDarkFill = darkFill,
  stroke = false,
}: ThemedIconProps): ReactElement {
  const { mode } = useThemeContext();
  const fillColor = mode === "light" ? lightFill : darkFill;
  const hoverColor = mode === "light" ? hoverLightFill : hoverDarkFill;
  return cloneElement(icon, {
    className,
    style: stroke ? { stroke: fillColor } : { fill: fillColor },
    transition: "fill 0.3s ease, stroke 0.3s ease",

    onMouseEnter: (e: React.MouseEvent<SVGElement>) => {
      if (stroke) {
        (e.currentTarget as SVGElement).style.stroke = hoverColor;
      } else {
        (e.currentTarget as SVGElement).style.fill = hoverColor;
      }
    },
    onMouseLeave: (e: React.MouseEvent<SVGElement>) => {
      if (stroke) {
        (e.currentTarget as SVGElement).style.stroke = fillColor;
      } else {
        (e.currentTarget as SVGElement).style.fill = fillColor;
      }
    },
    role: "img",
    "aria-label": icon.props["aria-label"] || "Themed icon",
  });
}

export default ThemedIcon;
