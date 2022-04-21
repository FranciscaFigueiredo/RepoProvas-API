import { Request, Response } from 'express';
import { UserAuthData, UserInsertData } from '../interfaces/User';
import * as userService from '../services/userService';

async function signUp(req: Request, res: Response): Promise<Response> {
    const {
        name,
        email,
        password,
    }: UserInsertData = req.body;

    const user = await userService.registration({
        name,
        email,
        password,
    });

    return res.send(user);
}

async function login(req: Request, res: Response): Promise<Response> {
    const {
        email,
        password,
    }: UserAuthData = req.body;

    const token = await userService.authentication({
        email,
        password,
    });

    return res.send(token);
}

async function getUserInfo(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user;

    const token = await userService.findById(userId);

    return res.send(token);
}

export {
    signUp,
    login,
    getUserInfo,
};
