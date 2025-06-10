'use server';

import prisma from "../../prisma/client";
// Get all packages
export async function getPackages() {
  return await prisma.package.findMany();
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
    console.error("Failed to create package:", error);
    return `Error creating package: ${error.message || "Unknown error"}`;
  }
}
