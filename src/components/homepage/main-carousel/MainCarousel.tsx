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
    <div className="my-4">
      <h1 className="font-roboto mx-auto my-4 max-w-fit text-3xl font-medium">
        Featured Courses
      </h1>
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
