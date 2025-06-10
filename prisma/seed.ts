// import prisma from "./client";

// async function main() {
//   // Create users
//   const user = await prisma.user.create({
//     data: {
//       email: "test@example.com",
//       name: "Test User",
//     },
//   });

//   // Create package
//   const travelPackage = await prisma.package.create({
//     data: {
//       name: "Beach Getaway",
//       description: "Relax on sunny beaches",
//       review: "4.5",
//       imageLink: "http://example.com/beach.jpg",
//       mrp: 500.0,
//       currentPrice: 500.0, // or omit and set in middleware
//       duration: "7 days",
//       place: "Maldives",
//       startsOn: new Date("2025-07-01"),
//       endsOn: new Date("2025-07-08"),
//     },
//   });

//   // Create Buy relationship
//   await prisma.buys.create({
//     data: {
//       userId: user.id,
//       packageId: travelPackage.id,
//     },
//   });
// }

// main()
//   .then(() => {
//     console.log("Seeding complete");
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
