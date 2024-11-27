import baseQueryWithReAuth from "@/store/api/baseQueryWithReAuth";
import { IChatItem } from "@/common/interfaces/dto/chat/dto/ichat-item";
import { ICreateChatRequest } from "@/common/interfaces/dto/chat/dto/icreate-chat-request.interface";
import { IDeleteChatRequest } from "@/common/interfaces/dto/chat/dto/ichat-delete-request.interface";
import { IEditChatRequest } from "@/common/interfaces/dto/chat/dto/iedit-chat-request.interface";
import { createApi } from "@reduxjs/toolkit/query/react";

export const chatsApi = createApi({
  reducerPath: "chats",
  tagTypes: ["Chats"],
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getChats: builder.query<IChatItem[], void>({
      query: () => ({
        url: "/chats",
        method: "GET",
      }),
      transformResponse: (response: { data: IChatItem[] }) => {
        return response.data;
      },
      providesTags: ["Chats"],
    }),
    addChat: builder.mutation<void, ICreateChatRequest>({
      query: (params) => ({
        url: "/chats",
        method: "POST",
        body: {
          name: params.name,
        },
      }),
      invalidatesTags: ["Chats"],
    }),
    deleteChat: builder.mutation<void, IDeleteChatRequest>({
      query: (params) => ({
        url: `/chats/${params.chatId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chats"],
    }),
    editChat: builder.mutation<void, IEditChatRequest>({
      query: (params) => ({
        url: `/chats/${params.chatId}`,
        method: "PUT",
        body: {
          name: params.name,
        },
      }),
      invalidatesTags: ["Chats"],
    }),
  }),
});
export const {
  useGetChatsQuery,
  useAddChatMutation,
  useDeleteChatMutation,
  useEditChatMutation,
} = chatsApi;
