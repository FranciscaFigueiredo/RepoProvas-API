import { Router } from 'express';

import userRouter from './userRouter';
import testRouter from './testRouter';
import termRouter from './termRouter';
import disciplineRouter from './disciplineRouter';

const router = Router();

router.use(userRouter);
router.use(testRouter);
router.use(termRouter);
router.use(disciplineRouter);

export default router;
