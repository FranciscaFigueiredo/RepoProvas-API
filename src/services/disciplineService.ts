import * as disciplineRepository from '../repositories/disciplineRepository';

async function findDisciplinesList() {
    const disciplines = await disciplineRepository.findDisciplines();

    return disciplines;
}

async function findDisciplinesListByTerm(term: number) {
    const disciplines = await disciplineRepository.findDisciplinesByTermNumber(term);

    return disciplines;
}

export {
    findDisciplinesList,
    findDisciplinesListByTerm,
};
