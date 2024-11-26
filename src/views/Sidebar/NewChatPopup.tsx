import { ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import StyledContainer from "@/components/StyledContainer";
import { Button, TextField } from "@mui/material";
import SecondaryButton from "@/components/SecondaryButton";
import useKeyboard from "@/hooks/useKeyboard";
import useClickOutside from "@/hooks/useClickOutside";
import { useAddChatMutation, useEditChatMutation } from "@/store/api/chatsApi";

type DislikeFeedbackPopupProps = {
  onClose: () => void;
  defaultValue?: string;
  chatId?: number;
  className?: string;
};
function NewChatPopup({
  onClose,
  defaultValue,
  chatId,
  className,
}: DislikeFeedbackPopupProps): ReactElement {
  const { register, handleSubmit, reset } = useForm({
    mode: "onSubmit",
  });
  const [addChat] = useAddChatMutation();
  const [editChat] = useEditChatMutation();
  const [name, setName] = useState(defaultValue);

  const submitForm = async (): Promise<void> => {
    if (name) {
      try {
        if (chatId) {
          await editChat({ chatId, name }).unwrap();
        } else {
          await addChat({ name }).unwrap();
        }
        onClose();
      } catch (error) {
        console.error("Failed to add chat:", error);
      }
    }
  };

  const handleClose = (): void => {
    reset();
    onClose();
  };
  const ref = useClickOutside(() => {
    handleClose();
  });
  useKeyboard(handleClose, "Escape");
  useKeyboard(submitForm, "Enter");

  return (
    <div ref={ref}>
      <form
        onSubmit={handleSubmit(submitForm)}
        className={`${className}  transform -translate-x-1/2 z-10 min-w-[288px]`}
      >
        <StyledContainer className="flex flex-col gap-3 p-3 rounded-xl border border-gray-200 shadow-drop">
          <legend>
            <h5 className="font-normal">Enter a name for your new chat</h5>
          </legend>
          <TextField
            autoFocus
            value={name}
            variant="filled"
            label="Chat name"
            className="w-full"
            slotProps={{
              input: {
                disableUnderline: true,
              },
            }}
            {...register("name", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex flex-row w-full gap-3">
            <Button type="button" className="flex-1" onClick={handleClose}>
              <h5 className="font-normal">cancel</h5>
            </Button>
            <SecondaryButton className="flex-1" type="submit">
              <h5 className="font-normal">Save</h5>
            </SecondaryButton>
          </div>
        </StyledContainer>
      </form>
    </div>
  );
}
export default NewChatPopup;
