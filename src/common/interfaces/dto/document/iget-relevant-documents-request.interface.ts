import { WebDocumentSourceSection } from "@/common/enums/web-document/web-document-source-section.enum";

export interface IGetRelevantDocumentsRequest {
  replica: string;
  limitDocuments?: number;
  documentSections?: WebDocumentSourceSection[];
}
