import { IAccountDTO } from "../account/iaccount.interface";
import { IAccessDTO } from "./iaccess.interface";

export interface ILoginResponseDTO {
  access: IAccessDTO;
  account: IAccountDTO;
}
