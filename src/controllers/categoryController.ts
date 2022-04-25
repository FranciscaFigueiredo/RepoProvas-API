import { Request, Response } from 'express';
import * as categoryService from '../services/categoryService';

async function getCategories(req: Request, res: Response): Promise<Response> {
    const categories = await categoryService.findCategoriesList();

    return res.send(categories);
}

async function getTestsCategoryByTeacherId(req: Request, res: Response): Promise<Response> {
    const { teacher } = req.params;

    const categories = await categoryService.findCategoriesByTestTeacher(Number(teacher));

    return res.send(categories);
}

export {
    getCategories,
    getTestsCategoryByTeacherId,
};
