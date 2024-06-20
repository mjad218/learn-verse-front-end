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
import { useState } from "react";
import { Input } from "../ui/input";

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

  const [image, setImage] = useState<File | null | undefined>(null);
  const submitForm = async (data: FieldValues) => {
    console.log(data);
  };
  //   {
  //     "id": 3,
  //     "userName": "gadoz11updated",
  //     "password": "26508541updated",
  //     "email": "myMailupdated",
  //     "address": "myAddressupdated",
  //     "firstName": "mohamedupdated",
  //     "familyName": "gadupdated"
  // }
  return (
    <div className="flex flex-col gap-8">
      <span className="font-roboto text-2xl font-semibold">Account</span>
      <div className="mt-4 pb-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col gap-1 self-start">
            <Input
              type="file"
              onChange={(e) =>
                setImage(e.target?.files?.length ? e.target?.files[0] : null)
              }
            />
            <div className="flex flex-col text-sm text-gray-700/60">
              <span>No file selected</span>
              <span>Maximum image size is 1MB</span>
            </div>
          </div>

          <form
            className="flex w-full flex-col gap-4"
            onSubmit={() => handleSubmit(submitForm)}
          >
            <div className="flex w-full flex-col">
              <Label htmlFor="firstname" className={formInputLabelSettings}>
                First name
              </Label>
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
            <div className="flex flex-col items-center gap-2">
              <Label htmlFor="lastname" className={formInputLabelSettings}>
                Last name
              </Label>
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
            <div className="flex flex-col items-center gap-2">
              <Label htmlFor="username" className={`${formInputLabelSettings}`}>
                Username
              </Label>
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
            <div className="flex flex-col items-center justify-center gap-2">
              <Label htmlFor="email" className={formInputLabelSettings}>
                Email
              </Label>
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
            <Button
              type="submit"
              className={"self-center bg-accent text-white"}
              disabled={!isDirty}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPanel;
