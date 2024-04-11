"use client";
import { Box, Grid, Flex, Text, Separator } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import React from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");
  return (
    <Box mx={"4"} my={"6"} className="font-roboto mx-auto max-w-[95%]">
      <Grid columns={"5"} rows={"1"} className="text-center text-xl">
        <Flex
          // @ts-ignore
          style={{ gridColumn: "1/2" }}
          direction={"column"}
          className="rounded-xl border border-gray-400/70"
        >
          <Text size={"6"} align={"center"} className="font-medium">
            Search Filters
          </Text>
          <Separator size={"4"} orientation="horizontal" color="gray" />
          <Flex direction={"column"} gap={"4"}>
            <Box>Rating</Box>
            <Box>Price</Box>
            <Box>Level</Box>
            <Box>Language</Box>
          </Flex>
        </Flex>
        {/* @ts-ignore */}
        <Box style={{ gridColumn: "2/6" }}>
          <Text className="text-start text-4xl font-semibold">
            Showing results for {searchQuery || "..."}
          </Text>
          <Grid columns={"4"} rows={"4"}></Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default SearchPage;
