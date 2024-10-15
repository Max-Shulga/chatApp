export interface IUpdateUpworkFeedItemDto {
  link: string;
  selected: boolean;
}

export interface IUpdateUpworkFeedDto {
  matchedCases?: IUpdateUpworkFeedItemDto[] | null;
  matchedBlogs?: IUpdateUpworkFeedItemDto[] | null;
}
