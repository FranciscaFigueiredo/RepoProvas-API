import { Request, Response } from 'express';
import { UserInsertData } from '../interfaces/User';
import { registration } from '../services/userService';

async function signUp(req: Request, res: Response) {
    const {
        name,
        email,
        password,
    }: UserInsertData = req.body;

    const user = await registration({
        name,
        email,
        password,
    });

    res.send(user);
}

export {
    signUp,
};
