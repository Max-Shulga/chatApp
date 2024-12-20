import { Box, styled } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import colors from "@/styles/colors.module.scss";

type CustomBoxProps = {
  children: ReactNode;
  className: string;
};

const CustomBox = styled(Box)<CustomBoxProps>(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? colors.lightBackgroundSecond
      : colors.darkBackgroundSecond,
  color:
    theme.palette.mode === "light"
      ? colors.lightTextPrimary
      : colors.darkTextPrimary,
}));

type ChatItemProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

function StyledContainer({
  children,
  className = "",
  onClick,
}: ChatItemProps): ReactElement {
  return (
    <CustomBox
      className={`${className} flex flex-row gap-2 items-center w-fit`}
      onClick={onClick}
    >
      {children}
    </CustomBox>
  );
}
export default StyledContainer;
