import * as testRepository from '../repositories/testRepository';

async function findTestsList() {
    const tests = await testRepository.findTests();

    return tests;
}

export {
    findTestsList,
};
