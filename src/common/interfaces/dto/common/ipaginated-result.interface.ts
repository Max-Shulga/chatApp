export interface IPaginatedResultDTO<T> {
  totalCount: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  items: T[];
}
