import {ReactElement, ReactNode, useEffect, useState} from "react";
import {useNavigate} from "react-router";
import useAuth from "@/hooks/useAuth";
import {getWhoAmI} from "@/service/whoAmI.service";
import {userStore} from "@/store/sockets/user.store";

type Props = {
    children: ReactNode;
}

function AuthGuard({children}: Props): ReactElement | null {
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth()
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/sign-in", {replace: true});
        }
        const subscription = getWhoAmI().subscribe({
            next: (user) => {
                userStore.setValue(user)
                setLoadingUser(false);

            }, error: (err) => {
                console.error(err);
                setLoadingUser(false);

            },
        })

        return (): void => subscription.unsubscribe()

    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) return null;

    if (loadingUser) {
        return null;
    }

    return (<>
        {children}
    </>)
}

export default AuthGuard
