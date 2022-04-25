import { Router } from 'express';
import * as disciplinesController from '../controllers/disciplinesController';

import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/disciplines', auth, disciplinesController.getDisciplinesInfo);
router.get('/disciplines/terms/:term', auth, disciplinesController.getDisciplinesInfoByTerm);

export default router;
