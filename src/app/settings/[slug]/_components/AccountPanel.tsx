"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { AccountDetailsSchema } from "./definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import AccountPanelProfile from "./AccountPanelProfile";
import {
  formInputLabelSettings,
  formInputStyle,
} from "@/app/auth/styleDefinitions";
import SettingsFormButton from "./SettingsFormButton";

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
          <AccountPanelProfile />
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
              <SettingsFormButton
                type="submit"
                className={"self-center text-black disabled:border-gray-500"}
                disabled={!isDirty}
              >
                Submit
              </SettingsFormButton>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center gap-4 pt-4">
          <SettingsFormButton className={"text-red-500"}>
            Delete Account
          </SettingsFormButton>
        </div>
      </div>
    </>
  );
};

export default AccountPanel;
