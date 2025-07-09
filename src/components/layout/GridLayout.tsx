"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { FamousPlaces } from '@/types/types';
import { Button } from '../ui/button';





const GridLayout = ({ famousPlaces }: { famousPlaces: FamousPlaces[] }) => {

    return (
        <div className="max-w-screen-xl mx-auto py-10 lg:py-14 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">

                <Carousel plugins={[Autoplay({ delay: 2000 })]} className="sm:col-span-5 w-full max-h-[500px] shadow-lg transition duration-500 ease-in-out  rounded-lg lg:rounded-l ">
                    <CarouselPrevious className='absolute left-6 top-1/2 z-10 ' />
                    <CarouselContent >
                        {famousPlaces.map((item, index) => (
                            <CarouselItem key={index} className='relative cursor-pointer rounded overflow-hidden w-full text-white min-h-[500px] '>
                                <div className='absolute top-0 overflow-hidden h-full w-full my-auto bg-black/30 ' />

                                <a href="#">
                                    <div
                                        className="bg-cover bg-center min-h-full text-center rounded-md overflow-hidden"
                                        style={{ backgroundImage: `url('${item.image}')` }}
                                        title={item.name}
                                    ></div>
                                </a>
                                <div className="mt-3 px-4 pb-3 w-full bg-black/10 backdrop-blur-[1px] absolute bottom-0 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                                    <div>
                                        <a
                                            href="#"
                                            className="text-xs text-primary uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                        >
                                            {item.place}
                                        </a>
                                        <a
                                            href="#"
                                            className="block text-gray-100 font-bold text-2xl mb-2 transition duration-500 ease-in-out"
                                        >
                                            {item.name}
                                        </a>
                                        {/* <p className="text-gray-300 text-base mt-2">{item.description}</p> */}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselNext className='absolute right-6 top-1/2 z-10 ' />


                </Carousel>

                <div className="sm:col-span-7 grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {famousPlaces.slice(0, 6).map((item, index) => (
                        <div key={index} className="shadow-lg cursor-pointer relative hover:border transition duration-500 ease-in-out  rounded-lg lg:rounded-l">
                            <a href="#">
                                <div className="h-full bg-cover text-center overflow-hidden"

                                    style={{
                                        backgroundImage: `url('${item.image}')`
                                    }}
                                    title={item.name}>
                                </div>
                            </a>
                            <div className='absolute flex justify-center   top-0 overflow-hidden h-full w-full my-auto bg-black/40 '>
                                    <p className='mt-4 text-white font-semibold'>{item.place}</p>
                                <a href="#"
                                    className="text-gray-100 top-1/2 absolute hidden md:block w-full  z-10 text-center line-clamp-2  overflow-hidden font-light px-4 my-2  transition duration-500 ease-in-out">{item.description.slice(0,35)}...</a>
                            <Button size={"sm"} className='absolute bottom-4 text-xs p-2'>View Pacakge</Button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default GridLayout