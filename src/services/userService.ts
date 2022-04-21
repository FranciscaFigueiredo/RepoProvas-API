import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

import ConflictError from '../errors/ConflictError';
import UnauthorizedError from '../errors/UnauthorizedError';

import { Email, UserAuthData, UserInsertData } from '../interfaces/User';
import * as userRepository from '../repositories/userRepository';
import { generateToken } from '../utils/generateToken';

async function findByEmail({ email }: Email): Promise<User> {
    const searchByEmail = await userRepository.findByEmail({ email });

    return searchByEmail;
}

async function registration(createUser: UserInsertData): Promise<User> {
    const {
        name,
        email,
        password,
    } = createUser;

    const searchByEmail = await findByEmail({ email });

    if (searchByEmail) {
        throw new ConflictError('This email already exists');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const userCreated = await userRepository.create({
        name,
        email,
        password: hashedPassword,
    });

    return userCreated;
}

async function authentication(authUserInfo: UserAuthData): Promise<string> {
    const {
        email,
        password,
    } = authUserInfo;

    const user = await findByEmail({ email });

    if (!user) {
        throw new UnauthorizedError('Incorrect email or password');
    }

    const isAuthorized = bcrypt.compareSync(password, user.password);

    if (!isAuthorized) {
        throw new UnauthorizedError('Incorrect email or password');
    }

    const token = generateToken(user.id);

    return token;
}

export {
    findByEmail,
    registration,
    authentication,
};
