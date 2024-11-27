import { IMessageDTO } from "@/common/interfaces/dto/message/imessage-dto";

const createMessage = (
  content: string,
  isBot: boolean,
  chatId: number,
): IMessageDTO => ({
  content,
  id: content,
  isBot,
  created: new Date().toISOString(),
  accountId: NaN,
  chatId: chatId,
});
export default createMessage;
