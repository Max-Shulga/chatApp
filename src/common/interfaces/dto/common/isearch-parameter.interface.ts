export interface ISearchParameterDTO<T> {
  searchQuery?: string | string[];
  searchBy: T;
}
