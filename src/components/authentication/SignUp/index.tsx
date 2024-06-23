"use client";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/users/login";
import { FormButton } from "@/components/authentication/_components";
import { formInputStyle } from "../../../app/auth/styleDefinitions";
import { z } from "zod";
import { registerSchema } from "@/app/auth/definitions";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

type FormData = z.infer<typeof registerSchema>;

const SignUp = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) });

  //function to handle form submission
  const submitForm = async (data: FieldValues) => {
    const { username, email, password } = data;
    try {
      const requestOk = await signUp(username, password, email);
      toast.success("Signed up successfully", {
        id: "signup-success",
      });

      if (requestOk) router.push("/auth/login");
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="mb-4 flex h-full w-full flex-col justify-center rounded-xl bg-white px-4 pb-8 pt-6 lg:min-w-80"
    >
      {/********************/}
      <div className="mb-4">
        <label
          htmlFor="username"
          className="mb-2 block font-dmSerif text-sm font-bold text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className={formInputStyle}
          {...register("username")}
        />
        {errors.username && (
          <p className="text-xs font-semibold text-red-700">
            {errors.username.message}
          </p>
        )}
      </div>
      {/********************/}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2 block font-dmSerif text-sm font-bold text-gray-700"
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
      {/********************/}
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="mb-2 block font-dmSerif text-sm font-bold text-gray-700"
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
      <FormButton text={"Register"} />
    </form>
  );
};

export default SignUp;
