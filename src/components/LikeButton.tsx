import { ReactElement } from "react";
import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import LikeIcon from "@/assets/icons/like.svg?react";
import colors from "@/styles/colors.module.scss";
import { useThemeContext } from "@/theme/ThemeContextProvider";

type LikeButtonProps = {
  iconClassName?: string;
  onClick?: () => void;
  isActive?: boolean;
};
function LikeButton({
  iconClassName,
  isActive,
  onClick,
}: LikeButtonProps): ReactElement {
  const { mode } = useThemeContext();
  const borderColor = mode === "light" ? "#ABBDE0" : colors.darkBorder;
  const bgColor = mode === "light" ? colors.lightActiveBg : colors.darkActiveBg;
  return (
    <IconButton
      sx={{
        width: "36px",
        height: "36px",
        borderRadius: "6px",
        backgroundColor: isActive ? bgColor : "transparent",
        border: `2px solid ${borderColor}`,
        "&:hover": {
          backgroundColor: bgColor,
        },
      }}
      onClick={onClick}
    >
      <ThemedIcon icon={<LikeIcon />} className={`w-5 h-5 ${iconClassName}`} />
    </IconButton>
  );
}
export default LikeButton;
