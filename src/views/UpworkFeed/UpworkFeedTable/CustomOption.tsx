import { OptionProps } from "react-select";
import React, { ReactElement } from "react";
import SelectedIcon from "@/assets/icons/selected.svg?react";
import NotSelectedIcon from "@/assets/icons/notSelected.svg?react";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";
import AllIcon from "@/assets/icons/ALLIcon.svg?react";

type CustomOptionProps = {
  props: OptionProps<IOptionInterface, true>;
  onClick?: () => void;
  first?: boolean;
};
function CustomOption({
  props,
  onClick,
  first,
}: CustomOptionProps): ReactElement {
  const { data, isSelected, innerRef, innerProps } = props;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (onClick) {
      onClick();
    } else {
      innerProps.onClick?.(event);
    }
  };

  return (
    <div
      ref={innerRef}
      {...innerProps}
      onClick={handleClick}
      className="p-3.5 flex flex-row items-center gap-2.5 cursor-pointer"
    >
      {isSelected ? (
        first ? (
          <AllIcon className="min-w-5 min-h-5" />
        ) : (
          <SelectedIcon className="min-w-5 min-h-5" />
        )
      ) : (
        <NotSelectedIcon className="min-w-5 min-h-5" />
      )}
      <span>{data.label}</span>
    </div>
  );
}

export default CustomOption;
