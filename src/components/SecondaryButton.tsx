import { Button, ButtonProps } from "@mui/material";
import colors from "@/styles/colors.module.scss";
import { ReactElement, ReactNode } from "react";

type SecondaryButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  sx?: object;
} & ButtonProps;
const SecondaryButton = ({
  children,
  onClick,
  className,
  sx,
  ...props
}: SecondaryButtonProps): ReactElement => {
  return (
    <Button
      type="submit"
      onClick={onClick}
      className={className}
      sx={{
        backgroundColor: colors.lightBorderSecondary,
        border: "none",
        color: colors.darkTextSecondary,
        "&:hover": {
          boxShadow: `0px 2px 8px 0px ${colors.blueBoxShadow}`,
          backgroundColor: colors.lightBorderSecondary,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
