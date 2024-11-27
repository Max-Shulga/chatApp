import { IAccountDTO } from "@/common/interfaces/dto/account/iaccount.interface";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "@/store/api/authApi";

type UserState = {
  user: IAccountDTO | null;
  isLoading: boolean;
};

const initialState: UserState = {
  user: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.signIn.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      },
    );
    builder.addMatcher(authApi.endpoints.whoAmI.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      authApi.endpoints.whoAmI.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      },
    );
  },
});
export default userSlice.reducer;
