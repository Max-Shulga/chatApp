import {BehaviorSubject} from "rxjs";

import {IAccountDTO} from "@/common/interfaces/dto/account/iaccount.interface";

export type UserState = {
    user: IAccountDTO | null;
}

const initialState: UserState = {
    user:null
}

const userSubject = new BehaviorSubject<UserState>(initialState)

const user$ = userSubject.asObservable()

const userStore = {
    get value(): UserState {
        return userSubject.value;
    },
    setValue: (userData: IAccountDTO): void => {
        userSubject.next({
            user: userData,
        });
    }
}
export {
    user$,
    userStore
}
