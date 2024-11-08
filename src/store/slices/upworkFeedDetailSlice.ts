import { IUpworkFeedDetailItemDTO } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-detail-item.dto";
import { createSlice } from "@reduxjs/toolkit";
import { appApi } from "@/store/api";

const initialState: IUpworkFeedDetailItemDTO = {
  id: undefined,
  url: "",
  title: "",
  description: "",
  published: "",
  keywords: [],
  score: 0,
  matchedCases: 0,
  matchedCasesData: [],
  matchedBlogs: 0,
  matchedBlogsData: [],
  presetId: "",
  accountId: 0,
  review: undefined,
};
const upworkFeedDetailSlice = createSlice({
  name: "oneFeedSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.upworkFeedDetail.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      },
    );
  },
});
export default upworkFeedDetailSlice.reducer;
