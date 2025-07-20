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

const indiaFamousPlaces = [
  {
    name: "The Taj Mahal",
    image: "https://cdn.pixabay.com/photo/2022/06/13/21/06/taj-mahal-7260693_1280.jpg",
    description: "The Taj Mahal is a renowned white marble mausoleum located in Agra, India, commissioned by Mughal emperor Shah Jahan in memory of his wife, Mumtaz Mahal.",
    place: "Agra"
  },
  {
    name: "Qutub Minar",
    image: "https://cdn.pixabay.com/photo/2017/03/19/08/01/qutub-minar-2155776_1280.jpg",
    description: "Qutub Minar is a UNESCO World Heritage Site in Delhi. It's a towering minaret that represents Indo-Islamic architecture from the 12th century.",
    place: "Delhi"
  },
  {
    name: "Gateway of India",
    image: "https://media.gettyimages.com/id/459431043/photo/big-monument.jpg?s=612x612&w=0&k=20&c=S2yW0bJu6D2ez5wYZPpzHBr6xdUlA9v0lL5RIswfuZQ=",
    description: "The Gateway of India is a monumental arch overlooking the Arabian Sea in Mumbai. It was built during the 20th century to commemorate King George V's visit.",
    place: "Mumbai"
  },
  {
    name: "Hawa Mahal",
    image: "https://media.gettyimages.com/id/932393156/photo/palace-of-the-winds-at-dusk-jaipur-india.jpg?s=612x612&w=0&k=20&c=8lrLXBQFtWo6h8s2X5qcCQq0BKtgoVAA4a41uo4KhEY=",
    description: "Hawa Mahal, or the 'Palace of Winds', is a pink sandstone structure in Jaipur known for its lattice windows designed for royal women to observe street festivals.",
    place: "Jaipur"
  },
  {
    name: "Charminar",
    image: "https://media.gettyimages.com/id/175804012/photo/hyderabad-blues.jpg?s=612x612&w=0&k=20&c=gS8eQVRxorkiyeAvf9nTStwfgLFbcAaBtupdgBWr_sc=",
    description: "Charminar is a historic mosque and landmark in Hyderabad, built in 1591. It is known for its distinctive four minarets and Islamic architecture.",
    place: "Hyderabad"
  },
  {
    name: "Golden Temple",
    image: "https://media.gettyimages.com/id/159386488/photo/the-golden-temple-amritsar-india.jpg?s=612x612&w=0&k=20&c=9dtM5H270QaHd0wyPBwrJ_1MPOE9_opiAUZAXiHcRpE=",
    description: "The Golden Temple, also known as Harmandir Sahib, is a central religious place of the Sikhs in Amritsar, famous for its golden architecture and spiritual significance.",
    place: "Amritsar"
  }
];
const globalFamousPlaces = [
  {
    name: "Eiffel Tower",
    image: "https://images.unsplash.com/photo-1583265266785-aab9e443ee68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVpZmZlbCUyMHRvd2VyfGVufDB8MHwwfHx8MA%3D%3D",
    description: "The Eiffel Tower is an iconic iron lattice tower in Paris, France. It was completed in 1889 as the entrance arch to the 1889 World's Fair.",
    place: "Paris"
  },
  {
    name: "Statue of Liberty",
    image: "https://images.unsplash.com/photo-1590858148182-ad4bdfa495fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFN0YXR1ZSUyMG9mJTIwTGliZXJ0eXxlbnwwfDB8MHx8fDA%3D",
    description: "A symbol of freedom, the Statue of Liberty is a gift from France to the United States, located on Liberty Island in New York Harbor.",
    place: "New York City"
  },
  {
    name: "Great Wall of China",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlYXQlMjB3YWxsJTIwb2YlMjBjaGluYXxlbnwwfDB8MHx8fDA%3D",
    description: "The Great Wall of China is a historic series of fortifications stretching over 13,000 miles, built to protect Chinese states against invasions.",
    place: "China"
  },
  {
    name: "Colosseum",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sb3NzZXVtfGVufDB8MHwwfHx8MA%3D%3D",
    description: "The Colosseum is a vast ancient amphitheater in Rome, Italy, known for hosting gladiator contests and public spectacles.",
    place: "Rome"
  },
  {
    name: "Christ the Redeemer",
    image: "https://destinationlesstravel.com/wp-content/uploads/2022/10/Christ-the-Redeemer-statue-Rio-de-Janeiro-Brazil.jpg",
    description: "Standing atop Corcovado Mountain, Christ the Redeemer is a massive Art Deco statue of Jesus in Rio de Janeiro, Brazil.",
    place: "Rio de Janeiro"
  },
  {
    name: "Sydney Opera House",
    image: "https://images.unsplash.com/photo-1540448051910-09cfadd5df61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3lkbmV5JTIwT3BlcmElMjBIb3VzZXxlbnwwfDB8MHx8fDA%3D",
    description: "The Sydney Opera House is a world-renowned architectural masterpiece and performing arts venue located in Sydney, Australia.",
    place: "Sydney"
  },
  {
    name: "Christ the Redeemer",
    image: "https://destinationlesstravel.com/wp-content/uploads/2022/10/Christ-the-Redeemer-statue-Rio-de-Janeiro-Brazil.jpg",
    description: "Standing atop Corcovado Mountain, Christ the Redeemer is a massive Art Deco statue of Jesus in Rio de Janeiro, Brazil.",
    place: "Rio de Janeiro"
  },
  {
    name: "Christ the Redeemer",
    image: "https://destinationlesstravel.com/wp-content/uploads/2022/10/Christ-the-Redeemer-statue-Rio-de-Janeiro-Brazil.jpg",
    description: "Standing atop Corcovado Mountain, Christ the Redeemer is a massive Art Deco statue of Jesus in Rio de Janeiro, Brazil.",
    place: "Rio de Janeiro"
  },
];
const globalDestinations = [
  {
    name: "Singapore",
    description: "Here is filled with diverse cultures & cities",
    imageLink: "singapore.jpg"
  },
  {
    name: "Japan",
    description: "Experience the ancient history & beaches",
    imageLink: "japan.jpg"
  },
  {
    name: "Vietnam",
    description: "Experience the ancient history & beaches",
    imageLink: "vietnam.jpg"
  },
  {
    name: "Bhutan",
    description: "Experience the ancient history & beaches",
    imageLink: "bhutan.jpg"
  },
  {
    name: "France",
    description: "Indulge in the art, culture, and cuisine",
    imageLink: "france.jpg"
  },
  {
    name: "USA",
    description: "Experience the ancient history & beaches",
    imageLink: "usa.jpg"
  },
  {
    name: "Switzerland",
    description: "Experience the ancient history & beaches",
    imageLink: "switzerland.jpg"
  },
  {
    name: "World",
    description: "Experience the ancient history & beaches",
    imageLink: "world.jpg"
  }
];
const globalCoverImage=[
 {
    imageLink: "world-3.jpg",
    name: "World"
  },
   {
    imageLink: "dubai-2.jpg",
    name: "Dubai"
  },
  {
    imageLink:"https://images.herzindagi.info/image/2020/Dec/Tips-To-Bring-Back-Most-Meaningful-Travel-Souvenirssss.jpg",
    "name": "Travel World"
  }
]
const indianCoverImage=[
 {
    imageLink: "https://images.unsplash.com/photo-1706191464656-98c8e689b5c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGluZGlhJTIwdHJhdmVsfGVufDB8fDB8fHww",
    name: "Taj Mahal"
  },
  {
    imageLink:"https://plus.unsplash.com/premium_photo-1697730412369-ced5770cc1d3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Minaret"
  },
   {
    imageLink: "travel-india.jpg",
    name: "Travel India"
  },
]
const indianDestinations = [
  {
    name: "Kashmir",
    description: "Experience the ancient history & beaches",
    imageLink: "kashmir.jpg"
  },
  {
    name: "Ladakh",
    description: "Experience the ancient history & beaches",
    imageLink: "ladakh.jpg"
  },
  {
    name: "Himachal Pradesh",
    description: "Experience the ancient history & beaches",
    imageLink: "himachal.jpg"
  },
  {
    name: "Kerala",
    description: "Experience the ancient history & beaches",
    imageLink: "kerala.jpg"
  },
  {
    name: "Maharashtra",
    description: "Experience the ancient history & beaches",
    imageLink: "maharashtra.jpg"
  },
  {
    name: "Karnataka",
    description: "Experience the ancient history & beaches",
    imageLink: "karnataka.jpg"
  },
  {
    name: "Rajasthan",
    description: "Experience the ancient history & beaches",
    imageLink: "rajasthan.jpg"
  },
  {
    name: "India",
    description: "Experience the ancient history & beaches",
    imageLink: "india.jpg"
  }
];



export default async function Home() {
  const packages: Packages[] = await getPackages(1, 10);

  return (
    <>
      <div className="relative mx-auto">
  <Image
    width={1920}
    height={1080}
    alt="hero"
    src="/hero.jpg"
    className="w-full h-[100vh] object-cover"
  />
  <div className="absolute inset-0 bg-gray-950 opacity-70 "></div>

  <div className="absolute inset-0 flex items-center justify-center px-4">
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
        <GridLayout famousPlaces={globalDestinations} coverImage={globalCoverImage} />
        <CorouselLayout packages={packages} />
        {/* <div className=" flex flex-col md:flex-row gap-10 md:flex justify-between md:gap-2 mt-10 md:mt-16">
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
        </div> */}


      </Section>
      {/* Incredible India  */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Start Traveling Today
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Incredible India
        </h2>
        <GridLayout famousPlaces={indianDestinations} coverImage={indianCoverImage} />

        <CorouselLayout packages={packages} />
      </Section>
      {/* Popular Locations */}
      <Section>
        <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
          Start Traveling Today
        </h2>
        <h2 className="font-openSans tracking-tight text-center xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
          Popular Locations
        </h2>
        <CorouselLayout packages={packages} />
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
