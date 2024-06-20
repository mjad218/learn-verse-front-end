import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Price = () => {
  return (
    <AccordionItem value="price">
      <AccordionTrigger className="justify-center gap-4 py-2">
        Price
      </AccordionTrigger>
      <AccordionContent>dummy text</AccordionContent>
    </AccordionItem>
  );
};

export default Price;
