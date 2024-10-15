import { ISearchParameterDTO } from "@/common/interfaces/dto/common/isearch-parameter.interface";
import { UpworkFeedSearchBy } from "@/common/enums/upwork-feed/upwork-feed-search-by.enum";
import { SortDirection } from "@/common/enums/common/sort-direction.enum";
import { UpworkFeedSortBy } from "@/common/enums/upwork-feed/upwork-feed-sort-by.enum";

export interface IGetAllUpworkFeedRequest {
  searchParameters?: ISearchParameterDTO<UpworkFeedSearchBy>[];
  sortDirection?: SortDirection;
  sortBy?: UpworkFeedSortBy;
}
