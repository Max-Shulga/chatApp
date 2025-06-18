import {TypedUseSelectorHook,useDispatch,useSelector} from 'react-redux'
import {AppDispatch} from "../../../../chatApp/src/store/store";
import {RootState} from "../../../../chatApp/src/store/types";


type DispatchFunc = () => AppDispatch;
export const useAppDispatch:DispatchFunc = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
