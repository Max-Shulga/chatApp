import { ReactElement } from "react";
import LoginIcon from "@/assets/icons/loginIcon.svg?react";

function SignInHeader(): ReactElement {
  return (
    <>
      <h3 className="flex flex-row items-center gap-3">
        <span>
          <LoginIcon />
        </span>
        Sales Assistant
      </h3>
      <h2 className="mt-6">Login</h2>
    </>
  );
}

export default SignInHeader;
