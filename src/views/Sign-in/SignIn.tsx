import { ReactElement } from "react";
import SignInGraphic from "@/views/Sign-in/SignInGraphic";
import SignInContainer from "@/views/Sign-in/SignInContainer";

function SignIn(): ReactElement {
  return (
    <section className="flex flex-row w-full">
      <SignInContainer />
      <SignInGraphic />
    </section>
  );
}
export default SignIn;
