"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import SettingsFormButton from "../authentication/_components/SettingFormButton";
import { AccountDetailsSchema } from "@/components/side-panel/definitions";
import { useState } from "react";
import { Input } from "../ui/input";
import { toBase64 } from "@/lib/utils";
import { API_URL } from "@/constants/api";
import { useAccessToken, useCurrentUser } from "../current-user/context";
import { userDetailsType } from "@/types/user.type";

type AccountDetailsType = z.infer<typeof AccountDetailsSchema>;

type Props = {
  userDetails: userDetailsType;
};

const AccountPanel = ({ userDetails }: Props) => {
  const { userName, email, firstName, familyName } = userDetails;
  const {
    register,
    formState: { errors, isDirty },
    watch,
  } = useForm<AccountDetailsType>({
    resolver: zodResolver(AccountDetailsSchema),
    defaultValues: {
      userName: `${userName ?? ""}`,
      email: `${email ?? ""}`,
      firstName: `${firstName ?? ""}`,
      familyName: `${familyName ?? ""}`,
    },
  });

  const [image, setImage] = useState<File | null | undefined>(null);
  const data = watch();
  const { user } = useCurrentUser();
  const { token } = useAccessToken();
  const submitForm = async () => {
    console.log(data);
    let img: string | ArrayBuffer | null = "";
    try {
      if (image) img = await toBase64(image);
    } catch (error) {}
    console.log({
      img,
    });
    try {
      const res = await fetch(`${API_URL}/user`, {
        method: "PUT",
        body: JSON.stringify({
          image: img,
          ...data,
          id: user?.id,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const checkResponse = await res.json();
      console.log(checkResponse);
    } catch (error) {}
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="font-roboto text-2xl font-semibold">Account</span>
      <form
        className="flex w-full flex-col items-center gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
        }}
      >
        <div className="flex flex-col gap-1 lg:min-w-80">
          <Input
            type="file"
            className="file:cursor-pointer file:rounded-md file:bg-gray-800 file:text-white hover:cursor-pointer"
            onChange={(e) =>
              setImage(e.target?.files?.length ? e.target?.files[0] : null)
            }
          />
          <div className="flex flex-col text-sm text-gray-700/60">
            <span className="font-roboto">Maximum image size is 64x64</span>
          </div>
        </div>

        <div className="flex h-full min-w-72 max-w-md flex-col justify-center gap-6 pb-4 lg:min-w-80">
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-xs font-semibold text-red-700">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="lastname">Last name</Label>
            <Input
              type="text"
              id="lastname"
              placeholder="Last name"
              {...register("familyName")}
            />
            {errors.familyName && (
              <p className="text-xs font-semibold text-red-700">
                {errors.familyName.message}
              </p>
            )}
          </div>
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              {...register("userName")}
            />
            {errors.userName && (
              <p className="text-xs font-semibold text-red-700">
                {errors.userName.message}
              </p>
            )}
          </div>
          <div className="grid w-full max-w-xs items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs font-semibold text-red-700">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mx-auto">
            <SettingsFormButton
              type="submit"
              className={
                "w-full self-center text-black disabled:border-gray-500"
              }
              disabled={!isDirty}
            >
              Submit
            </SettingsFormButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountPanel;
