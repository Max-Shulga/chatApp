import {GET} from "@/service/RestApi";
import {catchError, Observable, of, switchMap, throwError} from "rxjs";
import {IAccountDTO} from "@/common/interfaces/dto/account/iaccount.interface";

const API = '/auth/recover-user'

const getWhoAmI = (): Observable<IAccountDTO> => {
    return GET(API).pipe(
        switchMap((res)=>res.json()),
        switchMap((json)=>{
            const user= json.data.account;
            if (user){
                return of(user as IAccountDTO)
            }else {
                return throwError (()=> new Error("No user data"))
            }
        }),
        catchError((err)=>{
            console.error(err)
            return throwError (()=>err)
        })
    )
}
export { getWhoAmI }
