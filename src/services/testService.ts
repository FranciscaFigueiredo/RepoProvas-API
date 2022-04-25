import * as testRepository from '../repositories/testRepository';

async function findTestsList() {
    const tests = await testRepository.findTests();

    return tests;
}

async function findTestsListByTerm(term: number) {
    const tests = await testRepository.findTestsByTermNumber(term);

    return tests;
}

async function findTestsListByTermAndDiscipline(term: number, disciplineId: number) {
    const tests = await testRepository.findTestsByTermNumberAndDiscipline(term, disciplineId);

    return tests;
}

async function findTestsListByTeacherAndCategory(teacherId: number, categoryId: number) {
    const tests = await testRepository.findTestsByTeacherAndCategoryId(teacherId, categoryId);

    return tests;
}

export {
    findTestsList,
    findTestsListByTerm,
    findTestsListByTermAndDiscipline,
    findTestsListByTeacherAndCategory,
};
