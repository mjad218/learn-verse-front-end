import { Row } from "@/components/shared/row";
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
    <Row className="my-4 ">
      <Carousel className="relative mx-auto w-[calc(100%-66px)] ">
        <CarouselContent>
          <CarouselItem className="w-full">
            <MainCarouselCard />
          </CarouselItem>
          <CarouselItem className="w-full">
            <MainCarouselCard />
          </CarouselItem>
          <CarouselItem className="w-full">
            <MainCarouselCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="border-2 border-gray-600" />
        <CarouselNext className="border-2 border-gray-600" />
      </Carousel>
    </Row>
  );
};

export default MainCarousel;
