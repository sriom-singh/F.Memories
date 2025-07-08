import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
const Faq = () => {
  return (
    <div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cursive text-center text-xl md:text-2xl font-semibold">
            Need Help?
          </h2>
          <h2 className="text-3xl tracking-tight font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Find answers to common queries and plan your journey with
            confidence.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="max-w-5xl mx-auto mt-8 space-y-4 md:mt-16 text-black"
        >
          <AccordionItem
            value="item-1"
            className="transition-all duration-200 bg-white cursor-pointer "
          >
            <AccordionTrigger className="flex items-center justify-between w-full px-4 ">
              <span className="flex text-lg font-semibold text-black">
                {" "}
                How to create an account?{" "}
              </span>
            </AccordionTrigger>

            <AccordionContent className=" px-4 ">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="transition-all duration-200 bg-white cursor-pointer "
          >
            <AccordionTrigger className="flex items-center justify-between w-full px-4 ">
              <span className="flex text-lg font-semibold text-black">
                How can I make payment using Paypal?
              </span>
            </AccordionTrigger>

            <AccordionContent className=" px-4 ">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="transition-all duration-200 bg-white cursor-pointer "
          >
            <AccordionTrigger className="flex items-center justify-between w-full px-4 ">
              <span className="flex text-lg font-semibold text-black">
                How can I reach to support?
              </span>
            </AccordionTrigger>

            <AccordionContent className=" px-4 ">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="transition-all duration-200 bg-white cursor-pointer "
          >
            <AccordionTrigger className="flex items-center justify-between w-full px-4 ">
              <span className="flex text-lg font-semibold text-black">
                Can I cancel my plan?
              </span>
            </AccordionTrigger>

            <AccordionContent className=" px-4 ">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <Link
            href="/contact-us"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Faq;
