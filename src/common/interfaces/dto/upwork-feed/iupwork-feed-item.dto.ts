import { IReviewDTO } from "./ireview.dto";

export interface IUpworkFeedItemDTO {
  id?: string;
  url: string;
  title: string;
  published: string;
  keywords: string[];
  score: number;
  matchedCases: number;
  matchedBlogs: number;
  presetId: string;
  accountId: number;
  review?: IReviewDTO;
}
