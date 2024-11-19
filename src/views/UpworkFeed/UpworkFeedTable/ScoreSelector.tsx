import { ReactElement, useState } from "react";
import ThemedSelect from "@/components/ThemedSelect";
import { useAppSelector } from "@/store/hooks";
import { useSearchParams } from "react-router-dom";
import { UpworkFeedSearchBy } from "@/common/enums/upwork-feed/upwork-feed-search-by.enum";
import { IOptionInterface } from "@/common/interfaces/dto/common/ioption.interface";
import SortDirectionButton from "@/views/UpworkFeed/UpworkFeedTable/TableFooter/SortDirectionButton";

function ScoreSelector(): ReactElement {
  const { scoreOptions } = useAppSelector((state) => state.upworkFeed);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramScores = searchParams.get(UpworkFeedSearchBy.Score);
  const searchParamsScores = paramScores
    ? scoreOptions.filter((keyword) => paramScores.includes(keyword.value))
    : null;

  const [selectedScore, setSelectedScore] = useState<IOptionInterface[]>(
    searchParamsScores ? searchParamsScores : scoreOptions,
  );

  const handleChange = (options: IOptionInterface[]): void => {
    const values = options.map((option) => option.value);
    setSelectedScore(options);
    const newParams = new URLSearchParams(searchParams);
    newParams.set(UpworkFeedSearchBy.Score, JSON.stringify(values));
    setSearchParams(newParams);
  };

  return (
    <div className="px-2 flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h4>Score</h4>
        <SortDirectionButton />
      </div>
      {scoreOptions && (
        <ThemedSelect
          isMulti
          handleChange={handleChange}
          selected={selectedScore}
          options={scoreOptions}
          closeMenuOnSelect={false}
        />
      )}
    </div>
  );
}

export default ScoreSelector;
