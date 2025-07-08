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

        <InfiniteMovingCards speed={"normal"} className="pt-16" />
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
