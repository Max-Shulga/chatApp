import { ReactElement } from "react";
import { useAppSelector } from "../../../../../../UTtest/dating-app/src/store/hooks";
import getDisplayedRange from "@/utils/getDisplayedRange";

function ItemsShown(): ReactElement {
  const {
    items: { pageNumber, pageSize, totalCount },
  } = useAppSelector((state) => state.upworkFeed);
  const { startIndex, endIndex } = getDisplayedRange(
    pageNumber,
    pageSize,
    totalCount,
  );
  return (
    <p className="py-1">
      Items shown:{" "}
      <strong>
        {startIndex} - {endIndex}
      </strong>{" "}
      out of <strong>{totalCount}</strong>
    </p>
  );
}
export default ItemsShown;
