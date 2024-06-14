"use client";

import { Row } from "@/components/shared/row";
import MainCarouselCard from "./MainCarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const MainCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Row className="my-4">
      <Carousel className="relative mx-auto" setApi={setApi}>
        <CarouselContent>
          {[1, 2, 3].map((_, index) => (
            <CarouselItem className="w-full" key={`slider${index}`}>
              <MainCarouselCard
                image="assets/TempImages/TempCourse.jpg"
                title="Learn JavaScript by Doing"
                instructor="<Instructor>"
                slug=""
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="my-2 flex justify-center gap-1">
        {Array.from(Array(count).keys()).map((i) => (
          <Button
            key={`{dot-count-${i}}`}
            className={`h-0.5 rounded-full  ${
              i === current - 1
                ? "bg-black hover:bg-black"
                : "bg-neutral-600/60"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </Row>
  );
};

export default MainCarousel;
