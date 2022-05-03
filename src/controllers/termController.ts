import { Request, Response } from 'express';
import * as termsService from '../services/termsService';

async function getTermsInfo(req: Request, res: Response): Promise<Response> {
    const discipline = req.query.discipline as string;

    const tests = await termsService.findTermsList(discipline);

    return res.send(tests);
}

export {
    getTermsInfo,
};
