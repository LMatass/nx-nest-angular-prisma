import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const workItem1 = await prisma.workItem.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      description: 'Prisma, the popular ORM, now offers support for MongoDB databases.',
      status: 'in_progress',
    },
  });

  const workItem2 = await prisma.workItem.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      description: "This article covers the new features and improvements in Prisma for the first quarter of 2022.",
      status: "completed"
    },
  });

  console.log({ workItem1, workItem2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
