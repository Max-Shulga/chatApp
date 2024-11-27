import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import { messagesApi } from "@/store/api/messagesApi";

type initialStateType = {
  messages: IMessageDTO[];
  isMessageReceived: boolean;
};

const initialState: initialStateType = {
  messages: [],
  isMessageReceived: false,
};

const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<IMessageDTO>) => {
      state.messages.push(action.payload);
    },
    setMessageReceivedStatus: (state, { payload }: PayloadAction<boolean>) => {
      state.isMessageReceived = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      messagesApi.endpoints.getMessages.matchFulfilled,
      (state, { payload }) => {
        state.messages = payload;
      },
    );
  },
});
export const { addMessage, setMessageReceivedStatus } = chatSlice.actions;
export default chatSlice.reducer;
