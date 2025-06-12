"use client";
import { getPackages } from "@/actions/package";
import PackageCard from "@/components/PackageCard";
import RangeSlider from "@/components/rangeSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Packages } from "@/types/types";
import Image from "next/image";
import FilterCard from "./components/FilterCard";
import { useEffect, useState } from "react";

const India = () => {
  const [packages, setPackages] = useState<Packages[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<Packages[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getPackages(); // You must update getPackages to accept filters
      console.log(data);

      setPackages(data);
      setFilteredPackages(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className=" mx-auto">
        <div className="relative h-[38rem] w-full bg-blend-multiply bg-opacity-60  bg-black bg-right-bottom">
          <Image
            alt="Advance City"
            width={1000}
            height={1000}
            src="/global.jpg"
            className="w-[100vw] object-cover opacity-60 h-[38rem] "
          />
          <h2 className="md:text-6xl text-white absolute translate left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center  text-white font-medium text-5xl md:pt-6 py-2">
            GLOBAL
          </h2>
          <div className="absolute -bottom-8 bg-white shadow-md  w-full translate flex justify-center  p-6  z-[50]">
            <div className="flex flex-col md:flex-row justify-between max-w-5xl gap-4 w-full items-center text-black">
              <div className="flex items-center gap-8 md:justify-center  w-full">
                <span className="aspect-square w-8 h-8 bg-primary rounded-full"></span>
                <div>
                  <p className="font-extrathin ">Packages</p>
                  <p className="font-bold text-lg">42 available</p>
                </div>
              </div>
              <div className="flex items-center gap-8  md:justify-center  w-full ">
                <span className="aspect-square w-8 h-8 bg-primary rounded-full"></span>
                <div>
                  <p className="font-extrathin ">Contact Us</p>
                  <p className="font-bold text-lg">+91 991 058 3811</p>
                </div>
              </div>
              <div className="flex items-center gap-8 md:justify-center  w-full">
                <span className="aspect-square w-8 h-8 bg-primary rounded-full"></span>{" "}
                <div>
                  <p className="font-extrathin ">Mail Us</p>
                  <p className="font-bold text-lg">
                    framing.memoriess@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative"></div>

        <div className=" mx-auto max-w-7xl px-10 py-16 md:px-4 xl:px-0  text-black px-7">
          <div className="">
            <h1 className="text-5xl text-center font-bold font-openSans">
              Packages
            </h1>
          </div>
          <hr className="my-6" />
          {/* <div className=" w-full my-4 flex justify-center flex-wrap gap-4 mb-6">
            <span className="border hover:bg-primary/70 rounded-sm p-2 text-sm">
              Beaches
            </span>
            <span className="border hover:bg-primary/70  rounded-sm p-2 text-sm">
              Mountains
            </span>
            <span className="border hover:bg-primary/70  rounded-sm p-2 text-sm">
              {" "}
              Parks & zoos
            </span>
            <span className="border hover:bg-primary/70  rounded-sm p-2 text-sm">
              {" "}
              Dining & Restaurants
            </span>
            <span className="border hover:bg-primary/70  rounded-sm p-2 text-sm">
              Adventure & theme parks
            </span>
          </div> */}
          <div className="flex gap-6 py-6 justify-center md:flex-row flex-col ">
            {/*-------------Filter --------------*/}
            <FilterCard
              packages={packages}
              setFilteredPackages={setFilteredPackages}
            />

            {/*----------------- Packages --------------------*/}
            <div className="w-full ">
              <h2 className="text-3xl pb-8">
                Showing <b>{filteredPackages.length}</b> results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 flex-shrink justify- items-center">
                {filteredPackages &&
                  filteredPackages.map((packages, index) => (
                    <PackageCard
                      name={packages.name}
                      imageLink={packages.imageLink}
                      key={index}
                      mrp={packages.mrp}
                      id={packages.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default India;
