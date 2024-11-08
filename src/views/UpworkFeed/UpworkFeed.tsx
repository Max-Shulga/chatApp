import { ReactElement, useEffect } from "react";
import { useUpworkFeedsQuery } from "@/store/api";
import RSSRefreshBar from "@/views/UpworkFeed/RSSRefreshBar/RSSRefreshBar";
import UpworkFeedTable from "@/views/UpworkFeed/UpworkFeedTable/UpworkFeedTable";
import useSearchParameters from "@/hooks/useSearchParameters";

function UpworkFeed(): ReactElement {
  const { pageSize, pageNumber, searchParameters, sortDirection } =
    useSearchParameters();

  const { refetch, isFetching, isLoading } = useUpworkFeedsQuery({
    pageNumber: pageNumber,
    pageSize: pageSize,
    searchParameters,
    sortDirection,
  });

  useEffect(() => {
    refetch();
  }, [
    pageSize,
    pageNumber,
    JSON.stringify(searchParameters),
    sortDirection,
    refetch,
  ]);

  return (
    <section className="w-full">
      <RSSRefreshBar refetch={refetch} />
      <UpworkFeedTable isFetching={isFetching} isLoaded={isLoading} />
    </section>
  );
}
export default UpworkFeed;
