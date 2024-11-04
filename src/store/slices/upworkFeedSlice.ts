import { IUpworkResponseListFeedsDto } from "@/common/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto";
import { createSlice } from "@reduxjs/toolkit";
import { appApi } from "@/store/api";

const initialState: IUpworkResponseListFeedsDto = {
  items: {
    items: [],
    totalCount: 0,
    totalPages: 0,
    pageNumber: 1,
    pageSize: 10,
  },
  keywordsOptions: [],
  scoreOptions: [],
};

const upworkFeedSlice = createSlice({
  name: "upworkFeed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.upworkFeeds.matchFulfilled,
      (state, { payload }) => {
        state.items = payload.items;
        state.keywordsOptions = payload.keywordsOptions;
        //     .filter(
        //   (_, index) => index % 8 === 0,
        // );
        state.scoreOptions = payload.scoreOptions;
      },
    );
  },
});

export default upworkFeedSlice.reducer;
