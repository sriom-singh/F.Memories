import { getPackages } from "@/actions/package";
import PackageCard from "@/components/PackageCard";
import RangeSlider from "@/components/rangeSlider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { Packages } from "@/types/types";
import { Phone } from "lucide-react";
import Image from "next/image";

async function getData(): Promise<Packages[]> {
  // Fetch data from your API here.
  const packages: any = await getPackages();
  return packages;
}

const India = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <div className=" mx-auto">
        <div className="relative h-[38rem] w-full bg-blend-multiply bg-opacity-60  bg-black bg-right-bottom">
          <Image
            alt="India Gate"
            width={1000}
            height={1000}
            src="/india-gate.jpg"
            className="w-[100vw] object-cover opacity-60 h-[38rem] "
          />
          <h2 className="md:text-6xl text-white absolute translate left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 text-center  text-white font-medium text-5xl md:pt-6 py-2">
            INDIA
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
          <div className=" w-full my-4 flex justify-center flex-wrap gap-4 mb-6">
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
          </div>
          <div className="flex gap-6 py-6 md:flex-row flex-col ">
            {/*-------------Filter --------------*/}
            <div className="md:w-[32rem] max-h-fit p-4 py-6 bg-primary/5 shadow-xl shadow-black/20 ">
              <h2 className="text-xl  font-bold">Filters</h2>
              <hr className="my-6" />
              <div>
                <h2 className="font-semibold ">Indian Locations</h2>
                <select className="bg-white w-full p-2 my-2 rounded-sm">
                  <option>Select</option>
                  <option>Manali</option>
                  <option>Kashmir</option>
                  <option>Manali</option>
                  <option>Manali</option>
                </select>
              </div>
              <hr className="my-6" />
              <div className="flex flex-col gap-4">
                <RangeSlider
                  label={"Budget"}
                  min={5000}
                  max={20000}
                  steps={100}
                />
                <RangeSlider label={"Nights"} min={1} max={7} steps={1} />
              </div>
              <div className="flex flex-col gap-4 my-4">
                <h2 className="font-semibold text">Availibity</h2>
                <div className="flex gap-2">
                  <div>
                    <Label htmlFor="from">From</Label>
                    <input
                      id="from"
                      type="date"
                      className="border text-xs p-2 mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End</Label>
                    <input
                      id="endDate"
                      type="date"
                      className="border p-2 text-xs mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button className="mt-2 w-full cursor-pointer">Apply</Button>
              </div>
            </div>

            {/*----------------- Packages --------------------*/}
            <div className="">
              <h2 className="text-3xl pb-8">
                Showing <b>{data.length}</b> results
              </h2>
              <div className="flex flex-wrap gap-4 justify- items-center">
                {data &&
                  data.map((data, index) => (
                    <PackageCard
                      name={data.name}
                      imageLink={data.imageLink}
                      key={index}
                      mrp={data.mrp}
                      id={data.id}
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
