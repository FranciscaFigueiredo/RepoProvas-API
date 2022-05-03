import '../src/setup';
import supertest from 'supertest';

import { app } from '../src/app';
import * as userFactory from './factories/userFactory';
import { repoProvas } from '../src/database';
import * as testFactory from './factories/testFactory';

describe('POST /tests', () => {
    beforeEach(async () => {
        await repoProvas.$executeRaw`TRUNCATE TABLE tests;`;
    });

    afterAll(async () => {
        await repoProvas.$disconnect();
    });

    it('should returns status 201 for a valid body', async () => {
        const body = await testFactory.createTestBody();

        const user = await userFactory.logUser();

        const { token } = user;

        const result = await supertest(app)
            .post('/tests')
            .send(body)
            .set('Authorization', `Bearer ${token}`);

        expect(result.status).toEqual(201);
    });

    it('should returns status 400 for a invalid body', async () => {
        const body = await testFactory.createTestBody();
        delete body.pdfUrl;
        const result = await supertest(app).post('/tests').send(body);
        expect(result.status).toEqual(400);
    });

    it('should returns status 401 invalid password', async () => {
        const body = await testFactory.createTestBody();

        const result = await supertest(app)
            .post('/tests')
            .send(body);

        expect(result.status).toEqual(401);
    });
});

describe('PATCH /tests/:testId/view', () => {
    beforeEach(async () => {
        await repoProvas.$executeRaw`TRUNCATE TABLE tests;`;
    });

    afterAll(async () => {
        await repoProvas.$disconnect();
    });

    it('should returns status 200 for a valid test id', async () => {
        const test = await testFactory.createTest();

        const user = await userFactory.logUser();

        const { token } = user;

        const result = await supertest(app)
            .patch(`/tests/${test.id}/view`)
            .set('Authorization', `Bearer ${token}`);

        const response = JSON.parse(result.text);

        expect(result.status).toEqual(200);
        expect(response.views).toBe(test.views + 1);
    });

    it('should returns status 404 for a invalid test id', async () => {
        const test = await testFactory.createTest();

        const user = await userFactory.logUser();

        const { token } = user;

        const result = await supertest(app)
            .patch(`/tests/${test.id + 1}/view`)
            .set('Authorization', `Bearer ${token}`);

        expect(result.status).toEqual(404);
    });

    it('should returns status 401 for undefined token', async () => {
        const test = await testFactory.createTest();

        const result = await supertest(app)
            .patch(`/tests/${test.id}/view`);

        expect(result.status).toEqual(401);
    });
});
