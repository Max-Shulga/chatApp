import { IWebDocumentMetadataDTO } from "./iweb-document-metadata.interface";
import { WebDocumentSourceSection } from "@/common/enums/web-document/web-document-source-section.enum";

export interface IWebDocumentDTO {
  id: number;
  content: string;
  metadata?: IWebDocumentMetadataDTO;
  section: WebDocumentSourceSection;
  idInSection: number;
  disabled: boolean;
  created: string;
}
