import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/userSlice";
import { appApi } from "@/store/api";

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  user: userSlice,
});
export default rootReducer;
