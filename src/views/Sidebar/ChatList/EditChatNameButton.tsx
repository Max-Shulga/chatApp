import { ReactElement, useState } from "react";
import NewChatPopup from "@/views/Sidebar/NewChatPopup";
import { IconButton } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import KebabIcon from "@/assets/icons/kebab.svg?react";

type EditChatNameButtonProps = {
  chatId: number;
  name: string;
};

function EditChatNameButton({
  chatId,
  name,
}: EditChatNameButtonProps): ReactElement {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleClick = (): void => {
    setIsPopupVisible(true);
  };

  return (
    <>
      <IconButton onClick={handleClick} className={"w-6 h-6"}>
        <ThemedIcon icon={<KebabIcon />} className="flex-shrink-0" />
      </IconButton>
      {isPopupVisible && (
        <NewChatPopup
          onClose={() => setIsPopupVisible(false)}
          className="absolute top-0 -right-44"
          defaultValue={name}
          chatId={chatId}
        />
      )}
    </>
  );
}
export default EditChatNameButton;
