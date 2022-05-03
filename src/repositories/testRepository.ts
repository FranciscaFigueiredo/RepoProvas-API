import { Test } from '@prisma/client';
import { repoProvas } from '../database';
import { TestInsertData } from '../interfaces/Test';

async function findTests() {
    const tests = await repoProvas.test.findMany({
        orderBy: {
            teacherDiscipline: {
                discipline: {
                    termId: 'asc',
                },
            },
        },
        include: {
            teacherDiscipline: {
                include: {
                    teacher: true,
                    discipline: {
                        include: {
                            term: true,
                        },
                    },
                },
            },
            category: true,
        },
    });

    return tests;
}

async function findTestsByTermNumber(number: number) {
    const tests = await repoProvas.test.findMany({
        where: {
            teacherDiscipline: {
                discipline: {
                    term: {
                        number,
                    },
                },
            },
        },
        include: {
            teacherDiscipline: {
                include: {
                    teacher: true,
                    discipline: {
                        include: {
                            term: true,
                        },
                    },
                },
            },
            category: true,
        },
    });

    return tests;
}

async function findTestsByTermNumberAndDiscipline(number: number, disciplineId: number) {
    const tests = await repoProvas.test.findMany({
        where: {
            teacherDiscipline: {
                discipline: {
                    id: disciplineId,
                    term: {
                        number,
                    },
                },
            },
        },
        include: {
            teacherDiscipline: {
                include: {
                    teacher: true,
                    discipline: {
                        include: {
                            term: true,
                        },
                    },
                },
            },
            category: true,
        },
    });

    return tests;
}

async function findTestsByTeacherAndCategoryId(teacherId: number, categoryId: number) {
    const tests = await repoProvas.test.findMany({
        where: {
            categoryId,
            teacherDiscipline: {
                teacherId,
            },
        },
        include: {
            teacherDiscipline: {
                include: {
                    discipline: {
                        include: {
                            term: true,
                        },
                    },
                },
            },
            category: true,
        },
    });

    return tests;
}

async function increaseNumberOfViews(id: number): Promise<Test> {
    const test = repoProvas.test.update({
        where: {
            id,
        },
        data: {
            views: {
                increment: 1,
            },
        },
    });

    return test;
}

async function create(insertData: TestInsertData): Promise<TestInsertData> {
    const {
        name,
        pdfUrl,
        categoryId,
        teacherDisciplineId,
    } = insertData;

    const test = repoProvas.test.create({
        data: {
            name,
            pdfUrl,
            categoryId,
            teacherDisciplineId,
        },
    });

    return test;
}

async function findByName(name: string) {
    const tests = await repoProvas.test.findFirst({
        where: {
            name,
        },
    });

    return tests;
}

async function findById(testId: number) {
    const tests = await repoProvas.test.findFirst({
        where: {
            id: testId,
        },
    });

    return tests;
}

export {
    findTests,
    findTestsByTermNumber,
    findTestsByTermNumberAndDiscipline,
    findTestsByTeacherAndCategoryId,
    increaseNumberOfViews,
    create,
    findByName,
    findById,
};
