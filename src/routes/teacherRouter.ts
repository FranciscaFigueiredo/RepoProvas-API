import { Router } from 'express';
import * as teacherController from '../controllers/teacherController';

import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/teachers', auth, teacherController.getTeachers);
router.get('/teachers/disciplines/:discipline', auth, teacherController.getTeachersByDisciplineId);

export default router;
