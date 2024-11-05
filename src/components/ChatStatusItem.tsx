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
import colors from "@/styles/colors.module.scss";

type CustomBoxProps = {
  mode: ModeTypes;
  children: ReactNode;
  className: string;
  variant: IChatStatus;
};

const getBgColor = (variant: IChatStatus, mode: ModeTypes): string => {
  switch (variant) {
    case "info":
      return mode === "light" ? colors.lightInfoBg : colors.darkInfoBg;
    case "warning":
      return mode === "light" ? colors.lightWarningBg : colors.darkWarningBg;
    case "error":
      return mode === "light" ? colors.lightErrorBg : colors.darkErrorBg;
    case "success":
      return mode === "light" ? colors.lightSuccessBg : colors.darkSuccessBg;
  }
};

const getIcon = (variant: IChatStatus): ReactElement => {
  switch (variant) {
    case "info":
      return (
        <ThemedIcon
          lightFill={colors.lightInfoIconFill}
          darkFill={colors.darkInfoIconFill}
          icon={<InfoIcon />}
        />
      );
    case "warning":
      return (
        <ThemedIcon
          lightFill={colors.lightWarningIconFill}
          darkFill={colors.darkWarningIconFill}
          icon={<WarningIcon />}
        />
      );
    case "error":
      return (
        <ThemedIcon
          lightFill={colors.lightErrorIconFill}
          darkFill={colors.darkErrorIconFill}
          icon={<ErrorIcon />}
        />
      );
    case "success":
      return (
        <ThemedIcon
          lightFill={colors.lightSuccessIconFill}
          darkFill={colors.darkSuccessIconFill}
          icon={<SuccessIcon />}
        />
      );
  }
};

const CustomBox = styled(Box)(({ variant, mode }: CustomBoxProps) => ({
  backgroundColor: getBgColor(variant, mode),
  color:
    mode === "light"
      ? colors.darkBackgroundSecond
      : colors.lightBackgroundSecond,
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
