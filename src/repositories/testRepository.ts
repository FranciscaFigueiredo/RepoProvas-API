import { repoProvas } from '../database';

async function findTests() {
    const user = await repoProvas.test.findMany({
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

    return user;
}

export {
    findTests,
};
