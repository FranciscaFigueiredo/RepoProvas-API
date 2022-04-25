import { repoProvas } from '../database';

async function findDisciplines() {
    const disciplines = await repoProvas.discipline.findMany({
        orderBy: {
            termId: 'asc',
        },
        include: {
            term: true,
        },
    });

    return disciplines;
}

async function findDisciplinesByTermNumber(number: number) {
    const disciplines = await repoProvas.discipline.findMany({
        where: {
            term: {
                number,
            },
        },
        include: {
            term: true,
        },
    });

    return disciplines;
}

export {
    findDisciplines,
    findDisciplinesByTermNumber,
};
