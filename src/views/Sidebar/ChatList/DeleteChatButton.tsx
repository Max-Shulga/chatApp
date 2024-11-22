import { ReactElement, useState } from "react";
import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import TrashIcon from "@/assets/icons/trashBin.svg?react";
import DeleteChatModal from "@/views/Sidebar/ChatList/DeleteChatModal";

type DeleteChatButtonProps = {
  chatId: number;
  name: string;
};
function DeleteChatButton({
  chatId,
  name,
}: DeleteChatButtonProps): ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (): void => {
    setIsModalOpen(true);
  };
  return (
    <>
      <IconButton onClick={handleClick} className={"w-6 h-6"}>
        <ThemedIcon icon={<TrashIcon />} className="flex-shrink-0" />
      </IconButton>
      {isModalOpen && (
        <DeleteChatModal
          onClose={() => setIsModalOpen(false)}
          name={name}
          chatId={chatId}
        />
      )}
    </>
  );
}

export default DeleteChatButton;
