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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
