import { repoProvas } from '../database';
import { Email, UserInsertData } from '../interfaces/User';

async function create({
    name,
    email,
    password,
}: UserInsertData) {
    const user = await repoProvas.user.create({
        data: {
            name,
            email,
            password,
        },
    });

    return user;
}

async function findByEmail({ email }: Email) {
    const user = await repoProvas.user.findFirst({
        where: { email },
    });

    return user;
}

export {
    create,
    findByEmail,
};
