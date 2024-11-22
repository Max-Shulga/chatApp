import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import api from "@/common/api";
import { ILoginResponseDTO } from "@/common/interfaces/dto/auth/ilogin-response.interfaces";
import { ILoginRequestDTO } from "@/common/interfaces/dto/auth/iadmin-login-request.interface";
import { IAccountDTO } from "@/common/interfaces/dto/account/iaccount.interface";
import { RefreshTokenResponse } from "@/common/interfaces/dto/auth/irefresh-token-response.interface";
import RoutesNames from "@/routes/routes-names";
import { IUpworkResponseListFeedsDto } from "@/common/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto";
import IGetAllUpworkFeedCombineRequest from "@/common/interfaces/dto/upwork-feed/iget-all-upwork-feed-request-combine.interface";
import { IGetOneUpworkFeedItem } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-one-item-dto-ts";
import { IUpworkFeedDetailItemDTO } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-detail-item.dto";
import { IUpdateUpworkFeedDtoWithFeedId } from "@/common/interfaces/dto/upwork-feed/iupdate-upwork-feed.dto";
import { IChatItem } from "@/common/interfaces/dto/chat/dto/ichat-item";
import { ICreateChatRequest } from "@/common/interfaces/dto/chat/dto/icreate-chat-request.interface";
import { IDeleteChatRequest } from "@/common/interfaces/dto/chat/dto/ichat-delete-request.interface";
import { IEditChatRequest } from "@/common/interfaces/dto/chat/dto/iedit-chat-request.interface";
import { IGetMessagesByChatId } from "@/common/interfaces/dto/message/iget-messages-by-chat-id.interface";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import { ISendMessageRequest } from "@/common/interfaces/dto/message/isend-message-request.interface";

const baseQuery = fetchBaseQuery({
  baseUrl: api.baseURL,
  prepareHeaders: async (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    result.error &&
    (result.error.status === 401 || result.error.status === 403)
  ) {
    const refreshToken = localStorage.getItem("refreshToken");
    const refreshResult = (await baseQuery(
      {
        url: "/auth/token/refresh",
        method: "PUT",
        body: JSON.stringify({ token: refreshToken }),
        headers: { "Content-Type": "application/json" },
      },
      api,
      extraOptions,
    )) as RefreshTokenResponse;
    if (refreshResult.data) {
      const { accessToken, refreshToken } = refreshResult.data.data.access;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      api.dispatch({
        type: "api/updateHeaders",
        payload: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      result = await baseQuery(args, api, extraOptions);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      window.location.href = RoutesNames.SIGN_IN;
    }
  }
  return result;
};

export const appApi = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Chats"],
  endpoints: (builder) => ({
    signIn: builder.mutation<IAccountDTO, ILoginRequestDTO>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: { data: ILoginResponseDTO }) => {
        const {
          data: {
            access: { accessToken, refreshToken },
            account,
          },
        } = response;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        return account;
      },
    }),
    whoAmI: builder.query<IAccountDTO, void>({
      query: () => ({
        url: `/auth/recover-user`,
        method: "GET",
      }),
      transformResponse: (response: { data: { account: IAccountDTO } }) => {
        return response.data.account;
      },
    }),
    upworkFeeds: builder.query<
      IUpworkResponseListFeedsDto,
      IGetAllUpworkFeedCombineRequest
    >({
      query: (params) => ({
        url: "/upwork-feeds/get-feeds",
        method: "POST",
        body: {
          pageSize: params.pageSize,
          pageNumber: params.pageNumber,
          searchParameters: params.searchParameters,
          sortDirection: params.sortDirection,
          sortBy: params.sortBy,
        },
      }),
      transformResponse: (response: { data: IUpworkResponseListFeedsDto }) => {
        return response.data;
      },
    }),
    upworkFeedDetail: builder.query<
      IUpworkFeedDetailItemDTO,
      IGetOneUpworkFeedItem
    >({
      query: (params) => ({
        url: `/upwork-feeds/${params.feedId}`,
        method: "GET",
      }),
      transformResponse: (response: { data: IUpworkFeedDetailItemDTO }) => {
        return response.data;
      },
    }),
    updateUpworkFeed: builder.mutation<void, IUpdateUpworkFeedDtoWithFeedId>({
      query: ({ feedId, matchedBlogs, matchedCases }) => ({
        url: `/upwork-feeds/${feedId}`,
        method: "PUT",
        body: {
          matchedBlogs,
          matchedCases,
        },
      }),
    }),
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

export const {
  useSignInMutation,
  useWhoAmIQuery,
  useUpworkFeedsQuery,
  useUpworkFeedDetailQuery,
  useGetChatsQuery,
  useAddChatMutation,
  useDeleteChatMutation,
  useEditChatMutation,
  useGetMessagesQuery,
  useSendMessageMutation,
} = appApi;
