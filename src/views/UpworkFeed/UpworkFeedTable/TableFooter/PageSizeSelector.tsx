import { ReactElement, useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import useSearchParameters from "@/hooks/useSearchParameters";
import Arrow from "@/assets/icons/arrowDown.svg?react";
import { useSearchParams } from "react-router-dom";
import { UpworkPaginationSetting } from "@/common/enums/upwork-feed/upwork-feed-pagination-by.enum";
import useClickOutside from "@/hooks/useClickOutside";

const PageSizeVariants = [10, 25, 50, 100];
function PageSizeSelector(): ReactElement {
  const { pageSize } = useSearchParameters();
  const [selectedValue, setSelectedValue] = useState(
    pageSize || PageSizeVariants[0],
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);

  const ref = useClickOutside(() => {
    setOpen(false);
  });

  const handleChange = (event: SelectChangeEvent): void => {
    const values = +event.target.value;

    const newParams = new URLSearchParams(searchParams);
    newParams.set(UpworkPaginationSetting.PageSize, JSON.stringify(values));
    setSearchParams(newParams);
    setSelectedValue(values);
  };

  return (
    <FormControl className=" max-h-12 w-[100px]" ref={ref}>
      <Select
        value={selectedValue.toString()}
        onChange={handleChange}
        className="font-medium !p-0 flex flex-row items-center "
        IconComponent={(props) => <ThemedIcon icon={<Arrow />} {...props} />}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        open={open}
        MenuProps={{
          PaperProps: {
            style: {
              marginTop: "-50px",
            },
          },
        }}
      >
        {PageSizeVariants.map((size) => (
          <MenuItem value={size} className="font-medium" key={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default PageSizeSelector;
