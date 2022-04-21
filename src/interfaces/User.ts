import { User } from '@prisma/client';

export type UserInsertData = Omit<User, 'id'>;

export interface Email {
    email: string;
}
