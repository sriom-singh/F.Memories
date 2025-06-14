import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative h-96  bg-blend-multiply bg-opacity-30  bg-black bg-right-bottom">
        <Image
          alt="favivon"
          width={1000}
          height={1000}
          src="/legal.jpg"
          className="w-[100vw] object-cover opacity-60 h-96 "
        />
        <h2 className="md:text-6xl text-white absolute translate left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center  text-white font-medium text-5xl md:pt-6 py-2">
          Cancellation & Refund Policy
        </h2>
      </div>
      <div className=" text-black mx-auto pt-4 ">
        <div className="max-w-3xl mx-auto py-4 pb-16 px-7">
          <h1 className="text-xl font-bold py-1">
            Cancellation & Refund Policy
          </h1>

          <ul className="py-2 font-sans flex flex-col gap-2 pl-6 list-disc">
            <li>
              If you cancel more than 30 days after booking, we will charge a
              10% deduction from the total tour cost.{" "}
            </li>
            <li>
              For cancellations made between 29 and 22 days of booking, we
              charge a 25% non-refundable fee.
            </li>
            <li>
              Cancellations between 21 and 16 days after booking will incur a
              60% non-refundable fee.
            </li>
            <li>
              If you cancel 15 days before the tour starts, we will charge the
              full non-refundable amount.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
