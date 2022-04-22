import { Router } from 'express';
import * as testController from '../controllers/testController';

import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/tests', auth, testController.getTestsInfo);

export default router;
