import { ReactElement, useState } from "react";
import { IUpworkFeedMatchEntityDto } from "@/common/interfaces/dto/upwork-feed/iupwork-feed-match-entity.dto";
import SelectedIcon from "@/assets/icons/selected.svg?react";
import NotSelectedIcon from "@/assets/icons/notSelected.svg?react";
import MatchedInfoBlock from "@/views/upworkFeedDetail/matchedBlogs/MatchedInfoBlock";
import ToggleButton from "@/components/ToggleButton";
import useScrollToExpanded from "@/hooks/useScrollToExpanded";

type MatchedBlogsItemProps = {
  matchedCase: IUpworkFeedMatchEntityDto;
};
function MatchedBlogsItem({
  matchedCase,
}: MatchedBlogsItemProps): ReactElement {
  const { selected, title, infoBlock, content } = matchedCase;
  const [isSelected, setIsSelected] = useState(selected);
  const { isExpanded, toggleExpand, elementRef } =
    useScrollToExpanded<HTMLDivElement>();

  return (
    <div className="flex flex-col gap-5 pb-2 pt-3 w-full" ref={elementRef}>
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
          isExpanded ? "inline-block" : "hidden"
        }`}
      >
        {content}
      </p>
      <MatchedInfoBlock infoBlock={infoBlock || []} />
    </div>
  );
}

export default MatchedBlogsItem;
