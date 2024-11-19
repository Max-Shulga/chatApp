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
  }),
});

export const { useSignInMutation, useWhoAmIQuery, useUpworkFeedsQuery } =
  appApi;
