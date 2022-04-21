import {
    ErrorRequestHandler,
    NextFunction,
    Request,
    Response,
} from 'express';

async function errorMiddleware(
    error: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    // eslint-disable-next-line no-console
    console.log(error);

    if (error.name === 'BodyError') {
        return res.sendStatus(400);
    }

    if (error.name === 'UnauthorizedError') {
        return res.sendStatus(401);
    }

    if (error.name === 'ForbiddenError') {
        return res.sendStatus(403);
    }

    if (error.name === 'NotFoundError') {
        return res.sendStatus(404);
    }

    if (error.name === 'ConflictError') {
        return res.sendStatus(409);
    }

    res.sendStatus(500);
    return next();
}

export {
    errorMiddleware,
};
