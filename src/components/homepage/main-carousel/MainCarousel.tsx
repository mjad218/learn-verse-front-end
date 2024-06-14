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
    <Row>
      <div className="my-4 2xl:w-[95%]">
        <Carousel className="mx-auto max-w-6xl 2xl:max-w-[96rem]">
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
    </Row>
  );
};

export default MainCarousel;
