import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const roundsOfHashing = 10;

const prisma = new PrismaClient();

async function main() {
  const password1 = await bcrypt.hash('password1', roundsOfHashing);
  const password2 = await bcrypt.hash('password2', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'test@test.com' },
    update: {
      password: password1,
    },
    create: {
      email: 'test@test.com',
      name: 'Test User',
      password: password1,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'test2@test.com' },
    update: {
      password: password2,
    },
    create: {
      email: 'test2@test.com',
      name: 'Test User 2',
      password: password2,
    },
  });

  const workItem1 = await prisma.workItem.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {
      authorId: user1.id,
    },
    create: {
      title: 'Prisma Adds Support for MongoDB',
      description:
        'Prisma, the popular ORM, now offers support for MongoDB databases.',
      status: 'in_progress',
      authorId: user1.id,
    },
  });

  const workItem2 = await prisma.workItem.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {
      authorId: user2.id,
    },
    create: {
      title: "What's new in Prisma? (Q1/22)",
      description:
        'This article covers the new features and improvements in Prisma for the first quarter of 2022.',
      status: 'completed',
      authorId: user2.id,
    },
  });
  console.log({ user1, user2 });
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
