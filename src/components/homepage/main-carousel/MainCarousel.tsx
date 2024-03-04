import MainCarouselCard from "./MainCarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const MainCarousel = () => {
  return (
    <div>
      <Carousel className="mx-auto max-w-6xl">
        <CarouselContent>
          <CarouselItem className="">
            <MainCarouselCard />
          </CarouselItem>
          <CarouselItem className="">
            <MainCarouselCard />
          </CarouselItem>
          <CarouselItem className="">
            <MainCarouselCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="border-2 border-gray-600" />
        <CarouselNext className="border-2 border-gray-600" />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
