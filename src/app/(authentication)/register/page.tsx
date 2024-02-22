"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../definitions";
import { useState } from "react";
import { Button } from "@radix-ui/themes";
import { FormButton } from "../_components";

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
  }


  return (
    <div className="flex justify-center items-center h-screen w-full bg-[url('/assets/AuthbackgroundTemp.jpg')] bg-contain">
      <form onSubmit={handleSubmit(submitForm)} className="bg-white
      flex-col flex justify-center rounded-xl px-8 pt-6 pb-8 mb-4 w-[500px]">

        {/********************/}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="shadow appearance-none border rounded-xl focus:border-blue-500 border-gray-400
             w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-700 font-semibold text-xs">{errors.name.message}</p>
          )}
        </div>
        {/********************/}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="shadow appearance-none border rounded-xl focus:border-blue-500 border-gray-400
             w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-700 font-semibold text-xs">
              {errors.email.message}
            </p>
          )}
        </div>
        {/********************/}
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
            className="shadow appearance-none border rounded-xl focus:border-blue-500 border-gray-400
             w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-700 font-semibold text-xs">
              {errors.password.message}
            </p>
          )}
        </div>
        {/********************/}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="shadow appearance-none border rounded-xl focus:border-blue-500 border-gray-400
             w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-700 font-semibold text-xs">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <FormButton text={'Register'} isLoading={isLoading} />
      </form>
    </div>
  );
};

export default Register;
