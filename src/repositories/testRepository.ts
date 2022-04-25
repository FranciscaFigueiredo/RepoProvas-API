import { repoProvas } from '../database';

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

export {
    findTests,
    findTestsByTermNumber,
    findTestsByTermNumberAndDiscipline,
    findTestsByTeacherAndCategoryId,
};
