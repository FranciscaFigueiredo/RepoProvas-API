import { Request, Response } from 'express';
import * as teacherService from '../services/teacherService';

async function getTeachers(req: Request, res: Response): Promise<Response> {
    const teachers = await teacherService.findTeachersList();

    return res.send(teachers);
}

async function getTeachersByDisciplineId(req: Request, res: Response): Promise<Response> {
    const { discipline } = req.params;

    const teachers = await teacherService.findTeacherByDisciplineId(Number(discipline));

    return res.send(teachers);
}

export {
    getTeachers,
    getTeachersByDisciplineId,
};
