import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import SwapIcon from "@/assets/icons/swapArrow.svg?react";
import { ReactElement } from "react";
import { useSearchParams } from "react-router-dom";
import { SortDirection } from "@/common/enums/common/sort-direction.enum";
import colors from "@/styles/colors.module.scss";

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
        lightFill={colors.gray300}
        hoverLightFill={colors.gray600}
        darkFill={colors.$gray100}
        hoverDarkFill={colors.lightBackgroundDefault}
      />
    </IconButton>
  );
}
export default SortDirectionButton;
