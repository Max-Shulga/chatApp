import { IReviewDTO } from "./ireview.dto";
import { IUpworkFeedMatchEntityDto } from "./iupwork-feed-match-entity.dto";

export interface IUpworkFeedDetailItemDTO {
  id?: string;
  url: string;
  title: string;
  description: string;
  published: string;
  keywords: string[];
  score: number;
  matchedCases: number;
  matchedCasesData: IUpworkFeedMatchEntityDto[];
  matchedBlogs: number;
  matchedBlogsData: IUpworkFeedMatchEntityDto[];
  presetId: string;
  accountId: number;
  review?: IReviewDTO;
}
