import { ReactElement } from "react";
import { useThemeContext } from "@/theme/ThemeContextProvider";
import SignInIcon from "@/assets/images/sign-in-icon.svg?react";

function SignInGraphic(): ReactElement {
  const { mode } = useThemeContext();

  return (
    <div
      className={`hidden sm:block ${
        mode === "light" ? "bg-light-gradient" : "bg-dark-gradient"
      } w-full flex items-center justify-center `}
    >
      <SignInIcon className="scale-50 md:scale-75 lg:scale-100 h-screen w-full " />
    </div>
  );
}

export default SignInGraphic;
