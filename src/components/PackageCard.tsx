import React from "react";
import { Button } from "./ui/button";

const PackageCard = () => {
  return (
    <div className="">
      <div className="max-w-xs w-full group/card">
        <div className=" border rounded-sm">
          <div className="relative">
            <img src={"/photo-beach.avif"} className="h-1/2 w-full object-cover" />
            <span className="bg-primary text-white absolute top-1 left-1 text-xs rounded-sm p-1">
              20% off
            </span>
            <span className=" bg-black/50 border-[0.2px] shadow- text-white absolute bottom-1 right-1 text-xs rounded-sm p-1">
              4.5⭐sm
            </span>
          </div>

          <div className="text content text-black p-2 px-4 flex flex-col  justify-end">
            <h1 className="font-semibold text-black text-xl  relative z-10">
              Best of Delhi
            </h1>
            <h1 className="font- text-black text-xs text-primary relative z-10">
              New Delhi
            </h1>
            <hr className="my-2" />
            <div className="flex gap-2 items-center">
              <p className="font-bold">INR 24,670</p>
              <p className="font-semibold text-sm line-through opacity-70 ">
                INR 24,670
              </p>
            </div>
            <div className="flex justify-between my-2">
              <Button variant={"outline"}>View Detail</Button>
              <Button variant={"default"}>Get a Callback</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
