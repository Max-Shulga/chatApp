import { IErrorDTO } from "./ierror.interface";

export interface IApiResponseDTO {
  success: boolean;
  statusCode: number;
  data?: unknown;
  error?: IErrorDTO;
}

export interface IApiResponseExceptionDTO extends IApiResponseDTO {}

export interface IApiResponseGenericDTO<T> extends IApiResponseDTO {
  data: T;
}
