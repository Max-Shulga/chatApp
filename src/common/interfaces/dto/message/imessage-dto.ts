export interface IMessageDTO {
  id?: string;
  content: string;
  created: string;
  isBot: boolean;
  accountId: number;
  chatId: number;
}
