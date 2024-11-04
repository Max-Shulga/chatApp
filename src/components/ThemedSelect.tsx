import Select, { MultiValue, Props as SelectProps } from "react-select";
import { ReactElement, useEffect, useState } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import formatSelectedValue from "@/utils/formatSelectedValue";
import CustomOption from "@/views/UpworkFeed/UpworkFeedTable/CustomOption";
import CustomDropdownIndicator from "@/components/CustomDropdownIndicator";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";
import useClickOutside from "@/hooks/useClickOutside";

interface ThemedSelectProps extends SelectProps<IOptionInterface, true> {
  options: IOptionInterface[];
  selected: IOptionInterface[];
  handleChange: (options: IOptionInterface[]) => void;
}
const ALL_OPTION: IOptionInterface = { label: "ALL", value: "ALL" };
function ThemedSelect({
  options,
  selected: initialSelectedItems,
  handleChange,
  ...rest
}: ThemedSelectProps): ReactElement {
  const { mode } = useThemeContext();
  const modifyOptions = [ALL_OPTION, ...options];

  const [selectedItems, setSelectedItems] =
    useState<MultiValue<IOptionInterface>>(initialSelectedItems);
  const [open, setOpen] = useState(false);

  const ref = useClickOutside(() => {
    setOpen(false);
  });

  useEffect(() => {
    console.log(initialSelectedItems);
    if (initialSelectedItems.length === options.length) {
      setSelectedItems([ALL_OPTION, ...options]);
    }
  }, []);

  const handleSelectChange = (
    selectedOptions: MultiValue<IOptionInterface>,
  ): void => {
    const withoutAllOptions = selectedOptions.filter(
      (opt) => opt.value !== ALL_OPTION.value,
    );
    const isAllSelected = withoutAllOptions.length === options.length;

    setSelectedItems(isAllSelected ? [ALL_OPTION] : withoutAllOptions);

    handleChange(withoutAllOptions);
  };

  const handleAllClick = (): void => {
    const isAllCurrentlySelected = selectedItems.includes(ALL_OPTION);

    if (isAllCurrentlySelected) {
      setSelectedItems([]);
      handleChange([]);
    } else {
      setSelectedItems(modifyOptions);
      handleChange(options);
    }
  };

  return (
    <div ref={ref}>
      <Select
        value={selectedItems}
        onChange={handleSelectChange}
        onMenuOpen={() => setOpen(true)}
        onMenuClose={() => setOpen(false)}
        menuIsOpen={open}
        options={modifyOptions}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        classNames={{
          control: () => {
            return `custom-control ${
              mode === "light" ? "custom-control-light" : "custom-control-dark"
            }`;
          },
          indicatorSeparator: () => "custom-separator",
          menu: () =>
            `custom-menu ${
              mode === "light" ? "custom-menu-light" : "custom-menu-dark"
            }`,
          menuList: () => "custom-menu-list",
        }}
        components={{
          SingleValue: ({ data }) => <span>{data.label}</span>,
          ValueContainer: () => (
            <span>{formatSelectedValue(selectedItems)}</span>
          ),
          ClearIndicator: () => null,
          DropdownIndicator: CustomDropdownIndicator,
          Option: (props) => {
            const isAllOption = props.data.value === ALL_OPTION.value;
            return (
              <CustomOption
                props={props}
                onClick={isAllOption ? handleAllClick : undefined}
              />
            );
          },
        }}
        {...rest}
      />
    </div>
  );
}
export default ThemedSelect;
