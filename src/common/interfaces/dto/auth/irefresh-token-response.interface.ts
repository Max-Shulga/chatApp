import { IAccessDTO } from "@/common/interfaces/dto/auth/iaccess.interface";

export interface RefreshTokenResponse {
  data: {
    data: {
      access: IAccessDTO;
    };
  };
}
