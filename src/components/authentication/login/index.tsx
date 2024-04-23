"use client";
import { useState } from "react";
import {
  findCurentAuthenticatedUser,
  loginByUsernameAndPassword,
} from "@/services/users/login";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/components/current-user/context";
import { FormButton } from "@/components/authentication/_components";
import { formInputStyle } from "../../../constants/styleDefinitions";
import { loginSchema } from "@/app/(authentication)/definitions";
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
    const { email, password } = data;
    setLoading(true);
    try {
      const token = await loginByUsernameAndPassword(email, password);
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
        onSubmit={handleSubmit(submitForm)}
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
            className={formInputStyle}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-semibold text-red-700">
              {errors.email.message}
            </p>
          )}
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
    </div>
  );
};

export default LoginPage;
