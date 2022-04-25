import { Router } from 'express';
import * as teacherController from '../controllers/teacherController';

import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/teachers', auth, teacherController.getTeachers);

export default router;
