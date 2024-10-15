import { IUpworkFeedMatchEntityDto } from "./iupwork-feed-match-entity.dto";

export interface IFeedCalculationsLLMData {
  Summary?: string;
  OS?: string[];
  Devices?: string[];
  "Programming Languages"?: string[];
  Technologies?: string[];
  Industry?: string[];
  Tags?: string[];
}

export interface IUpworkFeedCalculations {
  id?: string;
  llmData: IFeedCalculationsLLMData;
  matchedCasesData: IUpworkFeedMatchEntityDto[];
  matchedCases: number;
  matchedBlogsData: IUpworkFeedMatchEntityDto[];
  matchedBlogs: number;
  score: number;
  created: string;
  feedId: string;
}
