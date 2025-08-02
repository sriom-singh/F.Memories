"use client"

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Packages } from '@/types/types'
import Autoplay from 'embla-carousel-autoplay'
import PackageCard from '../PackageCard'

const CorouselLayout = ({packages}:{packages:Packages[]}) => {
  return (
 <Carousel
          opts={{
            align: "start",
          }}
          plugins={[Autoplay({ delay: 2000 })]} 
          className="md:mt-8 mt-4 "
        >
          <div className="absolute md:-top-8 md:flex hidden  right-12  items-center justify-center">
            <CarouselPrevious className="relative left-0  translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute md:-top-8  md:flex hidden right-2  items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
          </div>
          <CarouselContent className="md:basis-1/3 sm:basis-1/2  lg:basis-1/4  ">
            {packages.map((pack: Packages, index) => (
              <CarouselItem
                key={index}
                className=" md:basis-1/3 sm:basis-1/2 mx-auto lg:basis-1/4"
              >
                <PackageCard
                  name={pack.name}
                  imageLink={pack.imageLink}
                  key={index}
                  mrp={pack.mrp}
                  id={pack.id}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute md:hidden  -bottom-14 right-12 flex items-center justify-center">
            <CarouselPrevious className="relative left-0  translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute -bottom-14 md:hidden right-2 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
          </div>
        </Carousel>  )
}

export default CorouselLayout