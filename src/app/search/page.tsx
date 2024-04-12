import { Box, Grid, Flex, Text, Separator } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const SearchOptions = dynamic(() => import("./_components/SearchOptions"), {});
const ResultsMessage = dynamic(
  () => import("./_components/ResultsMessage"),
  {},
);

const SearchPage = () => {
  return (
    <Box mx={"4"} my={"6"} className="font-roboto mx-auto max-w-[95%]">
      <Grid columns={"5"} rows={"1"} className="text-center text-xl">
        <Flex
          // @ts-ignore
          style={{ gridColumn: "1/2" }}
          direction={"column"}
          className="rounded-xl border border-gray-400/70"
        >
          <Text size={"6"} align={"center"} className="py-2 font-medium">
            Search Filters
          </Text>
          <Separator size={"4"} orientation="horizontal" color="gray" />
          <SearchOptions />
        </Flex>
        <Box style={{ gridColumn: "2/6" }}>
          <ResultsMessage />
          <Grid
            columns={{ md: "3", lg: "4" }}
            rows={{ md: "3", lg: "4" }}
          ></Grid>
        </Box>
      </Grid>
      {/* <Pagination/> */}
    </Box>
  );
};

export default SearchPage;
