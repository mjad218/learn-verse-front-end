import { Flex, Button, Text } from "@radix-ui/themes";

const AccountPanelProfile = () => {
  return (
    <Flex direction={"column"} gap="1" className="self-start">
      <Button className="w-max bg-[#3e63dd] hover:bg-[#3e63dd]">
        Choose File
      </Button>
      <Flex className="text-sm text-gray-700/60" direction={"column"}>
        <Text>No file selected</Text>
        <Text>Maximum image size is 1MB</Text>
      </Flex>
    </Flex>
  );
};

export default AccountPanelProfile;
