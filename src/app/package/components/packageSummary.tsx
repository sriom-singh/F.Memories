"use client"
import { Contact } from "@/components/contact";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react'

type PackageSummaryProps = {
  nights: number;
  locations: string[];
  price: string;
  title: string;
  subtitle?: string;
};

const PackageSummary: React.FC<PackageSummaryProps> = ({
  nights,
  locations,
  price,
  title,
  subtitle
}) => {
  const [open, setOpen] = useState(false)

  return (
    <section className="  bg-white ">
      <span className="text-sm border px-4 py-1 rounded-md border-orange-400 text-gray-600">{nights} N</span>

      <div className="flex md:items-center py-4 md:py-0 md:flex-row flex-col md:justify-between">

        <div className="flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-500 mt-2">{subtitle}</p>
          )}
        </div>


        <div >
          <div>

            <span className="mt-4 text-sm tracking-tight font-normal text-gray-400 mr-2">Starting From</span>

            <span className="text-2xl pb-2 mr-2 font-semibold text-orange-600">
              {price} <span className="text-sm tracking-tight font-no rmal text-gray-400">/ Person</span>
            </span>
            <span className="text-gray-400 text-sm">+5% GST </span>
          </div>
          <Button className="bg-orange-500 mt-4 hover:bg-orange-600 w-full text-white" title="Buy Now" >Buy Now</Button>
          <Button onClick={() => setOpen(true)} className="border-orange-500 mt-2 border hover:border-orange-600 w-full bg-white text-black" >Get a Quote</Button>
          <Contact open={open} setOpen={setOpen} />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 text-lg font-semibold">
        {locations.map((loc, i) => (
          <span key={i}>{loc}</span>
        ))}
      </div>
    </section>
  );
};

export default PackageSummary;
