"use client";
import { useState } from "react";
import {
  findCurentAuthenticatedUser,
  loginByUsernameAndPassword,
} from "@/services/users/login";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/components/current-user/context";
import { FormButton } from "@/components/authentication/_components";
import { formInputStyle } from "../../../app/auth/styleDefinitions";
import { loginSchema } from "@/app/auth/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginSchema) });

  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { setUser } = useCurrentUser();

  //TODO: Get cookies from server

  const submitForm = async (data: FieldValues) => {
    const { username, password } = data;
    setLoading(true);
    try {
      const token = await loginByUsernameAndPassword(username, password);
      // ? TO DO
      // get token and save it to localStorage
      if (!token) return;
      const user = await findCurentAuthenticatedUser(token);
      // after getting the token
      // get the user
      setUser(user);
      router.push("/"); // Redirect when success login
    } catch (error) {}
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="mb-4 flex h-full w-full flex-col justify-center rounded-xl bg-white px-4 pb-8 pt-6 lg:min-w-80"
    >
      <div className="mb-4">
        <label
          htmlFor="Username"
          className="mb-2 block font-dmSerif text-sm font-bold text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="Username"
          placeholder="Username"
          className={formInputStyle}
          {...register("username")}
        />
        {errors.username && (
          <p className="text-xs font-semibold text-red-700">
            {errors?.username?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block font-dmSerif text-sm font-bold text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className={formInputStyle}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-xs font-semibold text-red-700">
            {errors.password.message}
          </p>
        )}
      </div>
      <FormButton text={"Login"} isLoading={isLoading} />
    </form>
  );
};

export default LoginPage;
