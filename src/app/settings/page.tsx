"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import {
  formInputLabelSettings,
  formInputStyle,
} from "@/app/auth/styleDefinitions";
import { Button } from "@/components/ui/button";
import { AccountDetailsSchema } from "@/components/side-panel/definitions";

type AccountDetailsType = z.infer<typeof AccountDetailsSchema>;

const AccountPanel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AccountDetailsType>({
    resolver: zodResolver(AccountDetailsSchema),
    defaultValues: { username: "", email: "", firstname: "", lastname: "" },
  });

  const submitForm = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <span className="font-roboto text-2xl font-semibold">Account</span>
      <div className="mx-auto mt-4 w-[75%] pb-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col gap-1 self-start">
            <Button className="w-max bg-accent hover:bg-accent">
              Choose File
            </Button>
            <div className="flex flex-col text-sm text-gray-700/60">
              <span>No file selected</span>
              <span>Maximum image size is 1MB</span>
            </div>
          </div>
          <form className="w-full" onSubmit={() => handleSubmit(submitForm)}>
            <div className="mx-auto flex w-[80%] flex-col gap-4">
              <div className="flex gap-2">
                <Label htmlFor="firstname" className={formInputLabelSettings}>
                  First name
                </Label>
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    className={`${formInputStyle}`}
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <span className="text-xs font-semibold text-red-700">
                      {errors.firstname.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Label htmlFor="lastname" className={formInputLabelSettings}>
                  Last name
                </Label>
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Last name"
                    className={`${formInputStyle}`}
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <span className="text-xs font-semibold text-red-700">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="username"
                  className={`${formInputLabelSettings}`}
                >
                  Username
                </Label>
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className={`${formInputStyle}`}
                    {...register("username")}
                  />
                  {errors.username && (
                    <span className="text-xs font-semibold text-red-700">
                      {errors.username.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Label htmlFor="email" className={formInputLabelSettings}>
                  Email
                </Label>
                <div className="flex w-full flex-col">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email Address"
                    className={`${formInputStyle}`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-xs font-semibold text-red-700">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                className={"self-center text-black disabled:border-gray-500"}
                disabled={!isDirty}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center gap-4 pt-4">
          <Button className={"text-red-500"}>Delete Account</Button>
        </div>
      </div>
    </>
  );
};

export default AccountPanel;
