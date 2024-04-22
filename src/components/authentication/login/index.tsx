"use client";
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";
import {
  findCurentAuthenticatedUser,
  loginByUsernameAndPassword,
} from "@/services/users/login";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/components/current-user/context";
import { FormButton } from "@/components/authentication/_components";
import { formInputStyle } from "../../../constants/styleDefinitions";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useCurrentUser();
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

  //TODO: Get cookies from server

  const submitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = await loginByUsernameAndPassword(username, password);
      // ? TO DO
      // get token and save it to localStorage
      if (!token) return;
      const user = await findCurentAuthenticatedUser(token);
      // after getting the token
      // get the user
      await fetch("/api/token", {
        method: "POST",
        body: JSON.stringify({
          token,
        }),
      });
      setUser(user);
      router.push("/"); // Redirect when success login
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
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={username}
            onChange={usernameChangeHandler}
            className={formInputStyle}
          />
        </div>
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
        <FormButton text={"Login"} isLoading={isLoading} />
      </form>
    </div>
  );
};

export default LoginPage;
