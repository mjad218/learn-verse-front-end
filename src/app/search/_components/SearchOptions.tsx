"use client";
import { useRouter } from "next/navigation";
import { Flex, Button } from "@radix-ui/themes";
import { useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Rating from "./Rating";
import LanguageSelection from "./LanguageSelection";

const SearchOptions = () => {
  const router = useRouter();
  // const [level, setLevel] = useQueryState("level");
  // const [price, setPrice] = useQueryState("price");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const resetURL = () => {
    router.push(`/search?q=${searchQuery}`);
    router.refresh();
  };

  return (
    <Flex direction={"column"} gap={"4"}>
      <Accordion type="single" collapsible>
        <Rating />
        <AccordionItem value="level">
          <AccordionTrigger className="justify-center gap-4">
            Level
          </AccordionTrigger>
          <AccordionContent>dummy text</AccordionContent>
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
