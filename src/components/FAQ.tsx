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
            Quick answers to help you plan your trip with confidence.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="max-w-5xl mx-auto mt-8 space-y-4 md:mt-16 text-black"
        >
          <AccordionItem value="item-1" className="bg-white cursor-pointer">
            <AccordionTrigger className="px-4 text-lg font-semibold">
              How do I book a tour package?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                Choose your destination, select dates, and complete payment
                online to confirm your booking.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white cursor-pointer">
            <AccordionTrigger className="px-4 text-lg font-semibold">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                We accept credit/debit cards, UPI, net banking, and digital
                wallets through secure payment gateways.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="bg-white cursor-pointer">
            <AccordionTrigger className="px-4 text-lg font-semibold">
              Are flights and hotels included in the package?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                Inclusions vary by package. Please check package details or
                contact our team for confirmation.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="bg-white cursor-pointer">
            <AccordionTrigger className="px-4 text-lg font-semibold">
              Do you offer customized travel packages?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                Yes, we create customized packages based on your preferences,
                budget, and travel dates.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="bg-white cursor-pointer">
            <AccordionTrigger className="px-4 text-lg font-semibold">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <p>
                You can reach us via the Contact Us page, email, or phone for
                quick assistance.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="text-center text-gray-600 mt-9">
          Still have questions?{" "}
          <Link
            href="/contact-us"
            className="font-medium text-blue-600 hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Faq;
