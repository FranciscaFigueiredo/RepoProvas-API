import { PrismaClient } from '@prisma/client';

// const { PrismaClient } = Prisma;

const repoProvas = new PrismaClient();

export {
    repoProvas,
};
