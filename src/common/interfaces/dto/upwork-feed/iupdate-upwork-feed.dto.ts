export interface IUpdateUpworkFeedItemDto {
  link: string;
  selected: boolean;
}

export interface IUpdateUpworkFeedDto {
  matchedCases?: IUpdateUpworkFeedItemDto[] | null;
  matchedBlogs?: IUpdateUpworkFeedItemDto[] | null;
}
export interface IUpdateUpworkFeedDtoWithFeedId {
  feedId: string; // добавляем feedId
  matchedCases?: IUpdateUpworkFeedItemDto[] | null;
  matchedBlogs?: IUpdateUpworkFeedItemDto[] | null;
}
