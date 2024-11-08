import { ReactElement, ReactNode } from "react";
import { Box, Palette, styled } from "@mui/material";
import colors from "@/styles/colors.module.scss";

const getBgColorByScore = (score: number): keyof Palette["score"] => {
  if (score < 20) return "red";
  if (score < 40) return "orange";
  if (score < 60) return "yellow";
  if (score < 80) return "green";
  return "blue";
};

type ThemedBoxProps = {
  score: number;
  children: ReactNode;
};

const ThemedBox = styled(Box)<ThemedBoxProps>(({ theme, score }) => ({
  color:
    theme.palette.mode === "light"
      ? colors.lightTextSecondary
      : colors.darkTextSecondary,
  backgroundColor: theme.palette.score[getBgColorByScore(score)],
}));

type ScoreCellType = {
  score: number;
};
function ScoreCell({ score }: ScoreCellType): ReactElement {
  return (
    <ThemedBox
      score={score}
      className="rounded-[20px]  px-2 py-0.5 flex flex-row justify-center w-fit items-center"
    >
      <div>{score}</div>
    </ThemedBox>
  );
}
export default ScoreCell;
