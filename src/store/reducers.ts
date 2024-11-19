import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/userSlice";
import { appApi } from "@/store/api";
import upworkFeedSlice from "@/store/slices/upworkFeedSlice";
import upworkFeedDetailSlice from "@/store/slices/upworkFeedDetailSlice";

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  user: userSlice,
  upworkFeed: upworkFeedSlice,
  upworkFeedDetail: upworkFeedDetailSlice,
});
export default rootReducer;
