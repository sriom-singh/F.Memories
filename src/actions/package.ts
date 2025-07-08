"use server";

import { Packages } from "@/types/types";
import prisma from "../../prisma/client";
// Get all packages
export async function getPackages(
  page: number = 1,
  pageSize: number = Infinity
) {
  // const skip = (page - 1) * pageSize;

  return await prisma.package.findMany({
    // skip,
    ...(pageSize !== Infinity && { take: pageSize }),
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export async function getPackageById(id: number) {
  if (isNaN(id) || !id) {
    return "Error";
  }

  try {
    const pack = await prisma.package.findUnique({
      where: {
        id,
      },
    });

    if (!pack) {
      return "Not Found";
    }

    return pack;
  } catch (error) {
    console.error("Error fetching package:", error);
    return "Error";
  }
}
// Define a proper type for the package input (update according to your schema)

// Create a new package
export async function createPackage(pkg: any) {
  const existing = await prisma.package.findFirst({
    where: { name: pkg.name },
  });

  if (existing) {
    return "Package name exists.";
  }

  try {
    await prisma.package.create({
      data: pkg,
    });
    return "Package Created!";
  } catch (error: any) {
    return "Error";
  }
}

export async function getFilteredPackages({
  minPrice,
  maxPrice,
  place,
  startDate,
  endDate,
  duration,
}: {
  minPrice?: number;
  maxPrice?: number;
  place?: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
}) {
  console.log(minPrice, maxPrice, place, startDate, endDate, duration);

  const packages = await prisma.package.findMany({
    where: {
      ...(minPrice !== 0 &&
        maxPrice !== 0 && {
        mrp: {
          gte: minPrice,
          lte: maxPrice,
        },
      }),

      ...(place && {
        place: {
          contains: place,
          mode: "insensitive",
        },
      }),
      ...(duration && {
        duration: {
          contains: duration,
          mode: "insensitive",
        },
      }),

      ...(startDate && {
        startsOn: {
          gte: new Date(startDate),
        },
      }),

      ...(endDate && {
        endsOn: {
          lte: new Date(endDate),
        },
      }),
    },
  });

  return packages;
}

export async function editPackages(packages: any) {
  const { id } = packages;
  if (!id) return "Id is required.";
  try {
    const isValid = await prisma.package.findUnique({ where: { id } });
    if (!isValid) return "Package not found.";

    const update = await prisma.package.update({
      where: {
        id,
      },
      data: {
        ...packages,
      },
    });
    return "Package Updated";
  } catch (error) {
    console.log(error);
    return "Server error";
  }
}

export async function deletePackages(id: number) {
  if (!id) return "Id is required.";
  try {
    await prisma.package.delete({
      where: {
        id,
      },
    });
    const res = await getPackageById(id);
    if (res === "Not Found") {
      return "Package Deleted";
    }
    else {
      return "Not deletable"
    }
  } catch (error) {
    console.log(error);
    return "Error";
  }
}
