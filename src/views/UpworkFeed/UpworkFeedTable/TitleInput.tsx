import { TextField } from "@mui/material";
import { ChangeEvent, ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useKeyboard from "@/hooks/useKeyboard";
import { UpworkFeedSearchBy } from "@/common/enums/upwork-feed/upwork-feed-search-by.enum";
import SortDirectionButton from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/SortDirectionButton";

function TitleInput(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState(
    searchParams.get(UpworkFeedSearchBy.Title) || "",
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  const handleSearch = (): void => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(UpworkFeedSearchBy.Title, title.trim());
    setSearchParams(newParams);
  };

  const handleClearInput = (): void => {
    setTitle("");
  };
  useKeyboard(handleClearInput, "Escape");
  useKeyboard(handleSearch, "Enter");

  return (
    <div className="px-2 flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h4>Title</h4>
        <SortDirectionButton />
      </div>
      <TextField
        type="text"
        className="w-full"
        value={title}
        onChange={handleChange}
        onBlur={handleSearch}
        slotProps={{
          input: {
            sx: {
              borderRadius: "8px",
            },
          },
        }}
      />
    </div>
  );
}
export default TitleInput;
