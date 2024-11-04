import { ReactElement, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import ThemedSelect from "@/components/ThemedSelect";
import { useSearchParams } from "react-router-dom";
import { UpworkFeedSearchBy } from "@/common/enums/upwork-feed/upwork-feed-search-by.enum";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";
import SortDirectionButton from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/SortDirectionButton";

function KeywordSelector(): ReactElement {
  const { keywordsOptions } = useAppSelector((state) => state.upworkFeed);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramKeywords = searchParams.get(UpworkFeedSearchBy.Keywords);

  const searchParamsKeywords = paramKeywords
    ? keywordsOptions.filter((keyword) => paramKeywords.includes(keyword.value))
    : null;

  const [selectedKeywords, setSelectedKeywords] = useState<IOptionInterface[]>(
    searchParamsKeywords ? searchParamsKeywords : keywordsOptions,
  );

  const handleChange = (options: IOptionInterface[]): void => {
    const values = options.map((option) => option.value);
    setSelectedKeywords(options);
    const newParams = new URLSearchParams(searchParams);
    newParams.set(UpworkFeedSearchBy.Keywords, JSON.stringify(values));
    setSearchParams(newParams);
  };

  return (
    <div className="px-2 flex flex-col gap-8 ">
      <div className="flex flex-row justify-between items-center">
        <h4>Keywords</h4>
        <SortDirectionButton />
      </div>
      <ThemedSelect
        isMulti
        handleChange={handleChange}
        selected={selectedKeywords}
        options={keywordsOptions}
        closeMenuOnSelect={false}
      />
    </div>
  );
}

export default KeywordSelector;
