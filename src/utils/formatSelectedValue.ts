import { MultiValue } from "react-select";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";

const formatSelectedValue = (
  selected: MultiValue<IOptionInterface>,
): string => {
  const isAllSelected = selected.find((el) => el.label === "ALL");
  if (isAllSelected) {
    return "ALL";
  }
  if (selected.length === 1) {
    return selected[0].label;
  }
  return `${selected.length} items selected`;
};
export default formatSelectedValue;
