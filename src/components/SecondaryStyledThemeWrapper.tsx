import { ReactElement, ReactNode } from "react";
import { Box, styled } from "@mui/material";
import colors from "@/styles/colors.module.scss";

type CustomBoxProps = {
  children: ReactNode;
};

const CustomBox = styled(Box)<CustomBoxProps>(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? colors.lightBackgroundSecond
      : colors.darkBackgroundSecond,
}));
type SecondaryStyledThemeWrapperProps = {
  children: ReactNode;
  className?: string;
};
function SecondaryStyledThemeWrapper({
  children,
  className,
}: SecondaryStyledThemeWrapperProps): ReactElement {
  return <CustomBox className={className}>{children}</CustomBox>;
}
export default SecondaryStyledThemeWrapper;
