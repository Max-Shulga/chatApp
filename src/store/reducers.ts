import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/userSlice";
import { appApi } from "@/store/api";
import upworkFeedSlice from "@/store/slices/upworkFeedSlice";
import upworkFeedDetailSlice from "@/store/slices/upworkFeedDetailSlice";
import allChatsSlice from "@/store/slices/allChatsSlice";
import messagesSlice from "@/store/slices/messagesSlice";

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  user: userSlice,
  upworkFeed: upworkFeedSlice,
  upworkFeedDetail: upworkFeedDetailSlice,
  allChats: allChatsSlice,
  chat: messagesSlice,
});
export default rootReducer;
