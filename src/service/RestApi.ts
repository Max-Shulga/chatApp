import {
    catchError,
    finalize,
    from,
    Observable,
    of,
    retry,
    shareReplay,
    switchMap,
    tap,
    throwError,
    timeout
} from "rxjs";
import {IAccountResponseDTO} from "@/common/interfaces/dto/account/iaccount-response.interfaces";
import {fromFetch} from 'rxjs/fetch';
import {api} from "@/common";
import ROUTE_VERSION from "@/routes/routes-version-enum";
import {authStore} from "@/store/auth.store";

const API_PREFIX = `${api.baseURL}/${ROUTE_VERSION.V1}`;

const TIMEOUT = 30000;
const MAX_TRY_RE_FETCH = 1;
const MAX_TRY_REFRESH_TOKEN = 2;
let refreshTokenInProgress$: Observable<any> | null = null;

const refreshAccessToken = (): Observable<IAccountResponseDTO | null> => {
    if (!refreshTokenInProgress$) {
        const refreshToken = localStorage.getItem("refreshToken");
        refreshTokenInProgress$ = fromFetch(`${API_PREFIX}/auth/token/refresh`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({refreshToken})
        }).pipe(switchMap(response => {
            if (response.ok) {
                return from(response.json());
            } else {
                return of(null)
            }
        }), tap((newTokens) => {
            if (newTokens) {
                authStore.setAuth(newTokens)
            }
        }), catchError(() => {
            return of(null)
        }), shareReplay(1))
    }
    return refreshTokenInProgress$
}

const apiRequest = (
    url: string,
    options: RequestInit = {},
    countRefreshToken = 0,
    timeOut = TIMEOUT,): Observable<Response> => {
    const acceptToken  = localStorage.getItem("token");
    const fullUrl = `${API_PREFIX}${url.startsWith("/") ? "" : "/"}${url}`;

    return fromFetch(fullUrl,{
        ...options,
        headers:{
            ...options.headers,
            Authorization: `Bearer ${acceptToken}`,
        }
    }).pipe(
        timeout(timeOut),
        retry({count:MAX_TRY_RE_FETCH,resetOnSuccess:true}),
        switchMap((response)=> {
            if (response.status === 401) {
                if (countRefreshToken === MAX_TRY_REFRESH_TOKEN) {
                    return throwError(() => new Error("Unauthorized after token refresh"));

                }

                return refreshAccessToken().pipe(
                    switchMap(newToken => {
                        if (newToken) {
                            return apiRequest(url, options, countRefreshToken + 1, timeOut);
                        } else {
                            authStore.logout();
                            return of(response);
                        }
                    }),
                    finalize(() => {
                        refreshTokenInProgress$ = null;
                    })
                );
            }
            return of(response)
        })
    )
}

const GET = (url:string,timeOut:number = TIMEOUT):Observable<Response>=>{
    return apiRequest(
        url,{
            method:"GET"
        },
        0,
        timeOut
    )
}

const POST = (url:string,body:unknown={},timeOut = TIMEOUT):Observable<Response>=>{
    return apiRequest(
        url,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(body)
        },
        0,
        timeOut
    )
}

const PUT = (url: string, body: unknown = {}): Observable<Response> => {
    return apiRequest(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
};

export { GET, POST, PUT };

