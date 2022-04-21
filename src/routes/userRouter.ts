import { Router } from 'express';
import * as userController from '../controllers/userController';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { loginSchema, signUpSchema } from '../schemas/userSchema';

const router = Router();

router.post('/users/registration', validateSchemaMiddleware(signUpSchema), userController.signUp);
router.post('/users/authentication', validateSchemaMiddleware(loginSchema), userController.login);

export default router;
