import { IUpworkFeedMatchEntityDto } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto";
import InfoBlock from "@/views/upworkFeedDetail/matchedCases/InfoBlock";
import { ReactElement, useState } from "react";
import SelectedIcon from "@/assets/icons/selected.svg?react";
import NotSelectedIcon from "@/assets/icons/notSelected.svg?react";
import useScrollToExpanded from "@/hooks/useScrollToExpanded";
import ToggleButton from "@/components/ToggleButton";

type MatchedCaseItemProps = {
  matchedCase: IUpworkFeedMatchEntityDto;
};

function MatchedCaseItem({
  matchedCase,
}: MatchedCaseItemProps): ReactElement | null {
  const { title, content, infoBlock, selected } = matchedCase;
  const [isSelected, setIsSelected] = useState(selected);
  const { isExpanded, toggleExpand, elementRef } =
    useScrollToExpanded<HTMLDivElement>();
  if (!title) return null;
  return (
    <div className="flex flex-col gap-5 pb-2 pt-3" ref={elementRef}>
      <div className="flex flex-row justify-between w-full">
        <ToggleButton onClick={toggleExpand} isExpanded={isExpanded}>
          {title}
        </ToggleButton>
        <div onClick={() => setIsSelected(!isSelected)}>
          {isSelected ? (
            <SelectedIcon className="min-w-5 min-h-5" />
          ) : (
            <NotSelectedIcon className="min-w-5 min-h-5" />
          )}
        </div>
      </div>
      <p
        className={`w-11/12 transition-all duration-300 overflow-hidden mt-2  ${
          isExpanded ? "" : "line-clamp-2"
        }`}
      >
        {content.replace("- Summary:", " ")}
      </p>
      <InfoBlock infoBlock={infoBlock || []} />
    </div>
  );
}

export default MatchedCaseItem;
