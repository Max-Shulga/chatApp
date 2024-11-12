import { ReactNode } from "react";
import { Box, styled } from "@mui/material";
import colors from "@/styles/colors.module.scss";

type HoverEffectBoxProps = {
  children: ReactNode;
};

const HoverEffectBox = styled(Box)<HoverEffectBoxProps>(({ theme }) => ({
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light" ? colors.lightHoverBg : colors.darkHoverBg,
  },
  "&:active": {
    backgroundColor:
      theme.palette.mode === "light"
        ? colors.darkTextPrimary
        : colors.lightTextPrimary,
  },
}));

export default HoverEffectBox;
