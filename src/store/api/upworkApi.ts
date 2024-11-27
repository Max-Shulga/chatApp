import { createApi } from "@reduxjs/toolkit/query/react";
// eslint-disable-next-line max-len
import { IUpworkResponseListFeedsDto } from "@/common/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto";
// eslint-disable-next-line max-len
import IGetAllUpworkFeedCombineRequest from "@/common/interfaces/dto/upwork-feed/iget-all-upwork-feed-request-combine.interface";
import baseQueryWithReAuth from "@/store/api/baseQueryWithReAuth";
// eslint-disable-next-line max-len
import { IUpworkFeedDetailItemDTO } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-detail-item.dto";
// eslint-disable-next-line max-len
import { IGetOneUpworkFeedItem } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-one-item-dto-ts";
// eslint-disable-next-line max-len
import { IUpdateUpworkFeedDtoWithFeedId } from "@/common/interfaces/dto/upwork-feed/iupdate-upwork-feed.dto";

export const upworkApi = createApi({
  reducerPath: "upwork",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
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
  }),
});
export const {
  useUpworkFeedsQuery,
  useUpworkFeedDetailQuery,
  useUpdateUpworkFeedMutation,
} = upworkApi;
