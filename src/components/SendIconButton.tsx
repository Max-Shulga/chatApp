import ThemedIcon from "@/components/ThemedIcon";
import SendIcon from "@/assets/icons/send.svg?react";
import colors from "@/styles/colors.module.scss";
import { ReactElement } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import LightSendIcon from "@/assets/icons/sendActiveLight.svg?react";
import DarkSendIcon from "@/assets/icons/sendActiveDark.svg?react";

type SendIconButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

function SendIconButton({
  onClick,
  disabled,
}: SendIconButtonProps): ReactElement {
  const { mode } = useThemeContext();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="absolute bottom-2 right-4.5 "
    >
      {disabled ? (
        <ThemedIcon
          icon={<SendIcon className="w-8" />}
          stroke={true}
          lightFill={colors.gray200}
          darkFill={colors.gray200}
        />
      ) : mode === "light" ? (
        <LightSendIcon className="w-8" />
      ) : (
        <DarkSendIcon className="w-8" />
      )}
    </button>
  );
}

export default SendIconButton;
