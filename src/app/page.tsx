import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Testimonials } from "@/components/Testimonials";
import { AnimatedReviews } from "@/components/AnimatedReviews";
export default function Home() {
  return (
    <>
      <div className=" mx-auto flex bg- flex-col justify-center ">
        <div className="relative  mx-auto -mt-4">
          <img src="./hero.jpg" className="w-[100vw] h-[110vh] object-cover" />
          <div className="absolute inset-0 bg-gray-900 opacity-70 rounded-md"></div>

          <div className="flex md:items-center absolute inset-0  items-center  font-openSans flex-col  gap-4 px-7 lg:mt-0 justify-center  my-auto min-h-1/2  lg:h-full flex-1 ">
            <h1 className="lg:text-7xl text-center  font-openSans text-white  md:text-6xl text-5xl lg:text-center">
              Discover Your Destination
            </h1>
            <p className="font-normal text-sm text-center  font-sans text-white/70 ">
              Framing Memories crafts immersive journeys so you don’t just
              travel — you live the moment,
              <br /> and frame it forever.
            </p>
            <Button
              className="bg-black/10 border-primary  text-black font-normal md:w-52 w-32 py-6 mt-4 hover:bg-primary/80  rounded-full text-normal text-lg"
              variant="outline"
            >
              Explore Tours
            </Button>
          </div>
        </div>
      </div>
      
      {/* Popular Locations */}
      <div className="max-w-7xl md:px-0 px-8 py-12 mx-auto">
        <h2 className="font-cursive text-xl md:text-2xl font-semibold">
          Start Traveling Today
        </h2>
        <h2 className="font-openSans xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Popular Locations
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="my-8 "
        >
          <div className="absolute -top-8 right-12 flex items-center justify-center">
            <CarouselPrevious className="relative left-0 translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute -top-8 right-2 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
          </div>
          <CarouselContent className="md:basis-1/3 sm:basis-1/2 lg:basis-1/4  border ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className=" md:basis-1/3 sm:basis-1/2 mx-auto lg:basis-1/4"
              >
                <div className="p-1">
                  <div className="max-w-xs w-full group/card">
                    <div
                      className={cn(
                        " cursor-pointer overflow-hidden relative card h-96 shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 px-6",
                        "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
                      )}
                    >
                      <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

                      <div className="text content h-full flex flex-col  justify-end">
                        <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                          Detination
                        </h1>
                        <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Minus, laboriosam mollitia doloribus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Explore the world */}
      <div className="max-w-7xl lg:px-0 px-8 bg-primary/10 py-12 mx-auto">
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Lets Travel Now
        </h2>
        <h2 className="font-openSans text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Explore the world
        </h2>
        <div className=" flex flex-col md:flex-row gap-10 md:flex justify-between md:gap-2 mt-10 md:mt-16">
          <div className="flex flex-col justify-center gap-2 items-center">
            <img src={"./icons/destination.png"} className="size-20" />
            <h3 className="text-black text-xl font-semibold text-center">
              Most Popular Destination
            </h3>
            <p className="text-black text-sm text-center w-2/3 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              cumque velit eius nisi non cum!
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <img src={"./icons/tour-package.png"} className="size-20" />
            <h3 className="text-black text-xl font-semibold text-center">
              Budget Friendly Packages
            </h3>
            <p className="text-black text-sm text-center w-2/3 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              cumque velit eius nisi non cum!
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <img src={"./icons/beach.png"} className="size-20" />
            <h3 className="text-black text-xl font-semibold text-center">
              Satisfaction Guaranteed
            </h3>
            <p className="text-black text-sm text-center w-2/3 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              cumque velit eius nisi non cum!
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="max-w-7xl  lg:px-0 px-8 py-12 mx-auto ">
        <h2 className="font-cursive text-xl md:text-2xl font-semibold">
          Why Choose Us
        </h2>
        <h2 className="font-openSans  xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          We Arrange the Best <br /> Tour Ever Possible
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1  bg-no-repeat bg-contain bg-right  lg:col-span-2 h-full bg-pink-800 min-h-[450px] lg:min-h-[300px]"
            className="bg-primary/10 bg-gradient-to-r from-slate-600 to-gray-600"
          >
            <div className="max-w-xs ">
              <h2 className="text-left text-balance  text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Amazing Tour Plans
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam
                itaque, dolorum ut doloribus
              </p>
              <h2 className=" absolute right-4 z-10 bottom-2 bg-black/5 text-balance  flex flex- gap-1 text-xl lg:text-3xl font-semibold  text-white">
                10k+{" "}
                <span className="font-openSans text-base  font-normal">
                  Tour <br /> Organized
                </span>
              </h2>
            </div>
            <img
              src="/planning2.png"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10  lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 min-h-[300px]"
            className="bg-gradient-to-t from-cyan-700 to-teal-700"
          >
            <h2 className="max-w-80  text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Best Travel Guides
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </WobbleCard>
          <WobbleCard
            className="bg-black/10"
            containerClassName="col-span-1  lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          >
            <div className="max-w-3xl">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Affordable Pricing Plans
              </h2>
              <p className="mt-4 max-w-full text-left  text-base/6 text-neutral-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                ex expedita totam doloremque. Voluptatum quisquam incidunt
                pariatur quis consequuntur debitis mollitia .
              </p>
            </div>
            <img
              src="/pricing.png"
              alt="linear demo image"
              className="absolute -right-10  size-80 md:size-96 lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>


      {/* Get Help */}
      <div className="max-w-7xl text-white lg:px-0 px-8 py-12 mx-auto ">
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8">
          <h2 className="font-cursive text-xl ">Confused Get Help</h2>
          <div className="flex justify-between">
            <h2 className="font-openSans py-1 xl:text-5xl text-3xl lg:text-4xl  font-semibold">
              Get Help from Our Travel Agent
            </h2>
            <Button variant={"default"}>Explore Now</Button>
          </div>
          <p className="text-sm opacity-80 py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
      
    </>
  );
}
