import { getPackages } from "@/actions/package";

import { Button } from "@/components/ui/button";

import { WobbleCard } from "@/components/ui/wobble-card";
import { Testimonials } from "@/components/Testimonials";
import {
  ArrowRight,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Faq from "@/components/FAQ";
import { Section } from "@/components/layout/Section";
import Stats from "@/components/Stats";
import { Packages } from "@/types/types";
import GridLayout from "@/components/layout/GridLayout";
import CorouselLayout from "@/components/layout/CorouselLayout";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroCorousel from "@/components/heroCorousel";


const globalDestinations = [
  {
    id: 1,
    name: "Singapore",
    description: "Here is filled with diverse cultures & cities",
    imageLink: "Singapore.jpg",
    duration: "6 Nights / 7 Days",
    place: "Singapore",
    mrp: 125000,
  },
  {
    id: 2,
    name: "Japan",
    description: "Experience the ancient history & beaches",
    imageLink: "Japan.jpg",
    duration: "7 Nights / 8 Days",
    place: "Tokyo · Kyoto · Osaka",
    mrp: 175000,
  },
  {
    id: 3,
    name: "Vietnam",
    description: "Experience the ancient history & beaches",
    imageLink: "Vietnam.jpg",
    duration: "6 Nights / 7 Days",
    place: "Hanoi · Da Nang · Ho Chi Minh",
    mrp: 110000,
  },
  {
    id: 4,
    name: "Bhutan",
    description: "Experience the ancient history & beaches",
    imageLink: "Bhutan.jpg",
    duration: "5 Nights / 6 Days",
    place: "Thimphu · Paro",
    mrp: 95000,
  },
  {
    id: 5,
    name: "France",
    description: "Indulge in the art, culture, and cuisine",
    imageLink: "France.jpg",
    duration: "6 Nights / 7 Days",
    place: "Paris · Nice",
    mrp: 190000,
  },
  {
    id: 6,
    name: "USA",
    description: "Experience the ancient history & beaches",
    imageLink: "USA.jpg",
    duration: "8 Nights / 9 Days",
    place: "New York · Las Vegas · Los Angeles",
    mrp: 250000,
  },
  {
    id: 7,
    name: "Switzerland",
    description: "Experience the ancient history & beaches",
    imageLink: "Switzerland.jpg",
    duration: "6 Nights / 7 Days",
    place: "Lucerne · Interlaken · Zurich",
    mrp: 210000,
  },
  {
    id: 8,
    name: "World",
    description: "Experience the ancient history & beaches",
    imageLink: "World.jpg",
    duration: "15 Nights / 16 Days",
    place: "Europe · Asia · USA",
    mrp: 550000,
  },
];

const globalCoverImage = [
  {
    imageLink: "World-3.jpg",
    name: "World"
  },
  {
    imageLink: "Dubai-2.jpg",
    name: "Dubai"
  },
  {
    imageLink: "https://images.herzindagi.info/image/2020/Dec/Tips-To-Bring-Back-Most-Meaningful-Travel-Souvenirssss.jpg",
    "name": "Travel World"
  }
]
const indianCoverImage = [
  {
    imageLink: "https://images.unsplash.com/photo-1706191464656-98c8e689b5c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGluZGlhJTIwdHJhdmVsfGVufDB8fDB8fHww",
    name: "Taj Mahal"
  },
  {
    imageLink: "https://plus.unsplash.com/premium_photo-1697730412369-ced5770cc1d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Minaret"
  },
  {
    imageLink: "travel-india.jpg",
    name: "Travel India"
  },
]
const indiaDestinations = [
  {
    id: 101,
    name: "Kashmir",
    description: "Snow-capped mountains, serene lakes, and breathtaking valleys.",
    imageLink: "Kashmir.jpg",
    duration: "6 Nights / 7 Days",
    place: "Srinagar · Gulmarg · Pahalgam",
    mrp: 45000,
  },
  {
    id: 102,
    name: "Ladakh",
    description: "High-altitude deserts, monasteries, and thrilling landscapes.",
    imageLink: "Ladakh.jpg",
    duration: "7 Nights / 8 Days",
    place: "Leh · Nubra Valley · Pangong Lake",
    mrp: 52000,
  },
  {
    id: 103,
    name: "Himachal Pradesh",
    description: "Hill towns, adventure sports, and scenic Himalayan views.",
    imageLink: "Himachal.jpg",
    duration: "6 Nights / 7 Days",
    place: "Manali · Solang · Shimla",
    mrp: 38000,
  },
  {
    id: 104,
    name: "Kerala",
    description: "Backwaters, beaches, lush greenery, and Ayurveda retreats.",
    imageLink: "Kerala.jpg",
    duration: "5 Nights / 6 Days",
    place: "Munnar · Alleppey · Kochi",
    mrp: 42000,
  },
  {
    id: 105,
    name: "Maharashtra",
    description: "Historic forts, vibrant cities, and coastal beauty.",
    imageLink: "Maharashtra.jpg",
    duration: "5 Nights / 6 Days",
    place: "Mumbai · Lonavala · Mahabaleshwar",
    mrp: 35000,
  },
  {
    id: 106,
    name: "Karnataka",
    description: "Royal heritage, waterfalls, and coffee plantations.",
    imageLink: "Karnataka.jpg",
    duration: "6 Nights / 7 Days",
    place: "Bengaluru · Coorg · Mysore",
    mrp: 39000,
  },
  {
    id: 107,
    name: "Rajasthan",
    description: "Royal palaces, desert safaris, and colorful culture.",
    imageLink: "Rajasthan.jpg",
    duration: "7 Nights / 8 Days",
    place: "Jaipur · Jodhpur · Udaipur",
    mrp: 48000,
  },
  {
    id: 108,
    name: "India",
    description: "A grand journey through India’s most iconic destinations.",
    imageLink: "India.jpg",
    duration: "12 Nights / 13 Days",
    place: "Delhi · Agra · Jaipur · Kerala · Goa",
    mrp: 85000,
  },
];



export default async function Home() {
  const packages: Packages[] = await getPackages(1, 10);

  return (
    <>
      <div className="">
        {/* <Image
          width={1920}
          height={1080}
          alt="hero"
          src="/hero.jpg"
          className="w-full h-[100vh] object-cover"
        /> */}
        <HeroCorousel />
        {/* <div className="absolute inset-0 bg-gray-950 opacity-70 "></div> */}

        {/* <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Frame Your Holidays
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
              Framing Memories crafts immersive journeys so you don’t just travel — you live the moment, and frame it forever.
            </p>

            <div className="mt-8 flex justify-center items-center">
              <div className="relative w-full max-w-md h-12">
                <input
                  type="search"
                  className="w-full h-full pl-10 pr-12 rounded-full bg-white/50 text-black text-sm"
                  placeholder="Search Destinations"
                />
                <MapPin className="absolute left-3 top-3.5 size-5 text-black/50" />
                <Button className="absolute right-2 top-2 w-8 h-8 p-0 rounded-full bg-gray-200 hover:bg-gray-300">
                  <ArrowRight className="size-4 -ml-1 text-black" />
                </Button>
              </div>
            </div>
          </div>
        </div> */}
      </div>


      {/* Testimonials */}
      <Section>
        <Testimonials />
      </Section>

      {/* Explore the world */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Lets Travel Now
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Explore the world
        </h2>
        <GridLayout famousPlaces={globalDestinations} coverImage={globalCoverImage} />
        <CorouselLayout packages={globalDestinations} />



      </Section>
      {/* Incredible India  */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Start Traveling Today
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Incredible India
        </h2>
        <GridLayout famousPlaces={indiaDestinations} coverImage={indianCoverImage} />

        <CorouselLayout packages={indiaDestinations} />
      </Section>
      {/* Popular Locations */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Start Traveling Today
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Popular Locations
        </h2>
        <CorouselLayout packages={[...globalDestinations,...indiaDestinations]} />
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
                Curated tour plans for relaxing getaways and adventure-filled journeys.           
              </p>
              <h2 className=" absolute right-4 z-10 bottom-2 bg-black/5 text-balance  flex flex- gap-1 text-xl lg:text-3xl font-semibold  text-white">
                10k+{" "}
                <span className="font-openSans text-base  font-normal">
                  Tour <br /> Organized
                </span>
              </h2>
            </div>
            <div className="relative w-full h-full">

              <Image
                alt="planning icon"
                src="/planning2.png"
                width={1000}
                height={1000}
                className="absolute size-96  -right-10  lg:-right-[4%] bottom-0 -mb-10 md:mb-0 object-contain rounded-2xl"
              />
            </div>
          </WobbleCard>
          <WobbleCard
            containerClassName="col-span-1 min-h-[300px]"
            className="bg-gradient-to-t from-cyan-700 to-teal-700"
          >
            <h2 className="max-w-80  text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Best Travel Guides
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Experienced guides offering local insights and seamless support.
            </p>
          </WobbleCard>
          <WobbleCard
            className="bg-black/10"
            containerClassName="col-span-1  lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[400px] xl:min-h-[300px]"
          >
            <div className="max-w-3xl min-h-min">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Affordable Pricing Plans
              </h2>
              <p className="mt-4 max-w-full text-left  text-base/6 text-neutral-200">
              Enjoy transparent pricing with no hidden costs. Our travel packages are thoughtfully priced to offer the best value, ensuring premium experiences that fit your budget.
              </p>
            </div>
            <div className="relative w-full h-full">

              <Image
                width={1400}
                height={1400}
                src="/tourist-with-thumb-up.png"
                alt="pricing"
                className="absolute -right-10  size-96 md:size-96 lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
              />
            </div>
          </WobbleCard>
        </div>

      </Section>



      {/* Testimonials */}
      {/* <Section>
        <Testimonials />
      </Section> */}
      {/* FAQ */}
      <Section>
        <Faq />
      </Section>


      {/* Get Help */}
      {/* <Section>
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
      </Section> */}

      {/* Google Map */}

      <iframe className=" md:h-[470px] h-[350px] border-none mx-auto w-full px-6 md:w-[95%] lg:w-[80%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.071857903479!2d77.26705299999999!3d28.687497000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf2a2babe25%3A0x8c2d4003335a6d3c!2sFraming%20Memories!5e0!3m2!1sen!2sin!4v1753067098205!5m2!1sen!2sin" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </>
  );
}
