import pkg from '@prisma/client';

const { PrismaClient } = pkg;
const repoProvas = new PrismaClient();

export {
    repoProvas,
};
