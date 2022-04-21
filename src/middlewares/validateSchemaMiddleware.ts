import { NextFunction, Request, Response } from 'express';
import joi from 'joi';
import BodyError from '../errors/BodyError';

export function validateSchemaMiddleware(schema: joi.ObjectSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation: joi.ValidationResult = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            throw new BodyError(validation.error.message);
        }

        next();
    };
}
