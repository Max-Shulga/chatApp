import { ReactElement } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import HideSideBarIcon from "@/assets/icons/backArrow.svg?react";

function UpworkFeedHeader(): ReactElement {
  return (
    <header className="flex flex-row justify-between px-5 py-6">
      <IconButton>
        <ThemedIcon icon={<HideSideBarIcon />} />
      </IconButton>
      <ThemeToggle />
    </header>
  );
}
export default UpworkFeedHeader;
