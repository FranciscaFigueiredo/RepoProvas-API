import '../src/setup';
import supertest from 'supertest';

import { faker } from '@faker-js/faker';
import { app } from '../src/app';
import * as userFactory from './factories/userFactory';
import { repoProvas } from '../src/database';

describe('POST /users/registration', () => {
    beforeEach(async () => {
        await repoProvas.$executeRaw`TRUNCATE TABLE users;`;
    });

    afterAll(async () => {
        await repoProvas.$disconnect();
    });

    it('should returns status 201 and persist the user for a valid body', async () => {
        const body = await userFactory.createUserBody();
        const result = await supertest(app).post('/users/registration').send(body);
        expect(result.status).toEqual(201);
    });

    it('should returns status 400 for a invalid body', async () => {
        const body = await userFactory.createUserBody();
        delete body.name;
        const result = await supertest(app).post('/users/registration').send(body);
        expect(result.status).toEqual(400);
    });

    it('should returns status 409 for same user', async () => {
        const body = await userFactory.createUser();
        delete body.id;
        const result = await supertest(app).post('/users/registration').send(body);
        expect(result.status).toEqual(409);
    });
});

describe('POST /users/authentication', () => {
    beforeEach(async () => {
        await repoProvas.$executeRaw`TRUNCATE TABLE users;`;
    });

    afterAll(async () => {
        await repoProvas.$disconnect();
    });

    it('should returns status 200 and the token session for a valid body', async () => {
        const body = await userFactory.createUser();

        const result = await supertest(app).post('/users/authentication').send({
            email: body.email,
            password: body.password,
        });

        expect(result.status).toEqual(200);
        expect(result.body.token).not.toBeNull();
    });

    it('should returns status 400 for a invalid body', async () => {
        const body = await userFactory.createUserBody();
        delete body.email;
        const result = await supertest(app).post('/users/authentication').send(body);
        expect(result.status).toEqual(400);
    });

    it('should returns status 401 invalid password', async () => {
        const body = await userFactory.createUserBody();
        body.password = faker.internet.password();
        delete body.name;

        const result = await supertest(app).post('/users/authentication').send(body);
        expect(result.status).toEqual(401);
    });
});
