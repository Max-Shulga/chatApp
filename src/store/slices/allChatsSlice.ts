import { IChatItem } from "@/common/interfaces/dto/chat/dto/ichat-item";
import { createSlice } from "@reduxjs/toolkit";
import { chatsApi } from "@/store/chatsApi";

type InitialStateType = {
  chats: IChatItem[];
};

const initialState: InitialStateType = {
  chats: [],
};
const allChatsSlice = createSlice({
  name: "allChats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      chatsApi.endpoints.getChats.matchFulfilled,
      (state, { payload }) => {
        state.chats = payload;
      },
    );
  },
});

export default allChatsSlice.reducer;
