import * as disciplineRepository from '../repositories/disciplineRepository';

async function findDisciplinesList() {
    const disciplines = await disciplineRepository.findDisciplines();

    return disciplines;
}

async function findDisciplinesListByTerm(term: number, name: string) {
    const disciplines = await disciplineRepository.findDisciplinesByTermNumber(term, name);

    return disciplines;
}

export {
    findDisciplinesList,
    findDisciplinesListByTerm,
};
