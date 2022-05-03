import ConflictError from '../errors/ConflictError';
import NotFoundError from '../errors/NotFoundError';
import { TestInsertData } from '../interfaces/Test';
import * as testRepository from '../repositories/testRepository';
import * as categoryService from './categoryService';
import * as teacherService from './teacherService';

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

async function incrementNumberOfViews(testId: number) {
    const searchTestData = await testRepository.findById(testId);

    if (!searchTestData) {
        throw new NotFoundError('');
    }

    const test = await testRepository.increaseNumberOfViews(testId);

    return test;
}

async function insertNewTestData(insertData: TestInsertData) {
    const {
        name,
        pdfUrl,
        categoryId,
        teacherDisciplineId,
    } = insertData;
    console.log(insertData);

    const searchByName = await testRepository.findByName(name);

    if (searchByName) {
        throw new ConflictError('The name already exists');
    }

    await categoryService.findCategoryById(categoryId);
    await teacherService.findTeacherDisciplineById(teacherDisciplineId);

    const tests = await testRepository.create({
        name,
        pdfUrl,
        categoryId,
        teacherDisciplineId,
    });

    return tests;
}

export {
    findTestsList,
    findTestsListByTerm,
    findTestsListByTermAndDiscipline,
    findTestsListByTeacherAndCategory,
    incrementNumberOfViews,
    insertNewTestData,
};
