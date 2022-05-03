import { Test } from '@prisma/client';

export type TestInsertData = Omit<Test, 'id' | 'views'>;
