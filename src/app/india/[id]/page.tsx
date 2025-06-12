import { getPackageById } from "@/actions/package";
import { getData } from "@/app/admin/components/packages/render-table";
import { CardsStack } from "@/components/FocusCards";
import PackageCard from "@/components/PackageCard";
import RangeSlider from "@/components/rangeSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Packages } from "@/types/types";
import { CalendarCheck, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";



const page = async ({ params }: any) => {
  const id = Number.parseInt(params.id);

  if (!/^\d+$/.test(params.id)) {
    return notFound();
  }
  const data = await getPackageById(id);

  if (data === "Not Found" || data === "Error") {
    notFound();
  }

  return (
    <div className="font-openSans">
      <div className=" mx-auto">
        <div className="relative h-[38rem] w-full bg-blend-multiply bg-opacity-60  bg-black bg-right-bottom">
          <img
            src={data.imageLink || "/mountain.jpg"}
            className="w-[100vw] object-cover bg-[url(/mountain-region.jpg)] bg-cover opacity-60 h-[38rem] "
          />
        </div>
        <div className="relative"></div>

        <div className=" mx-auto max-w-7xl px-8 pb-16 pt-8 md:px-4 xl:px-0  text-black px-7">
          <div className="">
            <h1 className="text-5xl font-bold">{data.name}</h1>
          </div>
          {/* 1/2 */}
          <div className="flex justify-between gap-6 py-6 md:flex-row flex-col ">
            {/*----------------- Packages Detail --------------------*/}
            <div className=" ">
              <p className="pb-6">{data.description}</p>
              <div className=" my-4 flex flex-col md:flex-row gap-6 flex-wrap md:gap-16 ">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="size-12  p-2 bg-primary rounded-xl text-white" />
                  <div>
                    <p className="text-lg text-primary">Durations</p>
                    <p className="font-bold">{data.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarCheck className="size-12  p-2 bg-primary rounded-xl text-white" />
                  <div>
                    <p className="text-lg text-primary">Cities</p>
                    <p className="font-bold">3</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-12 p-2 bg-primary rounded-xl text-white" />
                  <div>
                    <p className="text-lg text-primary">Place</p>
                    <p className="font-bold">{data.place || "NA"}</p>
                  </div>
                </div>
                {data.review && (
                  <div className="flex items-center gap-2">
                    <Star className="size-12 p-2 bg-primary rounded-xl text-white" />
                    <div>
                      <p className="text-lg text-primary">Rating</p>
                      <p className="font-bold">⭐⭐⭐⭐ (236)</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/*-------------Side Card --------------*/}
            <div
              style={{ boxShadow: "0 0px 6px 2px rgba(0, 0, 0, 0.1)" }}
              className="md:max-w-[26rem] max-h-fit rounded-2xl p-4 py-6 bg-primary/10 shadow-black/20 "
            >
              <div className="text-lg flex justify-between font-bold">
                <span>Price</span>
                <p className="text-base">
                  {data.mrp}
                  <span className="text-xs line-through text-primary pl-1">
                    {data.mrp + 2000}
                  </span>
                </p>
              </div>
              <hr className="my-6" />
              <div>
                <h3 className="font-semibold">Enquiry Form</h3>
                <input
                  type="text"
                  placeholder="Your Name*..."
                  className="border  text-sm p-2.5 rounded-sm mt-2 w-full bg-white"
                />
                <input
                  type="text"
                  placeholder="Your Email*..."
                  className="border  text-sm p-2.5 rounded-sm mt-2 w-full bg-white"
                />
                <input
                  type="text"
                  placeholder="Phone Number*..."
                  className="border  text-sm p-2.5 rounded-sm mt-2 w-full bg-white"
                />
                <input
                  type="text"
                  placeholder="Traveler Count*..."
                  className="border  text-sm p-2.5 rounded-sm mt-2 w-full bg-white"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message... (Optional)"
                  className="border  text-sm p-2.5 rounded-sm mt-2 mb-4 w-full bg-white"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <Button className="mt-2 w-full cursor-pointer">Submit</Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-cursive text-primary md:text-center text-xl md:text-2xl font-semibold">
              Explore
            </h2>
            <h2 className="font-openSans md:text-center mb-2 xl:text-5xl text-3xl lg:text-4xl text-black font-semibold">
              Gallery
            </h2>
            <p className="mb-8 md:text-center md:w-2/3 mx-auto">
              Each image tells a unique story, inviting us into a world of
              emotion, beauty, and complexity. Get ready to be moved, inspired,
              and challenged as we journey through this captivating collection
              of images.
            </p>
            <CardsStack />
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default page;
