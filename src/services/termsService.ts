import * as termRepository from '../repositories/termRepository';

async function findTermsList(discipline: string) {
    const tests = await termRepository.findTerms(discipline);

    return tests;
}

export {
    findTermsList,
};
