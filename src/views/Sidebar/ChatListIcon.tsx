import { ReactElement, useState } from "react";
import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import TrashIcon from "@/assets/icons/trashBin.svg?react";
import KebabIcon from "@/assets/icons/kebab.svg?react";
import { useDeleteChatMutation } from "@/store/api";
import { useLocation } from "react-router-dom";
import RouteNames from "@/routes/routes-names";
import NewChatPopup from "@/views/Sidebar/NewChatPopup";

type ChatListIconProps = {
  chatId: number;
  name: string;
};
function ChatListIcon({ chatId, name }: ChatListIconProps): ReactElement {
  const [deleteChat] = useDeleteChatMutation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const location = useLocation();

  let icon = <TrashIcon />;

  let handleClick = (): void => {};

  switch (true) {
    case location.pathname.startsWith(`/${RouteNames.CHAT_LIST}`):
      icon = <TrashIcon />;
      handleClick = (): void => {
        deleteChat({ chatId: chatId });
      };
      break;

    case location.pathname.startsWith(`/${RouteNames.UPWORK_FEED}`):
      icon = <KebabIcon />;
      handleClick = (): void => {
        setIsPopupVisible(true);
      };
      break;
  }
  return (
    <div className="relative pl-2">
      <IconButton onClick={handleClick}>
        <ThemedIcon icon={icon} className="flex-shrink-0" />
      </IconButton>
      {isPopupVisible && (
        <NewChatPopup
          onClose={() => setIsPopupVisible(false)}
          className="absolute top-0 -right-44"
          defaultValue={name}
          chatId={chatId}
        />
      )}
    </div>
  );
}
export default ChatListIcon;
