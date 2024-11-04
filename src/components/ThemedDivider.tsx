import { ReactElement, ReactNode } from "react";
import { Divider, DividerProps, styled } from "@mui/material";

type CustomBoxProps = {
  children: ReactNode;
} & DividerProps;

const CustomBox = styled(Divider)<CustomBoxProps>(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#D5D7DB" : "#414752",
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
