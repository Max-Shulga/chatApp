import { ReactElement } from "react";
import { useAppSelector } from "../../../../../../UTtest/dating-app/src/store/hooks";
import {
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
} from "@mui/material";
import FirstLastArrowIcon from "@/assets/icons/backArrow.svg?react";
import PrevNextArrowIcon from "@/assets/icons/arrowDown.svg?react";
import ThemedIcon from "@/components/ThemedIcon";
import { UpworkPaginationSetting } from "@/common/enums/upwork-feed/upwork-feed-pagination-by.enum";
import { useSearchParams } from "react-router-dom";

const FirstPageIcon = (): ReactElement => (
  <ThemedIcon icon={<FirstLastArrowIcon />} />
);

const LastPageIcon = (): ReactElement => (
  <ThemedIcon icon={<FirstLastArrowIcon />} className="rotate-180" />
);

const PrevPageIcon = (): ReactElement => (
  <ThemedIcon icon={<PrevNextArrowIcon />} className="rotate-90" />
);

const NextPageIcon = (): ReactElement => (
  <ThemedIcon icon={<PrevNextArrowIcon />} className="-rotate-90" />
);

function PagePaginator(): ReactElement {
  const {
    items: { pageNumber, totalPages },
  } = useAppSelector((state) => state.upworkFeed);

  const [searchParams, setSearchParams] = useSearchParams();

  const setPage = (pageNumber: number): void => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(
      UpworkPaginationSetting.PageNumber,
      JSON.stringify(pageNumber),
    );
    setSearchParams(newParams);
  };

  const handleClick = (item: PaginationRenderItemParams): void => {
    const type = item.type;

    switch (type) {
      case "page":
        setPage(item.page ?? pageNumber);
        break;
      case "first":
        setPage(1);
        break;
      case "last":
        setPage(totalPages);
        break;
      case "previous":
        setPage(pageNumber - 1);
        break;
      case "next":
        setPage(pageNumber + 1);
        break;
    }
  };

  return (
    <td className="flex flex-row items-center justify-end w-full">
      <Pagination
        count={totalPages}
        page={pageNumber}
        siblingCount={2}
        boundaryCount={0}
        showFirstButton={true}
        showLastButton={true}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            onClick={() => handleClick(item)}
            slots={{
              previous: PrevPageIcon,
              next: NextPageIcon,
              first: FirstPageIcon,
              last: LastPageIcon,
            }}
          />
        )}
      />
    </td>
  );
}

export default PagePaginator;
