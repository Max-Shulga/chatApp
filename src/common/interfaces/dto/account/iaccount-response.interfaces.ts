import { IAccountDTO } from "./iaccount.interface";

export interface IAccountResponseDTO {
  account: IAccountDTO;
  sessionId: string;
}
