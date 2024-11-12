import { ReactElement, useState } from "react";
import { Button } from "@mui/material";
import ThemedIcon from "@/components/ThemedIcon";
import PlusIcon from "@/assets/icons/plus.svg?react";
import NewChatPopup from "@/views/Sidebar/NewChatPopup";

function NewChatButton(): ReactElement {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="py-3 px-4 relative">
      <Button
        className="w-full flex flex-row gap-2 items-center"
        onClick={() => setIsPopupVisible(true)}
      >
        <ThemedIcon icon={<PlusIcon />} />
        <p className="font-medium">New chat</p>
      </Button>
      {isPopupVisible && (
        <NewChatPopup
          onClose={() => setIsPopupVisible(false)}
          className="absolute top-14 -right-40"
        />
      )}
    </div>
  );
}

export default NewChatButton;
