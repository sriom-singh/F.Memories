import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
const AboutUs = () => {
  return (
    <div>
      <div className=" mx-auto">
        <div className="relative h-[38rem] w-full bg-blend-multiply bg-opacity-60  bg-black bg-right-bottom">
          <img
            src="./india-gate.jpg"
            className="w-[100vw] object-cover opacity-60 h-[38rem] "
          />
          {/* <img className="h-96 w-dvw object-cover " src="https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> */}
          <h2 className="md:text-6xl text-white absolute translate left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center  text-white font-medium text-5xl md:pt-6 py-2">
            INDIA
          </h2>
          <div className="absolute -bottom-8 bg-white shadow-md  w-full translate flex justify-center  p-6  z-[50]">
            <div className="flex flex-col md:flex-row justify-between max-w-5xl gap-4 w-full items-center text-black">
              <div className="flex items-center gap-8 md:justify-center  w-full">
                <span className="aspect-square w-8 h-8 bg-primary rounded-full"></span>
                <div>
                  <p className="font-extrathin ">Packages</p>
                  <p className="font-bold text-lg">42 available</p>
                </div>
              </div>
              <div className="flex items-center gap-8  md:justify-center  w-full ">
                <span className="aspect-square w-8 h-8 bg-primary rounded-full"></span>
                <div>
                  <p className="font-extrathin ">Contact Us</p>
                  <p className="font-bold text-lg">+91 991 058 3811</p>
                </div>
              </div>
              <div className="flex items-center gap-8 md:justify-center  w-full">
                <span className="aspect-square w-8 h-8 bg-primary rounded-full"></span>{" "}
                <div>
                  <p className="font-extrathin ">Mail Us</p>
                  <p className="font-bold text-lg">
                    framing.memoriess@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative"></div>
        <div className=" mx-auto max-w-7xl py-10 py-16 text-black px-7">
          {/* <h1 className="md:text-5xl text-4xl font-bold text-center">
            Packages
          </h1>
          <hr className="my-4" /> */}
          <div className="max-w-7xl md:px-4 xl:px-0 px-8 py-6 mx-auto">
            <h2 className="font-cursive text-primary text-xl md:text-2xl font-semibold">
              India&apos;s
            </h2>
            <h2 className="font-openSans xl:text-4xl text-3xl lg:text-2xl text-black font-semibold">
              Top Packages
            </h2>
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="horizontal"
              className="md:my-8  my-4 "
            >
              <div className="absolute md:-top-8 md:inline hidden right-12 flex items-center justify-center">
                <CarouselPrevious className="relative left-0  translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
              </div>
              <div className="absolute md:-top-8  md:inline hidden  right-2 flex items-center justify-center">
                <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
              </div>
              <CarouselContent className="md:basis-1/3 sm:basis-1/2 lg:basis-1/4   ">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className=" md:basis-1/3 sm:basis-1/2 mx-auto lg:basis-1/4"
                  >
                    <PackageCard/>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute md:hidden  -bottom-14 right-12 flex items-center justify-center">
                <CarouselPrevious className="relative left-0  translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
              </div>
              <div className="absolute -bottom-14 md:hidden right-2 flex items-center justify-center">
                <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
