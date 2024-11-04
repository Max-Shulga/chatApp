import { ReactElement } from "react";
import ThemedDivider from "@/components/ThemedDivider";
import ItemsShown from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/ItemsShown";
import PageSizeSelector from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/PageSizeSelector";
import PagePaginator from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/PagePaginator";

function TableFooter(): ReactElement {
  return (
    <tfoot>
      <tr className="w-full flex flex-row justify-between pt-2 pl-2">
        <td className="flex flex-row w-full gap-2 items-center">
          <ItemsShown />
          <ThemedDivider orientation="vertical" />
          <PageSizeSelector />
        </td>
        <PagePaginator />
      </tr>
    </tfoot>
  );
}

export default TableFooter;
