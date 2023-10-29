'use client'
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().min(3, { message: 'This field cannot be empty' }).email('Email is invalid'),
  password: z.string().min(8, { message: 'Password must be longer than 8 characters' }),
})


type FormData = z.infer<typeof schema>;
import React from 'react'

const Login = () => {
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm<FormData>({ resolver: zodResolver(schema), });
  //TODO: Get cookies from server
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[url('/assets/AuthbackgroundTemp.jpg')] bg-contain">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg shadow-gray-400
      flex-col flex justify-center rounded-xl px-8 pt-6 pb-8 mb-4 w-[500px]">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
          {errors.email && <p className="text-red-700 font-semibold text-xs">{errors.email.message}</p>}
        </div>
        {/********************/}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
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
          {errors.password && <p className="text-red-700 font-semibold text-xs">{errors.password.message}</p>}
        </div>

        <button type="submit"
          className="bg-blue-600 text-gray-200 font-thin text-lg py-2 px-4 self-center
        rounded-2xl focus:outline-none focus:shadow-outline w-[120px] active:scale-95 transition-all ease-in-out delay-15">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login