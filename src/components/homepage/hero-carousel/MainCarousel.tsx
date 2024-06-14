"use client";
import MainCarouselCard from "./MainCarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroCarousel = () => {
  return (
    <Carousel
      className="relative mx-auto w-full"
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: true,
          stopOnLastSnap: true,
        }),
      ]}
    >
      <CarouselContent className="flex gap-0">
        <CarouselItem className="w-full">
          <MainCarouselCard
            image="/assets/home/pexels-gabby-k-6238120.jpg
"
            title="Learn JavaScript by Pros"
            description="Learn JavaScript by Pros"
          />
        </CarouselItem>
        <CarouselItem className="w-full">
          <MainCarouselCard
            image="/assets/home/pexels-karolina-grabowska-4219044.jpg
"
            title="Learn JavaScript by Pros"
            description="Learn JavaScript by Pros"
          />
        </CarouselItem>
        <CarouselItem className="w-full">
          <MainCarouselCard
            image="/assets/home/pexels-katerina-holmes-5905713.jpg
"
            title="Learn JavaScript by Pros"
            description="Learn JavaScript by Pros"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
