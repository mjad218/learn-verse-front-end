import { Box, Grid, Flex, Text, Separator } from "@radix-ui/themes";
import React from "react";

const SearchPage = () => {
  return (
    <Box mx={"4"} my={"6"} className="font-roboto mx-auto max-w-[95%]">
      <Grid columns={"5"} display={"grid"} className="text-center text-xl">
        <Flex
          gridColumn="1 / 3"
          direction={"column"}
          className="rounded-xl border border-gray-400/70"
        >
          <Text size={"6"} align={"center"} className="font-medium">
            Search Filter
          </Text>
          <Separator size={"4"} orientation="horizontal" color="gray" />
          <Flex direction={"column"} gap={"4"}>
            <Box>Rating</Box>
            <Box>Price</Box>
            <Box>Level</Box>
            <Box>Language</Box>
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
};

export default SearchPage;
