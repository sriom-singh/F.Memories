"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Destination } from '@/types/types';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
const GridLayout = ({
  famousPlaces,
  coverImage
}: {
  famousPlaces: Destination[];
  coverImage: { imageLink: string; name: string;}[];
}) => {
  const router = useRouter();
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-14 relative">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">

        {/* Cover Image Carousel: Only visible on lg+ */}
        <Carousel
          plugins={[Autoplay({ delay: 5000 })]}
        
          className="sm:col-span-4  max-w-[410px] max-h-[550px] shadow-lg transition duration-500 ease-in-out hidden md:block"
        >
          <CarouselPrevious className="absolute left-6 top-1/2 z-10 bg-white/80 text-black" />
          <CarouselContent>
            {coverImage.map((item, index) => (
              <CarouselItem
                key={index}
                className="relative overflow-hidden w-full text-white min-h-[550px] max-w-[500px]"
              >
                <a href="#">
                  <div
                    className="bg-cover bg-center min-h-full text-center overflow-hidden"
                    style={{ backgroundImage: `url('${item.imageLink}')` }}
                    title={item.name}
                  ></div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-6 top-1/2 z-10 bg-white/80 text-black" />
        </Carousel>

        {/* Grid (desktop) & Carousel (mobile) for Famous Places */}
        <div className="md:col-span-8 col-span-12 w-full">

          {/* Mobile carousel (hidden on lg+) */}
          <div className="block md:hidden min-w-full">
            <Carousel plugins={[Autoplay({ delay: 4000 })]}>
              <CarouselContent className=' min-w-full flex flex-row flex-nowrap'>
                {famousPlaces.map((item, index) => (
                  <CarouselItem key={index} className='basis-1/2 flex-shrink w-full'>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <div
                        className="h-72 bg-cover bg-center"
                        style={{ backgroundImage: `url('/${item.imageLink}')` }}
                        title={item.name}
                      ></div>
                      <div className="absolute inset-0  bg-black/40 flex flex-col justify-end p-4">
                        <p className="text-white text-lg font-bold ">{item.name}</p>
                        <p className="text-white text-sm">{item.description}</p>
                        <Button onClick={()=>router.push("package/"+ encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '')))} size="sm" className="mt-4 cursor-pointer text-xs px-4 py-2">
                          View Package
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 z-10 bg-white/80 text-black" />
              <CarouselNext className="right-2 top-1/2 z-10 bg-white/80 text-black" />
            </Carousel>
          </div>

          {/* Desktop grid layout */}
          <div className="hidden md:grid grid-cols-4 lg:grid-cols-4 gap-4 h-full">
            {famousPlaces.slice(0, 8).map((item, index) => (
              <div
                key={index}
                className="shadow-lg  relative h-full transition duration-500  ease-in-out rounded-lg"
              >
                <a href="#">
                  <div
                    className="bg-cover w-full h-full bg-center"
                    style={{
                      backgroundImage: `url('/${item.imageLink}')`
                    }}
                    title={item.name}
                  ></div>
                </a>
                <div className="absolute flex flex-col justify-end gap-2 top-0  h-full w-full bg-black/30 p-4">
                  <p className="text-white font-bold text-center pb-4 ">{item.name}</p>
                  <p className="text-white text-sm text-center">{item.description}</p>
                  <Button onClick={()=>router.push("package/"+ encodeURIComponent(item.name.toLowerCase().replace(/\s+/g, '')))} size="sm" className="mt-2 w-full cursor-pointer text-xs px-4 py-2">
                    View <span className='hidden lg:inline'>Package</span> 
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GridLayout;
