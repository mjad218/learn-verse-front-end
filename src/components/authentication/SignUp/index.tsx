"use client";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { getToken, signUp } from "@/services/users/login";
import { FormButton } from "@/components/authentication/_components";
import { formInputStyle } from "../definitions";

const SignUp = () => {
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
  const usernameChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      const value = e.target?.value ?? "";
      setUsername(value);
    }, []);

  const emailChangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const value = e.target?.value ?? "";
      setEmail(value);
    },
    [],
  );

  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      const value = e.target?.value ?? "";
      setPassword(value);
    }, []);

  //function to handle form submission
  const submitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = await getToken();
      if (!token) return;
      const requestOk = await signUp(username, password, email, token);
      if (requestOk) router.push("/login");
    } catch (error) {}
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/assets/AuthbackgroundTemp.jpg')] bg-contain">
      <form
        onSubmit={submitForm}
        className="mb-4
      flex w-[500px] flex-col justify-center rounded-xl bg-white px-8 pb-8 pt-6"
      >
        {/********************/}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={usernameChangeHandler}
            className={formInputStyle}
          />
        </div>
        {/********************/}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
            className={formInputStyle}
          />
        </div>
        {/********************/}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
            className={formInputStyle}
          />
        </div>
        {/********************/}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className={formInputStyle}
          />
        </div>
        <FormButton text={"Register"} isLoading={isLoading} />
      </form>
    </div>
  );
};

export default SignUp;
