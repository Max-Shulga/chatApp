import { ReactElement } from "react";
import FeedItemContainer from "@/views/upworkFeedDetail/FeedItemContainer";
import { useAppSelector } from "@/store/hooks";
import MatchedBlogsItem from "@/views/upworkFeedDetail/matchedBlogs/MatchedBlogsItem";

function MatchedBlogs(): ReactElement {
  const { matchedBlogsData } = useAppSelector(
    (state) => state.upworkFeedDetail,
  );
  return (
    <FeedItemContainer className={`w-4/5 flex flex-col gap-4 items-start mb-4`}>
      <h4 className="text-grays-500">Matched Blogs</h4>
      <div className="pt-3 w-full">
        {matchedBlogsData.map((matchedCase) => (
          <div className="border-b border-dashed" key={matchedCase.docId}>
            <MatchedBlogsItem matchedCase={matchedCase} />
          </div>
        ))}
      </div>
    </FeedItemContainer>
  );
}
export default MatchedBlogs;
