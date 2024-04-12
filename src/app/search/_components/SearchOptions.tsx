"use client";
import { parseAsFloat, parseAsInteger, useQueryState } from "nuqs";
import { Flex } from "@radix-ui/themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Stars from "./Stars";

const SearchOptions = () => {
  // const [level, setLevel] = useQueryState("level");
  // const [price, setPrice] = useQueryState("price");
  // const [language, setLanguage] = useQueryState("language");

  return (
    <Flex direction={"column"} gap={"4"}>
      <Accordion type="single" collapsible>
        <AccordionItem value="rating">
          <AccordionTrigger className="justify-center gap-4">
            Rating
          </AccordionTrigger>
          <AccordionContent>
            <Stars value={5} />
            <Stars value={4.5} />
            <Stars value={4} />
            <Stars value={3.5} />
            <Stars value={3} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="level">
          <AccordionTrigger className="justify-center gap-4">
            Level
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="justify-center gap-4">
            Price
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="language">
          <AccordionTrigger className="justify-center gap-4">
            Primary Language
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default SearchOptions;
