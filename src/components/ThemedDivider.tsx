import { ReactElement, ReactNode } from "react";
import { Divider, DividerProps, styled } from "@mui/material";
import colors from "@/styles/colors.module.scss";

type CustomBoxProps = {
  children: ReactNode;
} & DividerProps;

const CustomBox = styled(Divider)<CustomBoxProps>(({ theme }) => ({
  color: theme.palette.mode === "light" ? colors.gray50 : colors.gray800,
}));
type ThemedDividerProps = {
  children?: ReactNode;
  className?: string;
} & DividerProps;
function ThemedDivider({
  children,
  className = "",
  ...rest
}: ThemedDividerProps): ReactElement {
  return (
    <CustomBox className={className} {...rest}>
      {children}
    </CustomBox>
  );
}
export default ThemedDivider;
