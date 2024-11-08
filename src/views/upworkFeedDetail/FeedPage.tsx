import { ReactElement } from "react";
import { useParams } from "react-router";
import { useUpworkFeedDetailQuery } from "@/store/api";
import { useAppSelector } from "@/store/hooks";
import ProjectInfo from "@/views/upworkFeedDetail/ProjectInfo";
import KeywordsInfo from "@/views/upworkFeedDetail/keywordsInfo/KeywordsInfo";
import MatchedCases from "@/views/upworkFeedDetail/matchedCases/MatchedСases";
import MatchedBlogs from "@/views/upworkFeedDetail/matchedBlogs/MatchedBlogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@mui/material";
import ArrowIcon from "@/assets/icons/arrow.svg?react";
import ThemedIcon from "@/components/ThemedIcon";

function FeedPage(): ReactElement {
  const { id } = useParams();
  const { isLoading } = useUpworkFeedDetailQuery({ feedId: id || "" });
  const { title } = useAppSelector((state) => state.upworkFeedDetail);

  if (isLoading) return <div>loading...</div>;

  return (
    <section className="px-8 flex flex-col gap-2 items-start">
      <Breadcrumbs />

      <div className="w-full flex flex-row justify-between">
        <h3>{title}</h3>
        <Button sx={{ borderRadius: "8px" }} className="flex flex-row gap-2">
          <ThemedIcon icon={<ArrowIcon />} className="w-5 h-5" />
          Save & Generate response
        </Button>
      </div>
      <div className="flex flex-col gap-2  items-center pt-2">
        <ProjectInfo />
        <KeywordsInfo />
        <MatchedCases />
        <MatchedBlogs />
      </div>
    </section>
  );
}
export default FeedPage;
