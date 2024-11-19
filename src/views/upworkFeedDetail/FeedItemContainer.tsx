import { ReactElement, ReactNode } from "react";
import { Box, styled } from "@mui/material";
import colors from "@/styles/colors.module.scss";

type CustomBoxProps = {
  children: ReactNode;
  className: string;
};

const CustomBox = styled(Box)<CustomBoxProps>(({ theme }) => ({
  borderColor: theme.palette.mode === "light" ? colors.gray50 : colors.gray800,
  color:
    theme.palette.mode === "light"
      ? colors.darkBackgroundSecond
      : colors.lightBackgroundSecond,
}));

type FeedItemContainerProps = {
  children: ReactNode;
  className?: string;
};

function FeedItemContainer({
  children,
  className = "",
}: FeedItemContainerProps): ReactElement {
  return (
    <CustomBox className={`${className} border rounded-2xl p-4`}>
      {children}
    </CustomBox>
  );
}

export default FeedItemContainer;
