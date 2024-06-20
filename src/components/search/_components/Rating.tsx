import Stars from "./Stars";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Rating = () => {
  return (
    <AccordionItem value="rating">
      <AccordionTrigger className="my-0 justify-center gap-4 py-2">
        Rating
      </AccordionTrigger>
      <AccordionContent>
        {[5, 4.5, 4, 3.5, 3].map((value) => (
          <Stars key={`star-rating${value}`} value={value} />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Rating;
