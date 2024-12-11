import { useEffect } from "react";
import { socket } from "@/store/sockets/chat-socket";
import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";

type UseChatSocketParams = {
  chatId: number;
  accessToken: string;
  onMessageReceived?: (data: IMessageDTO) => void;
};

const useChatSocket = ({
  chatId,
  accessToken,
  onMessageReceived,
}: UseChatSocketParams): void => {
  useEffect(() => {
    socket.connect();
    socket.emit("subscribe", { chatId, accessToken });

    const handleChatResponse = (data: IMessageDTO): void => {
      if (onMessageReceived) onMessageReceived(data);
    };

    socket.on("chat_response", handleChatResponse);

    return (): void => {
      socket.disconnect();
      socket.emit("unsubscribe", { chatId: +chatId, accessToken });
      socket.off("chat_response", handleChatResponse);
    };
  }, [chatId, accessToken, onMessageReceived]);
};

export default useChatSocket;
