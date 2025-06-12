"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Packages } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { Delete, DeleteIcon, Edit, EllipsisVertical } from "lucide-react";
import { EditPackage } from "../EditPackage";
import DeletePackage from "../DeletePackage";


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Packages>[] = [
  {
    accessorKey: "imageLink",
    header: () => <div className="pl-4">Image</div>,
    cell: ({ row }) => {
      return (
        <div className="w p-2">
          <img
            src={
              row.getValue("imageLink") ||
              "https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg"
            }
            onError={(e) => {
              e.currentTarget.src = "/fallback.jpeg"; // fallback image
              console.log("Invalid image URL");
            }}
            className="text-center rounded-sm w-24 font-medium"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => {
      return <p className="">{row.getValue("name")}</p>;
    },
  },
  {
    accessorKey: "mrp",
    header: () => <div className="text-left">Price</div>,
    cell: ({ row }) => <p>₹{row.getValue("mrp")}</p>,
  },
  {
    accessorKey: "duration",
    header: () => <div className="text-left">Duration</div>,
  },
  {
    accessorKey: "place",
    header: () => <div className="text-left">Place</div>,
  },
  {
    accessorKey: "description",
    header: () => <div className="text-left">Description</div>,
    cell: ({ row }) => {
      const text: string = row.getValue("description") || "";
      const preview =
        text.split(" ").slice(0, 10).join(" ") +
        (text.split(" ").length > 10 ? "..." : "");

      return (
        <p className="whitespace-normal break-words min-w-44">{preview}</p>
      );
    },
  },
  {
    accessorKey: " ",
    // header: () => <div className="text-left">Actions</div>,
    id: "action",
    cell: ({ row }) => {
      return (
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto flex">
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full p-2" align="end">
              <EditPackage id={row.original.id} />
              <DeletePackage id={row.original.id}/ >
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
