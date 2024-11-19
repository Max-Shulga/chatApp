import { ReactElement } from "react";
import { Button } from "@mui/material";
import MicrosoftIcon from "@/assets/icons/microsoftLogo.svg?react";
import LoaderIcon from "@/assets/icons/loader.svg?react";
import ThemedIcon from "@/components/ThemedIcon";
import colors from "@/styles/colors.module.scss";

type MicrosoftAuthProps = {
  isMicrosoftSignIn: boolean;
  onClick: () => void;
};
function MicrosoftAuth({
  isMicrosoftSignIn,
  onClick,
}: MicrosoftAuthProps): ReactElement {
  return (
    <>
      <Button
        className="!rounded-2 !py-3 !px-12 flex flex-row gap-2 normal-case"
        onClick={onClick}
      >
        <MicrosoftIcon />
        <span className="font-medium whitespace-nowrap">
          Continue with Microsoft
        </span>
      </Button>
      {isMicrosoftSignIn && (
        <Button
          disabled
          className="!rounded-2 !py-3 !px-12 flex flex-row gap-2 normal-case"
        >
          <ThemedIcon
            lightFill={colors.lightTextPrimary}
            darkFill={colors.darkTextPrimary}
            icon={<LoaderIcon />}
          />
          <span className="font-medium whitespace-nowrap">
            Continue with Microsoft
          </span>
        </Button>
      )}
    </>
  );
}

export default MicrosoftAuth;
