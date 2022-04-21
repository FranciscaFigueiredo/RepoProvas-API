import { User } from '@prisma/client';
import { repoProvas } from '../database';
import { Email, UserInsertData } from '../interfaces/User';

async function create({
    name,
    email,
    password,
}: UserInsertData): Promise<User> {
    const user = await repoProvas.user.create({
        data: {
            name,
            email,
            password,
        },
    });

    return user;
}

async function findByEmail({ email }: Email): Promise<User> {
    const user = await repoProvas.user.findFirst({
        where: { email },
    });

    return user;
}

export {
    create,
    findByEmail,
};
