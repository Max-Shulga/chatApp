import {ReactElement, useState} from "react";
import {Field, Form, Formik} from "formik";
import {Button, Input} from "@mui/material";
import {ILoginRequestDTO} from "@/common/interfaces/dto/auth/iadmin-login-request.interface";
import * as Yup from "yup";
import RouteNames from "@/routes/routes-names";
import {useNavigate} from "react-router";
import EyeIcon from "@/assets/icons/eye.svg?react";
import EyeSlashIcon from "@/assets/icons/eye-slash.svg?react";
import ThemedIcon from "@/components/ThemedIcon";
import {authStore} from "@/store/auth.store";
import {getAuthenticated} from "@/service/auth.service";
import {ILoginResponseDTO} from "@/common/interfaces/dto/auth/ilogin-response.interfaces";

type SignInFormProps = {
  setErrorText: (value: string) => void;
};
function SignInForm({ setErrorText }: SignInFormProps): ReactElement {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const initialValues: ILoginRequestDTO = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: ILoginRequestDTO): Promise<void> => {
    try {
      getAuthenticated(values).subscribe({
        next:(result)=>{
          if (result?.success){
              const token = result.data as ILoginResponseDTO;
              authStore.setAuth(token)

            navigate(RouteNames.HOME);
          }else {
            setErrorText("Invalid login or password");
          }
        },
        error: () => {
          setErrorText("Invalid login or password");
        },
      })
    } catch {
      setErrorText("Unexpected error");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="flex flex-col w-full gap-4">
          <Field
            type="text"
            as={Input}
            className="w-full px-3 py-2"
            placeholder="Email"
            name="email"
            autoComplete="email"
            disableUnderline
          />
          <div className="relative h-fit">
            <Field
              type={isPasswordVisible ? "text" : "password"}
              as={Input}
              name="password"
              className="w-full px-3 py-2"
              placeholder="Password"
              autoComplete="current-password"
              disableUnderline
            />
            <button
              type="button"
              className="absolute right-5.5 transform -translate-y-1/2"
              style={{ top: "calc(50% + 2px)" }}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <ThemedIcon stroke icon={<EyeSlashIcon />} />
              ) : (
                <ThemedIcon stroke icon={<EyeIcon />} />
              )}
            </button>
          </div>
          <Button type="submit" className="!rounded-2 !py-3">
            <p className="font-medium">Log in</p>
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default SignInForm;
