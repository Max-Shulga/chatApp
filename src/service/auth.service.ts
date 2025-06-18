import {catchError, type Observable, switchMap, throwError} from 'rxjs';
import {ILoginRequestDTO} from "@/common/interfaces/dto/auth/iadmin-login-request.interface";
import {POST} from "@/service/RestApi";
import {IApiResponseDTO} from "@/common/interfaces/dto/common/iapi-response.interface";


const getAuthenticated = (authData: ILoginRequestDTO): Observable<IApiResponseDTO> => {
    return POST(`auth/login`,{email:authData.email, password:authData.password}).pipe(
        switchMap(response => {
            return response.json();
        }),
        catchError(error=>{
            return throwError(()=>error)
        })
    )
}


export { getAuthenticated };
