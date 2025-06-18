import { ReactElement, useState } from "react";
import FeedItemContainer from "@/views/upworkFeedDetail/FeedItemContainer";
import ScoreCell from "@/components/ScoreCell";
import { useAppSelector } from "../../../../UTtest/dating-app/src/store/hooks";
import formatDate from "@/utils/formatDate";
import ToggleButton from "@/components/ToggleButton";

function ProjectInfo(): ReactElement {
  const { title, score, description, published } = useAppSelector(
    (state) => state.upworkFeedDetail,
  );
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (): void => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <FeedItemContainer className={`w-4/5 flex flex-col gap-4 items-start`}>
      <h4 className="text-grays-500">Project info</h4>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-4 items-center">
          <ScoreCell score={score} />
          <h4 className="text-blue-500 font-normal">{title}</h4>
        </div>
        <h4 className="text-grays-700 font-normal">
          {formatDate(published.toString())}
        </h4>
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden mt-2 ${
          isExpanded ? "max-h-screen" : "max-h-36 h-36"
        }`}
      >
        <p
          className={`transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-6"
          }`}
        >
          {description}
        </p>
      </div>
      <ToggleButton onClick={toggleExpand} isExpanded={isExpanded} />
    </FeedItemContainer>
  );
}

export default ProjectInfo;
