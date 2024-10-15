import { ModeTypes } from "@/common/themeContext";
import { ReactElement, ReactNode } from "react";
import { Box, styled } from "@mui/material";
import IChatStatus from "@/common/interfaces/dto/chat/dto/ichat-status";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import InfoIcon from "@/assets/icons/info.svg?react";
import WarningIcon from "@/assets/icons/warning.svg?react";
import ErrorIcon from "@/assets/icons/error.svg?react";
import SuccessIcon from "@/assets/icons/success.svg?react";
import ThemedIcon from "@/components/ThemedIcon";

type CustomBoxProps = {
  mode: ModeTypes;
  children: ReactNode;
  className: string;
  variant: IChatStatus;
};

const getBgColor = (variant: IChatStatus, mode: ModeTypes): string => {
  switch (variant) {
    case "info":
      return mode === "light" ? "#DCEDF5" : "#2B373D";
    case "warning":
      return mode === "light" ? "#FAE9C8" : "#4D4536";
    case "error":
      return mode === "light" ? "#FAE1E5" : "#3D2B2E";
    case "success":
      return mode === "light" ? "#DCF2DC" : "#2B3D2B";
  }
};

const getIcon = (variant: IChatStatus): ReactElement => {
  switch (variant) {
    case "info":
      return (
        <ThemedIcon
          lightFill="#1F7099"
          darkFill="#52A3CC"
          icon={<InfoIcon />}
        />
      );
    case "warning":
      return (
        <ThemedIcon
          lightFill="#F9902D"
          darkFill="#F9AC64"
          icon={<WarningIcon />}
        />
      );
    case "error":
      return (
        <ThemedIcon
          lightFill="#CC0022"
          darkFill="#CC6677"
          icon={<ErrorIcon />}
        />
      );
    case "success":
      return (
        <ThemedIcon
          lightFill="#187A18"
          darkFill="#57AD57"
          icon={<SuccessIcon />}
        />
      );
  }
};

const CustomBox = styled(Box)(({ variant, mode }: CustomBoxProps) => ({
  backgroundColor: getBgColor(variant, mode),
  color: mode === "light" ? "#131314" : "#FFFFFF",
}));

type ChatStatusItemProps = {
  className?: string;
  onClick?: () => void;
  variant: IChatStatus;
  text?: string;
};

function ChatStatusItem({
  className = "",
  onClick,
  variant,
  text,
}: ChatStatusItemProps): ReactElement {
  const { mode } = useThemeContext();
  const detailsText = (): ReactNode =>
    text ? (
      <p>{text}</p>
    ) : (
      <p>
        <span className="capitalize">{variant}</span> details here
      </p>
    );
  const icon = getIcon(variant);
  return (
    <CustomBox
      mode={mode}
      className={`${className} flex flex-col gap-1 px-3 py-2 rounded-2`}
      onClick={onClick}
      variant={variant}
    >
      <div className="flex flex-row items-center gap-3">
        {icon} <p className="capitalize font-[600]">{variant}</p>
      </div>
      <span className="pl-9">{detailsText()}</span>
    </CustomBox>
  );
}
export default ChatStatusItem;
