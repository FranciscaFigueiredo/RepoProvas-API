import { Router } from 'express';
import * as testController from '../controllers/testController';

import { auth } from '../middlewares/authMiddleware';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { testSchema } from '../schemas/testSchema';

const router = Router();

router.get('/tests', auth, testController.getTestsInfo);
router.get('/tests/terms/:term', auth, testController.getTestsInfoByTerm);
router.get('/tests/terms/:term/disciplines/:discipline', auth, testController.getTestsInfoByTermAndDiscipline);
router.get('/tests/teachers/:teacher/categories/:category', auth, testController.getTestsInfoByTeacherAndCategory);
router.patch('/tests/:testId/view', auth, testController.patchIncrementNumberOfViews);
router.post('/tests', validateSchemaMiddleware(testSchema), auth, testController.postNewTestData);

export default router;
