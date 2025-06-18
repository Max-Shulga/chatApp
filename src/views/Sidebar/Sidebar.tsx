import { ReactElement } from "react";
import SecondaryStyledThemeWrapper from "@/components/SecondaryStyledThemeWrapper";
import { useAppSelector } from "../../../../UTtest/dating-app/src/store/hooks";
import ChatListItem from "@/views/Sidebar/ChatList/ChatListItem";
import AsideFooter from "@/views/Sidebar/AsideFooter";
import NewChatButton from "@/views/Sidebar/NewChatButton";
import { useGetChatsQuery } from "@/store/api/chatsApi";

type SidebarProps = {
  isOpen: boolean;
};
function Sidebar({ isOpen }: SidebarProps): ReactElement {
  const { isLoading } = useGetChatsQuery();
  const { chats } = useAppSelector((state) => state.allChats);
  return (
    <SecondaryStyledThemeWrapper
      className={`h-full fixed left-0 top-0 text transition-transform duration-300 flex  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-[280px] lg:w-[320px]`}
    >
      <aside className="flex flex-col w-full justify-between ">
        <NewChatButton />
        <div className="w-full overflow-y-auto justify-self-start flex-grow py-3 px-4">
          {isLoading
            ? null
            : chats.map((chat) => <ChatListItem {...chat} key={chat.id} />)}
        </div>
        <AsideFooter />
      </aside>
    </SecondaryStyledThemeWrapper>
  );
}
export default Sidebar;
