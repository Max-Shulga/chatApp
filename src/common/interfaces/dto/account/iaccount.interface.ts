import { AccountRole } from "../../../enums/account/account-role.enum";
import { AccountStatus } from "../../../enums/account/account-status.enum";
import { AccountTypeAuth } from "../../../enums/account/account-type-auth.enum";

export interface IAccountDTO {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  status: AccountStatus;
  typeAuth: AccountTypeAuth;
  accountRole: AccountRole;
}
