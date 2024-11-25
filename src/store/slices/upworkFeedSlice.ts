import { IUpworkResponseListFeedsDto } from "@/common/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto";
import { createSlice } from "@reduxjs/toolkit";
import { upworkApi } from "@/store/upworkApi";

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
      upworkApi.endpoints.upworkFeeds.matchFulfilled,
      (state, { payload }) => {
        state.items = payload.items;
        state.keywordsOptions = payload.keywordsOptions;
        state.scoreOptions = payload.scoreOptions;
      },
    );
  },
});

export default upworkFeedSlice.reducer;
