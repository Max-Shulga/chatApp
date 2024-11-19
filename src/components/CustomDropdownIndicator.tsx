import { ReactElement } from "react";
import { components, DropdownIndicatorProps } from "react-select";
import ArrowIcon from "@/assets/icons/arrowDown.svg?react";
import ThemedIcon from "@/components/ThemedIcon";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";

const CustomDropdownIndicator = (
  props: DropdownIndicatorProps<IOptionInterface, true>,
): ReactElement => {
  const { selectProps } = props;
  const isOpen = selectProps.menuIsOpen;
  return (
    <components.DropdownIndicator {...props}>
      <ThemedIcon icon={<ArrowIcon />} className={isOpen ? "rotate-180" : ""} />
    </components.DropdownIndicator>
  );
};
export default CustomDropdownIndicator;
