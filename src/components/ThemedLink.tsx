import { styled } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
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

type ThemedLinkProps = LinkProps & {
  className?: string;
};

function ThemedLink({
  children,
  className = "",
  ...rest
}: ThemedLinkProps): ReactElement {
  return (
    <CustomBox className={className} {...rest}>
      {children}
    </CustomBox>
  );
}
export default ThemedLink;
