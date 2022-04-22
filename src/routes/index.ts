import { Router } from 'express';

import userRouter from './userRouter';
import testRouter from './testRouter';

const router = Router();

router.use(userRouter);
router.use(testRouter);

export default router;
