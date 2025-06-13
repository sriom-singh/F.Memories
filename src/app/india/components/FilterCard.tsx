"use client";

import React, { useEffect, useState } from "react";
import RangeSlider from "@/components/rangeSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Packages } from "@/types/types";
import { getFilteredPackages } from "@/actions/package";

const FilterCard = ({
  setFilteredPackages,
  packages,
}: {
  setFilteredPackages: any;
  packages: Packages[];
}) => {
  const [location, setLocation] = useState("");
  const [locationOptions, setLocationOptions] = useState<any[]>();
  const [durationOptions, setDurationOptions] = useState<any[]>();
  const [budget, setBudget] = useState({ minPrice: "", maxPrice: "" });
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function getPlacesWithIds() {
    const seen = new Set();
    const data = packages
      .filter((pkg) => {
        if (seen.has(pkg.place)) return false;
        seen.add(pkg.place);
        return true;
      })
      .map((pkg) => ({
        id: pkg.id,
        place: pkg.place,
      }));

    setLocationOptions(data);
  }
  function getDurationWithIds() {
    const seen = new Set();
    const data = packages
      .filter((pkg) => {
        if (seen.has(pkg.duration)) return false;
        seen.add(pkg.duration);
        return true;
      })
      .map((pkg) => ({
        id: pkg.id,
        duration: pkg.duration,
      }));

    setDurationOptions(data);
  }

  // const [filteredPackages, setFilteredPackages] =
  //   useState<Packages[]>(allPackages);

  const handleFilter = async (e: any) => {
    const filters = {
      place: location,
      minPrice: Number(budget.minPrice),
      maxPrice: Number(budget.maxPrice),
      startDate,
      duration: duration,
      endDate,
    };
    try {
      const res: any = await getFilteredPackages(filters); // call your backend
      console.log(res);

      setFilteredPackages(res); // update UI with result
    } catch (error) {
      console.error("Failed to fetch filtered packages", error);
    }
  };

  useEffect(() => {
    getPlacesWithIds();
    getDurationWithIds();
  }, [packages]);

  return (
    <Card className="xl:w-1/4 md:w-[35%] max-h-fit bg-primary/5 shadow-xl">
      <CardHeader>
        <CardTitle>
          <h2 className="text-xl font-bold">Filters</h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="font-semibold mb-1 ">Place</h2>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="bg-white border w-full p-2  rounded-sm"
        >
          <option value="">Select</option>

          {locationOptions?.map((data, index) => (
            <option key={index} value={data.place}>
              {data.place}
            </option>
          ))}
        </select>
        <h2 className="font-semibold mb-1 mt-4">Duration</h2>
        <div className="flex gap-2 ">
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="bg-white w-full p-2 border rounded-sm"
          >
            <option value="">Select</option>
            {durationOptions?.map((data, index) => (
              <option key={index} value={data.duration}>
                {data.duration}
              </option>
            ))}
          </select>
        </div>
        <h2 className="font-semibold mb-1 mt-4">Budget</h2>
        <div className="flex gap-2 ">
          <div>
            <input
              type="number"
              placeholder="Min. price"
              className="border bg-white w-full p-2 text-xs mt-1"
              value={budget.minPrice}
              onChange={(e) =>
                setBudget({ ...budget, minPrice: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Max. price"
              className="border w-full bg-white p-2 text-xs mt-1"
              value={budget.maxPrice}
              onChange={(e) =>
                setBudget({ ...budget, maxPrice: e.target.value })
              }
            />
          </div>
        </div>
        <h2 className="font-semibold my-2 mt-4">Avaibility</h2>
       <div className="flex gap-2 w-full">
  <div className="flex-1 min-w-0">
    <Label className="opacity-70">From</Label>
    <input
      type="date"
      className="border bg-white p-2 w-full text-xs mt-1"
      value={startDate}
      onChange={(e) => setStartDate(e.target.value)}
    />
  </div>
  <div className="flex-1 min-w-0">
    <Label className="opacity-70">End</Label>
    <input
      type="date"
      className="border bg-white p-2 w-full text-xs mt-1"
      value={endDate}
      onChange={(e) => setEndDate(e.target.value)}
    />
  </div>
</div>
        <Button className="w-full mt-4 cursor-pointer" onClick={handleFilter}>
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default FilterCard;
