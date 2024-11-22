import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetMessagesQuery, useSendMessageMutation } from "@/store/api";
import { useAppSelector } from "@/store/hooks";
import Message from "@/views/Chat/Message";
import { InputAdornment, TextField } from "@mui/material";
import SendIconButton from "@/components/SendIconButton";
import { useForm } from "react-hook-form";
import { socket } from "@/views/Chat/socket";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";
import createMessage from "@/utils/chat/createMessagePreset";

function Chat(): ReactElement | null {
  const { id: chatId } = useParams();
  if (!chatId) return null;

  useGetMessagesQuery({ chatId: +chatId }, { refetchOnMountOrArgChange: true });
  const accessToken = localStorage.getItem("token");
  const [sendMessage] = useSendMessageMutation();
  const { messages: initialMessages } = useAppSelector((state) => state.chat);
  const [messages, setMessages] = useState(initialMessages);
  const { register, handleSubmit, reset, watch, getValues } = useForm({
    mode: "onSubmit",
  });
  const [isLoading, setIsLoading] = useState(false);

  const chatResponsePlaceholder = createMessage(
    "looking for answer...",
    true,
    +chatId,
  );

  const handleChangeMessages = (data: IMessageDTO): void => {
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  const onSubmit = async (): Promise<void> => {
    const text = getValues("message");
    setMessages((prevMessages) => [
      ...prevMessages,
      createMessage(text, false, +chatId),
    ]);
    setIsLoading(true);
    await sendMessage({ chatId: +chatId, content: text });
    reset();
  };

  useEffect(() => {
    socket.connect();
    socket.emit(`subscribe`, {
      chatId: +chatId || 0,
      accessToken: accessToken,
    });

    const handleChatResponse = (data: IMessageDTO): void => {
      handleChangeMessages(data);
      setIsLoading(false);
    };

    socket.on("chat_response", handleChatResponse);

    return (): void => {
      socket.disconnect();

      socket.emit("unsubscribe", {
        chatId: chatId,
        accessToken: accessToken,
      });

      socket.off("chat_response", handleChatResponse);
    };
  }, [chatId]);

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);

  const messageValue = watch("message");

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
        {isLoading && (
          <Message
            {...chatResponsePlaceholder}
            key={chatResponsePlaceholder.id}
          />
        )}
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
