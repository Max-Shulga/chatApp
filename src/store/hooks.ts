import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import {AppDispatch} from "@/store/store";
import {RootState} from "@/store/types";


type DispatchFunc = () => AppDispatch;
export const useAppDispatch:DispatchFunc = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
