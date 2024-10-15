import { IPaginatedResultDTO } from "@/common/interfaces/dto/common/ipaginated-result.interface";
import { IUpworkFeedItemDTO } from "./iupwork-feed-item.dto";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";

export interface IUpworkResponseListFeedsDto {
  items: IPaginatedResultDTO<IUpworkFeedItemDTO>;
  keywordsOptions: IOptionInterface[];
  scoreOptions: IOptionInterface[];
}
