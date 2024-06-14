"use client";
import { useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button";

const SearchOptions = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const resetURL = () => {
    router.push(`/search?q=${searchQuery}&p=1`);
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-slate-300 py-5 text-base">
      <span className="items-center pt-2 text-base font-medium">
        Search Filters
      </span>

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
        className="mb-2 self-center p-2 py-5 font-normal"
        onClick={resetURL}
      >
        Reset
      </Button>
    </div>
  );
};

export default SearchOptions;
