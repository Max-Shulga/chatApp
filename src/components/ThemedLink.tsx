import { styled } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";

type CustomBoxProps = {
  children: ReactNode;
};

const CustomBox = styled(Link)<CustomBoxProps>(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#0F62FE" : "#5B94FE",
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
    <CustomBox to={to} className={className} target="_blank">
      {children}
    </CustomBox>
  );
}
export default ThemedLink;
