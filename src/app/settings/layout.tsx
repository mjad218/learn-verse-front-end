import { Box, Grid, Flex } from "@radix-ui/themes";
import React from "react";
import SidePanel from "./_components/SidePanel";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const options = [
    { name: "Account", key: "account" },
    { name: "Purchased Courses", key: "purchased" },
    { name: "Manage Courses", key: "manage" },
  ];

  return (
    <Box mx={"4"} mt="4" mb="4">
      <Grid columns={"8"}>
        <SidePanel options={options} />
        <Flex style={{ gridColumn: "3/8" }}>{children}</Flex>
      </Grid>
    </Box>
  );
};

export default SettingsLayout;
