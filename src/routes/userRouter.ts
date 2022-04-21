import { Router } from 'express';

import * as userController from '../controllers/userController';
import { auth } from '../middlewares/authMiddleware';

import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { loginSchema, signUpSchema } from '../schemas/userSchema';

const router = Router();

router.post('/users/registration', validateSchemaMiddleware(signUpSchema), userController.signUp);
router.post('/users/authentication', validateSchemaMiddleware(loginSchema), userController.login);
router.get('/users', auth, userController.getUserInfo);

export default router;
