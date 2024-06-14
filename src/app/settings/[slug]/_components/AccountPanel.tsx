"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { AccountDetailsSchema, settingsButtonStyle } from "./definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  formInputStyle,
  formInputLabelSettings,
} from "@/constants/styleDefinitions";
import { Label } from "@/components/ui/label";
import AccountPanelProfile from "./AccountPanelProfile";

type AccountDetailsData = z.infer<typeof AccountDetailsSchema>;

const AccountPanel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AccountDetailsData>({
    resolver: zodResolver(AccountDetailsSchema),
    defaultValues: { username: "", email: "", firstname: "", lastname: "" },
  });

  const submitForm = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-[85%] rounded-2xl bg-neutral-300/80 p-4">
      <span className="text-2xl font-semibold">Account</span>
      <div className="mx-auto mt-4 w-[75%] pb-4">
        <div className="flex flex-col items-center gap-2">
          <AccountPanelProfile />
          <form className="w-full" onSubmit={handleSubmit(submitForm)}>
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
                className={`${settingsButtonStyle} self-center text-black disabled:border-gray-500`}
                disabled={!isDirty}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center gap-4 pt-4">
          <Button className={`${settingsButtonStyle} text-red-500`}>
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPanel;
