import { faker } from '@faker-js/faker';

import { repoProvas } from '../../src/database';

async function createTestBody() {
    const test = {
        name: faker.datatype.string(),
        pdfUrl: `${faker.internet.url()}.pdf`,
        categoryId: 1,
        teacherDisciplineId: 1,
    };

    return test;
}

async function createTest() {
    const test = await createTestBody();
    const insertedTest = await repoProvas.test.create({
        data: test,
    });

    return insertedTest;
}

export {
    createTestBody,
    createTest,
};
