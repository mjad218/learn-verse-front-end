"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../definitions";
import { FormButton } from "../_components";
import { useState } from "react";
import { formInputStyle } from "../definitions";

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginSchema) });
  //TODO: Get cookies from server

  const submitForm = async (data: FieldValues) => {
    setLoading(true);
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
            type="email"
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

export default Login;
