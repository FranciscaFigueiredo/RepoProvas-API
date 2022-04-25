import { Request, Response } from 'express';
import * as disciplineService from '../services/disciplineService';

async function getDisciplinesInfo(req: Request, res: Response): Promise<Response> {
    const tests = await disciplineService.findDisciplinesList();

    return res.send(tests);
}

async function getDisciplinesInfoByTerm(req: Request, res: Response): Promise<Response> {
    const { term } = req.params;

    const disciplines = await disciplineService.findDisciplinesListByTerm(Number(term));

    return res.send(disciplines);
}

export {
    getDisciplinesInfo,
    getDisciplinesInfoByTerm,
};
