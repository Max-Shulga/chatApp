import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import SwapIcon from "@/assets/icons/swapArrow.svg?react";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { SortDirection } from "@/common/enums/common/sort-direction.enum";

function SortDirectionButton(): ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleToggleSortDirection = (): void => {
    const newParams = new URLSearchParams(searchParams);
    const currentSort = newParams.get("sortDirection") || SortDirection.ASC;
    const newSortDirection =
      currentSort === SortDirection.ASC
        ? SortDirection.DESC
        : SortDirection.ASC;

    newParams.set("sortDirection", newSortDirection);
    setSearchParams(newParams);
  };
  return (
    <IconButton onClick={handleToggleSortDirection}>
      <ThemedIcon
        icon={<SwapIcon />}
        lightFill="#b8b8b8"
        hoverLightFill="#333333"
        darkFill="#70737a"
        hoverDarkFill="#F6F7F8"
      />
    </IconButton>
  );
}
export default SortDirectionButton;
