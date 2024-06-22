"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useQueryState } from "nuqs";
import { useRouter } from "next/navigation";

const Price = () => {
  const router = useRouter();
  const [minValue] = useState(50);
  const [maxValue] = useState(2000);
  const [price, setPrice] = useQueryState("price");
  const [currentValue, setCurrentValue] = useState(() => (price ? price : 50));
  const changePrice = (value: string) => {
    setPrice(value);
    router.refresh();
  };
  return (
    <AccordionItem value="price">
      <AccordionTrigger className="justify-center gap-4 py-2">
        Price
      </AccordionTrigger>
      <AccordionContent className="mx-auto max-w-[80%]">
        <Slider
          defaultValue={[+currentValue]}
          max={maxValue}
          min={minValue}
          onValueChange={(value) => {
            setCurrentValue(() => value[0]!);
            changePrice(value[0]!.toString());
          }}
          step={10}
          className="py-2"
        />
        <div className="flex justify-between">
          <span className="font-bold">{minValue} EGP</span>
          <span>{currentValue} EGP</span>
          <span className="font-bold">{maxValue} EGP</span>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Price;
