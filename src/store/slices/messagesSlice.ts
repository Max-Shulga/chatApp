import { createSlice } from "@reduxjs/toolkit";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import { messagesApi } from "@/store/messagesApi";

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
      messagesApi.endpoints.getMessages.matchFulfilled,
      (state, { payload }) => {
        state.messages = payload;
      },
    );
  },
});

export default chatSlice.reducer;
