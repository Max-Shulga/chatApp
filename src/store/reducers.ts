import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "@/store/slices/userSlice";
import upworkFeedSlice from "@/store/slices/upworkFeedSlice";
import upworkFeedDetailSlice from "@/store/slices/upworkFeedDetailSlice";
import allChatsSlice from "@/store/slices/allChatsSlice";
import messagesSlice from "@/store/slices/messagesSlice";
import { authApi } from "@/store/authApi";
import { upworkApi } from "@/store/upworkApi";
import { chatsApi } from "@/store/chatsApi";
import { messagesApi } from "@/store/messagesApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [upworkApi.reducerPath]: upworkApi.reducer,
  [chatsApi.reducerPath]: chatsApi.reducer,
  [messagesApi.reducerPath]: messagesApi.reducer,
  user: userSlice,
  upworkFeed: upworkFeedSlice,
  upworkFeedDetail: upworkFeedDetailSlice,
  allChats: allChatsSlice,
  chat: messagesSlice,
});

export default rootReducer;
