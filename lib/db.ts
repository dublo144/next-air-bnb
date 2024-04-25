import { PrismaClient } from '@prisma/client';

/*
  In development, the command next dev clears Node.js cache on run.
  This in turn initializes a new PrismaClient instance each time due to hot reloading that creates a connection to the database.
  This can quickly exhaust the database connections as each PrismaClient instance holds its own connection pool.
  https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices
*/

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
