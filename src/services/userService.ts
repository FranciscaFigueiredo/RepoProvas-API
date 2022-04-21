import bcrypt from 'bcrypt';
import ConflictError from '../errors/ConflictError';
import { Email, UserInsertData } from '../interfaces/User';
import * as userRepository from '../repositories/userRepository';

async function findByEmail({ email }: Email) {
    const searchByEmail = await userRepository.findByEmail({ email });

    return searchByEmail;
}

async function registration(createUser: UserInsertData) {
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

export {
    findByEmail,
    registration,
};
