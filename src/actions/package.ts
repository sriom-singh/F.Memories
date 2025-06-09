import prisma from "../../prisma/client";
export async function getPackages() {
  const packages = await prisma.package.findMany();
  return packages;
}
