import { Box, Flex, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { AccountDetailsSchema } from "./definitions";
import {
  formInputStyle,
  formInputLabelSettings,
} from "@/constants/styleDefinitions";

import { Label } from "@/components/ui/label";

const AccountPanel = () => {
  return (
    <Box className="mx-auto w-[85%] rounded-2xl bg-neutral-300/80 p-4">
      <Text className="text-2xl font-semibold">Account</Text>
      <Box className="mx-auto w-[75%] " pb="4" mt="4">
        <Flex direction={"column"} align={"center"} gap="2">
          <Flex direction={"column"} gap="1" className="self-start">
            <Button className="w-max bg-[#3e63dd] hover:bg-[#3e63dd]">
              Choose File
            </Button>
            <Flex className="text-sm text-black/60" direction={"column"}>
              <Text>No file selected</Text>
              <Text>Maximum image size is 1MB</Text>
            </Flex>
          </Flex>

          <form className="w-full">
            <Flex direction={"column"} gap="4" className="mx-auto w-[80%]">
              <Flex align={"center"} gap="2">
                <Label htmlFor="firstname" className={formInputLabelSettings}>
                  First name
                </Label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Firstname"
                  className={formInputStyle}
                />
              </Flex>
              <Flex align={"center"} gap="2">
                <Label htmlFor="lastname" className={formInputLabelSettings}>
                  Last name
                </Label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Lastname"
                  className={formInputStyle}
                />
              </Flex>
              <Flex align={"center"} gap="2">
                <Label htmlFor="username" className={formInputLabelSettings}>
                  Username
                </Label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className={formInputStyle}
                />
              </Flex>
              <Flex align={"center"} gap="2">
                <Label htmlFor="email" className={formInputLabelSettings}>
                  Email
                </Label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className={formInputStyle}
                />
              </Flex>
            </Flex>
          </form>
        </Flex>
        <Flex direction={"column"} align={"center"} gap="4" pt="4">
          <Button className="w-36 rounded-3xl border-2 border-black bg-white text-black  hover:bg-white">
            Log out
          </Button>
          <Button className="w-36 rounded-3xl border-2 border-black bg-white text-red-500  hover:bg-white">
            Delete Account
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default AccountPanel;
