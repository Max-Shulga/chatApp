import { IWebDocumentMetadataDTO } from "./iweb-document-metadata.interface";
import { IInfoBlockInterfaceDto } from "./iinfo-block.interface.dto";
import { WebDocumentSourceSection } from "@/common/enums/web-document/web-document-source-section.enum";

export interface ICreateWebDocumentDTO {
  content: string;
  section: WebDocumentSourceSection;
  idInSection: number;
  disabled: boolean;
  metadata: IWebDocumentMetadataDTO;
  infoBlock: IInfoBlockInterfaceDto[] | null;
}
