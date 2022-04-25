import { Router } from 'express';
import * as categoryController from '../controllers/categoryController';

import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/categories', auth, categoryController.getCategories);
router.get('/categories/teachers/:teacher', auth, categoryController.getTestsCategoryByTeacherId);

export default router;
