import { Box, Grid } from "@radix-ui/themes";
import React from "react";
import SidePanel from "./_components/SidePanel";

export interface Option {
  key: string;
  name: string;
}

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  const options = [
    { name: "Account", key: "account" },
    { name: "Purchased Courses", key: "purchased" },
  ];

  return (
    <Box mx={"4"} mt="4" mb="4">
      <Grid columns={"8"}>
        <SidePanel options={options} />
        <Box style={{ gridColumn: "3/9" }}>{children}</Box>
      </Grid>
    </Box>
  );
};

export default SettingsLayout;
