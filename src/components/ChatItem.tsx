import { Box, styled } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import { ModeTypes } from "@/common/themeContext";

type CustomBoxProps = {
  mode: ModeTypes;
  children: ReactNode;
  className: string;
};

const CustomBox = styled(Box)<CustomBoxProps>(({ mode }) => ({
  backgroundColor: mode === "light" ? "#FFFFFF" : "#131314",
  color: mode === "light" ? "#252733" : "#EBECF0",
  "&:hover": {
    backgroundColor: mode === "light" ? "#F0F5FF" : "#181B29",
  },
  "&:active": {
    backgroundColor: mode === "light" ? "#EBECF0" : "#252733",
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
  const { mode } = useThemeContext();
  return (
    <CustomBox
      mode={mode}
      className={`${className} flex flex-row gap-2 items-center`}
      onClick={onClick}
    >
      {children}
    </CustomBox>
  );
}
export default ChatItem;
