import { ReactElement, useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import Arrow from "@/assets/icons/arrowDown.svg?react";
import RSSRefreshButton from "@/views/UpworkFeed/RSSRefreshBar/RSSRefreshButton";
import { QueryActionCreatorResult } from "@reduxjs/toolkit/query";

type RSSRefreshBarProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: () => QueryActionCreatorResult<any>;
};
function RSSRefreshBar({ refetch }: RSSRefreshBarProps): ReactElement {
  const [selectedValue, setSelectedValue] = useState("IT Networking 2");

  const handleChange = (event: SelectChangeEvent): void => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="px-8 flex items-center flex-row gap-2 h-12 w-full">
      <FormControl className="w-[60%] max-h-12 ">
        <Select
          value={selectedValue}
          onChange={handleChange}
          className="font-medium !p-0 flex flex-row items-center"
          IconComponent={(props) => <ThemedIcon icon={<Arrow />} {...props} />}
        >
          <MenuItem value="IT Networking 2" className="font-medium">
            IT Networking 2
          </MenuItem>
          <MenuItem value="Option 1">Option 1</MenuItem>
          <MenuItem value="Option 2">Option 2</MenuItem>
        </Select>
      </FormControl>
      <RSSRefreshButton refetch={refetch} />
    </div>
  );
}
export default RSSRefreshBar;
