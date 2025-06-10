"use client";
import { createPackage } from "@/actions/package";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function CreatePackage() {
  const [packages, setPackages] = useState({
    name: "",
    description: "",
    imageLink: "",
    mrp: "",
    days: "",
    nights: "",
    place: "",
    startsOn: "",
    endsOn: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const newPackage = {
      name: packages.name,
      description: packages.description,
      mrp: parseFloat(packages.mrp),
      duration: `${packages.days}D/${packages.nights}N`,
      place: packages.place,
      imageLink: packages.imageLink,
      startsOn: new Date(packages.startsOn),
      endsOn: new Date(packages.endsOn),
    };

    try {
      const res = await createPackage(newPackage);
      toast.success(res);
    } catch (error) {
      console.error(error);
      toast.error("Error creating package.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-xs" size={"sm"}>
          Create Package
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[350px] shadow-md text-black max-h-screen overflow-y-scroll">
        <SheetHeader>
          <SheetTitle className="text-primary text-lg font-bold">
            Create Package
          </SheetTitle>
          <SheetDescription>
            Create new pacakges here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <form
          className="grid flex-1 auto-rows-min gap-4 px-4"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Kasmir Tour"
              required
              value={packages.name}
              onChange={(e) =>
                setPackages({ ...packages, name: e.target.value })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="place">Place</Label>
            <Input
              className="text-zinc-600"
              id="place"
              placeholder="Kashmir"
              required
              value={packages.place}
              onChange={(e) =>
                setPackages({ ...packages, place: e.target.value })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="image">Image</Label>
            <Input
              className="text-zinc-600"
              id="image"
              placeholder="Paste image link here"
              required
              value={packages.imageLink}
              onChange={(e) =>
                setPackages({ ...packages, imageLink: e.target.value })
              }
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mrp">MRP</Label>
            <Input
              type="number"
              className="text-zinc-600"
              id="mrp"
              placeholder="Price in rupees-₹"
              required
              value={packages.mrp}
              onChange={(e) =>
                setPackages({ ...packages, mrp: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between gap-4 items-center">
            <div className="grid w-full gap-3">
              <Label htmlFor="startDate">Starts On</Label>
              <Input
                type="date"
                className="text-zinc-600"
                id="startDate"
                required
                value={packages.startsOn}
                onChange={(e) =>
                  setPackages({ ...packages, startsOn: e.target.value })
                }
              />
            </div>
            <div className="grid w-full gap-3">
              <Label htmlFor="endtDate">Ends On</Label>
              <Input
                type="date"
                className="text-zinc-600"
                id="endtDate"
                required
                value={packages.endsOn}
                onChange={(e) =>
                  setPackages({ ...packages, endsOn: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <div className="grid gap-3">
              <Label htmlFor="days">Days</Label>
              <Input
                type="number"
                className="text-zinc-600"
                id="days"
                placeholder="Number of days"
                required
                value={packages.days}
                onChange={(e) =>
                  setPackages({ ...packages, days: e.target.value })
                }
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="nights">Nights</Label>
              <Input
                type="numver"
                className="text-zinc-600"
                id="nights"
                placeholder="Number of nights"
                required
                value={packages.nights}
                onChange={(e) =>
                  setPackages({ ...packages, nights: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="Description">Description</Label>
            <Textarea
              className="text-zinc-600 h-24"
              id="Description"
              placeholder="Write here about the tour."
              required
              value={packages.description}
              onChange={(e) =>
                setPackages({ ...packages, description: e.target.value })
              }
            />
          </div>
          <Button type="submit">{loading ? "Creating..." : "Create"}</Button>
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
