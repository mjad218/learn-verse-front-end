"use client";
import { Grid, Flex, Text, Box } from "@radix-ui/themes";
import DropdownAvatar from "@/components/shared/navbar/auth-links/DropDownAvatar";
import SidePanelButton from "./SidePanelButton";
import { useParams } from "next/navigation";
import { Option } from "../layout";

interface Props {
  options: Option[];
}

const SidePanel = ({ options }: Props) => {
  const { slug } = useParams();
  return (
    <Grid
      gapY={"6"}
      className="w-full place-self-start"
      style={{ gridColumn: "1/3" }}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap="4"
        pb="4"
        className="rounded-xl bg-neutral-300/80"
      >
        <Grid columns={"5"} pt={"4"}>
          <Box className="justify-self-center" style={{ gridColumn: "1/2" }}>
            <DropdownAvatar />
          </Box>
          <Grid
            className="justify-self-center"
            style={{ gridColumn: "2/6" }}
            rows={"2"}
          >
            <Text className="justify-self-center" style={{ gridRow: "1/2" }}>
              {"<Username>"}
            </Text>
            <Text className="justify-self-center" style={{ gridRow: "2/3" }}>
              {"View your profile"}
            </Text>
          </Grid>
        </Grid>
        {options.map((option) => (
          <SidePanelButton option={option} key={option.key} slug={slug} />
        ))}
      </Flex>
    </Grid>
  );
};

export default SidePanel;
