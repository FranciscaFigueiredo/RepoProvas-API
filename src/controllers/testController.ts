import { Request, Response } from 'express';
import * as testService from '../services/testService';

async function getTestsInfo(req: Request, res: Response): Promise<Response> {
    const tests = await testService.findTestsList();

    return res.send(tests);
}

export {
    getTestsInfo,
};
