"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../definitions";
import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { FormButton } from "../_components";
import { formInputStyle } from "../definitions";

//Zod definition schema

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  //function to handle form submission
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
            className={formInputStyle}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs font-semibold text-red-700">
              {errors.name.message}
            </p>
          )}
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
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-xs font-semibold text-red-700">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <FormButton text={"Register"} isLoading={isLoading} />
      </form>
    </div>
  );
};

export default Register;
