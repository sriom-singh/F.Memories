import { getPackages } from "@/actions/package";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Testimonials } from "@/components/Testimonials";
import {
  ArrowRight,
  CircleUserRound,
  MapPin,
  Route,
  Users,
} from "lucide-react";
import PackageCard from "@/components/PackageCard";
import Image from "next/image";
import Faq from "@/components/FAQ";
import { Section } from "@/components/Section";
import Stats from "@/components/Stats";
import { Packages } from "@/types/types";
import GridLayout from "@/components/GridLayout";

export default async function Home() {
  const packages: Packages[] = await getPackages(1, 10);

  return (
    <>
      <div className=" mx-auto flex bg- flex-col font-openSans justify-center ">
        <div className="relative  mx-auto -mt-4">
          <Image
            width={1000}
            height={1000}
            alt="hero"
            src="/hero.jpg"
            className="w-[100vw] h-[110vh] object-cover"
          />
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
            {/* <Button
              className="bg-black/10 border-primary px-4 text-black font-openSans text-primary md:w-52 w-36 md:text-lg py-6 mt-4 hover:bg-primary/80  rounded-full "
              variant="outline"
            >
              Explore Tours
            </Button> */}
            <div className="relative h-12 md:w-80 w-64 my-6">
              <input
                type="search"
                className="bg-white w-full h-full pl-10 pr-4 text-black text-sm rounded-full"
                placeholder="Search Destinations"
              />
              <MapPin
                className="absolute left-3 top-3.5 size-5 text-black/60 font-extralight
"
              />
              <Button className="absolute right-2 cursor-pointer top-2 size-5 text-black/60 font-extralight w-8 h-8 rounded-full">
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Explore the world */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Lets Travel Now
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Explore the world
        </h2>

        <div className=" flex flex-col md:flex-row gap-10 md:flex justify-between md:gap-2 mt-10 md:mt-16">
          <div className="flex flex-col justify-center gap-2 items-center">
            <Image
              width={100}
              height={100}
              alt="destination icon"
              src={"/icons/destination.png"}
              className="size-20"
            />
            <h3 className="text-black text-xl font-semibold text-center">
              Most Popular Destination
            </h3>
            <p className="text-black text-sm text-center w-2/3 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              cumque velit eius nisi non cum!
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <Image
              width={100}
              height={100}
              alt="tour-icon"
              src={"/icons/tour-package.png"}
              className="size-20"
            />
            <h3 className="text-black text-xl font-semibold text-center">
              Budget Friendly Packages
            </h3>
            <p className="text-black text-sm text-center w-2/3 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              cumque velit eius nisi non cum!
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2 items-center">
            <Image
              width={100}
              height={100}
              alt="beach icon"
              src={"/icons/beach.png"}
              className="size-20"
            />
            <h3 className="text-black text-xl font-semibold text-center">
              Satisfaction Guaranteed
            </h3>
            <p className="text-black text-sm text-center w-2/3 ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              cumque velit eius nisi non cum!
            </p>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="md:mt-16 mt-4 "
        >
          <div className="absolute md:-top-8 md:inline  right-12 flex items-center justify-center">
            <CarouselPrevious className="relative left-0  translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute md:-top-8  md:inline  right-2 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
          </div>
          <CarouselContent className="md:basis-1/3 sm:basis-1/2 lg:basis-1/4  ">
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
        </Carousel>
        
      </Section>
      {/* Incredible India  */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Start Traveling Today
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Incredible India
        </h2>
        <GridLayout/>
        <Carousel
          opts={{
            align: "start",
          }}
          className="md:mt-8 mt-4 "
        >
          <div className="absolute md:-top-8 md:inline  right-12 flex items-center justify-center">
            <CarouselPrevious className="relative left-0  translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute md:-top-8  md:inline  right-2 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
          </div>
          <CarouselContent className="md:basis-1/3 sm:basis-1/2 lg:basis-1/4  ">
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
        </Carousel>
      </Section>
  {/* Popular Locations */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Start Traveling Today
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Popular Locations
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="md:mt-8 mt-4 "
        >
          <div className="absolute md:-top-8 md:inline  right-12 flex items-center justify-center">
            <CarouselPrevious className="relative left-0  translate-x-0 shadow-sm hover:translate-x-0 hover:bg-primary/90" />
          </div>
          <div className="absolute md:-top-8  md:inline  right-2 flex items-center justify-center">
            <CarouselNext className="relative right-0 translate-x-0 hover:translate-x-0 shadow-sm  hover:bg-primary/90" />
          </div>
          <CarouselContent className="md:basis-1/3 sm:basis-1/2 lg:basis-1/4  ">
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
        </Carousel>
      </Section>
      {/* Why choose us */}

      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Why Choose Us
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Our Achievements
        </h2>
        <Stats />

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
            <Image
              alt="planning icon"
              src="/planning2.png"
              width={500}
              height={500}
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
            <Image
              width={200}
              height={200}
              src="/pricing.png"
              alt="pricing"
              className="absolute -right-10  size-80 md:size-96 lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </Section>

      {/* Stats */}
      {/* <Section >
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4  text-black">
          <div className="text-center mx-auto flex flex-col justify-end items-center">
            <MapPin size={45} className="my-4 text-primary" />
            <h6 className="text-3xl animate-[counter_2s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-transactions)] before:content-[counter(num)] font-bold">
              M
            </h6>
            <small>Total Donations</small>
          </div>
          <div className="text-center mx-auto flex flex-col justify-end items-center">
            <Route size={45} className="my-4 text-primary" />
            <h6 className="text-3xl font-bold animate-[counter_2s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-compaigns)] before:content-[counter(num)]">
              k
            </h6>
            <small>Campaigns Closed</small>
          </div>
          <div className="text-center mx-auto flex flex-col justify-end items-center">
            <CircleUserRound
              size={45}
              className="my-4 text-primary font-extralight"
            />
            <h6 className="text-3xl font-bold animate-[counter_2s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-customers)] before:content-[counter(num)]">
              k
            </h6>
            <small>Happy Customers</small>
          </div>
          <div className="text-center mx-auto flex flex-col justify-end items-center">
            <Users size={45} className="my-4 text-primary" />
            <h6 className="text-3xl font-bold animate-[counter_2s_ease-out_forwards] tabular-nums [counter-set:_num_var(--num-volunteers)] before:content-[counter(num)]">
              k
            </h6>
            <small>Our Volunteers</small>
          </div>
        </div>
      </Section> */}

      {/* Testimonials */}
      <Section>
        <Testimonials />
      </Section>
      {/* FAQ */}
      <Section>
        <Faq />
      </Section>


      {/* Get Help */}
      <Section>
        <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-8">
          <h2 className="font-cursive text-xl ">Confused Get Help</h2>
          <div className="flex justify-between">
            <h2 className="font-openSans py-1 xl:text-5xl tracking-tight text-3xl lg:text-4xl  font-semibold">
              Get Help from Our Travel Agent
            </h2>
            <Button variant={"default"} className="cursor-pointer">
              Explore Now
            </Button>
          </div>
          <p className="text-sm opacity-80 py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </p>
        </div>
      </Section>
    </>
  );
}
