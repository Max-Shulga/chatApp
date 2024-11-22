import { IChatItem } from "@/common/interfaces/dto/chat/dto/ichat-item";
import { ReactElement } from "react";

import HoverEffectBox from "@/components/HoverEffectBox";
import ChatListIcon from "@/views/Sidebar/ChatListIcon";
import { Link } from "react-router-dom";

function ChatListItem({ name, id }: IChatItem): ReactElement {
  return (
    <HoverEffectBox className="rounded-2 px-4 py-2">
      <div className="flex flex-row items-center w-full justify-between ">
        <Link to="" className="w-full truncate text-left ">
          <p className=" p-r-3">{name}</p>
        </Link>
        <ChatListIcon chatId={id} name={name} />
      </div>
    </HoverEffectBox>
  );
}
export default ChatListItem;
