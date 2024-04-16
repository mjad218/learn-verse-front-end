import DropdownAvatar from "@/components/shared/navbar/auth-links/DropDownAvatar";
import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";

const Settings = () => {
  const options = [
    { name: "Purchased Courses", key: "purchased" },
    { name: "Manage Courses", key: "manage" },
    { name: "Account", key: "account" },
  ];
  return (
    <Box mx={"4"} mt="4">
      <Grid columns={"8"}>
        <Grid gapY={"6"} style={{ gridColumn: "1/3" }}>
          <Button className="w-32 justify-self-center disabled:text-gray-500">
            Save Changes
          </Button>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap="4"
            pb="4"
            className="rounded-xl bg-neutral-200/90"
          >
            <Grid columns={"5"} pt={"4"}>
              <Box
                className="justify-self-center"
                style={{ gridColumn: "1/2" }}
              >
                <DropdownAvatar />
              </Box>
              <Grid
                className="justify-self-center"
                style={{ gridColumn: "2/6" }}
                rows={"2"}
              >
                <Text
                  className="justify-self-center"
                  style={{ gridRow: "1/2" }}
                >
                  {"<Username>"}
                </Text>
                <Text
                  className="justify-self-center"
                  style={{ gridRow: "2/3" }}
                >
                  {"View your profile"}
                </Text>
              </Grid>
            </Grid>
            {options.map((option) => (
              <Box
                key={option.key}
                className="w-[90%] rounded-2xl py-4 text-center hover:cursor-pointer hover:bg-[#3e63dd] hover:text-white"
              >
                <Text className="text-lg font-semibold">{option.name}</Text>
              </Box>
            ))}
          </Flex>
        </Grid>
        <Flex style={{ gridColumn: "3/8" }}>test</Flex>
      </Grid>
    </Box>
  );
};

export default Settings;
