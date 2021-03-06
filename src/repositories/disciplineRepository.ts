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

async function findDisciplinesByTermNumber(number: number, name: string) {
    const disciplines = await repoProvas.discipline.findMany({
        where: {
            name: {
                contains: name,
                mode: 'insensitive',
            },
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
