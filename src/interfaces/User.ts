import { User } from '@prisma/client';

export type UserInsertData = Omit<User, 'id'>;

export type UserAuthData = Omit<User, 'id' | 'name'>;
