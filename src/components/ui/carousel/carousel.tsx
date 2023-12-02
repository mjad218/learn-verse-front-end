'use client';
import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import { mockCarousel } from '@/constants';
import Link from 'next/link';
import { Suspense } from 'react';
import CarouselLoading from './carouselLoading';

const imgWidth = 2560;
const imgHeight = 1600;

interface CarouselProps {
  className?: string
}

export default function CarouselSlider({ className }: CarouselProps) {
  return (
    <Suspense fallback={<CarouselLoading />}>
      <div className={`h-56 sm:h-64 xl:h-[24rem] 2xl:h-[24rem] ${className}`}>
        <Carousel slideInterval={5000} className='w-full'>
          {mockCarousel.map((mockItem) => {
            return <Link href={mockItem.slug} key={mockItem.alt}>
              <Image src={mockItem.src} alt={mockItem.alt} width={imgWidth} height={imgHeight} />
            </Link>
          })}
        </Carousel>
      </div>
    </Suspense >
  );
}


