"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Contact } from "./contact";
const PackageCard = ({ name, place, imageLink, mrp, id }: any) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="">
      <div className=" min-w-[14rem] w-full group/card">
        <div className=" border rounded-sm">
          <div className="relative">
            <img
              alt="beach"
              onError={(e) => {
                e.currentTarget.src = "/fallback.jpeg"; // fallback image
              }}
              src={imageLink || "/photo-beach.avif"}
              onClick={() => router.push("/india/" + id || "abc")}
              className="h-1/2 aspect-3/2  cursor-pointer bg-cover object-cover"
            />
            <span className="bg-primary text-white absolute top-1 left-1 text-xs rounded-sm p-1">
              20% off
            </span>
            <span className=" bg-black/50 shadow- text-white absolute bottom-1 right-1 text-xs rounded-sm p-1">
              4.5⭐
            </span>
          </div>

          <div className="text content text-black p-2 px-4 flex flex-col  justify-end">
            <h1 className="font-semibold text-black text-lg md:text-xl  relative z-10">
              {name || "Best of Delhi"}
            </h1>
            <h1 className="font- text-black text-xs text-primary relative z-10">
              {name || "New Delhi"}
            </h1>
            <hr className="my-2" />
            <div className="flex gap-2 items-center">
              <p className="font-bold">INR {mrp || "24,670"}</p>
              <p className="font-semibold text-sm line-through opacity-70 ">
                INR {mrp || "24,670"}
              </p>
            </div>
            <div className="flex justify-between xl:flex-row flex-col my-2 gap-2">
              <Button
                className="cursor-pointer flex-1"
                variant={"outline"}
                onClick={() => router.push("/package/" + name.toLowerCase())}
              >
                View Detail
              </Button>
              <Button
                onClick={() => setOpen(true)}
                className="cursor-pointer flex-1"
                variant={"default"}
              >
                Get a Callback
              </Button>
            </div>
            <Contact open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
