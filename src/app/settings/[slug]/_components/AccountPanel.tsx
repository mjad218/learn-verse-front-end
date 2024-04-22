"use client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { AccountDetailsSchema, settingsButtonStyle } from "./definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Flex, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import {
  formInputStyle,
  formInputLabelSettings,
} from "@/constants/styleDefinitions";
import { Label } from "@/components/ui/label";

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
    <Box className="mx-auto w-[85%] rounded-2xl bg-neutral-300/80 p-4">
      <Text className="text-2xl font-semibold">Account</Text>
      <Box className="mx-auto w-[75%] " pb="4" mt="4">
        <Flex direction={"column"} align={"center"} gap="2">
          <Flex direction={"column"} gap="1" className="self-start">
            <Button className="w-max bg-[#3e63dd] hover:bg-[#3e63dd]">
              Choose File
            </Button>
            <Flex className="text-sm text-gray-700/60" direction={"column"}>
              <Text>No file selected</Text>
              <Text>Maximum image size is 1MB</Text>
            </Flex>
          </Flex>

          <form className="w-full" onSubmit={handleSubmit(submitForm)}>
            <Flex direction={"column"} gap="4" className="mx-auto w-[80%]">
              <Flex align={"center"} gap="2">
                <Label htmlFor="firstname" className={formInputLabelSettings}>
                  First name
                </Label>
                <Flex direction={"column"} className="w-full">
                  <input
                    type="text"
                    id="firstname"
                    placeholder="First Name"
                    className={`${formInputStyle}`}
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <p className="text-xs font-semibold text-red-700">
                      {errors.firstname.message}
                    </p>
                  )}
                </Flex>
              </Flex>
              <Flex align={"center"} gap="2">
                <Label htmlFor="lastname" className={formInputLabelSettings}>
                  Last name
                </Label>
                <Flex direction={"column"} className="w-full">
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Last name"
                    className={`${formInputStyle}`}
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <p className="text-xs font-semibold text-red-700">
                      {errors.lastname.message}
                    </p>
                  )}
                </Flex>
              </Flex>
              <Flex align={"center"} gap="2">
                <Label
                  htmlFor="username"
                  className={`${formInputLabelSettings}`}
                >
                  Username
                </Label>
                <Flex direction={"column"} className="w-full">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className={`${formInputStyle}`}
                    {...register("username")}
                  />
                  {errors.username && (
                    <p className="text-xs font-semibold text-red-700">
                      {errors.username.message}
                    </p>
                  )}
                </Flex>
              </Flex>
              <Flex align={"center"} gap="2" justify={"center"}>
                <Label htmlFor="email" className={formInputLabelSettings}>
                  Email
                </Label>
                <Flex direction={"column"} className="w-full">
                  <input
                    type="text"
                    id="email"
                    placeholder="Email Address"
                    className={`${formInputStyle}`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs font-semibold text-red-700">
                      {errors.email.message}
                    </p>
                  )}
                </Flex>
              </Flex>
              <Button
                type="submit"
                className={`${settingsButtonStyle} self-center text-black disabled:border-gray-500`}
                disabled={isDirty ? false : true}
              >
                Submit
              </Button>
            </Flex>
          </form>
        </Flex>
        <Flex direction={"column"} align={"center"} gap="4" pt="4">
          <Button className={`${settingsButtonStyle} text-red-500`}>
            Delete Account
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default AccountPanel;
