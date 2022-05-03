import { Request, Response } from 'express';
import { TestInsertData } from '../interfaces/Test';
import * as testService from '../services/testService';

async function getTestsInfo(req: Request, res: Response): Promise<Response> {
    const tests = await testService.findTestsList();

    return res.status(200).send(tests);
}

async function getTestsInfoByTerm(req: Request, res: Response): Promise<Response> {
    const { term } = req.params;

    const tests = await testService.findTestsListByTerm(Number(term));

    return res.status(200).send(tests);
}

async function getTestsInfoByTermAndDiscipline(req: Request, res: Response): Promise<Response> {
    const { term, discipline } = req.params;

    const tests = await testService
        .findTestsListByTermAndDiscipline(Number(term), Number(discipline));

    return res.status(200).send(tests);
}

async function getTestsInfoByTeacherAndCategory(req: Request, res: Response): Promise<Response> {
    const { teacher, category } = req.params;

    const tests = await testService
        .findTestsListByTeacherAndCategory(Number(teacher), Number(category));

    return res.status(200).send(tests);
}

async function patchIncrementNumberOfViews(req: Request, res: Response): Promise<Response> {
    const { testId } = req.params;
    const numberOfViews = await testService.incrementNumberOfViews(Number(testId));

    return res.status(200).send(numberOfViews);
}

async function postNewTestData(req: Request, res: Response): Promise<Response> {
    const {
        name,
        pdfUrl,
        categoryId,
        teacherDisciplineId,
    }: TestInsertData = req.body;

    const tests = await testService.insertNewTestData({
        name,
        pdfUrl,
        categoryId,
        teacherDisciplineId,
    });

    return res.status(201).send(tests);
}

export {
    getTestsInfo,
    getTestsInfoByTerm,
    getTestsInfoByTermAndDiscipline,
    getTestsInfoByTeacherAndCategory,
    patchIncrementNumberOfViews,
    postNewTestData,
};
