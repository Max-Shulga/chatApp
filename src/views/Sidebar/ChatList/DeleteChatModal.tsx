import { ReactElement } from "react";
import Portal from "@/components/Portal";
import StyledContainer from "@/components/StyledContainer";
import useKeyboard from "@/hooks/useKeyboard";
import useClickOutside from "@/hooks/useClickOutside";
import ThemedIcon from "@/components/ThemedIcon";
import CloseIcon from "@/assets/icons/close.svg?react";
import { Button } from "@mui/material";
import SecondaryButton from "@/components/SecondaryButton";
import { useDeleteChatMutation } from "@/store/chatsApi";

type DeleteChatModalProps = {
  chatId: number;
  onClose: () => void;
  name: string;
};
function DeleteChatModal({
  chatId,
  onClose,
  name,
}: DeleteChatModalProps): ReactElement {
  const [deleteChat] = useDeleteChatMutation();
  useKeyboard(onClose, "Escape");
  const ref = useClickOutside(() => {
    onClose();
  });
  const handleDelete = async (): Promise<void> => {
    await deleteChat({ chatId: +chatId });
    onClose();
  };
  return (
    <Portal>
      <div
        className="bg-modalBg fixed bottom-0 lg:top-0 left-0 z-10 w-full
                min-h-full flex justify-center items-end  lg:items-center"
      >
        <div ref={ref}>
          <StyledContainer
            className="shadow-lg max-w-[570px] opacity-100 max-h-full w-full
             rounded-2xl p-6 justify-center items-center"
          >
            <div className="w-full h-full flex flex-col gap-7">
              <div className="flex flex-row w-full justify-between ">
                <h3>Delete chat</h3>
                <button onClick={onClose}>
                  <ThemedIcon icon={<CloseIcon />} />
                </button>
              </div>
              <p>Are you sure you want to delete chat “{name}”?</p>
              <div className="flex flex-row gap-3 w-full items-end justify-end">
                <Button
                  type="button"
                  className="w-fit"
                  onClick={onClose}
                  sx={{
                    padding: "10px",
                  }}
                >
                  <p className="font-medium">No, Keep it</p>
                </Button>
                <SecondaryButton
                  onClick={handleDelete}
                  className="w-fit"
                  sx={{
                    padding: "12px",
                  }}
                >
                  <p className="font-medium">Yes, Delete it</p>
                </SecondaryButton>
              </div>
            </div>
          </StyledContainer>
        </div>
      </div>
    </Portal>
  );
}

export default DeleteChatModal;
