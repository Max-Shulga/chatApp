import { IAccountDTO } from "@/common/interfaces/dto/account/iaccount.interface";
import { createSlice } from "@reduxjs/toolkit";
import { appApi } from "@/store/api";

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
    builder.addMatcher(appApi.endpoints.signIn.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      appApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      },
    );
    builder.addMatcher(appApi.endpoints.whoAmI.matchPending, (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(
      appApi.endpoints.whoAmI.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      },
    );
  },
});
export default userSlice.reducer;
