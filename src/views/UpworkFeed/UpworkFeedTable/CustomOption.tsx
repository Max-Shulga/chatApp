import { OptionProps } from "react-select";
import React, { ReactElement } from "react";
import SelectedIcon from "@/assets/icons/selected.svg?react";
import NotSelectedIcon from "@/assets/icons/notSelected.svg?react";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";

type CustomOptionProps = {
  props: OptionProps<IOptionInterface, true>;
  onClick?: () => void;
};
function CustomOption({ props, onClick }: CustomOptionProps): ReactElement {
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
      className="p-3.5 flex flex-row items-center gap-2.5"
    >
      {isSelected ? (
        <SelectedIcon className="min-w-5 min-h-5" />
      ) : (
        <NotSelectedIcon className="min-w-5 min-h-5" />
      )}
      <span>{data.label}</span>
    </div>
  );
}

export default CustomOption;
