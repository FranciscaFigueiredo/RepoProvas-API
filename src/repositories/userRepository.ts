import { User } from '@prisma/client';
import { repoProvas } from '../database';
import { UserInsertData } from '../interfaces/User';

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

async function findByEmail(email: string): Promise<User> {
    const user = await repoProvas.user.findFirst({
        where: { email },
    });

    return user;
}

async function findById(id: number): Promise<User> {
    const user = await repoProvas.user.findFirst({
        where: { id },
    });

    return user;
}

export {
    create,
    findByEmail,
    findById,
};
