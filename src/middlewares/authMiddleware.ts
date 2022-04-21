import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import UnauthorizedError from '../errors/UnauthorizedError';

async function auth(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    let userId = null;

    if (!token) {
        throw new UnauthorizedError('');
    }

    const key = process.env.JWT_SECRET;

    jwt.verify(token, key, (error, authentication: JwtPayload) => {
        if (error) {
            throw new UnauthorizedError('');
        }
        userId = authentication.userId;
    });

    res.locals.user = userId;
    return next();
}

export {
    auth,
};
