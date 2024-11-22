import { IChatItem } from "@/common/interfaces/dto/chat/dto/ichat-item";
import { createSlice } from "@reduxjs/toolkit";
import { appApi } from "@/store/api";

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
      appApi.endpoints.getChats.matchFulfilled,
      (state, { payload }) => {
        state.chats = payload;
      },
    );
  },
});

export default allChatsSlice.reducer;
