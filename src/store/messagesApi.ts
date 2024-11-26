import baseQueryWithReAuth from "@/store/baseQueryWithReAuth";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import { ISendMessageRequest } from "@/common/interfaces/dto/message/isend-message-request.interface";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Manager } from "socket.io-client";
import api from "@/common/api";
import { ISubscriptionToChatMessagesDTO } from "@/common/interfaces/dto/message/isubscription-to-chat-messages.dto";
import store from "@/store/store";
import {
  addMessage,
  setMessageReceivedStatus,
} from "@/store/slices/messagesSlice";

const manager = new Manager(`${api.baseURL}`, {
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 3000,
  reconnectionAttempts: Infinity,
  transports: ["websocket"],
});

export const messagesApi = createApi({
  reducerPath: "messages",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getMessages: builder.query<IMessageDTO[], ISubscriptionToChatMessagesDTO>({
      query: (params) => ({
        url: `/messages/${params.chatId}`,
        method: "GET",
      }),
      transformResponse: (response: { data: IMessageDTO[] }) => {
        return response.data;
      },
      async onCacheEntryAdded(
        { chatId, accessToken },
        { cacheDataLoaded, cacheEntryRemoved },
      ) {
        const socket = manager.socket(`/api/v1/messages`);

        const handleChatResponse = (data: IMessageDTO): void => {
          console.log();
          const isMessageExist = store
            .getState()
            .chat.messages.some((message) => message.id === data.id);
          if (!isMessageExist) {
            store.dispatch(addMessage(data));
            store.dispatch(setMessageReceivedStatus(false));
          }
        };

        try {
          await cacheDataLoaded;
          socket.connect();

          socket.emit("subscribe", {
            chatId: chatId,
            accessToken: accessToken,
          });

          socket.on("chat_response", handleChatResponse);
        } catch (error) {
          console.error("Error: ", error);
        }

        await cacheEntryRemoved;
        socket.emit("unsubscribe", { chatId, accessToken });
        socket.off("chat_response", handleChatResponse);
        socket.disconnect();
      },
    }),
    sendMessage: builder.mutation<IMessageDTO, ISendMessageRequest>({
      query: ({ content, chatId }) => ({
        url: `/messages/send-message`,
        method: "POST",
        body: {
          chatId,
          content,
        },
      }),
    }),
  }),
});
export const { useGetMessagesQuery, useSendMessageMutation } = messagesApi;
