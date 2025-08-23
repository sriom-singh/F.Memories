"use client";

import { AnimatedReviews } from "./AnimatedReviews";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Image from "next/image";

export function Testimonials() {
  return (
    // <div className="py-12  z-10 min-w-full rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    //   <h2 className="font-cursive text-xl md:text-3xl font-semibold">
    //     Travels
    //   </h2>
    //   <h2 className="font-openSans xl:text-5xl text-3xl  lg:text-4xl text-black font-semibold">
    //     What People Say
    //   </h2>
    //   {/* <div className=" flex lg:px-0 md:mb-0  -mb-16 mx-auto ">
    //     <div className="flex-1">
    //       <AnimatedReviews  />
    //     </div>
    //   </div> */}
    //   <InfiniteMovingCards
    //     items={testimonials}
    //     direction="right"
    //     speed="slow"
    //     className=" py-16"
    //   />
    // </div>
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
            Trusted By Many
          </h2>
          <h2 className="text-3xl tracking-tight font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            What our customers say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Real stories from travelers who’ve framed memories with us.
          </p>
        </div>

        <InfiniteMovingCards speed={"normal"} className="pt-16" items={testimonials} />
      </div>
    </section>
  );
}

const testimonials = [
  {
    comment: "Amazing and splendid experience..!! Framing Memories made our journey too smooth and convenient.",
    name: "Deeksha",
    image: ['/testimonial1.jpg'],
  },
  {
    comment: "Everything was perfectly organized, I just enjoyed without any stress.",
    name: "Anchal",
    image: ['/Anchal_1.jpg'],
  }, {
    comment: "Best decision ever—choosing this travel agency!",
    name: "Ankit Jain",
    image: ['/Ankit_Jain_1.jpg'],
  }, {
    comment: "Every moment felt like a dream come true.",
    name: "Dilip Choudhary",
    image: ['/Dilip_Choudhary_2.jpg'],
  },
  {
    comment: "Seamless bookings, comfortable stays, amazing experiences.",
    name: "Meena Jerath ",//(Kamakhya Devi Group) 
    image: ['/Meena_Jerath_1.jpg'],
  },
  {
    comment: "What a special trip! So many firsts and beautiful memories. 🎉✈️💕",
    name: "Laxmi Kulhari",
    image: ['/Laxmi_Kulhari_2.jpg'],
  }, {
    comment: "The trip was amazing and exceptionally beautiful. 😍",
    name: "Manisha Goyal",
    image: ['/Manisha_Goyal_2.jpg'],
  }, {
    comment: "I couldn’t stop clicking photos—everything was so beautiful.",
    name: "Mayur",
    image: ['/Mayur.jpg'],
  },
  {
    comment: "Everything was perfectly organized, I just enjoyed without any stress.",
    name: "Naresh Bagai",
    image: ['/Naresh_Bagai_1.jpg', '/Naresh_Bagai_2.jpg', '/Naresh_Bagai_3.jpg'],
  },
  {
    comment: "I’ll treasure these memories forever.",
    name: "Marshall Gupta",
    image: ['/Marshall_Gupta.jpg'],
  }, {
    comment: "Our family vacation became truly memorable—all thanks to your flawless planning.",
    name: "Akash Gupta",
    image: ["/Akash_Gupta.jpeg"]
  }, {
    comment: "Booking with you felt effortless, yet the experience was world-class.",
    name: "Anjali Gupta",
    image: ["/Anjali_Gupta.jpeg"]
  }
];
