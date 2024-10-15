import { ISearchParameterDTO } from "@/common/interfaces/dto/common/isearch-parameter.interface";
import { IPaginatedRequestDTO } from "@/common/interfaces/dto/common/ipaginated-request.interface";
import { WebDocumentSearchBy } from "@/common/enums/web-document/web-document-search-by.enum";
import { SortDirection } from "@/common/enums/common/sort-direction.enum";
import { WebDocumentSortBy } from "@/common/enums/web-document/web-document-sort-by.enum";

export interface IGetWebDocumentsRequestDTO extends IPaginatedRequestDTO {
  searchParameters?: ISearchParameterDTO<WebDocumentSearchBy>[];
  sortDirection?: SortDirection;
  sortBy?: WebDocumentSortBy;
}
