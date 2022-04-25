import * as termRepository from '../repositories/termRepository';

async function findTermsList() {
    const tests = await termRepository.findTerms();

    return tests;
}

export {
    findTermsList,
};
