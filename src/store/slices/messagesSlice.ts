import { createSlice } from "@reduxjs/toolkit";
import { appApi } from "@/store/api";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";

type initialStateType = {
  messages: IMessageDTO[];
};

const initialState: initialStateType = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.getMessages.matchFulfilled,
      (state, { payload }) => {
        state.messages = payload;
      },
    );
  },
});

export default chatSlice.reducer;
