import { Box, Grid, Flex } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import PaginationComponent from "./_results/PaginationComponent";

const SearchOptions = dynamic(() => import("./_components/SearchOptions"), {});
const ResultsMessage = dynamic(
  () => import("./_components/ResultsMessage"),
  {},
);

const SearchPage = () => {
  return (
    <Box mx={"4"} my={"6"} className="font-roboto mx-auto max-w-[95%]">
      <Grid columns={"5"} rows={"1"} className="text-center text-xl">
        <Flex style={{ gridColumn: "1/2" }} direction={"column"}>
          <SearchOptions />
        </Flex>
        <Box style={{ gridColumn: "2/6" }}>
          <ResultsMessage />
          <Grid columns={"3"} rows={"3"}></Grid>
        </Box>
      </Grid>
      <PaginationComponent/>
    </Box>
  );
};

export default SearchPage;
