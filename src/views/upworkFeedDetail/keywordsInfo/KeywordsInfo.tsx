import { ReactElement, useState } from "react";
import { useAppSelector } from "@/store/hooks";
import KeywordCell from "@/components/KeywordCell";
import FeedItemContainer from "@/views/upworkFeedDetail/FeedItemContainer";
import LikeButton from "@/components/LikeButton";
import DislikeFeedbackPopup from "@/views/upworkFeedDetail/keywordsInfo/DislikeFeedbackPopup";

function KeywordsInfo(): ReactElement {
  const { keywords } = useAppSelector((state) => state.upworkFeedDetail);
  const [activeButton, setActiveButton] = useState<
    "like" | "dislike" | undefined
  >();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleLikeClick = (): void => {
    setIsPopupVisible(false);

    setActiveButton("like");
  };
  const handleDislikeClick = (): void => {
    setActiveButton("dislike");
    setIsPopupVisible(true);
  };
  return (
    <FeedItemContainer
      className={`w-4/5 flex flex-row justify-between items-start`}
    >
      <div className="flex flex-col gap-2 flex-wrap   w-10/12">
        <h4 className="text-grays-500">Keywords</h4>
        <div className="flex flex-row gap-1 flex-wrap">
          {keywords.map((keyword) => (
            <KeywordCell keyword={keyword} key={keyword} />
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-start my-auto">
        <LikeButton
          isActive={activeButton === "like"}
          onClick={handleLikeClick}
        />
        <div className="relative">
          <LikeButton
            iconClassName="transform rotate-180"
            onClick={handleDislikeClick}
            isActive={
              activeButton === "dislike" ||
              (activeButton === undefined ? undefined : false)
            }
          />
          {isPopupVisible && (
            <DislikeFeedbackPopup
              onClose={() => setIsPopupVisible(false)}
              className="absolute top-10  -left-20"
            />
          )}
        </div>
      </div>
    </FeedItemContainer>
  );
}

export default KeywordsInfo;
