import baseQueryWithReAuth from "@/store/baseQueryWithReAuth";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import { IGetMessagesByChatId } from "@/common/interfaces/dto/message/iget-messages-by-chat-id.interface";
import { ISendMessageRequest } from "@/common/interfaces/dto/message/isend-message-request.interface";
import { createApi } from "@reduxjs/toolkit/query/react";

export const messagesApi = createApi({
  reducerPath: "messages",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getMessages: builder.query<IMessageDTO[], IGetMessagesByChatId>({
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
