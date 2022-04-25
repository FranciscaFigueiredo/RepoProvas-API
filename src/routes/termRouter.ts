import { Router } from 'express';
import * as termController from '../controllers/termController';

import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/terms', auth, termController.getTermsInfo);

export default router;
