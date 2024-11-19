import { ReactElement, useEffect, useRef, useState } from "react";
import {
  CellContext,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { IUpworkFeedItemDTO } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-item.dto";
import ThemedLink from "@/components/ThemedLink";
import formatDate from "@/utils/formatDate";
import KeywordCell from "@/components/KeywordCell";
import ScoreCell from "@/components/ScoreCell";
import { useAppSelector } from "@/store/hooks";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import TitleInput from "@/views/UpworkFeed/UpworkFeedTable/TitleInput";
import PublishedInput from "@/views/UpworkFeed/UpworkFeedTable/PublishedInput";
import KeywordSelector from "@/views/UpworkFeed/UpworkFeedTable/KeywordSelector";
import ScoreSelector from "@/views/UpworkFeed/UpworkFeedTable/ScoreSelector";
import TableFooter from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/TableFooter";
import TableBodySkeleton from "@/skeleton/TableBodySkeleton";

const columns = [
  {
    header: (): ReactElement => <TitleInput />,
    accessorKey: "title",
    cell: ({ cell }: CellContext<IUpworkFeedItemDTO, string>): ReactElement => {
      const row = cell.row.original;
      return <ThemedLink to={`${row.id}`}>{cell.getValue()}</ThemedLink>;
    },
  },
  {
    header: (): ReactElement => <PublishedInput />,
    accessorKey: "published",
    cell: ({ cell }: CellContext<IUpworkFeedItemDTO, string>): ReactElement => {
      const date = new Date(cell.getValue());

      return <span>{formatDate(date.toString())}</span>;
    },
  },
  {
    header: (): ReactElement => <KeywordSelector />,
    accessorKey: "keywords",
    cell: ({
      cell,
    }: CellContext<IUpworkFeedItemDTO, string[]>): ReactElement => {
      const keywords = cell.getValue() || [];
      return (
        <div className="flex flex-wrap gap-1">
          {keywords.map((keyword: string) => (
            <KeywordCell keyword={keyword} key={keyword} />
          ))}
        </div>
      );
    },
  },
  {
    header: (): ReactElement => <ScoreSelector />,
    accessorKey: "score",
    cell: ({ cell }: CellContext<IUpworkFeedItemDTO, number>): ReactElement => (
      <ScoreCell score={cell.getValue()} />
    ),
  },
  {
    header: "Matched cases",
    accessorKey: "matchedCases",
  },
  {
    header: "Matched blogs",
    accessorKey: "matchedBlogs",
  },
];
type UpworkFeedTableProps = {
  isFetching: boolean;
  isLoaded: boolean;
};
function UpworkFeedTable({
  isFetching,
  isLoaded,
}: UpworkFeedTableProps): ReactElement {
  const {
    items: { items: data },
  } = useAppSelector((state) => state.upworkFeed);

  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { mode } = useThemeContext();
  const tbodyRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    if (isFetching && tbodyRef.current) {
      tbodyRef.current.scrollTo({ top: 0 });
    }
  }, [isFetching]);

  const [headerKey, setHeaderKey] = useState(0);

  useEffect(() => {
    if (!isLoaded) {
      setHeaderKey((prev) => prev + 1);
    }
  }, [isLoaded]);

  return (
    <div className="w-full mt-10 px-8 overflow-hidden h-4/5">
      <table className="w-full table-fixed h-full">
        <thead key={headerKey}>
          {getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className={`border-b-2 grid grid-cols-[3fr_2fr_3fr_2fr_1fr_1fr] ${
                mode === "light"
                  ? "border-light-divider"
                  : "border-dark-divider"
              }`}
            >
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`text-left pb-2 ${
                    (index === 4 || index === 5) && "text-right"
                  }`}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          ref={tbodyRef}
          className={`max-h-[550px] block relative hide-scrollbar ${
            isFetching ? "overflow-hidden" : "overflow-y-auto"
          }`}
        >
          {isFetching && <TableBodySkeleton />}
          {getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="grid grid-cols-[3fr_2fr_3fr_2fr_1fr_1fr] px-2"
            >
              {row.getVisibleCells().map((cell, index) => (
                <td
                  key={cell.id}
                  className={`border-b py-4 px-2 pr-3 ${
                    mode === "light"
                      ? "border-light-divider"
                      : "border-dark-divider"
                  } ${(index === 4 || index === 5) && "text-right"}`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <TableFooter />
      </table>
    </div>
  );
}

export default UpworkFeedTable;
