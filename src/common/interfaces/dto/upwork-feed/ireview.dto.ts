import { ReviewType } from "@/common/enums/upwork-feed/review-type.enum";

export interface IReviewDTO {
  type: ReviewType;
  comment: string;
}
