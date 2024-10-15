import { IFieldValidationErrorDTO } from "./ifield-validation-error.interface";
import { IParamErrorDTO } from "./iparam-error.interface";

export interface IErrorDTO {
  errorCode: string;
  filedsValidationErrors?: IFieldValidationErrorDTO[];
  paramsErrors?: IParamErrorDTO[];
}
