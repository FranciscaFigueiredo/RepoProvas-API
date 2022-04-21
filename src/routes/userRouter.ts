import { Router } from 'express';
import * as userController from '../controllers/userController';
import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { signUpSchema } from '../schemas/userSchema';

const router = Router();

router.post('/users', validateSchemaMiddleware(signUpSchema), userController.signUp);

export default router;
