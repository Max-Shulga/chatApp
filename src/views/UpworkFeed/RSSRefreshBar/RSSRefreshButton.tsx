import { ReactElement } from "react";
import { Button } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import RefreshIcon from "@/assets/icons/refresh.svg?react";
import { QueryActionCreatorResult } from "@reduxjs/toolkit/query";

type RSSRefreshButtonProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: () => QueryActionCreatorResult<any>;
};
function RSSRefreshButton({ refetch }: RSSRefreshButtonProps): ReactElement {
  const handleRefresh = (): void => {
    refetch();
  };

  return (
    <Button
      className="flex flex-row items-center gap-2 !px-4 h-full"
      onClick={handleRefresh}
    >
      <ThemedIcon icon={<RefreshIcon />} />
      Refresh RSS
    </Button>
  );
}
export default RSSRefreshButton;
