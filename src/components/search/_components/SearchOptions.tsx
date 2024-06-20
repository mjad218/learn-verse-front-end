"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Accordion } from "@/components/ui/accordion";
import Rating from "./Rating";
import LanguageSelection from "./LanguageSelection";
import LevelSelection from "./LevelSelection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Price from "./Price";

const SearchOptions = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  const resetURL = () => {
    router.push(`/search?q=${searchQuery}&p=1`);
    router.refresh();
  };

  return (
    <div className="flex flex-col rounded-xl border border-slate-300 text-base">
      <span className="items-center py-2 text-base font-medium">
        Search Filters
      </span>
      <Separator />
      <Accordion type="multiple">
        <Rating />
        <LevelSelection />
        <Price />
        <LanguageSelection />
      </Accordion>

      <Button
        className="my-2 self-center px-2 py-4 text-xl font-normal"
        variant={"destructive"}
        onClick={resetURL}
      >
        Reset
      </Button>
    </div>
  );
};

export default SearchOptions;
