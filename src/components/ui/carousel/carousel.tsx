'use client';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import { mockCarousel } from '@/constants';
import Link from 'next/link';

const imgWidth = 2560;
const imgHeight = 800;

export default function CarouselSlider() {
  return (
    <div className="h-56 sm:h-64 xl:h-[24rem] 2xl:h-[24rem]">
      <Carousel slideInterval={5000}>
        {mockCarousel.map((mockItem) => {
          return <Link href={mockItem.alt} key={mockItem.alt}>
            <Image src={mockItem.src} alt={mockItem.alt} width={imgWidth} height={imgHeight} />
          </Link>
        })}
      </Carousel>
    </div>
  );
}


