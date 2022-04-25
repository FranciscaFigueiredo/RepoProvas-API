import { Request, Response } from 'express';
import * as testService from '../services/testService';

async function getTestsInfo(req: Request, res: Response): Promise<Response> {
    const tests = await testService.findTestsList();

    return res.send(tests);
}

async function getTestsInfoByTerm(req: Request, res: Response): Promise<Response> {
    const { term } = req.params;

    const tests = await testService.findTestsListByTerm(Number(term));

    return res.send(tests);
}

async function getTestsInfoByTermAndDiscipline(req: Request, res: Response): Promise<Response> {
    const { term, discipline } = req.params;

    const tests = await testService
        .findTestsListByTermAndDiscipline(Number(term), Number(discipline));

    return res.send(tests);
}

export {
    getTestsInfo,
    getTestsInfoByTerm,
    getTestsInfoByTermAndDiscipline,
};
