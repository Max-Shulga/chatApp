import { ReactElement, ReactNode } from "react";
import { Box, styled } from "@mui/material";
import colors from "@/styles/colors.module.scss";

type ThemedBoxProps = {
  children: ReactNode;
};
const ThemedBox = styled(Box)<ThemedBoxProps>(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? colors.lightTextSecondary
      : colors.darkTextSecondary,
  backgroundColor:
    theme.palette.mode === "light"
      ? colors.darkTextPrimary
      : colors.lightTextPrimary,
}));

type KeywordsCellProps = {
  keyword: string;
};

function KeywordCell({ keyword }: KeywordsCellProps): ReactElement {
  return (
    <ThemedBox className="py-0.5 px-2 rounded-[20px]">
      <span>{keyword}</span>
    </ThemedBox>
  );
}

export default KeywordCell;
