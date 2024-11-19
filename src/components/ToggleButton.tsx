import { ReactElement, ReactNode } from "react";

type ToggleButtonProps = {
  isExpanded: boolean;
  onClick: () => void;
  children?: ReactNode;
};
function ToggleButton({
  isExpanded,
  onClick,
  children,
}: ToggleButtonProps): ReactElement {
  return (
    <button
      type="button"
      className="underline text-blue-500 hover:brightness-150"
      onClick={onClick}
    >
      {children || (isExpanded ? "Collapse" : "Expand")}{" "}
    </button>
  );
}

export default ToggleButton;
