"use client";
import { CardsStack } from "@/components/FocusCards";
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
import { CalendarCheck, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="font-openSans">
      <div className=" mx-auto">
        <div className="relative h-[38rem] w-full bg-blend-multiply bg-opacity-60  bg-black bg-right-bottom">
          <Image
            alt="Mountain"
            width={1000}
            height={1000}
            src="/mountain-region.jpg"
            className="w-[100vw] object-cover opacity-60 h-[38rem] "
          />
        </div>
        <div className="relative"></div>

        <div className=" mx-auto max-w-7xl px-8 pb-16 pt-8 md:px-4 xl:px-0  text-black px-7">
          <div className="">
            <h1 className="text-5xl font-bold">Enchanting North East</h1>
          </div>
          {/* 1/2 */}
          <div className="flex gap-6 py-6 md:flex-row flex-col ">
            {/*----------------- Packages Detail --------------------*/}
            <div className=" ">
              <p className="pb-6">
                This 9-day Bhutan adventure begins with a scenic drive from
                Bagdogra to Phuentsholing, encompassing immigration formalities
                and a leisurely town stroll. The journey continues to Thimphu,
                featuring the Memorial Chorten and a glimpse into Bhutanese
                culture. Sightseeing in Thimphu includes the iconic Buddha
                Point, cultural museums, and the Tashichhoedzong. A picturesque
                drive to Punakha via Dochula Pass leads to visits to Chimi
                Lhakhang, Punakha Dzong, and the Suspension Bridge. The trip
                culminates with excursions to Gangtey & Phobjikha Valley, Paro’s
                Tiger’s Nest Monastery, and Kyichu Lhakhang, before returning to
                Phuentsholing and departing from Bagdogra.
              </p>
              <div className=" my-4 flex flex-col md:flex-row gap-6 flex-wrap md:gap-16 ">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="size-12  p-2 bg-primary rounded-xl text-white" />
                  <div>
                    <p className="text-lg text-primary">Durations</p>
                    <p className="font-bold">7D/5N</p>
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
                    <p className="text-lg text-primary">State</p>
                    <p className="font-bold">Sikkim</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="size-12 p-2 bg-primary rounded-xl text-white" />
                  <div>
                    <p className="text-lg text-primary">Rating</p>
                    <p className="font-bold">⭐⭐⭐⭐ (236)</p>
                  </div>
                </div>
              </div>
            </div>
            {/*-------------Side Card --------------*/}
            <div
              style={{ boxShadow: "0 0px 6px 2px rgba(0, 0, 0, 0.1)" }}
              className="md:min-w-[26rem] max-h-fit rounded-2xl p-4 py-6 bg-primary/10 shadow-black/20 "
            >
              <div className="text-lg flex justify-between font-bold">
                <span>Price</span>
                <p className="text-base">
                  ₹15,000
                  <span className="text-xs line-through text-primary pl-1">
                    ₹22,000
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
