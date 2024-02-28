"use client";
import { FormButton } from "../_components";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import { formInputStyle } from "../definitions";
import { loginByUsernameAndPassword } from "@/services/users/login";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const usernameChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      const value = e.target?.value ?? "";
      setUsername(value);
    }, []);

  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      const value = e.target?.value ?? "";
      setPassword(value);
    }, []);

  const submitForm: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
      const r = await loginByUsernameAndPassword(username, password);
      setResult(JSON.stringify({ r }));
      console.log({ r });
    },
    [password, username],
  );

  return (
    <div className="flex justify-center items-center h-screen w-full bg-[url('/assets/AuthbackgroundTemp.jpg')] bg-contain">
      <form
        onSubmit={submitForm}
        className="bg-white 
      flex-col flex justify-center rounded-xl px-8 pt-6 pb-8 mb-4 w-[500px]"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className={formInputStyle}
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className={formInputStyle}
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <FormButton text={"Login"} isLoading={isLoading} />

        {result}
      </form>
    </div>
  );
};

export default Login;
