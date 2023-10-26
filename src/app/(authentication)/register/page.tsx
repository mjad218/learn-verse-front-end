'use client'
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
//Zod definition schema
const schema = z.object({
  name: z.string().min(3, { message: "Username must be greater than 3 characters" }),
  email: z.string().min(3, { message: 'This field cannot be empty' }).email('Email is invalid'),
  password: z.string().min(8, { message: 'Password must be longer than 8 characters' }),
  confirmPassword: z.string().min(8, { message: 'Password must be longer than 8 characters' })
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords don't match",
});


type FormData = z.infer<typeof schema>;

const Register = () => {
  //Form handlers from react hook from
  const { register, handleSubmit, formState: { errors, isValid }, } = useForm<FormData>({ resolver: zodResolver(schema), });
  //TODO: Send to server
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[url('/assets/AuthbackgroundTemp.jpg')] bg-contain">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg shadow-gray-400 rounded-xl px-8 pt-6 pb-8 mb-4 w-[500px]">
        {/********************/}
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
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
          {errors.name && <p className="text-red-700 font-semibold text-xs">{errors.name.message}</p>}
        </div>
        {/********************/}
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
        {/********************/}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
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
          {errors.confirmPassword && <p className="text-red-700 font-semibold text-xs">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit"
          className="bg-blue-600 text-gray-200 font-thin text-lg py-2 px-4 mx-auto
        rounded-2xl focus:outline-none focus:shadow-outline w-[120px] active:scale-95 transition-all ease-in-out delay-15">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register