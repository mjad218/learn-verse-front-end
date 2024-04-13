"use client";
import { useRouter } from "next/navigation";
import { Flex, Button, Separator, Text } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Rating from "./Rating";
import LanguageSelection from "./LanguageSelection";
import LevelSelection from "./LevelSelection";

const SearchOptions = () => {
  const router = useRouter();
  // const [price, setPrice] = useQueryState("price");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const resetURL = () => {
    router.push(`/search?q=${searchQuery}&p=1`);
    router.refresh();
  };

  return (
    <Flex
      direction={"column"}
      gap={"4"}
      className="rounded-xl border border-gray-400/70"
    >
      <Text size={"6"} align={"center"} className="pt-2 font-medium">
        Search Filters
      </Text>
      <Separator size={"4"} orientation="horizontal" color="gray" />
      <Accordion type="single" collapsible>
        <Rating />
        <AccordionItem value="level">
          <AccordionTrigger className="justify-center gap-4">
            Level
          </AccordionTrigger>
          <AccordionContent>
            <LevelSelection />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="justify-center gap-4">
            Price
          </AccordionTrigger>
          <AccordionContent>dummy text</AccordionContent>
        </AccordionItem>
        <AccordionItem value="language">
          <AccordionTrigger className="justify-center gap-4">
            Primary Language
          </AccordionTrigger>
          <AccordionContent>
            <LanguageSelection />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        className="mb-2 self-center p-2 py-5 text-2xl font-normal"
        onClick={resetURL}
      >
        Reset
      </Button>
    </Flex>
  );
};

export default SearchOptions;
