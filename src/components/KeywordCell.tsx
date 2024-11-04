import { ReactElement, ReactNode } from "react";
import { Box, styled } from "@mui/material";

type ThemedBoxProps = {
  children: ReactNode;
};
const ThemedBox = styled(Box)<ThemedBoxProps>(({ theme }) => ({
  color: theme.palette.mode === "light" ? "#0E0E0F" : "#FFFFFF",
  backgroundColor: theme.palette.mode === "light" ? "#EBECF0" : "#252733",
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
