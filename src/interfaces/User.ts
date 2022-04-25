import { User } from '@prisma/client';

export type UserInsertData = Omit<User, 'id'>;

export type UserAuthData = Omit<User, 'id' | 'name'>;

export interface UserLogin {
    id: number;
    name: string;
    email: string;
    token: string;
}
