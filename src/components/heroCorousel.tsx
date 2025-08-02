"use client"
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

const HeroCorousel = () => {
  return (
    <Carousel
      opts={{ align: 'start', startIndex: 0 }}
      className="relative w-full overflow-hidden"
      plugins={[Autoplay({ delay: 3000 })]}
    >
      <CarouselPrevious className="absolute left-10 top-1/2 z-20 bg-primary text-white" />
      <CarouselNext className="absolute right-10 top-1/2 z-20 bg-primary text-white" />

      <CarouselContent className="flex max-h-[95vh]">
        <CarouselItem className="w-full flex-shrink-0 h-full">
          <ResponsiveHeroImage
            desktopSrc="https://goglobalvacations.in/wp-content/uploads/2024/11/Go-Global-new-banner-1.png"
            mobileSrc="https://goglobalvacations.in/wp-content/uploads/2024/12/Go-Global-banner-1-Resize.png"
            alt="hero"
          />
        </CarouselItem>
        <CarouselItem className="w-full flex-shrink-0 h-full">
          <ResponsiveHeroImage
            desktopSrc="https://goglobalvacations.in/wp-content/uploads/2024/11/Go-Global-new-banner-2.png"
            mobileSrc="https://goglobalvacations.in/wp-content/uploads/2024/12/Go-Global-banner-2-Resize.png"
            alt="hero"
          />
          
        </CarouselItem>
        <CarouselItem className="w-full flex-shrink-0 h-full">
            <ResponsiveHeroImage
            desktopSrc="https://goglobalvacations.in/wp-content/uploads/2024/11/Go-Global-new-banner-3.png"
            mobileSrc="https://goglobalvacations.in/wp-content/uploads/2024/12/Go-Global-new-banner-3-resize.png"
            alt="hero"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}


export default HeroCorousel

const ResponsiveHeroImage = ({ desktopSrc, mobileSrc, alt }: { desktopSrc: string, mobileSrc: string, alt: string }) => (
  <picture>
    <source media="(max-width: 764px)" srcSet={mobileSrc} />
    <img src={desktopSrc} alt={alt} className="object-cover w-full h-full" />
  </picture>
)