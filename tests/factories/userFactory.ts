import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

import { repoProvas } from '../../src/database';
import { generateToken } from '../../src/utils/generateToken';

async function createUserBody() {
    const user = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };

    return user;
}

async function createUser() {
    const user = await createUserBody();
    const insertedUser = await repoProvas.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: bcrypt.hashSync(user.password, 10),
        },
    });
    insertedUser.password = user.password;

    return insertedUser;
}

async function logUser() {
    const insertedUser = await createUser();

    const token = generateToken(insertedUser.id);

    return {
        ...insertedUser,
        token,
    };
}

export {
    createUserBody,
    createUser,
    logUser,
};
