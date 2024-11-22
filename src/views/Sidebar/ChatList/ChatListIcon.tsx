import { ReactElement } from "react";

import { useLocation } from "react-router-dom";
import EditChatNameButton from "@/views/Sidebar/ChatList/EditChatNameButton";
import DeleteChatButton from "@/views/Sidebar/ChatList/DeleteChatButton";

type ChatListIconProps = {
  chatId: number;
  name: string;
};
function ChatListIcon({ chatId, name }: ChatListIconProps): ReactElement {
  const location = useLocation();
  const isChatPage = /^\/chat\/\d+$/.test(location.pathname);

  return (
    <div className="relative pl-2">
      {isChatPage ? (
        <DeleteChatButton chatId={chatId} name={name} />
      ) : (
        <EditChatNameButton chatId={chatId} name={name} />
      )}
    </div>
  );
}
export default ChatListIcon;
