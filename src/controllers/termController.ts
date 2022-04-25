import { Request, Response } from 'express';
import * as termsService from '../services/termsService';

async function getTermsInfo(req: Request, res: Response): Promise<Response> {
    const tests = await termsService.findTermsList();

    return res.send(tests);
}

export {
    getTermsInfo,
};
