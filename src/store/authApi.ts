import { createApi } from "@reduxjs/toolkit/query/react";
import { IAccountDTO } from "@/common/interfaces/dto/account/iaccount.interface";
import { ILoginRequestDTO } from "@/common/interfaces/dto/auth/iadmin-login-request.interface";
import baseQueryWithReAuth from "@/store/baseQueryWithReAuth";
import { ILoginResponseDTO } from "@/common/interfaces/dto/auth/ilogin-response.interfaces";

export const authApi = createApi({
  reducerPath: "authApi",
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
  }),
});

export const { useSignInMutation, useWhoAmIQuery } = authApi;
