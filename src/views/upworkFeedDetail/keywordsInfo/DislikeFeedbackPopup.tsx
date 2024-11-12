import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import StyledContainer from "@/components/StyledContainer";
import SecondaryButton from "@/components/SecondaryButton";

type DislikeFeedbackPopupProps = {
  onClose: () => void;
  className: string;
};
function DislikeFeedbackPopup({
  onClose,
  className,
}: DislikeFeedbackPopupProps): ReactElement {
  const { register, handleSubmit, reset, getValues } = useForm({
    mode: "onSubmit",
  });
  const submitForm = async (): Promise<void> => {
    const feedBackData = {
      message: getValues().message,
    };
    onClose();
  };
  const handleClose = (): void => {
    reset();
    onClose();
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={`${className}  w-[288px] transform -translate-x-1/2 `}
    >
      <StyledContainer className="flex flex-col gap-3 p-3 rounded-xl border border-gray-200 shadow-drop">
        <legend>
          <h5 className="font-normal">
            Please let us know why you disliked keywords section
          </h5>
        </legend>
        <TextField
          variant="filled"
          label="Comment"
          className="w-full"
          multiline
          rows={2}
          slotProps={{
            input: {
              disableUnderline: true,
            },
          }}
          {...register("comment", {
            required: {
              value: true,
              message: "This field is required",
            },
          })}
        />

        <div className="flex flex-row w-full gap-3">
          <Button type="button" className="flex-1" onClick={handleClose}>
            <h5 className="font-normal">cancel</h5>
          </Button>
          <SecondaryButton className="flex-1">
            <h5 className="font-normal">Save</h5>
          </SecondaryButton>
        </div>
      </StyledContainer>
    </form>
  );
}
export default DislikeFeedbackPopup;
