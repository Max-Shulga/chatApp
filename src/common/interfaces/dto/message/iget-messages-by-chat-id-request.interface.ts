import { ISearchParameterDTO } from "@/common/interfaces/dto/common/isearch-parameter.interface";
import { MessageSearchBy } from "@/common/enums/message/message-search-by.enum";
import { SortDirection } from "@/common/enums/common/sort-direction.enum";
import { MessageSortBy } from "@/common/enums/message/message-sort-by.enum";

export interface IGetMessagesByChatIdRequest {
  searchParameters?: ISearchParameterDTO<MessageSearchBy>[];
  sortDirection?: SortDirection;
  sortBy?: MessageSortBy;
}
