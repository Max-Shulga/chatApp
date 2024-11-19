import { ReactElement } from "react";
import { useAppSelector } from "@/store/hooks";
import FeedItemContainer from "@/views/upworkFeedDetail/FeedItemContainer";
import MatchedCaseItem from "@/views/upworkFeedDetail/matchedCases/MatchedCaseItem";

function MatchedCases(): ReactElement {
  const { matchedCasesData } = useAppSelector(
    (state) => state.upworkFeedDetail,
  );

  return (
    <FeedItemContainer className={`w-4/5 flex flex-col gap-4 items-start`}>
      <h4 className="text-grays-500">Matched cases</h4>
      <div className="pt-3">
        {matchedCasesData.map((matchedCase) => (
          <div className="border-b border-dashed" key={matchedCase.docId}>
            <MatchedCaseItem matchedCase={matchedCase} />
          </div>
        ))}
      </div>
    </FeedItemContainer>
  );
}

export default MatchedCases;
