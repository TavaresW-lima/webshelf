import { DatabaseError } from './../errors/DatabaseError.model';
import { NextFunction, Request, Response } from 'express';

export function errorHandlerMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
    if(error instanceof DatabaseError) {
        res.status(500).send("Internal server Error");
    }
}