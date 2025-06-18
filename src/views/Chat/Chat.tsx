import { ReactElement, useEffect, useRef } from "react";
import { useParams } from "react-router";
import Message from "@/views/Chat/Message";
import { InputAdornment, TextField } from "@mui/material";
import SendIconButton from "@/components/SendIconButton";
import { useForm } from "react-hook-form";
import createMessage from "@/utils/chat/createMessagePreset";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "@/store/api/messagesApi";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../UTtest/dating-app/src/store/hooks";
import {
  addMessage,
  setMessageReceivedStatus,
} from "@/store/slices/messagesSlice";
import useChatSocket from "@/hooks/useChatSocket";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";

function Chat(): ReactElement | null {
  const { id: chatId } = useParams();
  if (!chatId) return null;

  const accessToken = localStorage.getItem("token") || "";
  const { isLoading } = useGetMessagesQuery(
    { chatId: +chatId, accessToken: accessToken || "" },
    { refetchOnMountOrArgChange: true },
  );

  const [sendMessage] = useSendMessageMutation();

  const dispatch = useAppDispatch();
  const { messages, isMessageReceived } = useAppSelector((state) => state.chat);
  const { register, handleSubmit, reset, watch, getValues } = useForm({
    mode: "onSubmit",
  });

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleChangeMessages = (data: IMessageDTO): void => {
    dispatch(addMessage(data));
    dispatch(setMessageReceivedStatus(false));
  };

  useChatSocket({
    chatId: +chatId,
    accessToken,
    onMessageReceived: (data) => {
      handleChangeMessages(data);
      setMessageReceivedStatus(false);
    },
  });

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const chatResponsePlaceholder = createMessage(
    "looking for answer...",
    true,
    +chatId,
  );

  const onSubmit = async (): Promise<void> => {
    const text = getValues("message");
    await sendMessage({ chatId: +chatId, content: text });
    const newMessage = createMessage(text, false, +chatId);
    dispatch(addMessage(newMessage));
    dispatch(setMessageReceivedStatus(true));
    reset();
  };

  const messageValue = watch("message");
  if (isLoading) return null;

  return (
    <section className="h-full flex items-center flex-col mx-0 justify-between  pb-4 gap-4">
      <div
        className={
          "w-4/5 flex flex-col items-center gap-2 overflow-y-auto pr-2.5"
        }
      >
        {messages.map((message) => (
          <Message {...message} key={message.id} />
        ))}
        {isMessageReceived && (
          <Message
            {...chatResponsePlaceholder}
            key={chatResponsePlaceholder.id}
          />
        )}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="w-full flex items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          className="w-4/5 relative"
          multiline={true}
          placeholder="Write a question..."
          sx={{
            borderRadius: "8px",
          }}
          slotProps={{
            input: {
              sx: { paddingRight: "48px" },
              endAdornment: (
                <InputAdornment position="end">
                  <SendIconButton
                    onClick={() => null}
                    disabled={Boolean(!messageValue)}
                  />
                </InputAdornment>
              ),
            },
          }}
          {...register("message")}
        />
      </form>
    </section>
  );
}
export default Chat;
