import {BehaviorSubject} from "rxjs";
import {IAccessDTO} from "@/common/interfaces/dto/auth/iaccess.interface";
import {ILoginResponseDTO} from "@/common/interfaces/dto/auth/ilogin-response.interfaces";


export type AuthState = {
    isAuthenticated: boolean; token: IAccessDTO | null;
}

const getTokenFromStorage = (): IAccessDTO | null => {
    const accessToken = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
        return {
            accessToken, refreshToken,
        }
    }
    return null
}

const initialAuthState: AuthState = {
    isAuthenticated: !!getTokenFromStorage(),
    token: getTokenFromStorage(),
}

const authSubject = new BehaviorSubject<AuthState>(initialAuthState)

const auth$ = authSubject.asObservable()

const authStore = {
    get value(): AuthState {
        return authSubject.value;

    }, setAuth: (token: ILoginResponseDTO): void => {
        localStorage.setItem("token", token?.access?.accessToken ?? "");
        localStorage.setItem("refreshToken", token?.access.refreshToken ?? "");
        authSubject.next({
            isAuthenticated: !!token,
            token:token.access
        })
    }, logout: (): void => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        authSubject.next({
            isAuthenticated: false, token: null,
        })
    }
}

export {
    auth$, authStore
}
