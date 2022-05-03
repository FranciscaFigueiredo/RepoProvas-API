import { repoProvas } from '../database';

async function findTerms(discipline: string) {
    const terms = await repoProvas.term.findMany({
        include: {
            discipline: {
                where: {
                    name: {
                        contains: discipline,
                        mode: 'insensitive',
                    },
                },
            },
        },
    });

    return terms;
}

export {
    findTerms,
};
