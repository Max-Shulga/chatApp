import { IInfoBlockInterfaceDto } from "@/common/interfaces/dto/web-document/iinfo-block.interface.dto";

export interface IUpworkFeedMatchEntityDto {
  docId: string;
  webDocId: number;
  title: string;
  link: string;
  content: string;
  selected: boolean;
  score: number;
  infoBlock: IInfoBlockInterfaceDto[] | null;
}
