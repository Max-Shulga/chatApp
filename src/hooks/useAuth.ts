import {useEffect, useState} from "react";
import {auth$, authStore} from "@/store/auth.store";
import {ILoginResponseDTO} from "@/common/interfaces/dto/auth/ilogin-response.interfaces";

type UseAuthResult = {
    isAuthenticated: boolean; token: string | null; login: (token: ILoginResponseDTO) => void; logout: () => void;
}

function useAuth(): UseAuthResult {

    const [auth, setAuth] = useState(authStore.value)

    useEffect(() => {
        const subscription = auth$.subscribe(setAuth)
        return (): void => subscription.unsubscribe()
    }, [])

    return {
        isAuthenticated: auth.isAuthenticated,
        token: auth.token?.accessToken || null,
        login: authStore.setAuth,
        logout: authStore.logout
    }
}

export default useAuth;
