import { ISearchParameterDTO } from "@/common/interfaces/dto/common/isearch-parameter.interface";
import { ChatSearchBy } from "@/common/enums/chat/chat-search-by.enum";
import { SortDirection } from "@/common/enums/common/sort-direction.enum";
import { ChatSortBy } from "@/common/enums/chat/chat-sort-by.enum";

export interface IGetAllChatsRequest {
  searchParameters?: ISearchParameterDTO<ChatSearchBy>[];
  sortDirection?: SortDirection;
  sortBy?: ChatSortBy;
}
