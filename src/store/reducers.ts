import {combineReducers} from "@reduxjs/toolkit";
import upworkFeedSlice from "@/store/slices/upworkFeedSlice";
import upworkFeedDetailSlice from "@/store/slices/upworkFeedDetailSlice";
import allChatsSlice from "@/store/slices/allChatsSlice";
import messagesSlice from "@/store/slices/messagesSlice";
import {upworkApi} from "@/store/api/upworkApi";
import {chatsApi} from "@/store/api/chatsApi";
import {messagesApi} from "@/store/api/messagesApi";

const rootReducer = combineReducers({
  [upworkApi.reducerPath]: upworkApi.reducer,
  [chatsApi.reducerPath]: chatsApi.reducer,
  [messagesApi.reducerPath]: messagesApi.reducer,
  upworkFeed: upworkFeedSlice,
  upworkFeedDetail: upworkFeedDetailSlice,
  allChats: allChatsSlice,
  chat: messagesSlice,
});

export default rootReducer;
