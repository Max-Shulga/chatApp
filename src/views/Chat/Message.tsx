import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import { ReactElement, ReactNode } from "react";
import { Box, styled } from "@mui/material";
import colors from "@/styles/colors.module.scss";
import AIIcon from "@/assets/icons/dataSquare.svg?react";

type MessageType = "question" | "answer";

type CustomBoxProps = {
  children: ReactNode;
  className?: string;
  variant: MessageType;
};

const CustomBox = styled(Box)<CustomBoxProps>(({ theme, variant }) => ({
  ...(variant === "question" && {
    border: "1px solid",
    borderColor:
      theme.palette.mode === "light" ? colors.gray50 : colors.gray300,
  }),
  ...(variant === "answer" && {
    backgroundColor:
      theme.palette.mode === "light"
        ? colors.lightBackgroundAnswerBackground
        : colors.darkBackgroundAnswerBackground,
  }),
}));

function Message({ content, isBot }: IMessageDTO): ReactElement {
  return (
    <div className="w-full ">
      <CustomBox
        className={`flex flex-row gap-3 p-3 rounded-2`}
        variant={isBot ? "answer" : "question"}
      >
        {isBot && <AIIcon className="w-6 h-6 flex-shrink-0" />}
        <p className="px-3">{content}</p>
      </CustomBox>
    </div>
  );
}
export default Message;
