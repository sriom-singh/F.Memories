import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional, for dev only)
  await prisma.buys.deleteMany();
  await prisma.package.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const users = await prisma.user.createMany({
    data: [
      {
        email: 'admin@example.com',
        name: 'Admin User',
        password: 'admin123',
        phone: 9999999999,
        isAdmin: true,
      },
      {
        email: 'john@example.com',
        name: 'John Doe',
        password: 'password123',
        phone: 8888888888,
      },
      {
        email: 'jane@example.com',
        name: 'Jane Smith',
        password: 'password456',
        phone: 7777777777,
      },
    ],
  });

  // Create packages
  const packages = await prisma.package.createMany({
    data: [
      {
        name: 'Goa Getaway',
        description: 'Enjoy sun and beaches in Goa.',
        review: 'Amazing trip!',
        imageLink: 'https://source.unsplash.com/random/400x300?goa',
        mrp: 20000,
        currentPrice: 15000,
        duration: '3D/4N',
        place: 'Goa',
        startsOn: new Date('2025-06-15'),
        endsOn: new Date('2025-06-18'),
      },
      {
        name: 'Manali Snow Tour',
        description: 'Explore snowy mountains and rivers.',
        imageLink: 'https://source.unsplash.com/random/400x300?manali',
        mrp: 25000,
        currentPrice: 19999,
        duration: '4D/5N',
        place: 'Manali',
        startsOn: new Date('2025-07-01'),
        endsOn: new Date('2025-07-05'),
      },
      {
        name: 'Jaipur Heritage Walk',
        description: 'Discover the Pink City.',
        imageLink: 'https://source.unsplash.com/random/400x300?jaipur',
        mrp: 15000,
        currentPrice: 12000,
        duration: '2D/3N',
        place: 'Jaipur',
        startsOn: new Date('2025-07-10'),
        endsOn: new Date('2025-07-12'),
      },
      {
        name: 'Kerala Backwaters',
        description: 'Houseboat stay in Alleppey.',
        imageLink: 'https://source.unsplash.com/random/400x300?kerala',
        mrp: 28000,
        currentPrice: 23000,
        duration: '5D/6N',
        place: 'Kerala',
        startsOn: new Date('2025-07-15'),
        endsOn: new Date('2025-07-20'),
      },
      {
        name: 'Ladakh Adventure',
        description: 'Bikes, passes, and thrill.',
        imageLink: 'https://source.unsplash.com/random/400x300?ladakh',
        mrp: 40000,
        currentPrice: 35000,
        duration: '7D/8N',
        place: 'Ladakh',
        startsOn: new Date('2025-08-01'),
        endsOn: new Date('2025-08-08'),
      },
      {
        name: 'Udaipur Lake Retreat',
        description: 'City of lakes awaits you.',
        imageLink: 'https://source.unsplash.com/random/400x300?udaipur',
        mrp: 18000,
        currentPrice: 14500,
        duration: '3D/4N',
        place: 'Udaipur',
        startsOn: new Date('2025-08-15'),
        endsOn: new Date('2025-08-18'),
      },
      {
        name: 'Darjeeling Tea Tour',
        description: 'Sip and relax in hills.',
        imageLink: 'https://source.unsplash.com/random/400x300?darjeeling',
        mrp: 22000,
        currentPrice: 18000,
        duration: '4D/5N',
        place: 'Darjeeling',
        startsOn: new Date('2025-09-01'),
        endsOn: new Date('2025-09-05'),
      },
      {
        name: 'Rajasthan Desert Safari',
        description: 'Camel rides and camps.',
        imageLink: 'https://source.unsplash.com/random/400x300?rajasthan',
        mrp: 26000,
        currentPrice: 21000,
        duration: '3D/4N',
        place: 'Jaisalmer',
        startsOn: new Date('2025-09-10'),
        endsOn: new Date('2025-09-13'),
      },
      {
        name: 'Andaman Islands',
        description: 'Tropical paradise!',
        imageLink: 'https://source.unsplash.com/random/400x300?andaman',
        mrp: 45000,
        currentPrice: 39999,
        duration: '5D/6N',
        place: 'Andaman',
        startsOn: new Date('2025-10-01'),
        endsOn: new Date('2025-10-06'),
      },
      {
        name: 'Rishikesh Yoga Camp',
        description: 'Peace of mind and body.',
        imageLink: 'https://source.unsplash.com/random/400x300?rishikesh',
        mrp: 16000,
        currentPrice: 14000,
        duration: '3D/4N',
        place: 'Rishikesh',
        startsOn: new Date('2025-10-15'),
        endsOn: new Date('2025-10-18'),
      },
    ],
  });

  const allUsers = await prisma.user.findMany();
  const allPackages = await prisma.package.findMany();

  // Create sample buys (purchases)
  await prisma.buys.createMany({
    data: [
      {
        userId: allUsers[1].id,
        packageId: allPackages[0].id,
        numOfTraveler: 2,
      },
      {
        userId: allUsers[2].id,
        packageId: allPackages[3].id,
        numOfTraveler: 1,
      },
      {
        userId: allUsers[2].id,
        packageId: allPackages[1].id,
        numOfTraveler: 4,
      },
    ],
  });

  console.log("🌱 Seed data inserted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
