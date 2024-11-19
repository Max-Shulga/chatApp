import { styled } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import colors from "@/styles/colors.module.scss";

type CustomBoxProps = {
  children: ReactNode;
};

const CustomBox = styled(Link)<CustomBoxProps>(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? colors.lightBorderSecondary
      : colors.darkBorderSecondary,
}));

type ThemedLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
};

function ThemedLink({
  children,
  className = "",
  to,
}: ThemedLinkProps): ReactElement {
  return (
    <CustomBox to={to} className={className}>
      {children}
    </CustomBox>
  );
}
export default ThemedLink;
