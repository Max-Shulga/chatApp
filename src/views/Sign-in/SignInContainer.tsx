import { ReactElement, useState } from "react";
import { Divider } from "@mui/material";
import SignInHeader from "@/views/Sign-in/SignInHeader";
import Container from "@/components/Container";
import MicrosoftAuth from "@/views/Sign-in/MicrosoftAuth";
import ChatStatusItem from "@/components/ChatStatusItem";
import SignInForm from "@/views/Sign-in/SignInForm";

function SignInContainer(): ReactElement {
  const [isMicrosoftSignIn, setIsMicrosoftSignIn] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleMicrosoftButtonOnClick = (): void => {
    setErrorText("");
    setIsMicrosoftSignIn(true);
  };
  return (
    <section className="w-full sm:max-w-[440px] sm:w-[440px] px-15 pt-24">
      <Container>
        <div className="flex flex-col gap-4 items-center">
          <SignInHeader />
          <div className="!mt-6 flex flex-col gap-4">
            {(isMicrosoftSignIn || errorText) && (
              <ChatStatusItem variant="error" text={errorText} />
            )}
            <MicrosoftAuth
              isMicrosoftSignIn={isMicrosoftSignIn}
              onClick={handleMicrosoftButtonOnClick}
            />
          </div>

          {!isMicrosoftSignIn && (
            <>
              <Divider flexItem className="py-2 font-medium">
                or
              </Divider>
              <SignInForm setErrorText={setErrorText} />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

export default SignInContainer;
