import baseQueryWithReAuth from "@/store/api/baseQueryWithReAuth";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import { ISendMessageRequest } from "@/common/interfaces/dto/message/isend-message-request.interface";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ISubscriptionToChatMessagesDTO } from "@/common/interfaces/dto/message/isubscription-to-chat-messages.dto";

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
