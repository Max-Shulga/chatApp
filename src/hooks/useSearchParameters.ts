import { useSearchParams } from "react-router-dom";
import { UpworkFeedSearchBy } from "@/common/enums/upwork-feed/upwork-feed-search-by.enum";
import { useMemo } from "react";
import { ISearchParameterDTO } from "@/common/interfaces/dto/common/isearch-parameter.interface";
import IGetAllUpworkFeedCombineRequest from "@/common/interfaces/dto/upwork-feed/iget-all-upwork-feed-request-combine.interface";
import { UpworkPaginationSetting } from "@/common/enums/upwork-feed/upwork-feed-pagination-by.enum";
import { SortDirection } from "@/common/enums/common/sort-direction.enum";

type ParamType = string | number | unknown[] | undefined;
function useSearchParameters(): IGetAllUpworkFeedCombineRequest {
  const [searchParams] = useSearchParams();

  const getParam = <T extends ParamType>(key: string, defaultValue: T): T => {
    const value = searchParams.get(key);
    return (value !== null ? value : defaultValue) as T;
  };

  const pageSize = parseInt(
    getParam<string>(UpworkPaginationSetting.PageSize, "10"),
  );

  const pageNumber = parseInt(
    getParam<string>(UpworkPaginationSetting.PageNumber, "1"),
  );

  const sortDirection = getParam<SortDirection>(
    "sortDirection",
    SortDirection.ASC,
  );

  const title = getParam<string | undefined>(
    UpworkFeedSearchBy.Title,
    undefined,
  );

  const dateQuery = getParam<string | undefined>(
    UpworkFeedSearchBy.Published,
    undefined,
  );

  const unParsedKeywords = getParam<string | undefined>(
    UpworkFeedSearchBy.Keywords,
    undefined,
  );

  const keywords: string[] = unParsedKeywords
    ? JSON.parse(unParsedKeywords)
    : undefined;

  const unParsedScore = getParam<string | undefined>(
    UpworkFeedSearchBy.Score,
    undefined,
  );

  const score: string[] = unParsedScore ? JSON.parse(unParsedScore) : undefined;
  const searchParameters = useMemo(() => {
    const parameters = [
      title && {
        searchQuery: title,
        sortDirection: "",
        searchBy: UpworkFeedSearchBy.Title,
      },
      dateQuery && {
        searchQuery: dateQuery,
        searchBy: UpworkFeedSearchBy.Published,
      },
      keywords && {
        searchQuery: keywords.length > 0 ? keywords : "[]",
        searchBy: UpworkFeedSearchBy.Keywords,
      },
      score &&
        score.length > 0 && {
          searchQuery: score,
          searchBy: UpworkFeedSearchBy.Score,
        },
    ];
    return parameters.filter(
      Boolean,
    ) as ISearchParameterDTO<UpworkFeedSearchBy>[];
  }, [title, dateQuery, keywords, score]);

  return { pageSize, pageNumber, searchParameters, sortDirection };
}
export default useSearchParameters;
