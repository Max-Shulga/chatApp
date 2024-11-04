import { Box, styled } from "@mui/material";
import { ReactElement, ReactNode } from "react";

type CustomBoxProps = {
  children: ReactNode;
  className: string;
};

const CustomBox = styled(Box)<CustomBoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#FFFFFF" : "#131314",
  color: theme.palette.mode === "light" ? "#252733" : "#EBECF0",
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#F0F5FF" : "#181B29",
  },
  "&:active": {
    backgroundColor: theme.palette.mode === "light" ? "#EBECF0" : "#252733",
  },
}));

type ChatItemProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

function ChatItem({
  children,
  className = "",
  onClick,
}: ChatItemProps): ReactElement {
  return (
    <CustomBox
      className={`${className} flex flex-row gap-2 items-center`}
      onClick={onClick}
    >
      {children}
    </CustomBox>
  );
}
export default ChatItem;
